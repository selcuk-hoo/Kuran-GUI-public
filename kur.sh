#!/bin/sh
# PWA'yı cihaza kurmak için TEK SEFERLİK sunucu.
# Ayrıntı: kur.py
cd "$(dirname "$0")" || exit 1
if command -v python3 >/dev/null 2>&1; then
    exec python3 kur.py
else
    exec python kur.py
fi
