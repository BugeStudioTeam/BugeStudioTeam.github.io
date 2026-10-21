cd ~/BugeStudioTeam.github.io

OLD=12.75.137
NEW_URL="https://github.com/BugeStudioTeam/Buge-App-Manager/releases/download/AppManager${OLD}/BugeAppManager-v${OLD}-release.apk"

for f in index.html softwares/index.html appmanager/index.html \
         de-DE/index.html de-DE/softwares/index.html de-DE/appmanager/index.html \
         re-RU/index.html re-RU/softwares/index.html re-RU/appmanager/index.html \
         zh-CN/index.html zh-CN/softwares/index.html zh-CN/appmanager/index.html; do
  if [ -f "$f" ]; then
    sed -i "s|/storage/appmanager/${OLD}/BugeAppManager-v${OLD}-release\.apk|${NEW_URL}|g" "$f"
    echo "OK: $f"
  else
    echo "SKIP (missing): $f"
  fi
done

echo "---- remaining old refs ----"
grep -rn "storage/appmanager" . --include="*.html" && echo "WARNING: still present" || echo "clean"