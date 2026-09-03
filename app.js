"use strict";

/* Kur'an Çalışma Aracı — sunucusuz sürüm.
 *
 * Veri hazır JSON dosyalarından okunur (pwa_hazirla.py üretir).
 * Kelime bölmesi ve doğrulama geçişinin üç özelliği tarayıcıda YENİDEN
 * HESAPLANMAZ; 6236 ayette doğrulanmış Python kodunun çıktısı kullanılır.
 * Kullanıcının çevirileri ve hata kayıtları IndexedDB'de, cihazda kalır.
 */

const el = (id) => document.getElementById(id);

const MEAL_ADLARI = ["Diyanet İşleri", "Diyanet Vakfı", "Elmalılı Yazır", "Y. N. Öztürk"];
const KATEGORI_ADI = {
  kok_bilmiyorum: "kökü bilmiyorum",
  anlam_tutmadi: "anlam tutmadı",
  irab: "i'rab",
  baglam: "bağlam",
  kalip_valans: "kalıp/edat anlamı değiştirdi",
};
const OZELLIK_ADI = {
  edilgen: "Edilgen fiil",
  muhatap: "2. şahıs (muhatap)",
  edat: "Harf-i cer öneki",
};

let durum = {
  sure: 1,
  ayet: 1,
  sureVerisi: null,
  ayetVerisi: null,
  dizin: null,
  ceviri: null,
  hatalar: [],
  secilenKelime: null,
  mealAcik: false,
  kontrolEdildi: false,
  ozellikSiralari: new Set(),
};

// --- IndexedDB ------------------------------------------------------------

const VT_ADI = "kuran-calisma";
let vt = null;

function vtAc() {
  return new Promise((coz, red) => {
    const istek = indexedDB.open(VT_ADI, 1);
    istek.onupgradeneeded = () => {
      const d = istek.result;
      if (!d.objectStoreNames.contains("ceviri")) {
        const s = d.createObjectStore("ceviri", { keyPath: "id", autoIncrement: true });
        s.createIndex("ayet", ["sure", "ayet"]);
      }
      if (!d.objectStoreNames.contains("hata")) {
        const s = d.createObjectStore("hata", { keyPath: "id", autoIncrement: true });
        s.createIndex("ayet", ["sure", "ayet"]);
      }
    };
    istek.onsuccess = () => coz(istek.result);
    istek.onerror = () => red(new Error("Veri deposu açılamadı: " + istek.error));
  });
}

function islem(depo, mod) {
  return vt.transaction(depo, mod).objectStore(depo);
}

function beklet(istek) {
  return new Promise((coz, red) => {
    istek.onsuccess = () => coz(istek.result);
    istek.onerror = () => red(istek.error);
  });
}

const kayit = {
  ekle: (depo, nesne) => beklet(islem(depo, "readwrite").add(nesne)),
  hepsi: (depo) => beklet(islem(depo, "readonly").getAll()),
  ayetinkiler: (depo, sure, ayet) =>
    beklet(islem(depo, "readonly").index("ayet").getAll([sure, ayet])),
  temizle: (depo) => beklet(islem(depo, "readwrite").clear()),
};

// --- veri ----------------------------------------------------------------

const sureOnbellek = new Map();

async function sureYukle(no) {
  if (sureOnbellek.has(no)) return sureOnbellek.get(no);
  const cevap = await fetch(`veri/sure-${no}.json`);
  if (!cevap.ok) throw new Error(`Sure ${no} verisi bulunamadı.`);
  const veri = await cevap.json();
  sureOnbellek.set(no, veri);
  return veri;
}

async function dizinYukle() {
  if (durum.dizin) return durum.dizin;
  const cevap = await fetch("veri/dizin.json");
  if (!cevap.ok) throw new Error("Sure listesi bulunamadı.");
  durum.dizin = await cevap.json();
  return durum.dizin;
}

function sureBilgisi(no) {
  return (durum.dizin || []).find((s) => s.no === no);
}

