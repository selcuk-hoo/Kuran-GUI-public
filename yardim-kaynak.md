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

**Sekme çubuğu** — üç sekme, sağ üstte de `Skor` ve
`Kılavuz` (bu sayfa) bağlantıları.
Hemen altındaki ayet gezinmesi — `‹ Önceki`, sure ile ayet kutuları,
`Git`, `Sonraki ›` — yalnızca bu sekmede görünür.

**Konum satırı** — şu an hangi ayette olduğunu ve bulunduğun surenin
kaç ayet içerdiğini söyler: "Bakara (البقرة) — 2:255 / 286 ayet" gibi.

**Arapça metin** — ayetin kendisi, büyük puntoyla ve sağdan sola.
Kelimeler tek tek dokunulabilir: bir kelimeye dokunduğunda o kelime
için hata kaydı formu açılır.

**Kendi çevirin** — ayeti kendi cümlelerinle yazdığın boş kutu, altında
`Çeviriyi kaydet` düğmesi.

**Doğrulama geçişi** — çeviriyi kaydettiğin anda bu bölüm açılır ve
mealleri görmeden önce seni bir kez daha düşündürür: bu ayette daha
önce yanıldığın bir kelime varsa haber verir. Ne olduğu bölüm 2, Adım
4'te anlatılıyor.

**Mealleri göster** — dört meali yan yana açan düğme. Çevirini
kaydedip doğrulama geçişini geçene kadar tıklanamaz durumdadır;
kasıtlı böyle, çünkü mealleri erken görmek çalışmayı anlamsızlaştırır.

**Bu ayetteki hata kayıtların** — bu ayette daha önce kaydettiğin
kelime notları burada listelenir. Hiç kaydın yoksa bu bölüm görünmez.

**Alt çubuk** — üç düğme: `Kayıtlarımı dışa aktar` (yedek almak ve
analiz ettirmek için, bölüm 6 ve 11), `Kayıtları içe aktar` (yedeği
geri yüklemek için) ve `Kelime kartı indir (Anki)` (bölüm 10).

---

## 2. Çalışma döngüsü — Çeviri Çalışma sekmesi

### Adım 1 — Ayeti oku

Arapça metni baştan sona oku. Takıldığın, anlamını çıkaramadığın
yerleri zihninde not et — ama henüz hiçbir şey yazma. Hata kaydı
tutmak için doğru an bu değil: neyi bilmediğini ancak çevirini
yazdıktan ve mealle karşılaştırdıktan sonra gerçekten anlarsın. Şimdi
yazarsan yalnızca "zor geldi" demiş olursun.

### Adım 2 — Kendi çevirini yaz

Kutuya ayetin kendi anladığın hâlini yaz. Tahmin etmekten çekinme:
yanlış çeviri de veridir, hatta asıl işe yarayan odur. Emin olmadığın
bir kelimeyi boş bırakma, tahminini yaz — çünkü birazdan mealle
karşılaştırdığında, tahminin ile doğrusu arasındaki fark sana tam
olarak neyi bilmediğini gösterecek. Boş bıraktığın yer ise hiçbir şey
göstermez.

Çevirinin edebî olması gerekmiyor; kendi cümlelerinle, anladığın gibi
yazman yeterli.

### Adım 3 — Kaydet

`Çeviriyi kaydet` düğmesine bas. Mealler hâlâ **açılmaz** — bunun
yerine altta doğrulama geçişi belirir. Çevirin kaydedildiği için artık
onu değiştirsen bile "önce kendim denedim" aşamasını geçmiş olursun.

### Adım 4 — Doğrulama geçişi

Bu ara adımın tek amacı var: mealleri açmadan önce sana bir kez daha
düşünme fırsatı vermek.

Ayet metnindeki bazı kelimelerin altı **turuncu çizgiyle**
işaretlenmiş olabilir. Bunun anlamı şu: o kelimenin kökünü (aynı
kelimenin kendisini değil, aynı kökten gelen bir başka kelimeyi)
geçmişte, başka bir ayette yanlış çevirmişsin ve hata kaydı düşmüşsün.
Yani "bu köke daha önce takılmıştın" demek.

