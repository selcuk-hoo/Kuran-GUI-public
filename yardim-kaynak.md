# Kullanım Kılavuzu

Bu araç meal okumak için değil. Asıl iş şu: ayeti kendin çevir, sonra
mealleri aç ve **kendi çevirinle meal arasındaki farkı gör**. Fark
nerede çıkıyorsa eksiğin oradadır. Araç o eksiği not almanı sağlar.

Bu yüzden bir kural var ve esnetilmiyor: **çevirini kaydetmeden
mealler görünmez.** Önce meale bakarsan artık kendi okumanı test
etmiyorsun, meali ezberliyorsun.

Program üstteki üç sekmeden oluşuyor. Asıl döngü birincisinde geçer;
diğer ikisi kelime tekrarı içindir, istediğin zaman girip çıkarsın:

- **Çeviri Çalışma** — ayeti çevir, mealle karşılaştır, farkı not al
  (bölüm 2).
- **Hatalı Kelime Kartları** — not aldığın kelimeler tekrar karşına
  çıkar, unutmadan önce (bölüm 7).
- **Rastgele Kelime Kartları** — Kur'an'da az geçen kelimelerle,
  sırası gelmeden tanışırsın (bölüm 8).

Kelime çalışması asıl döngünün yerini tutmaz; onu besler. Kartların
dolması için önce çeviri yapıp hata kaydı düşmen gerekiyor.

Kayıtların yalnızca **senin cihazında** tutulur. Bu bağlantıyı
kullanan başka biri olsa bile, kimse kimsenin çevirisini görmez — her
kişinin kayıtları kendi tarayıcısında ayrı ayrı durur.

---

## 1. Ekranlar

Hangi sekmedeysen o sekme koyu yazıyla ve altındaki çizgiyle
işaretlenir; geçmek için üstteki adına dokunman yeterli. Kart
sekmelerinde ayet gezinmesi (`‹ Önceki` / `Git` / `Sonraki ›`)
görünmez, çünkü orada ayet ayet ilerlemiyorsun.

**Çeviri Çalışma** sekmesinin düzeni, yukarıdan aşağıya:

**Sekme çubuğu** — aktif sekmeyi gösterir; `‹ Önceki` / sure-ayet
kutuları + `Git` / `Sonraki ›` yalnızca bu sekmedeyken görünür.

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

## 2. Çalışma döngüsü — Çeviri Çalışma sekmesi

### Adım 1 — Ayeti oku

Anlamadığın yerleri fark et ama henüz not alma.

### Adım 2 — Kendi çevirini yaz

Tahmin etmekten çekinme. Yanlış çeviri de veridir, hatta asıl işe
yarayan odur. Emin olmadığın yeri boş bırakma; tahminini yaz. Neyi
yanlış tahmin ettiğini görmek, hiç tahmin etmemekten öğreticidir.

### Adım 3 — Kaydet

`Çeviriyi kaydet`. Mealler **açılmaz**; altta doğrulama geçişi çıkar.

### Adım 4 — Doğrulama geçişi

Ayet metninde **turuncu alt çizgili** kelimeler varsa, bunların kökünü
geçmişte başka bir ayette yanlış çevirmişsin — üstlerine gelince
("2:255:3 — كتب: 6:9 ve 13:16'da yanlış çevirmiştin" gibi) nerede
yanıldığını hatırlatır, doğru anlamı söylemez. Bir ayette en fazla üç
kelime işaretlenir. Hiç yoksa bu, o kökle ilk kez karşılaştığın
anlamına gelir.

Şimdi çevirine dön: bu kelimeyi yine aynı şekilde mi çevirdin?

`Kontrol ettim, mealleri aç` ile devam.

### Adım 5 — Mealleri karşılaştır

Dört meal yan yana gelir: **Diyanet İşleri**, **Diyanet Vakfı**,
**Elmalılı Yazır**, **Y. N. Öztürk**.

Hepsini oku. Meallerin *birbirinden* ayrıldığı yer, metnin gerçekten
tartışmalı olduğu yerdir. Sonra kendi çevirinle karşılaştır.

### Adım 6 — Farkı sınıflandır

