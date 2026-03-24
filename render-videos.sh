#!/bin/bash
set -euo pipefail

# Render all Humanloop.cl videos with Remotion
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

REMOTION_BIN="$SCRIPT_DIR/node_modules/.bin/remotion"
if [[ ! -x "$REMOTION_BIN" ]]; then
  echo "ERROR: remotion binary not found at $REMOTION_BIN" >&2
  echo "Run: npm install --prefix $SCRIPT_DIR" >&2
  exit 1
fi

mkdir -p "$SCRIPT_DIR/out/videos"

# Video 1: Maritime
echo "Rendering Maritime Video..."
"$REMOTION_BIN" render demos/maritime-video/src/index.tsx MaritimeVideo --out out/videos/ --concurrency=1 --port=3101
echo "Maritime Video done: out/videos/MaritimeVideo.mp4"

# Video 2: Colegios
echo "Rendering Video 2: Flujo de Colegios..."
"$REMOTION_BIN" render demos/vocari-videos/src/index.tsx Video1Colegios --out out/videos/ --concurrency=1 --port=3102
echo "Video 2 done"

# Video 3: Compra
echo "Rendering Video 3: Flujo de Compra..."
"$REMOTION_BIN" render demos/vocari-videos/src/index.tsx Video2Compra --out out/videos/ --concurrency=1 --port=3103
echo "Video 3 done"

# Video 4: Orientacion
echo "Rendering Video 4: Flujo de Orientacion..."
"$REMOTION_BIN" render demos/vocari-videos/src/index.tsx Video3Orientacion --out out/videos/ --concurrency=1 --port=3104
echo "Video 4 done"

# Video 5: Asistencia IA
echo "Rendering Video 5: Asistencia con IA..."
"$REMOTION_BIN" render demos/vocari-videos/src/index.tsx Video4AsistenciaIA --out out/videos/ --concurrency=1 --port=3105
echo "Video 5 done"

echo "========================================="
echo "All videos rendered"
echo "Files are in: out/videos/"
ls -la "$SCRIPT_DIR/out/videos/"
