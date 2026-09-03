/* Service worker: uygulamayı ve tüm veriyi cihaza yazar.
   Kurulumdan sonra internet gerekmez. */

// SURUM'un değeri pwa_hazirla.py tarafından, uygulamanın tüm içeriğinin
// karma değerinden OTOMATİK yazılır — elle artırmayı unutma riski
// olmasın diye. Tarayıcı bir servis çalışanının güncellenip
// güncellenmediğine YALNIZCA bu dosyanın kendi baytlarına bakarak karar
// verir; sürüm başka bir dosyada dursaydı (önceki tasarım) bu satır
// hiç değişmediği için güncelleme hiç tetiklenmezdi. Bu satırı elle
// değiştirme; pwa_hazirla.py her çalıştığında üzerine yazar.
const SURUM = "kuran-73ae0d6ad0b4";

const KABUK = [
  "./",
  "./index.html",
  "./surum.js",
  "./app.js",
  "./style.css",
  "./scheherazade-new.woff2",
  "./manifest.json",
  "./ikon.svg",
  "./ikon-192.png",
  "./ikon-512.png",
  "./yardim.html",
  "./yardim.css",
  "./veri/dizin.json",
];

const VERI = Array.from({ length: 114 }, (_, i) => `./veri/sure-${i + 1}.json`);

self.addEventListener("install", (olay) => {
  olay.waitUntil((async () => {
    const onbellek = await caches.open(SURUM);
    // Kabuk önce: uygulama en azından açılabilsin
    await onbellek.addAll(KABUK);
    // Veri parça parça: tek bir hata bütün kurulumu düşürmesin
    for (let i = 0; i < VERI.length; i += 10) {
      await Promise.all(VERI.slice(i, i + 10).map(
        (y) => onbellek.add(y).catch(() => null)));
      const istemciler = await self.clients.matchAll({ includeUncontrolled: true });
      istemciler.forEach((c) => c.postMessage({
        tur: "kurulum", tamam: Math.min(i + 10, VERI.length), toplam: VERI.length,
      }));
    }
    await self.skipWaiting();
  })());
});

self.addEventListener("activate", (olay) => {
  olay.waitUntil((async () => {
    const adlar = await caches.keys();
    await Promise.all(adlar.filter((a) => a !== SURUM).map((a) => caches.delete(a)));
    await self.clients.claim();
  })());
});

self.addEventListener("fetch", (olay) => {
  const istek = olay.request;
  if (istek.method !== "GET") return;
  olay.respondWith((async () => {
    // Önce önbellek: çevrimdışı çalışmanın tamamı buna dayanıyor
    const bulunan = await caches.match(istek, { ignoreSearch: true });
    // Yönlendirilmiş (redirected) bir yanıtı gezinmeye (navigasyona)
    // döndürmek tarayıcıda ERR_FAILED'e yol açıyor — fetch
    // spesifikasyonunun kısıtı. Önbellekte böyle bozuk bir kayıt
    // kalmışsa (ör. barındırma o an .html uzantısını yönlendiriyorken
    // kurulmuşsa) yokmuş gibi davranıp ağdan tazesini alıyoruz.
    if (bulunan && !(istek.mode === "navigate" && bulunan.redirected)) {
      return bulunan;
    }
    try {
      const cevap = await fetch(istek);
      if (cevap.ok && new URL(istek.url).origin === location.origin) {
        const onbellek = await caches.open(SURUM);
        onbellek.put(istek, cevap.clone());
      }
      return cevap;
    } catch (e) {
      // Çevrimdışıyken ve önbellekte yoksa: gezinme isteğini kabuğa düşür
      if (istek.mode === "navigate") {
        const kabuk = await caches.match("./index.html");
        if (kabuk) return kabuk;
      }
      throw e;
    }
  })());
});

self.addEventListener("message", (olay) => {
  if (olay.data && olay.data.tur === "hemen-gec") self.skipWaiting();
});