Ayrıldığın **kelimeye dokun**. Bir kelime meali varsa (her kelimede
yok) form açılınca hemen üstte görürsün — bu, "Doğru hali"ni yazarken
ipucu olabilir. Kategori seç. İkisi de isteğe bağlı ama ayrı ayrı işe
yarıyor: **"Doğru hali"** kelimenin gerçek anlamını kısaca yazar (meale
bakınca öğrendiğin şey), **"Not"** ise ne sandığını / nasıl yanıldığını.
İkisini birlikte yazmak, hem Anki kartını hazırlar hem sonradan bakınca
ne öğrendiğini hatırlatır. `Hatayı kaydet`. Kaydettiğin kelimenin altı
çizili görünür.

---

## 3. Hata kategorileri

Doğru kategoriyi seçmek önemli: bu kayıtların dağılımı, sıradaki
çalışmanın ne olması gerektiğini söylüyor.

### Kelimeyi hiç bilmiyordum
Kelimenin kök harflerini çıkaramadın.
> *Sorun kelime dağarcığında.*

### Türkçedeki karşılığıyla karıştırdım
Kelimeyi biliyordun ama zihnindeki Türkçe karşılığı seni yanlış yöne
götürdü — Arapçadaki gerçek kapsamı Türkçedekiyle birebir örtüşmüyor.
> *Sorun çeviri refleksinde, kelime dağarcığında değil.*

### Kelimeyi biliyordum ama burada başka anlamda
Kökü biliyorsun ama bu bağlamda verdiğin anlam tutmadı.
> *Sorun kelimenin anlam yelpazesinde.*

### Kalıp ya da edat anlamı değiştirdi
Kelimeyi de gramerini de biliyorsun, ama anlam bir kalıptan ya da
edattan geliyor: `عدل` "adil olmak" ama `عدل بـ` "denk tutmak";
`ربط` "bağlamak" ama `ربط على القلب` "metanet vermek".
> *Sorun tek kelimede değil, kurduğu birliktelikte. Kelime kartına
> kelimeyi tek başına değil, edatıyla yaz.*

### Kim yapıyor / kime söyleniyor karıştı
Kelimeleri biliyorsun ama cümledeki görevini çıkaramadın: fâil mi
mef'ûl mü, sıfat mı haber mi.
> *Sorun gramerde.*

### Cümleyi yanlış kurdum
Kelimeleri de gramerini de çözdün, cümle yine de oturmadı. Öncesi
sonrası, kime söylendiği bilinmeden anlaşılmıyor.
> *Sorun metnin dışında.*

### Hata değil, mealler farklı söylemiş
Sen yanılmadın — üç meal birbirinden ayrılıyor, ayet gerçekten
tartışmalı. Bunu ayrıca not almak istersen bu kategoriyi kullan;
istatistiğe ve kelime kartı çalışmasına girmez, hata sayılmaz.

**Kararsızsan en dar olanı seç.** "Kelimeyi hiç bilmiyordum" en somut,
"Cümleyi yanlış kurdum" en geniştir. Her şeye en geniş kategoriyi
dersen kayıtların sana bir şey söylemez.

---

## 4. Gezinme

Ayet gezinmesi yalnızca `Çeviri Çalışma` sekmesindedir.

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

**Aynı ayete tekrar çeviri yazman üzerine yazar.** Eski hâli kaybolur
— düzeltme yapmak istediğinde bunu bil.

**Aynı kelimeye birden çok hata kaydı** yazabilirsin.

**Bazı mealler birkaç ayeti tek blokta veriyor.** Böyle bir ayette
mealin altında "Bu meal 58-60'ı birlikte veriyor" gibi bir not
görürsün — metin gerçekten aynı, hata değil.

**Her kelimenin ayrı bir meali yok.** Kelime meali ayrı bir kaynaktan
geliyor ve o kaynak bazen birkaç Arapça kelimeyi tek karşılıkla
veriyor; böyle bir kelimeye dokununca meal satırı hiç çıkmaz, anlamı
bir öncekinin içindedir. 2:181, 8:6 ve 13:37'de ise kaynağın kelime
sırası metinle oturmadığı için o üç ayette kelime meali hiç
gösterilmez.

---

## 6. Verin ve yedekleme

Çevirilerin ve hata kayıtların **yalnızca bu cihazdaki tarayıcının
deposunda** tutulur. Hiçbir yere gönderilmez, sunucuya gitmez, kimseyle
paylaşılmaz.

