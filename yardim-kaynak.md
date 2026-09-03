# Kullanım Kılavuzu

Bu araç meal okumak için değil. Amaç şu: ayeti kendin çevir, sonra
mealleri aç ve **kendi çevirinle meal arasındaki farkı gör**. Fark
nerede çıkıyorsa eksiğin oradadır. Araç o eksiği not almanı sağlar.

Bu yüzden bir kural var ve esnetilmiyor: **çevirini kaydetmeden
mealler görünmez.** Önce meale bakarsan artık kendi okumanı test
etmiyorsun, meali ezberliyorsun.

Kayıtların yalnızca **senin cihazında** tutulur. Bu bağlantıyı
kullanan başka biri olsa bile, kimse kimsenin çevirisini görmez — her
kişinin kayıtları kendi tarayıcısında ayrı ayrı durur.

---

## 1. Ekran

Yukarıdan aşağıya:

**Gezinme çubuğu** — `‹ Önceki`, sure/ayet kutuları + `Git`, `Sonraki ›`

**Konum satırı** — hangi ayettesin, surede kaç ayet var

**Arapça metin** — büyük punto, sağdan sola. Her kelime ayrı bir
dokunma hedefi.

**Kendi çevirin** — serbest metin kutusu + `Çeviriyi kaydet`

**Doğrulama geçişi** — çeviriyi kaydedince açılır

**Mealleri göster** — çeviri kaydedilip doğrulama geçişi tamamlanana
kadar pasiftir

**Bu ayetteki hata kayıtların** — bu ayet için not aldıysan burada

**Alt çubuk** — `Kayıtlarımı dışa aktar`, `Kayıtları içe aktar`,
`Kelime kartı indir (Anki)`

---

## 2. Çalışma döngüsü

### Adım 1 — Ayeti oku

Anlamadığın yerleri fark et ama henüz not alma.

### Adım 2 — Kendi çevirini yaz

Tahmin etmekten çekinme. Yanlış çeviri de veridir, hatta asıl işe
yarayan odur. Emin olmadığın yeri boş bırakma; tahminini yaz. Neyi
yanlış tahmin ettiğini görmek, hiç tahmin etmemekten öğreticidir.

### Adım 3 — Kaydet

`Çeviriyi kaydet`. Mealler **açılmaz**; altta doğrulama geçişi çıkar.

### Adım 4 — Doğrulama geçişi

Program bu ayette kaç tane **edilgen fiil**, kaç tane **2. şahıs
(muhatap)** ve kaç tane **harf-i cer öneki** olduğunu söyler, o
kelimeleri işaretler — ama ne anlama geldiklerini söylemez.

Şimdi çevirine dön ve sadece şuna bak:

- **Muhatap kim?** Tekil mi çoğul mu, sen mi onlar mı?
- **Fiil etken mi edilgen mi?**
- **Edat neyi neye bağlıyor?**

Hatayı bulursan kaydet. Bulamazsan da sorun değil — mealler açılınca
göreceksin.

`Kontrol ettim, mealleri aç` ile devam.

### Adım 5 — Mealleri karşılaştır

Dört meal yan yana gelir: **Diyanet İşleri**, **Diyanet Vakfı**,
**Elmalılı Yazır**, **Y. N. Öztürk**.

Hepsini oku. Meallerin *birbirinden* ayrıldığı yer, metnin gerçekten
tartışmalı olduğu yerdir. Sonra kendi çevirinle karşılaştır.

### Adım 6 — Farkı sınıflandır

Ayrıldığın **kelimeye dokun**. Kategori seç. İkisi de isteğe bağlı ama
ayrı ayrı işe yarıyor: **"Doğru hali"** kelimenin gerçek anlamını
kısaca yazar (meale bakınca öğrendiğin şey), **"Not"** ise ne
sandığını / nasıl yanıldığını. İkisini birlikte yazmak, hem Anki
kartını hazırlar hem sonradan bakınca ne öğrendiğini hatırlatır.
`Hatayı kaydet`. Kaydettiğin kelimenin altı çizili görünür.

---

## 3. Hata kategorileri

Doğru kategoriyi seçmek önemli: bu kayıtların dağılımı, sıradaki
çalışmanın ne olması gerektiğini söylüyor.

### Kökü bilmiyorum
Kelimenin kök harflerini çıkaramadın.
> *Sorun kelime dağarcığında.*

### Anlam tutmadı
Kökü biliyorsun ama bu bağlamda verdiğin anlam tutmadı.
> *Sorun kelimenin anlam yelpazesinde.*

### İ'rab
Kelimeleri biliyorsun ama cümledeki görevini çıkaramadın: fâil mi
mef'ûl mü, sıfat mı haber mi.
> *Sorun gramerde.*

### Bağlam
Kelimeleri de gramerini de çözdün, cümle yine de oturmadı. Öncesi
sonrası, kime söylendiği bilinmeden anlaşılmıyor.
> *Sorun metnin dışında.*

### Kalıp/edat anlamı değiştirdi
Kelimeyi de gramerini de biliyorsun, ama anlam bir kalıptan ya da
edattan geliyor: `عدل` "adil olmak" ama `عدل بـ` "denk tutmak";
`ربط` "bağlamak" ama `ربط على القلب` "metanet vermek".
> *Sorun tek kelimede değil, kurduğu birliktelikte. Anki'ye kelimeyi
> tek başına değil, edatıyla yaz.*