function simdi() {
  const d = new Date();
  const p = (n) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`
    + `T${p(d.getHours())}:${p(d.getMinutes())}:${p(d.getSeconds())}`;
}

// --- gezinme bildirimi ----------------------------------------------------

function gezinmeHatasi(mesaj) {
  const alan = el("gezinme-hata");
  alan.textContent = mesaj;
  alan.hidden = !mesaj;
  alan.classList.remove("bekliyor");
}

let bekleyenZamanlayici = null;

function bekleniyorGoster(mesaj) {
  bekleniyorTemizle();
  bekleyenZamanlayici = setTimeout(() => {
    const alan = el("gezinme-hata");
    alan.textContent = mesaj;
    alan.classList.add("bekliyor");
    alan.hidden = false;
  }, 400);
}

function bekleniyorTemizle() {
  if (bekleyenZamanlayici) {
    clearTimeout(bekleyenZamanlayici);
    bekleyenZamanlayici = null;
  }
}

function durumYaz(alan, mesaj, sure = 2500) {
  alan.textContent = mesaj;
  if (mesaj && sure) setTimeout(() => {
    if (alan.textContent === mesaj) alan.textContent = "";
  }, sure);
}

// --- çizim ----------------------------------------------------------------

function kelimeMetni(sira) {
  return durum.ayetVerisi.p
    .filter((p) => p[0] === 1 && p[2] === sira)
    .map((p) => p[1]).join(" ");
}

function ayetCiz() {
  const v = durum.ayetVerisi;
  const s = sureBilgisi(durum.sure);

  const konum = el("konum");
  konum.textContent = s.ad_tr + " (";
  const ad = document.createElement("bdi");
  ad.dir = "rtl"; ad.lang = "ar";
  ad.textContent = s.ad_ar;
  konum.appendChild(ad);
  konum.appendChild(document.createTextNode(
    `) — ${durum.sure}:${durum.ayet} / ${s.ayet_sayisi} ayet`));

  el("atla-sure").value = durum.sure;
  el("atla-ayet").value = durum.ayet;

  const besmele = el("besmele");
  besmele.textContent = v.b || "";
  besmele.hidden = !v.b;

  const isaretli = new Set(
    durum.hatalar.filter((h) => h.kelime_sira != null).map((h) => h.kelime_sira));

  const arapca = el("arapca");
  arapca.textContent = "";
  const parca = document.createDocumentFragment();
  v.p.forEach((p) => {
    if (p[0] === 0) {
      const m = document.createElement("span");
      m.className = "isaret";
      m.textContent = p[1];
      parca.appendChild(m);
    } else {
      const x = document.createElement("span");
      x.className = "kelime"
        + (isaretli.has(p[2]) ? " isaretli" : "")
        + (durum.ozellikSiralari.has(p[2]) ? " ozellik" : "");
      x.textContent = p[1];
      x.dataset.sira = p[2];
      x.title = `${durum.sure}:${durum.ayet}:${p[2]}`;
      x.addEventListener("click", () => kelimeSec(p[2]));
      parca.appendChild(x);
    }
    parca.appendChild(document.createTextNode(" "));
  });
  arapca.appendChild(parca);

  el("onceki").disabled = !oncekiAyet();
  el("sonraki").disabled = !sonrakiAyet();

  el("ceviri-metin").value = durum.ceviri ? durum.ceviri.metin : "";
  el("ceviri-durum").textContent =
    durum.ceviri ? `kayıtlı — ${durum.ceviri.tarih}` : "";

  // MEAL KİLİDİ + DOĞRULAMA GEÇİŞİ
  durum.mealAcik = false;
  durum.kontrolEdildi = false;
  el("mealler").hidden = true;
  el("mealler").textContent = "";
  el("meal-goster").disabled = true;
  el("meal-kilit").hidden = !!durum.ceviri;
  el("dogrulama-bolum").hidden = true;
  el("dogrulama-liste").textContent = "";
  el("kontrol-ettim").hidden = false;

  if (durum.ceviri) dogrulamaCiz();

  hataFormuKapat();
  hatalariCiz();
}

function hatalariCiz() {
  const bolum = el("kayitli-hatalar");
  const liste = el("hata-liste");
  liste.textContent = "";
  if (!durum.hatalar.length) { bolum.hidden = true; return; }
  bolum.hidden = false;
  durum.hatalar.forEach((h) => {
    const li = document.createElement("li");
    if (h.kelime) {
      const k = document.createElement("bdi");
      k.dir = "rtl"; k.lang = "ar";
      k.textContent = h.kelime;
      li.appendChild(k);
      li.appendChild(document.createTextNode(` (${h.kelime_sira}) — `));
    }
    const kat = document.createElement("span");
    kat.className = "kategori";
    kat.textContent = KATEGORI_ADI[h.kategori] || h.kategori;
    li.appendChild(kat);
    if (h.dogru_hali) li.appendChild(document.createTextNode(` — doğrusu: ${h.dogru_hali}`));
    if (h.aciklama) li.appendChild(document.createTextNode(` — ${h.aciklama}`));
    const t = document.createElement("span");
    t.className = "tarih";
    t.textContent = ` · ${h.tarih}`;
    li.appendChild(t);
    liste.appendChild(li);
  });
}

function dogrulamaCiz() {
  const o = durum.ayetVerisi.o;
  const ozellikler = [
    { anahtar: "edilgen", siralar: o.edilgen },
    { anahtar: "muhatap", siralar: o.muhatap, kirilim: o.kirilim },
    { anahtar: "edat", siralar: o.edat },
  ];

  durum.ozellikSiralari = new Set();
  ozellikler.forEach((x) => x.siralar.forEach((s) => durum.ozellikSiralari.add(s)));
  document.querySelectorAll(".kelime").forEach((s) => {
    s.classList.toggle("ozellik", durum.ozellikSiralari.has(Number(s.dataset.sira)));
  });

  const liste = el("dogrulama-liste");
  liste.textContent = "";
  ozellikler.forEach((x) => {
    const li = document.createElement("li");
    const ad = document.createElement("span");
    ad.className = "ad";
    ad.textContent = OZELLIK_ADI[x.anahtar] + ": ";
    li.appendChild(ad);

    const sayi = document.createElement("span");
    sayi.className = "sayi";
    sayi.textContent = x.siralar.length;
    li.appendChild(sayi);

    if (x.kirilim && Object.keys(x.kirilim).length) {
      const k = document.createElement("span");
      k.className = "ad";
      k.textContent = " (" + Object.entries(x.kirilim)
        .map(([e, n]) => `${e}: ${n}`).join(", ") + ")";
      li.appendChild(k);
    }

    const kap = document.createElement("div");
    if (x.siralar.length) {
      kap.className = "kelimeler";
      kap.dir = "rtl"; kap.lang = "ar";
      kap.textContent = x.siralar.map(kelimeMetni).join("   ");
    } else {
      kap.className = "yok";
      kap.textContent = "yok";
    }
    li.appendChild(kap);
    liste.appendChild(li);
  });
  el("dogrulama-bolum").hidden = false;
}

function mealleriCiz() {
  const kap = el("mealler");
  kap.textContent = "";
  durum.ayetVerisi.m.forEach((metin, i) => {
    const d = document.createElement("div");
    d.className = "meal";
    const h = document.createElement("h3");
    h.textContent = MEAL_ADLARI[i];
    const p = document.createElement("p");
    p.textContent = metin;
    d.appendChild(h); d.appendChild(p);
    kap.appendChild(d);
  });
  kap.hidden = false;
}

// --- eylemler -------------------------------------------------------------

function oncekiAyet() {
  if (durum.ayet > 1) return { sure: durum.sure, ayet: durum.ayet - 1 };
  if (durum.sure > 1) {
    const s = sureBilgisi(durum.sure - 1);
    return { sure: durum.sure - 1, ayet: s.ayet_sayisi };
  }
  return null;
}

function sonrakiAyet() {
  const s = sureBilgisi(durum.sure);
  if (durum.ayet < s.ayet_sayisi) return { sure: durum.sure, ayet: durum.ayet + 1 };
  if (durum.sure < 114) return { sure: durum.sure + 1, ayet: 1 };
  return null;
}

async function ayetYukle(sure, ayet) {
  try {
    const s = sureBilgisi(sure);
    if (!s) throw new Error(`Sure bulunamadı: ${sure}`);
    if (ayet < 1 || ayet > s.ayet_sayisi) {
      throw new Error(`Ayet bulunamadı: ${sure}:${ayet}`);
    }
    const veri = await sureYukle(sure);
    const a = veri.ayetler.find((x) => x.a === ayet);
    if (!a) throw new Error(`Ayet bulunamadı: ${sure}:${ayet}`);

    const ceviriler = await kayit.ayetinkiler("ceviri", sure, ayet);
    durum.sure = sure;
    durum.ayet = ayet;
    durum.sureVerisi = veri;
    durum.ayetVerisi = a;
    durum.ceviri = ceviriler.length ? ceviriler[ceviriler.length - 1] : null;
    durum.hatalar = await kayit.ayetinkiler("hata", sure, ayet);
    durum.ozellikSiralari = new Set();

    bekleniyorTemizle();
    gezinmeHatasi("");
    ayetCiz();
    // Odak çeviri kutusunda olsun: "Sonraki" gibi bir düğmedeyken
    // yazmaya başlayınca boşluk tuşu o düğmeyi tetikleyip sayfayı
    // değiştirebiliyordu. Her ayet yüklemesinde (açılış + gezinme)
    // odağı buraya alıyoruz.
    el("ceviri-metin").focus({ preventScroll: true });
    window.scrollTo(0, 0);
    try { localStorage.setItem("son-ayet", `${sure}:${ayet}`); } catch (e) { /* yok say */ }
  } catch (e) {
    bekleniyorTemizle();
    gezinmeHatasi(e.message);
  }
}

function kelimeSec(sira) {
  const metin = kelimeMetni(sira);
  durum.secilenKelime = { sira, metin };
  document.querySelectorAll(".kelime.secili")
    .forEach((s) => s.classList.remove("secili"));
  document.querySelectorAll(`.kelime[data-sira="${sira}"]`)
    .forEach((s) => s.classList.add("secili"));
  el("hata-kelime").textContent = metin;
  el("hata-dogru-hali").value = "";
  el("hata-not").value = "";
  el("hata-bolum").hidden = false;
  el("hata-bolum").scrollIntoView({ block: "nearest" });
}

function hataFormuKapat() {
  durum.secilenKelime = null;
  el("hata-bolum").hidden = true;
  document.querySelectorAll(".kelime.secili")
    .forEach((s) => s.classList.remove("secili"));
}

async function ceviriKaydet() {
  const metin = el("ceviri-metin").value.trim();
  if (!metin) return durumYaz(el("ceviri-durum"), "Önce çevirini yaz.");
  try {
    const nesne = {
      sure: durum.sure, ayet: durum.ayet, metin, tarih: simdi(),
    };
    nesne.id = await kayit.ekle("ceviri", nesne);
    durum.ceviri = nesne;
    durumYaz(el("ceviri-durum"), "kaydedildi", 0);
    el("meal-kilit").hidden = true;
    durum.kontrolEdildi = false;
    el("meal-goster").disabled = true;
    dogrulamaCiz();
  } catch (e) {
    durumYaz(el("ceviri-durum"), "Kaydedilemedi: " + e.message, 4000);
  }
}

function kontrolEttim() {
  durum.kontrolEdildi = true;
  el("meal-goster").disabled = false;
  mealleriGoster();
}

function mealleriGoster() {
  if (durum.mealAcik) return;
  if (!durum.ceviri) {
    return durumYaz(el("ceviri-durum"), "Önce kendi çevirini kaydet.");
  }
  if (!durum.kontrolEdildi) {
    return durumYaz(el("ceviri-durum"), "Önce doğrulama geçişini tamamla.");
  }
  mealleriCiz();
  durum.mealAcik = true;
  el("meal-goster").disabled = true;
}

async function hataKaydet(olay) {
  olay.preventDefault();
  const k = durum.secilenKelime;
  const kategori = document.querySelector("input[name=kategori]:checked").value;
  try {
    const nesne = {
      sure: durum.sure,
      ayet: durum.ayet,
      kelime_sira: k ? k.sira : null,
      kelime: k ? k.metin : null,
      kategori,
      dogru_hali: el("hata-dogru-hali").value.trim() || null,
      aciklama: el("hata-not").value.trim() || null,
      tarih: simdi(),
    };
    nesne.id = await kayit.ekle("hata", nesne);
    durum.hatalar.push(nesne);
    durumYaz(el("hata-durum"), "kaydedildi");
    hataFormuKapat();
    hatalariCiz();
    document.querySelectorAll(`.kelime[data-sira="${nesne.kelime_sira}"]`)
      .forEach((s) => s.classList.add("isaretli"));
  } catch (e) {
    durumYaz(el("hata-durum"), "Kaydedilemedi: " + e.message, 4000);
  }
}

// --- dışa / içe aktarma ---------------------------------------------------

function dosyaIndir(ad, icerik, tur) {
  const bag = URL.createObjectURL(new Blob([icerik], { type: tur }));
  const a = document.createElement("a");
  a.href = bag;
  a.download = ad;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(bag), 1000);
}

function bilgiGoster(baslik, metin, onay) {
  const kutu = el("bilgi-kutusu");
  el("bilgi-baslik").textContent = baslik;
  el("bilgi-metin").textContent = metin;
  el("bilgi-vazgec").hidden = !onay;
  kutu.returnValue = "";
  return new Promise((coz) => {
    const tamam = () => { kutu.close("tamam"); coz(true); };
    const vazgec = () => { kutu.close("vazgec"); coz(false); };
    el("bilgi-tamam").onclick = tamam;
    el("bilgi-vazgec").onclick = vazgec;
    kutu.showModal();
  });
}

// Dışa aktarılan dosya çoğunlukla bir yapay zekaya yükleyip analiz
// ettirmek için kullanılıyor — çeviri/hata kaydı tek başına "ne
// yanlış gitti"yi göstermiyor, ayetin kaç kelime olduğu ve hataya
// bağlı kelimenin kökü/lemma/babı da lazım. Bu bağlamı IndexedDB'ye
// KALICI OLARAK yazmıyoruz (hesaplanmış veri, tekrar üretilebilir);
// yalnızca dışa aktarırken veri dosyalarından anlık ekliyoruz.
async function ayetinKelimeSayisi(sure, ayet) {
  const veri = await sureYukle(sure);
  const a = veri.ayetler.find((x) => x.a === ayet);
  return a ? new Set(a.p.filter((p) => p[0] === 1).map((p) => p[2])).size : null;
}

async function kelimeMorfolojisi(sure, ayet, sira) {
  if (sira == null) return {};
  const veri = await sureYukle(sure);
  const a = veri.ayetler.find((x) => x.a === ayet);
  const m = a && (a.k || [])[sira - 1];
  if (!m) return {};
  const [kok, lemma, vf] = m;
  return { kok: kok || null, lemma: lemma || null, vf: vf || null };
}

// kuran-calisma.md, export.py'nin (sunucu sürümü) ürettiğiyle aynı biçimi
// tarayıcıda üretir: her ayette Arapça + kendi çevirin + dört meal +
// varsa hata kayıtların yan yana. Bir sohbete yükleyip SATIR SATIR
// karşılaştırma için bu format kuran-calisma.json'dan daha okunaklı;
// sayısal analiz (kategori dağılımı, zamanla değişim) için JSON kalsın.
async function calismaMDUret(ceviriler, hatalar) {
  if (!ceviriler.length) return null;
  const satirlar = [];
  const yaz = (s) => satirlar.push(s);

  const ayetAnahtari = new Map();
  ceviriler.forEach((c) => ayetAnahtari.set(`${c.sure}:${c.ayet}`, { sure: c.sure, ayet: c.ayet }));
  const ayetler = Array.from(ayetAnahtari.values())
    .sort((a, b) => a.sure - b.sure || a.ayet - b.ayet);

  yaz("# Kur'an çalışma kaydı\n");
  yaz("Bu dosya, kendi çevirilerimi ve anlamadığım yerlere düştüğüm");
  yaz("notları içeriyor. Mealler karşılaştırma için birlikte veriliyor.\n");
  yaz("## Özet\n");
  yaz(`- Çeviri kaydı: **${ceviriler.length}** (${ayetler.length} farklı ayet)`);
  yaz(`- Hata kaydı: **${hatalar.length}**`);
  const tarihler = ceviriler.map((c) => c.tarih).sort();
  yaz(`- Tarih aralığı: ${tarihler[0].slice(0, 10)} — ${tarihler[tarihler.length - 1].slice(0, 10)}`);

  const sureSayilari = new Map();
  ayetler.forEach((a) => sureSayilari.set(a.sure, (sureSayilari.get(a.sure) || 0) + 1));
  const sureListesi = Array.from(sureSayilari.entries())
    .sort((a, b) => a[0] - b[0])
    .map(([no, n]) => `${sureBilgisi(no).ad_tr} (${n} ayet)`)
    .join(", ");
  yaz(`- Çalışılan sureler: ${sureListesi}`);

  yaz("\n## Hata kategorilerinin dağılımı\n");
  if (hatalar.length) {
    const dagitim = new Map();
    hatalar.forEach((h) => dagitim.set(h.kategori, (dagitim.get(h.kategori) || 0) + 1));
    yaz("| Kategori | Adet | Oran |");
    yaz("|---|---:|---:|");
    Array.from(dagitim.entries()).sort((a, b) => b[1] - a[1]).forEach(([kat, n]) => {
      yaz(`| ${KATEGORI_ADI[kat] || kat} | ${n} | %${Math.round(100 * n / hatalar.length)} |`);
    });
  } else {
    yaz("_Hata kaydı yok._");
  }

  const tekrar = new Map();
  hatalar.forEach((h) => { if (h.kelime) tekrar.set(h.kelime, (tekrar.get(h.kelime) || 0) + 1); });
  const coklu = Array.from(tekrar.entries()).filter(([, n]) => n > 1);
  if (coklu.length) {
    yaz("\n## Birden çok kez takıldığım kelimeler\n");
    coklu.forEach(([k, n]) => yaz(`- ${k} — ${n} kez`));
  }

  yaz("\n---\n");
  yaz("## Ayet ayet kayıtlar\n");

  for (const { sure, ayet } of ayetler) {
    const s = sureBilgisi(sure);
    const veri = await sureYukle(sure);
    const a = veri.ayetler.find((x) => x.a === ayet);
    if (!a) continue;

    yaz(`\n### ${s.ad_tr} ${sure}:${ayet}\n`);
    if (a.b) {
      yaz(`_(sure başı besmelesi: ${a.b} — ayetin kendi kelimelerine dahil değil)_\n`);
    }
    yaz(`**Arapça:** ${a.p.map((p) => p[1]).join(" ")}\n`);

    ceviriler.filter((c) => c.sure === sure && c.ayet === ayet).forEach((c) => {
      yaz(`**Kendi çevirim** (${c.tarih.slice(0, 10)}):`);
      yaz("> " + c.metin.replace(/\n/g, "\n> ") + "\n");
    });

    yaz("**Mealler:**\n");
    a.m.forEach((metin, i) => { if (metin) yaz(`- _${MEAL_ADLARI[i]}:_ ${metin}`); });

    const ayetHatalari = hatalar.filter((h) => h.sure === sure && h.ayet === ayet);
    if (ayetHatalari.length) {
      yaz("\n**Takıldığım yerler:**\n");
      ayetHatalari.forEach((h) => {
        let parca = "- ";
        if (h.kelime) parca += `${h.kelime} (kelime ${h.kelime_sira}) — `;
        parca += `**${KATEGORI_ADI[h.kategori] || h.kategori}**`;
        if (h.dogru_hali) parca += ` — doğrusu: ${h.dogru_hali}`;
        if (h.aciklama) parca += ` — ${h.aciklama}`;
        yaz(parca);
      });
    }
  }

  return satirlar.join("\n") + "\n";
}

