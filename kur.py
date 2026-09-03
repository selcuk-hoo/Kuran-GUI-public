#!/usr/bin/env python3
"""PWA'yı cihaza kurmak için TEK SEFERLİK sunucu.

`python -m http.server` yerine bu var; çünkü tarayıcı bir isteği yarıda
kesince o BrokenPipeError yığın izi basıyor ve hata sanılıyor. Burada
o durum sessizce yutuluyor, gerçek hatalar görünür kalıyor.
"""

import os
import socket
import sys
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer

HOST, PORT = "127.0.0.1", 8080
KOK = os.path.dirname(os.path.abspath(__file__))


class Isleyici(SimpleHTTPRequestHandler):
    def __init__(self, *a, **k):
        super().__init__(*a, directory=KOK, **k)

    def handle_one_request(self):
        # Tarayıcının yarıda kestiği istek hata değildir.
        try:
            super().handle_one_request()
        except (BrokenPipeError, ConnectionResetError):
            self.close_connection = True

    def log_message(self, bicim, *args):
        try:
            durum = int(args[1])
        except (IndexError, ValueError):
            return
        if durum >= 400:
            sys.stderr.write("  !! %s -> %s\n" % (self.path, durum))

    def end_headers(self):
        # Kurulum sırasında eski dosya sunulmasın
        self.send_header("Cache-Control", "no-store")
        super().end_headers()


def port_bos_mu():
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
        s.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
        try:
            s.bind((HOST, PORT))
            return True
        except OSError:
            return False


def main():
    if not port_bos_mu():
        sys.exit("HATA: %s:%d kullanımda. Başka bir kopya çalışıyor olabilir.\n"
                 "      Durdur:  pkill -f kur.py" % (HOST, PORT))

    print("Kurulum sunucusu: http://%s:%d/\n" % (HOST, PORT))
    print("Sırasıyla:")
    print("  1. Tarayıcıda http://%s:%d/ adresini aç" % (HOST, PORT))
    print("  2. Sağ altta 'çevrimdışı için indiriliyor: N/114' yazacak;")
    print("     'çevrimdışı kullanıma hazır' olana kadar bekle")
    print("  3. Tarayıcı menüsünden 'Ana ekrana ekle' de")
    print("  4. Buraya dönüp Ctrl+C ile bu sunucuyu kapat\n")
    print("Bundan sonra uygulama ikondan açılır; bu betik bir daha gerekmez.")
    print("(Aşağıda yalnızca HATALAR görünür. Sessizlik iyiye işaret.)\n")

    sunucu = ThreadingHTTPServer((HOST, PORT), Isleyici)
    sunucu.daemon_threads = True
    try:
        sunucu.serve_forever()
    except KeyboardInterrupt:
        print("\nKurulum sunucusu kapatıldı.")
    finally:
        sunucu.server_close()


if __name__ == "__main__":
    main()