Bunun bir bedeli var: **tarayıcının site verilerini silersen ya da
telefonu değiştirirsen, kayıtların da gider.** Tek koruma, ara sıra
**`Kayıtlarımı dışa aktar`** yapmak — iki dosya üretir:
`kuran-calisma.json` (yedek + geri yükleme için) ve `kuran-calisma.md` (bir
yapay zekâ sohbetine yükleyip analiz ettirmek için, bkz. bölüm 10).
İkisi de telefonunun
indirilenler klasörüne kaydedilir.

`Kayıtları içe aktar` ile geri yüklersin — dosya seçiciden
`kuran-calisma.json` dosyasını seçersin (`kuran-calisma.md` yalnızca okumak
için, geri yüklenmez).

**Aynı ayeti iki farklı cihazda çevirme** — kayıtlar otomatik
birleşmez, biri diğerini görmez.

---

## 7. Hatalı Kelime Kartları

Asıl döngü (bölüm 2) seni ancak çevirdiğin ayetlerle yüzleştirir; bu
sekme de o ayetlerde yanıldığın kelimeleri unutmana izin vermez. Bir
kelimeye hata kaydı düştüğün anda kart havuzuna girer. Anki gibi ayrı
bir program kurmana gerek yok, hepsi uygulamanın içinde.

- Her kartta ayetin tamamı gelir, sorulan kelime vurgulu; üstte hangi
  ayet olduğu yazar ("Kart 3 / 15 · Bakara 2:255" gibi). "Bu kelime
  burada ne anlama geliyor?" diye sorar, hiçbir ipucu vermez.
- **`Kartı çevir`** deyince sırasıyla: kelimenin meali (yoksa yazdığın
  "doğru hali"), kök/lemma/bab, en son o an ne sandığını gösterir.
- Kendini değerlendir: **Bilemedim / Zorlandım / Biliyordum.** Bu,
  kartın bir dahaki sefere ne zaman karşına çıkacağını etkiler — sık
  yanıldığın ve uzun süredir karşına çıkmamış kelimeler öncelikli.
- Bir kartı bir daha görmek istemiyorsan **"Bu kartı çıkar"** de.
- Bir oturum 15 kart; bitince **"15 kart daha"** ile devam edebilir ya
  da **"Bitir, ayete dön"** ile Çeviri Çalışma sekmesine dönebilirsin.

**"Hata değil, mealler farklı söylemiş"** diye işaretlediğin kelimeler
kart havuzuna hiç girmez — onlar senin hatan değildi.

Hiç hata kaydın yoksa bu sekme boş olduğunu söyler; önce birkaç
kelimeye hata kaydı düşmen gerekiyor.

---

## 8. Rastgele Kelime Kartları

Bu sekme hata kaydına hiç bakmaz, senin nerede olduğuna da bakmaz.
Kendi sıran bir ayete gelene kadar yıllar geçebilir; burası Kur'an'da
az geçen kelimelerle daha önceden, ayrı bir yoldan tanışmanı sağlar —
henüz çevirmediğin ayetler dahil, tüm kitaptan.

- Kelime ne kadar nadirse o kadar sık karşına çıkar. **Orta / Zor /
  Çok Zor** bu nadirlik vurgusunu ayarlar: Çok Zor'da en az geçen
  kelimeler çok daha sık gelir. Seçimin hatırlanır.
- Kart önü, Hatalı Kelime Kartları'ndaki gibi: ayetin tamamı, sorulan
  kelime vurgulu, üstte ayetin yeri.
- **`Kartı çevir`** deyince kelimenin meali, kök/lemma/bab ve dört
  mealin tamamı görünür. Kelime, meal cümlelerinin içinde ayrıca
  işaretlenmez — orada kendin ararsın.
- Burada senin bir notun yok, doğru/yanlış değerlendirmesi de
  tutulmaz; **`Sonraki kelime`** ile ilerlersin.

Her iki kart sekmesinden de üstteki `Çeviri Çalışma` sekmesine
dokunarak çıkarsın.

---

## 9. Anki'ye aktarma

