# PWA sürümü — sunucusuz

Bu klasör, programın **sunucusuz** sürümüdür. Termux, Python, wakelock,
bölünmüş ekran — hiçbiri gerekmez. Tarayıcıda açılır, ana ekrana
eklenir, ikona basınca çalışır. Kurulumdan sonra internet de gerekmez.

## Neden var

Android (özellikle Huawei) ekranda görünmeyen süreçleri donduruyor.
Termux sürümünde tarayıcıya her geçişte sunucu donduğu için program
kullanılamayacak kadar yavaşlıyordu. Bölünmüş ekran bunu çözüyor ama
başka uygulamaya geçmeyi yasaklıyor. Sunucuyu tamamen kaldırınca
sorunun tamamı ortadan kalkıyor.

## Nasıl çalışır

Kelime bölmesi, besmele ayrımı, birleşme istisnaları ve doğrulama
geçişinin üç özelliği tarayıcıda **yeniden hesaplanmaz**. Hepsi
`pwa_hazirla.py` ile önceden hesaplanıp `veri/sure-N.json` dosyalarına
yazılır. Böylece 6236 ayette doğrulanmış Python kodu tek kaynak olarak
kalır; JavaScript yalnızca okur.

`pwa_dogrula.py` bu hazır veriyi kaynak veritabanına karşı denetler:
6236 ayet, 77.429 kelime, sıfır sapma.

Çeviriler ve hata kayıtları tarayıcının IndexedDB'sinde, **cihazda**
kalır. Hiçbir yere gönderilmez.

## Kurulum — internet ve barındırma gerektirmez

Service worker "localhost" ya da "https" ister; dosyaları doğrudan
açmak (file://) yetmez, IndexedDB de orada çalışmaz. Çözüm: dosyaları
**bir kez** yerel olarak sunmak. Kurulum bitince sunucu bir daha
gerekmez.

Tablette (Termux):

```
cd ~/Kuran-GUI/pwa
sh kur.sh
```

Sonra tarayıcıda `http://127.0.0.1:8080/` aç, sağ altta "çevrimdışı
kullanıma hazır" yazana kadar bekle, menüden **Ana ekrana ekle** de,
Termux'e dönüp **Ctrl+C** ile sunucuyu kapat.

Bundan sonrası: ikona bas, açılır. Sunucu yok, Termux yok, internet
yok. Doğrulandı — sunucu süreci tamamen öldürülmüşken uygulama açılıyor,
hiç ziyaret edilmemiş surelere geçiyor ve yeni çeviri kaydediyor.

Port 8080 bilerek seçildi; sunucu sürümünün 8000'iyle çakışmasın diye.

### Uygulamayı güncellemek

Kodda değişiklik olursa `sw.js` içindeki `SURUM` değeri artırılır,
sonra `sh kur.sh` bir kez daha çalıştırılıp sayfa açılır. Service
worker yeni sürümü indirir. Çalışma verisi (IndexedDB) etkilenmez.

## Dosyalar

- `index.html`, `app.js`, `style.css` — uygulama
- `sw.js` — service worker; uygulamayı ve 114 sure dosyasını cihaza yazar
- `manifest.json`, `ikon*.png/svg` — ana ekrana eklenebilmesi için
- `veri/` — hazır veri (7.2 MB, sıkıştırılmış ~1.9 MB)
- `kur.sh` — tek seferlik kurulum sunucusu

## Veriyi taşıma

Sunucu sürümünden geçerken, bilgisayarda bir kez:

```
python3 pwa_aktar.py
```

`kuran-calisma-YYYY-AA-GG.json` üretir. Tablette uygulamayı açıp
**İçe aktar** ile bu dosyayı seçersin.

Sonraki yedekler için uygulamadaki **Verimi dışa aktar** düğmesi
yeterli — bilgisayar gerekmez.

### Dosya seçici çalışmıyorsa

Bazı Android dosya yöneticileri `.json` uzantısını tanımıyor ve
dosyayı seçtirmiyor. Bunun için **Yapıştır** düğmesi var: dosyanın
içeriğini kopyalayıp kutuya yapıştırırsın. Termux'te içeriği panoya
almak için:

```
termux-clipboard-set < kuran-calisma-*.json
```

(`termux-clipboard-set` yoksa: `pkg install termux-api`)

`accept` filtresi bilerek kaldırıldı — filtre koyunca dosyalar
seçilemez hâle geliyordu. İçeriği uygulama zaten denetliyor.

## Yeniden üretme

Veri dosyaları depoda duruyor; normalde üretmeye gerek yok. Metinler
veya morfoloji değişirse:

```
python3 import.py          # kuran.db'yi tazele
python3 pwa_hazirla.py     # veri/ dosyalarını üret
python3 pwa_dogrula.py     # kaynağa karşı denetle
```

`sw.js` içindeki `SURUM` değerini de değiştir, yoksa cihazlardaki eski
önbellek yenilenmez.