async function disaAktar() {
  const ceviriler = await kayit.hepsi("ceviri");
  const hatalar = await kayit.hepsi("hata");

  const ceviriZengin = [];
  for (const c of ceviriler) {
    ceviriZengin.push({ ...c, kelime_sayisi: await ayetinKelimeSayisi(c.sure, c.ayet) });
  }
  const hataZengin = [];
  for (const h of hatalar) {
    hataZengin.push({
      ...h,
      kelime_sayisi: await ayetinKelimeSayisi(h.sure, h.ayet),
      ...(await kelimeMorfolojisi(h.sure, h.ayet, h.kelime_sira)),
    });
  }

  const paket = {
    bicim: "kuran-calisma",
    surum: 2,
    tarih: simdi(),
    ceviri: ceviriZengin,
    hata: hataZengin,
  };
  const md = await calismaMDUret(ceviriler, hatalar);

  dosyaIndir("kuran-calisma.json", JSON.stringify(paket, null, 1), "application/json");
  if (md) dosyaIndir("kuran-calisma.md", md, "text/markdown");

  await bilgiGoster("Dışa aktarıldı",
    md
      ? `${paket.ceviri.length} çeviri, ${paket.hata.length} hata kaydı iki dosyaya yazıldı: `
        + `"kuran-calisma.json" (sayısal analiz için) ve "kuran-calisma.md" (okuyup karşılaştırmak için).`
      : `${paket.ceviri.length} çeviri, ${paket.hata.length} hata kaydı `
        + `"kuran-calisma.json" dosyasına yazıldı.`);
}