Hemen altında bu kelimeler liste hâlinde de yazar, yanlarında nerede
yanıldığın: "كتب — 6:9 ve 13:16'da yanlış çevirmiştin" gibi. (Fareyle
çalışıyorsan kelimenin üstüne gelince de aynı bilgi çıkar.)

Dikkat: sana doğru anlamı **söylemez**, yalnızca daha önce burada
takıldığını hatırlatır. Bulmak yine sana kalıyor.

Bir ayette en fazla üç kelime işaretlenir; en çok farklı ayette
takıldığın kökler öne alınır. Hiç işaretli kelime yoksa "Bu ayette
daha önce zorlandığın bir kök yok" yazar — bu kötü bir şey değil,
sadece bu ayetteki köklere henüz takılmamışsın demektir.

Şimdi çevirine dön ve sor: bu kelimeyi yine aynı şekilde mi çevirdim?
İstersen çevirini düzeltip tekrar kaydedebilirsin.

Hazır olduğunda `Kontrol ettim, mealleri aç` ile devam et.

### Adım 5 — Mealleri karşılaştır

Dört meal yan yana açılır: **Diyanet İşleri**, **Diyanet Vakfı**,
**Elmalılı Yazır**, **Y. N. Öztürk**. Tek meal yerine dördü birden
duruyor, çünkü tek bir çeviriye bakmak sana o çevirmenin tercihini
"doğru" diye yutturur.

Önce dördünü de oku ve şuna bak: **kendi aralarında nerede
ayrılıyorlar?** Dördü aynı şeyi söylüyorsa o yer açık demektir; biri
ötekilerden ayrılıyorsa ya da hepsi başka başka söylüyorsa, orası
metnin gerçekten tartışmalı olduğu yerdir — senin orada farklı
düşünmen hata olmayabilir.

Sonra kendi çevirinle karşılaştır ve farkın nerede olduğunu bul: bir
kelimeyi mi yanlış anladın, cümlenin kuruluşunu mu, yoksa kimin kime
söylediğini mi? Bu sorunun cevabı bir sonraki adımda seçeceğin
kategori olacak.

### Adım 6 — Farkı sınıflandır

Çevirinin mealden ayrıldığı yeri buldun; şimdi bunu kaydedeceksin.
Ayet metninde, ayrıldığın **kelimeye dokun** — altta o kelime için bir
form açılır.

