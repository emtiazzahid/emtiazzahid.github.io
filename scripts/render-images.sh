#!/usr/bin/env bash
# Renders public/og.png and public/apple-touch-icon.png from the HTML sources
# in this folder, using headless Chrome. Run it after editing scripts/og.html.
# The PNGs are committed, so CI never needs a browser.
set -euo pipefail

cd "$(dirname "$0")/.."

CHROME="${CHROME:-/Applications/Google Chrome.app/Contents/MacOS/Google Chrome}"

if [ ! -x "$CHROME" ]; then
  echo "Chrome not found at: $CHROME" >&2
  echo "Set CHROME=/path/to/chrome and re-run." >&2
  exit 1
fi

"$CHROME" --headless --disable-gpu --hide-scrollbars --no-sandbox \
  --allow-file-access-from-files \
  --screenshot=public/og.png --window-size=1200,630 \
  "file://$PWD/scripts/og.html"

"$CHROME" --headless --disable-gpu --hide-scrollbars --no-sandbox \
  --screenshot=public/apple-touch-icon.png --window-size=180,180 \
  "file://$PWD/scripts/icon.html"

echo "Wrote public/og.png and public/apple-touch-icon.png"