[Anki](https://apps.ankiweb.net), aralıklı tekrarla kelime ezberleten
ayrı bir program. Uygulamanın kendi kart çalışması (bölüm 7) yeterli
geliyorsa buna hiç ihtiyacın yok; kelimeleri Anki'de toplamak
istiyorsan `Çeviri Çalışma` sekmesinin altındaki **`Kelime kartı indir
(Anki)`** düğmesi, hata kaydı düştüğün kelimelerden (rastgele bir
liste değil, yalnızca takıldıkların) bir kart dosyası üretir. Anki'de
**Dosya > İçe Aktar** ile açılır.

- Ön yüz: kelime, ayet konumu ve kelimenin **ayet içindeki hâli** —
  kalıbıyla birlikte görürsün
- Arka yüz: kök, lemma, bab, "Doğru hali" (doldurduysan) ve senin
  yazdığın not

Anki kullanmıyorsan bu düğmeye hiç dokunmana gerek yok.

---

## 10. Kayıtlarını yapay zekâya analiz ettirmek

Programın kendisi çevirilerini değerlendirmez — bunu yapabilecek olan
bir yapay zekâ sohbeti (ChatGPT, Claude, Gemini vb.). `Kayıtlarımı
dışa aktar` dediğinde inen iki dosya tam da bunun için hazırlanıyor:
sohbete dosya olarak yükleyip aşağıdaki istemi yapıştırırsın.

- **`kuran-calisma.md`** — okumak için. Bir özetle başlar (kaç çeviri,
  kaç hata, kategori dağılımı, 100 kelimede kaç hata — ayet başına
  hata yanıltıcı olurdu, ayetler 3 ila 50 kelime arası değişiyor),
  sonra her ayette Arapça, kendi çevirin ve dört meal yan yana. Satır
  satır karşılaştırma istiyorsan bu dosya.
- **`kuran-calisma.json`** — saymak için. "Kaç edilgen fiilde hata
  yaptım", "kategori dağılımım nasıl" gibi sayısal sorular için daha
  uygun. Her hata kaydına ayetin kaç kelime olduğu, kelimeye bağlıysa
  kökü/lemma'sı/babı otomatik eklenmiş durumda.

İkisini birden yükleyip şunu sorabilirsin:

```
Ekteki iki dosya Kur'an çalışma kayıtlarım. Yöntemim şu: bir ayeti önce kendim çeviriyorum, sonra dört Türkçe mealle karşılaştırıyorum ve ayrıldığım yerleri kategorileyerek not alıyorum. kuran-calisma.md her ayette Arapça metni, benim çevirimi, dört meali ve o ayete düştüğüm notları içeriyor; kuran-calisma.json aynı kayıtların sayılabilir hâli (her hata kaydında kelimenin kökü, lemması, babı ve ayetin kaç kelime olduğu da var).

Sırayla şunları yap:

1. Çevirilerimi meallerle satır satır karşılaştır ve hata kaydı DÜŞMEDİĞİM hâlde çevirimin mealden anlamca ayrıldığı yerleri bul. Her biri için farkın gerçek bir yanlış mı yoksa üslup tercihi mi olduğunu söyle. Benim için en kıymetli kısım bu.

2. Kayıtlı hatalarımda tekrar eden örüntüleri çıkar: hangi kategoriler, hangi kökler, hangi dilbilgisi yapıları. Tek tek kelime listesi değil, örüntü istiyorum.

3. Bu örüntülere bakarak sıradaki çalışmamın ne olması gerektiğini söyle. Az sayıda ve somut öneri ver.

"Hata değil, mealler farklı söylemiş" diye işaretlediklerim benim yanlışım değil; onları ayrı tut, istatistiğe katma.
```

Birinci madde en değerlisi: fark ettiklerin zaten kayıtta, asıl mesele
**fark etmediklerin** — onları program bulamaz, çünkü meal ile senin
çevirin arasındaki farkın gerçek bir hata mı yoksa üslup tercihi mi
olduğuna ancak okuyarak karar verilebiliyor.

---

## 11. Bir şeyler ters giderse

**Ana ekrandaki ikon açılmıyor / boş geliyor**
Tarayıcının site verileri silinmiş olabilir. Bağlantıyı tekrar aç,
**"Ana ekrana ekle"**yi tekrarla. Önceki çevirilerin kaybolmuş
olabilir — bu yüzden ara sıra dışa aktarmak önemli.

**`Kayıtları içe aktar` dosyayı seçtirmiyor**
Dosyayı, telefonun indirilenler klasöründen ara — bazı dosya
yöneticileri farklı bir klasörü varsayılan gösteriyor.