async function iceAktarDosya(dosya) {
  let ham;
  try {
    ham = await dosya.text();
  } catch (e) {
    return bilgiGoster("Okunamadı", "Dosya açılamadı: " + e.message);
  }
  // Bazı editörler dosyanın başına BOM ekliyor.
  const temiz = ham.replace(/^﻿/, "").trim();
  if (!temiz) {
    return bilgiGoster("Boş", "Seçilen dosya boş görünüyor.");
  }
  return iceAktarIsle(temiz);
}

async function iceAktarIsle(temiz) {
  let paket;
  try {
    paket = JSON.parse(temiz);
  } catch (e) {
    return bilgiGoster("Okunamadı", `İçerik geçerli JSON değil: ${e.message}`);
  }
  if (!paket || paket.bicim !== "kuran-calisma"
      || !Array.isArray(paket.ceviri) || !Array.isArray(paket.hata)) {
    return bilgiGoster("Tanınmadı",
      "Bu dosya bu programın dışa aktardığı bir yedek değil.");
  }
  const mevcut = (await kayit.hepsi("ceviri")).length
    + (await kayit.hepsi("hata")).length;
  const onay = await bilgiGoster("İçe aktarılsın mı?",
    `Dosyada ${paket.ceviri.length} çeviri, ${paket.hata.length} hata kaydı var. `
    + `Cihazdaki ${mevcut} kayıt SİLİNİP bunlarla değiştirilecek.`, true);
  if (!onay) return;

  // Yalnızca gerçekten saklanan alanları al — dışa aktarımda eklenen
  // hesaplanmış bağlam (kelime_sayisi, kok, lemma, vf) tekrar
  // veritabanına yazılmasın, dosya elle düzenlenmişse de zararsız
  // kalsın.
  const CEVIRI_ALANLARI = ["sure", "ayet", "metin", "tarih"];
  const HATA_ALANLARI = [
    "sure", "ayet", "kelime_sira", "kelime", "kategori",
    "dogru_hali", "aciklama", "tarih",
  ];
  const sec = (nesne, alanlar) => {
    const cikti = {};
    for (const a of alanlar) if (nesne[a] !== undefined) cikti[a] = nesne[a];
    return cikti;
  };

  await kayit.temizle("ceviri");
  await kayit.temizle("hata");
  for (const c of paket.ceviri) {
    await kayit.ekle("ceviri", sec(c, CEVIRI_ALANLARI));
  }
  for (const h of paket.hata) {
    await kayit.ekle("hata", sec(h, HATA_ALANLARI));
  }
  await bilgiGoster("İçe aktarıldı",
    `${paket.ceviri.length} çeviri, ${paket.hata.length} hata kaydı yüklendi.`);
  await ayetYukle(durum.sure, durum.ayet);
}