Formun en üstünde, o kelimenin Türkçe karşılığı yazabilir ("Kelime
meali: …"). Her kelimede çıkmaz (nedeni bölüm 5'te), ama çıktığında
"Doğru hali"ni yazarken işine yarar.

Sonra bir **kategori** seç — yani "neden yanıldım" sorusunun cevabını.
Kategoriler bölüm 3'te tek tek anlatılıyor; doğru kategoriyi seçmek
önemli, çünkü ileride "en çok hangi sebeple yanılıyorum" sorusunun
cevabı buradan çıkacak.

Altında iki yazı alanı var, ikisi de isteğe bağlı ama farklı işler
görüyor:

- **Doğru hali** — kelimenin burada gerçekten ne demek olduğu, yani
  meale bakınca öğrendiğin şey. Kısa yaz, birkaç kelime yeter.
- **Not** — senin ne sandığın, nasıl yanıldığın. "Fiil sandım",
  "geçmiş zaman zannettim" gibi.

İkisini birlikte yazmak en iyisi: kelime kartı çalışmasında (bölüm 7)
kartın arkasında ikisini de görürsün, yani hem doğrusunu hem o gün
neden şaşırdığını hatırlarsın.

`Hatayı kaydet` dediğinde kayıt tamamlanır. O kelime bundan sonra ayet
metninde altı çizili görünür ve kelime kartı havuzuna girer.

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
Bu kategori bir hata değil, bir gözlem. Dört meal birbirinden
ayrılıyorsa, sorun senin çevirinde değil; ayet gerçekten tartışmalı,
çevirmenler bile anlaşamamış. Böyle yerleri not etmek istersen bunu
kullan.

Bu kayıtlar ayrı tutulur: hata sayılmaz, istatistiklerine karışmaz ve
kelime kartlarında karşına çıkmaz — çünkü ezberlenecek bir "doğrusu"
yok ortada.

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

**Kök, lemma, bab ne demek?** Kelime kartlarının arkasında ve Anki
dosyasında bu üç bilgi geçiyor:

- **Kök** — kelimenin anlamını taşıyan, çoğunlukla üç harfli iskelet.
  Aynı kökten türeyen bütün kelimeler akrabadır. `نزل` kökü "inmek"
  çevresinde döner.
- **Lemma** — o kelimenin sözlükte aratacağın hâli. `أَنزَلَ` gibi.
- **Bab** — fiilin hangi kalıptan türediği. Kartta kalıbın kendisi
  `فعل` köküyle yazılı durur, yanında da dilbilgisi kitaplarının
  kullandığı Roma rakamı: `أَفْعَلَ (IV)` gibi. Kalıp anlamı düzenli
  biçimde değiştirir: `نزل` "inmek" iken `أَفْعَلَ` kalıbından gelen
  `أَنزَلَ` "indirmek" olur. Bu yüzden kökü bilmek tek başına yetmez,
  kalıbı da görmen gerekir.

İsim ve harflerde bab yoktur, o satır yalnızca fiillerde çıkar.

**Aynı ayete ikinci kez çeviri yazarsan eskisinin üzerine yazılır.**
Yani bir ayetin tek bir çevirisi olur, en son kaydettiğin. Eski hâlini
saklamaz. Çevirini düzeltmek istediğinde bunu bil: düzeltilmiş hâli
kaydedince ilk denemen kaybolur.

**Aynı kelimeye birden çok hata kaydı yazabilirsin.** Örneğin aynı
kelimeye bugün "kökünü bilmiyordum" diye, ay sonra tekrar uğradığında
başka bir sebeple not düşebilirsin. Hepsi ayrı ayrı saklanır; kelime
kartında ise hepsi tek kartta toplanır.

**Bazı mealler birkaç ayeti tek metinde birleştiriyor.** Çevirmen,
arka arkaya gelen ayetleri tek cümlede toplamayı tercih etmiş olabilir;
o zaman o ayetlerin her birinde aynı meal metni görünür. Program bunu
fark edip mealin altına "Bu meal 58-60'ı birlikte veriyor" gibi bir
not düşer — yani metnin tekrar etmesi bir hata değil, çevirmenin
tercihi.

**Her kelimenin ayrı bir Türkçe karşılığı yok.** Bir kelimeye
dokunduğunda bazen "Kelime meali" satırı hiç çıkmaz. Sebebi şu:
kelime kelime çeviriler, Kur'an metninin kendisinden değil, ayrı bir
çalışmadan geliyor ve o çalışmayı yapanlar bazen birkaç Arapça
kelimeyi tek bir Türkçe karşılıkla vermiş. Örneğin `مِن قَبْلِكَ` iki
ayrı Arapça kelime ama Türkçesi tek bir ifade: "senden önce". Böyle
durumlarda karşılık ilk kelimeye yazılmış oluyor, ikincisine
dokunduğunda ise bir şey çıkmıyor — kelimenin anlamsız olduğundan
değil, anlamı bir öncekiyle birlikte verildiği için.

Ayrıca üç ayette — **2:181, 8:6 ve 13:37** — bu çalışmanın kelimeleri
sayma biçimi programın kullandığı metinle örtüşmüyor; karşılıklar bir
kelime kayarak yanlış kelimeye denk geliyordu. Yanlış bilgi göstermek
yerine bu üç ayette kelime meali hiç gösterilmiyor.

---

## 6. Verin ve yedekleme

Çevirilerin ve hata kayıtların **yalnızca bu cihazdaki tarayıcının
deposunda** tutulur. Hiçbir yere gönderilmez, sunucuya gitmez, kimseyle
paylaşılmaz.

Bunun iyi tarafı gizlilik; kötü tarafı ise şu: **tarayıcının site
verilerini silersen, telefonu değiştirirsen ya da telefonun bozulursa
kayıtların da gider.** Program bunları hiçbir yerde saklamıyor, çünkü
hiçbir yere göndermiyor. Tek koruma, ara sıra kendin yedek almak.

Alt çubuktaki **`Kayıtlarımı dışa aktar`** düğmesine bastığında iki
dosya birden iner:

- **`kuran-calisma.json`** — yedeğin. Kayıtlarını geri yüklemek için
  kullanılan dosya budur; insanın okuması için değil, programın
  okuması için.
- **`kuran-calisma.md`** — okunabilir hâli. Geri yüklemeye yaramaz;
  bir yapay zekâ sohbetine yükleyip çalışmanı analiz ettirmek içindir
  (bölüm 11).

İkisi de telefonunun indirilenler klasörüne kaydedilir. Ara sıra
bunları başka bir yere (bilgisayarına, bulut deposuna, kendine attığın
bir e-postaya) kopyalarsan yedeğin gerçekten güvende olur.

Geri yüklemek için `Kayıtları içe aktar` de ve dosya seçiciden
**`kuran-calisma.json`** dosyasını seç. Program önce kaç kayıt
yükleneceğini söyler ve onay ister; onayladığında o andaki kayıtların
dosyadakilerle **değiştirilir**, üzerine eklenmez.

**Aynı ayeti iki farklı cihazda çevirme.** Telefon ve tablette ayrı
ayrı çalışırsan iki taraf birbirinden habersiz olur; kayıtlar
kendiliğinden birleşmez ve birinden alıp öbürüne yüklediğinde
öbürünün kayıtları silinir.

---

## 7. Hatalı Kelime Kartları

Asıl döngü (bölüm 2) seni ancak çevirdiğin ayetlerle yüzleştirir; bu
sekme de o ayetlerde yanıldığın kelimeleri unutmana izin vermez. Bir
kelimeye hata kaydı düştüğün anda kart havuzuna girer. Anki gibi ayrı
bir program kurmana gerek yok, hepsi uygulamanın içinde.

- **Kartın önü:** ayetin tamamı, sorulan kelime vurgulu. Üstte kaçıncı
  kartta olduğun ve ayetin yeri yazar ("Kart 3 / 15 · Bakara 2:255"
  gibi). Kelimeyi ayetin içinde görürsün, çünkü bir kelimenin anlamı
  çoğu zaman bulunduğu cümleye bağlıdır. İpucu verilmez; önce kendin
  hatırlamaya çalış.
- **`Kartı çevir`** dediğinde arkası açılır ve iki kutu görürsün. Üstteki
  dolgun kutu **doğrusu**: kelimenin Türkçe karşılığı (yoksa senin
  yazdığın "doğru hali") ve altında kök / lemma / bab. Alttaki boş
  çerçeveli kutu ise **o gün ne sandığın**, yani kendi notun. Renk
  farkı bilerek: hangisinin doğru olduğunu okumadan da ayırt edersin.
  İkisinin altında ayetin dört meali yan yana durur — kelimeyi yalnız
  başına değil, cümlenin içinde nasıl karşılandığını da görürsün.
- Sonra kendini değerlendirirsin: **Bilemedim / Zorlandım /
  Biliyordum.** Bu bir puan değil; kelimenin bir dahaki sefere ne
  sıklıkla karşına çıkacağını ayarlar. Bilemediklerin daha sık,
  bildiklerin daha seyrek gelir. Uzun süredir görmediğin kelimeler de
  öne çıkar, çünkü asıl unutma orada başlar.
- Artık öğrendiğin, bir daha görmek istemediğin bir kelime varsa
  **"Bu kartı çıkar"** de; o kelime havuzdan tamamen çıkar (hata kaydın
  silinmez, sadece kart olarak sorulmaz).
- Bir oturum 15 karttır. Bitince **"15 kart daha"** ile devam edebilir
  ya da **"Bitir, ayete dön"** ile Çeviri Çalışma sekmesine
  dönebilirsin.

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

- **Zorluk** (Orta / Zor / Çok Zor) hangi kelimelerin geleceğini
  ayarlar. Kur'an'da bazı kökler binlerce kez, bazıları yalnızca bir
  kez geçer; bu ayar, az geçenlerin ne kadar öne çıkacağını belirler.
  Orta'da nispeten tanıdık kelimeler de gelir, Çok Zor'da neredeyse
  yalnızca bir-iki kez geçen kelimelerle karşılaşırsın. Seçtiğin ayar
  hatırlanır, her seferinde yeniden seçmen gerekmez.
- **Kartın önü** Hatalı Kelime Kartları'ndaki gibidir: ayetin tamamı,
  sorulan kelime vurgulu, üstte ayetin yeri.
- **`Kartı çevir`** dediğinde kelimenin Türkçe karşılığı ve kök /
  lemma / bab bilgisi çıkar; altında da ayetin dört meali yan yana
  gelir, böylece kelimeyi cümlenin bütünü içinde görebilirsin. Kelime,
  meal cümlelerinin içinde ayrıca işaretlenmez — Türkçe metinde hangi
  kelimeye denk geldiğini kendin ararsın (nedeni bölüm 5'teki kelime
  meali notuyla aynı).
- Burada not tutulmaz, doğru bildin mi diye sorulmaz, kayıt da
  yapılmaz. Amaç sınamak değil, tanıştırmak. **`Sonraki kelime`** ile
  istediğin kadar ilerlersin.

Her iki kart sekmesinden de üstteki `Çeviri Çalışma` sekmesine
dokunarak çıkarsın.

---

## 9. Skor

Sağ üstteki `Skor` bağlantısı tek bir soruya cevap verir:

> Çevirisini yazdığın ayetlerde gördüğün kökleri bir havuz sayarsak,
> Kur'an'ın kaç ayeti **tamamen** o havuzdan oluşuyor?

Cevap yüzde olarak çıkar. Altında da kaç ayet çevirdiğin ve kaç farklı
kök gördüğün yazar.

**Neden "bildiğin kelime oranı" değil de bu?** Çünkü kelime oranı
insanı kandırıyor. Kur'an'da 1.651 kök var ve dağılımları çok çarpık:
en sık 500 kök, kökü olan kelimelerin %92'sini kaplıyor. Kulağa
"neredeyse bitirdim" gibi geliyor — ama o 500 kökle baştan sona
okuyabileceğin ayet oranı yalnızca %59. Sebebi basit: bilmediğin
kelimeler metne dağılmış durumda ve **tek bir bilinmeyen kelime ayetin
tamamını düşürüyor.** Skor, seni kandırmayan sayıyı gösterir.

Ölçek şöyle ilerliyor — mushaf sırasıyla çalışıldığında:

| Çalışılan ayet | Görülen kök | Skor |
|---|---|---|
| 25 | 77 | %3,5 |
| 100 | 321 | %23 |
| 250 | 515 | %44 |
| 500 | 702 | %61 |
| 1000 | 916 | %77 |

Yani başta hızlı yükselir, sonra yavaşlar. Bu yavaşlama bir başarısızlık
değil: geriye kalan kökler gerçekten nadir olanlar.

**Hata kaydı düşmek skoru DÜŞÜRMEZ.** Bu bilerek böyle. Program senin
çevirinin doğru olup olmadığını denetlemiyor; elinde yalnızca senin
işaretlediğin hatalar var. Skor onlara baksaydı, hiç kayıt düşmeyen
kişi en yüksek puanı alırdı — yani gösterge, programın kurmaya
çalıştığı dürüstlüğü cezalandırırdı. Bu yüzden skora kendi beyanın
karışmıyor.

Kutuda bir de ikinci satır çıkar (hata kaydın varsa): kayıt düştüğün
kökler içinde son kart sonucun "biliyordum" olanların sayısı. Bu
**senin kendi değerlendirmen**, ölçüm değil; o yüzden ana sayıyla
karıştırılmadan, ayrı yazılır.

**Skorun ölçmediği şeyler.** Bu sayı kelime tanıdıklığını ölçer,
anlamayı değil. Ölçmediği en az üç şey var: dilbilgisi (aynı kök,
farklı bab, bambaşka anlam — programın kendisi bunu öğretiyor), cümle
kurulumu, ve bağlam. Ayrıca "gördüğün kök"ü "bildiğin kök" sayıyor;
bir ayeti çevirirken bir kelimeyi yanlış anlamış olabilirsin. Yani
skor bir üst sınır: "en iyi ihtimalle bu kadarını okuyabilirsin" der.
"Kur'an'ı yüzde şu kadar anlıyorum" cümlesi bu sayıdan çıkmaz.

Kökü olmayan kelimeler (edat, zamir, bağlaç — metnin %35'i) bilinmiş
sayılır. Kapalı ve küçük bir kümedir, ilk haftalarda oturur.

## 10. Anki'ye aktarma

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

## 11. Kayıtlarını yapay zekâya analiz ettirmek

Programın kendisi çevirilerini değerlendirmez — bunu yapabilecek olan
bir yapay zekâ sohbeti (ChatGPT, Claude, Gemini vb.). `Kayıtlarımı
dışa aktar` dediğinde inen iki dosya tam da bunun için hazırlanıyor:
sohbete dosya olarak yükleyip aşağıdaki istemi yapıştırırsın.

- **`kuran-calisma.md`** — okunabilir olan. Bir özetle başlar: kaç ayet
  çevirmişsin, kaç hata kaydın var, hangi kategoriden kaç tane, her
  100 kelimede kaç hata yapmışsın. (Bu son ölçü bilerek böyle: "ayet
  başına hata" yanıltıcı olurdu, çünkü ayetler 3 kelimeden 50 kelimeye
  kadar değişiyor — uzun ayette daha çok hata çıkması normaldir.)
  Özetten sonra çalıştığın her ayet tek tek gelir: Arapça metin, senin
  çevirin, dört meal ve o ayete düştüğün notlar. Satır satır
  karşılaştırma istiyorsan bu dosya.
- **`kuran-calisma.json`** — saymak için. İnsan gözüyle okunacak bir
  dosya değil, ama sayısal sorularda işi kolaylaştırır: "hangi
  kategoriden kaç tane var", "en çok hangi kökte takılıyorum" gibi.
  Programın sakladığı bilgiye ek olarak, her hata kaydına o ayetin kaç
  kelime olduğu ve kelimeye bağlı bir kayıtsa kökü, lemması, babı da
  otomatik eklenir — böylece analizi yapan taraf bunları ayrıca
  bulmak zorunda kalmaz.

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

## 12. Bir şeyler ters giderse

**Telefonun ana ekranındaki ikon açılmıyor / boş geliyor**
Tarayıcının site verileri silinmiş olabilir. Bağlantıyı tekrar aç,
**"Ana ekrana ekle"**yi tekrarla. Önceki çevirilerin kaybolmuş
olabilir — bu yüzden ara sıra dışa aktarmak önemli.

**`Kayıtları içe aktar` dosyayı seçtirmiyor**
Dosyayı, telefonun indirilenler klasöründen ara — bazı dosya
yöneticileri farklı bir klasörü varsayılan gösteriyor.

**Burada yazmayan bir sorun / bir öneri**
Şu adrese yazabilirsin: selchuk_hoo@yahoo.com
