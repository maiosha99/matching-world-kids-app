# Matching World Kids Next Steps

## Current Status

- Capacitor project created
- Android platform added
- AdMob plugin installed
- App ID added to AndroidManifest and strings.xml
- Banner, interstitial, rewarded world unlock, and rewarded bonus star wired in web code
- Test ads mode is currently enabled in `www/index.html`

## What Is Needed Next

1. Install Android Studio
2. Make sure a JDK is available to Gradle
3. Open this folder in Android Studio:
   - `C:\Users\finan\Documents\Codex\2026-05-30\files-mentioned-by-the-user-shape\matching-world-kids-app\android`
4. Let Gradle sync finish
5. Run the app on a real Android device
6. Verify:
   - banner appears on map screen
   - rewarded ad opens next world
   - rewarded ad grants bonus star
   - interstitial appears every 3 levels

## Important

- `useTestAds` is currently `true`
- Before release, switch it to `false` in:
  - `www/index.html`

## AdMob IDs In Use

- App ID: `ca-app-pub-5167184884708072~5699630374`
- Banner: `ca-app-pub-5167184884708072/7308225512`
- Interstitial: `ca-app-pub-5167184884708072/4115085967`
- Rewarded WorldUnlock: `ca-app-pub-5167184884708072/3204798743`
- Rewarded BonusStar: `ca-app-pub-5167184884708072/8597256458`
