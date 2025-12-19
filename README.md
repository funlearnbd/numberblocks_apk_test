# Numberblocks Games - Mobile App

## 📱 How to Create APK for Android

### Option 1: Using PWABuilder (Easiest - No coding required!)

1. **Host your files online:**
   - Upload all HTML files to a free hosting service like:
     - GitHub Pages (free)
     - Netlify (free)
     - Vercel (free)

2. **Go to PWABuilder:**
   - Visit: https://www.pwabuilder.com/
   - Enter your hosted website URL
   - Click "Start" → "Build My PWA"
   - Download the Android APK package

### Option 2: Using Capacitor (Recommended for developers)

```bash
# 1. Install Node.js from nodejs.org

# 2. Create a new project
npm init -y
npm install @capacitor/core @capacitor/cli @capacitor/android

# 3. Initialize Capacitor
npx cap init "Numberblocks Games" "com.numberblocks.games"

# 4. Copy your HTML files to the 'www' folder
mkdir www
cp *.html www/
cp *.json www/
cp sw.js www/

# 5. Add Android platform
npx cap add android

# 6. Build the APK
npx cap open android
# This opens Android Studio - click Build > Build Bundle(s) / APK(s) > Build APK(s)
```

### Option 3: Using Cordova

```bash
# 1. Install Cordova
npm install -g cordova

# 2. Create project
cordova create numberblocks com.numberblocks.games "Numberblocks Games"
cd numberblocks

# 3. Copy your HTML files to www folder
cp ../index.html www/
cp ../*.html www/
cp ../manifest.json www/
cp ../sw.js www/

# 4. Add Android platform
cordova platform add android

# 5. Build APK
cordova build android
# APK will be in: platforms/android/app/build/outputs/apk/
```

### Option 4: Using Online APK Builders (Easiest for non-developers)

1. **Website2APK** - https://www.appsgeyser.com/
   - Upload your HTML files or provide URL
   - Customize app name and icon
   - Download APK

2. **WebIntoApp** - https://www.webintoapp.com/
   - Convert website to Android app
   - Free basic version available

## 📂 Files Included

- `index.html` - Main homepage with language selector
- `numberblocks-addition.html` - Addition sandbox & quiz game
- `numberblocks-subtraction.html` - Subtraction learning game (4 modes)
- `numberblocks-subtractionV2.html` - Balloon Pop subtraction game
- `numberblocks-runner.html` - Temple Run style game
- `numberblocks-preview.html` - Numberblocks 1-20 gallery
- `manifest.json` - PWA manifest for app installation
- `sw.js` - Service worker for offline support
- `icon.svg` - App icon (convert to PNG for APK)

## 🌐 Languages Supported

- 🇬🇧 English
- 🇧🇩 বাংলা (Bangla)
- 🇸🇦 العربية (Arabic)

## 📲 Testing on Phone

### Quick Test (No APK needed):
1. Put all files in a folder on your phone
2. Open `index.html` with Chrome browser
3. Chrome will ask to "Add to Home Screen" - click yes!
4. Now it works like an app!

### Using Local Server:
1. Install "Simple HTTP Server" app on Android
2. Point it to your folder
3. Open in browser

## 🎮 Games

1. **Addition Lab** ➕
   - Sandbox: Drag blocks and merge them
   - Quiz: Answer addition questions
   - Voice: Numbers spoken in all 3 languages

2. **Subtraction Adventure** ➖
   - Visual Mode: Watch blocks disappear
   - Quiz Mode: Answer questions
   - Monster Munch: Feed the monster
   - Story Problems: Fun word problems

3. **Balloon Pop Party** 🎈
   - Voice-guided subtraction
   - Pop balloons interactively
   - Earn stars and rewards

4. **Numberblocks Runner** 🏃
   - Temple Run style endless runner
   - 20 levels across 5 worlds
   - Collect taka (৳) and stars
   - Numbers give extra lives!

5. **Meet the Numberblocks** 🔢
   - Gallery of all Numberblocks 1-20
   - See unique colors and shapes

## 🔧 Customization

### Change Language Default:
Edit `index.html` line:
```javascript
let currentLang = localStorage.getItem('numblocks-lang') || 'en';
```
Change 'en' to 'bn' or 'ar'

### Add More Languages:
Add to the LANG object in each game file.

---
Made with ❤️ for little learners!