async function ankiAktar() {
  const hatalar = (await kayit.hepsi("hata"))
    .filter((h) => h.kelime_sira != null)
    .sort((a, b) => a.sure - b.sure || a.ayet - b.ayet || a.kelime_sira - b.kelime_sira);
  if (!hatalar.length) {
    return bilgiGoster("Kart yok",
      "Kelimeye bağlı hata kaydın yok — aktarılacak bir şey bulunamadı.");
  }
  const kacis = (t) => String(t)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/\t/g, " ").replace(/\n/g, "<br>");

  const satirlar = ["#separator:tab", "#html:true"];
  for (const h of hatalar) {
    const veri = await sureYukle(h.sure);
    const a = veri.ayetler.find((x) => x.a === h.ayet);
    if (!a) continue;
    const kelimeler = [];
    a.p.forEach((p) => {
      if (p[0] !== 1) return;
      if (kelimeler.length && kelimeler[kelimeler.length - 1].sira === p[2]) {
        kelimeler[kelimeler.length - 1].metin += " " + p[1];
      } else {
        kelimeler.push({ sira: p[2], metin: p[1] });
      }
    });
    const kelime = h.kelime
      || (kelimeler.find((k) => k.sira === h.kelime_sira) || {}).metin || "";
    const icinde = kelimeler.map((k) => k.sira === h.kelime_sira
      ? `<b>${kacis(k.metin)}</b>` : kacis(k.metin)).join(" ");
    const konum = `${sureBilgisi(h.sure).ad_tr} ${h.sure}:${h.ayet}`;
    const on = `<div dir="rtl" style="font-size:2em">${kacis(kelime)}</div>`
      + `<div style="color:#888;font-size:0.8em">${kacis(konum)} · kelime ${h.kelime_sira}</div>`
      + `<div dir="rtl" style="font-size:1.1em;margin-top:0.6em">${icinde}</div>`;

    const m = (a.k || [])[h.kelime_sira - 1] || ["", "", ""];
    const arka = [];
    if (m[0]) arka.push(`Kök: <span dir="rtl">${kacis(m[0])}</span>`);
    if (m[1]) arka.push(`Lemma: <span dir="rtl">${kacis(m[1])}</span>`);
    if (m[2]) arka.push(`Bab: ${kacis(m[2])}`);
    arka.push(`Kategori: ${kacis(KATEGORI_ADI[h.kategori] || h.kategori)}`);
    if (h.dogru_hali) arka.push(`<br>Doğrusu: ${kacis(h.dogru_hali)}`);
    if (h.aciklama) arka.push(`<br>Kendi notum: ${kacis(h.aciklama)}`);
    satirlar.push(on + "\t" + arka.join("<br>"));
  }
  dosyaIndir(`anki-${simdi().slice(0, 10)}.txt`,
    satirlar.join("\n") + "\n", "text/plain");
  await bilgiGoster("Anki dosyası hazır",
    `${satirlar.length - 2} kart yazıldı. Anki'de: Dosya > İçe Aktar.`);
}