**Kararsızsan en dar olanı seç.** "Kökü bilmiyorum" en somut, "bağlam"
en geniştir. Her şeye "bağlam" dersen kayıtların sana bir şey söylemez.

---

## 4. Gezinme

- **`Sonraki ›` / `‹ Önceki`** — sure sınırını aşar; 2:286'dan sonra 3:1
- **Sure/ayet kutuları + `Git`** — doğrudan atlama
- Tek kutuya `2:255` ya da `2/255` yazmak da olur
- Olmayan bir ayet istersen kırmızı bir satır sebebini yazar,
  bulunduğun yer değişmez

Bir ayete döndüğünde çevirin kutuda hazır gelir, hata kayıtların
listede durur. Ama **mealler yine kapalı başlar** — doğrulama
geçişinden tekrar geçersin.

Uygulama en son baktığın ayeti hatırlar.

---

## 5. Bilmen gereken küçük şeyler

**Sure başlarındaki besmele ayrı gösterilir.** Ayetin kendi kelimeleri
onun altındadır. Fâtiha'da besmele zaten 1. ayettir, orada ayrılmaz.
Tevbe suresinde besmele yoktur.

**Durak işaretleri** (ۚ ۖ ۗ ۩) metinde durur ama dokunulmaz — kelime
değildirler.

**Her kaydetme yeni bir kayıttır.** Aynı ayeti tekrar çevirirsen eskisi
silinmez. Ekranda en son yazdığın görünür.

**Aynı kelimeye birden çok hata kaydı** yazabilirsin.

---

## 6. Verin ve yedekleme

Çevirilerin ve hata kayıtların **yalnızca bu cihazdaki tarayıcının
deposunda** tutulur. Hiçbir yere gönderilmez, sunucuya gitmez, kimseyle
paylaşılmaz.

Bunun bir bedeli var: **tarayıcının site verilerini silersen ya da
telefonu değiştirirsen, kayıtların da gider.** Tek koruma, ara sıra
**`Kayıtlarımı dışa aktar`** yapmak — iki dosya üretir:
`kuran-calisma.json` (yedek + geri yükleme için) ve `kuran-calisma.md` (bir
sohbete yükleyip okutmak için, bkz. bölüm 8). İkisi de telefonunun
indirilenler klasörüne kaydedilir.

`Kayıtları içe aktar` ile geri yüklersin — dosya seçiciden
`kuran-calisma.json` dosyasını seçersin (`kuran-calisma.md` yalnızca okumak
için, geri yüklenmez).

**Aynı ayeti iki farklı cihazda çevirme** — kayıtlar otomatik
birleşmez, biri diğerini görmez.

---

## 7. Anki'ye aktarma

[Anki](https://apps.ankiweb.net), aralıklı tekrarla kelime ezberleten
ayrı bir program. Alt çubuktaki **`Kelime kartı indir (Anki)`**
düğmesi, hata kaydı düştüğün kelimelerden (rastgele bir liste değil,
yalnızca takıldıkların) bir kart dosyası üretir. Anki'de
**Dosya > İçe Aktar** ile açılır.

- Ön yüz: kelime, ayet konumu ve kelimenin **ayet içindeki hâli** —
  kalıbıyla birlikte görürsün
- Arka yüz: kök, lemma, bab ve senin yazdığın not

Anki kullanmıyorsan bu düğmeye hiç dokunmana gerek yok.

---

## 8. Kayıtlarını analiz ettirmek

`Kayıtlarımı dışa aktar` iki farklı iş için iki farklı dosya üretir:

- **`kuran-calisma.md`** — okumak için. Her ayette Arapça, kendi çevirin ve
  dört meal yan yana; bir sohbete yükleyip "çevirilerimle mealleri
  satır satır karşılaştır" diyebilirsin.
- **`kuran-calisma.json`** — saymak için. "Kaç edilgen fiilde hata
  yaptım", "kategori dağılımım nasıl" gibi sayısal sorular için daha
  uygun. Her hata kaydına ayetin kaç kelime olduğu, kelimeye bağlıysa
  kökü/lemma'sı/babı otomatik eklenmiş durumda.

Sorulabilecek şeyler:

- "Çevirilerimle mealleri karşılaştır, tekrar eden örüntü var mı?"
- "Hata kayıtlarımın dağılımına bak, neye çalışmalıyım?"
- "Hata kaydı düşmediğim ama çevirimin mealden ayrıldığı yerler var mı?"

Sonuncusu en değerlisi: fark ettiklerin zaten kayıtta, asıl mesele
**fark etmediklerin** — bunu program bulamaz, meal ile senin çevirin
arasındaki farkın gerçek bir hata mı yoksa üslup tercihi mi olduğuna
ancak elle karşılaştırınca karar verilebiliyor.

---

## 9. Bir şeyler ters giderse

**Uygulama eski görünüyor / yeni bir özellik yok**
Sayfayı yenile. Değişmezse tarayıcıyı tamamen kapatıp yeniden aç
(yalnızca sekmeyi değil, uygulamayı).

**Ana ekrandaki ikon açılmıyor / boş geliyor**
Tarayıcının site verileri silinmiş olabilir. Bağlantıyı tekrar aç,
**"Ana ekrana ekle"**yi tekrarla. Önceki çevirilerin kaybolmuş
olabilir — bu yüzden ara sıra dışa aktarmak önemli.

**`Kayıtları içe aktar` dosyayı seçtirmiyor**
Dosyayı, telefonun indirilenler klasöründen ara — bazı dosya
yöneticileri farklı bir klasörü varsayılan gösteriyor.