// --- gezinme formu --------------------------------------------------------

function hedefiCoz() {
  const sureHam = el("atla-sure").value.trim();
  const ayetHam = el("atla-ayet").value.trim();
  const birlesik = sureHam.match(/^(\d+)\s*[:/.,\-\s]\s*(\d+)$/);
  if (birlesik) return { sure: +birlesik[1], ayet: +birlesik[2], ham: sureHam };
  const ham = `sure kutusu: "${sureHam}", ayet kutusu: "${ayetHam}"`;
  if (!/^\d+$/.test(sureHam) || !/^\d+$/.test(ayetHam)) {
    return { hata: "Kutulara yalnızca rakam yaz.", ham };
  }
  return { sure: +sureHam, ayet: +ayetHam, ham };
}

// --- bağlama --------------------------------------------------------------

el("ceviri-kaydet").addEventListener("click", ceviriKaydet);
el("meal-goster").addEventListener("click", mealleriGoster);
el("kontrol-ettim").addEventListener("click", kontrolEttim);
el("hata-form").addEventListener("submit", hataKaydet);
el("hata-iptal").addEventListener("click", hataFormuKapat);
el("onceki").addEventListener("click", () => {
  const h = oncekiAyet();
  // Odak, ayet yüklenmesini BEKLEMEDEN, dokunuşun kendisiyle aynı anda
  // taşınıyor: mobil tarayıcılar bir await'ten sonra artık "kullanıcı
  // dokunuşu" saymayıp odak değişimini yok sayabiliyor.
  if (h) { el("ceviri-metin").focus({ preventScroll: true }); ayetYukle(h.sure, h.ayet); }
});
el("sonraki").addEventListener("click", () => {
  const h = sonrakiAyet();
  if (h) { el("ceviri-metin").focus({ preventScroll: true }); ayetYukle(h.sure, h.ayet); }
});
el("atla-form").addEventListener("submit", (o) => {
  o.preventDefault();
  const hedef = hedefiCoz();
  if (hedef.hata) return gezinmeHatasi(hedef.hata + "  [" + hedef.ham + "]");
  if (hedef.sure < 1 || hedef.sure > 114) {
    return gezinmeHatasi("Sure 1 ile 114 arasında olmalı.  [" + hedef.ham + "]");
  }
  el("ceviri-metin").focus({ preventScroll: true });
  bekleniyorGoster(`Gidiliyor: ${hedef.sure}:${hedef.ayet} …`);
  ayetYukle(hedef.sure, hedef.ayet);
});
el("disa-aktar").addEventListener("click", disaAktar);
el("anki-aktar").addEventListener("click", ankiAktar);
el("ice-aktar").addEventListener("click", () => el("dosya-sec").click());
el("dosya-sec").addEventListener("change", (o) => {
  const d = o.target.files[0];
  o.target.value = "";
  if (d) iceAktarDosya(d);
});

// --- açılış ---------------------------------------------------------------

async function baslat() {
  vt = await vtAc();
  await dizinYukle();
  let sure = 1, ayet = 1;
  try {
    const son = localStorage.getItem("son-ayet");
    if (son && /^\d+:\d+$/.test(son)) {
      const [s, a] = son.split(":").map(Number);
      sure = s; ayet = a;
    }
  } catch (e) { /* yok say */ }
  await ayetYukle(sure, ayet);
  window.__arayuzHazir = true;
}

async function kurulumDurumuGuncelle() {
  const alan = el("kurulum-durumu");
  if (!("caches" in window)) { alan.textContent = ""; return; }

  const onbellek = await caches.open("kuran-" + KURAN_SURUM).catch(() => null);
  if (!onbellek) { alan.className = ""; alan.textContent = ""; return; }

  const anahtarlar = await onbellek.keys();
  // KABUK'taki 13 dosya (index.html, app.js, surum.js, style.css, font,
  // manifest, ikonlar, yardim.html/css, dizin.json) + 114 sure dosyası
  // = 127. sw.js'in KABUK listesi değişirse burası da güncellenmeli.
  // Kalıcı gösterge: mesaj kaçırılsa bile sayfa her açıldığında buradan
  // kontrol edilebilir, geçici bir bildirime güvenilmiyor.
  const TOPLAM = 127;
  if (anahtarlar.length >= TOPLAM) {
    alan.className = "hazir";
    alan.textContent = "çevrimdışı hazır (sürüm " + KURAN_SURUM + ")";
  } else if (anahtarlar.length > 0) {
    alan.className = "calisiyor";
    alan.textContent = `çevrimdışı için indiriliyor: ${anahtarlar.length}/${TOPLAM}`;
  } else {
    alan.className = "";
    alan.textContent = "";
  }
}

if ("serviceWorker" in navigator) {
  // Güncelleme, sekme AÇIKKEN arka planda tamamlanabiliyor: yeni SW
  // kurulup devreye girer ama açık sekme hâlâ eskisinin kontrolündeki
  // önbellek görünümünü taşıyor olabilir — elle yenilemeye gerek
  // kalmasın diye kontrol el değiştirince sayfa KENDİLİĞİNDEN bir kez
  // yenileniyor. yenilendiMi bayrağı sonsuz döngüyü engelliyor.
  let yenilendiMi = false;
  navigator.serviceWorker.addEventListener("controllerchange", () => {
    if (yenilendiMi) return;
    yenilendiMi = true;
    location.reload();
  });

  navigator.serviceWorker.register("sw.js").then((kayit) => {
    // Tarayıcılar güncelleme denetimini kendi haline bırakınca bazı
    // cihazlarda saatlerce ertelenebiliyor (Chrome'un varsayılan
    // sezgisi ~24 saatte bir). Burada sayfa her açıldığında ELLE ve
    // HEMEN denetim zorlanıyor; sw.js zaten no-store ile sunuluyor,
    // yani bu her zaman gerçek ağ isteği yapar.
    kayit.update();
    // Canlı ilerleme: kurulum sırasında SW'den gelen mesajlar
    navigator.serviceWorker.addEventListener("message", (o) => {
      if (!o.data || o.data.tur !== "kurulum") return;
      kurulumDurumuGuncelle();
    });
    // Kalıcı doğrulama: sayfa HER açıldığında CacheStorage'a bakılır.
    // Kurulum mesajı kaçırılmış olsa bile (sekme geç açıldıysa, kısa
    // "hazır" yazısı görülmeden kaybolduysa) durum buradan görülür.
    kurulumDurumuGuncelle();
    const izleyici = setInterval(async () => {
      await kurulumDurumuGuncelle();
      if (el("kurulum-durumu").className === "hazir") clearInterval(izleyici);
    }, 2000);
  }).catch(() => { /* service worker yoksa uygulama yine çalışır */ });
} else {
  el("kurulum-durumu").textContent = "";
}

baslat();
