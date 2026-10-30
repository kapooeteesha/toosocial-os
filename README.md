# TooSocial OS — Mobile Founder App (V2)

**Installable mobile web app** with a dedicated app icon, phone-friendly bottom navigation, offline app shell, encrypted local workspaces and encrypted backup/restore.

## Important: what this version does (and does not do)

- Opens on your **phone with a website URL** after deployment. You can add it to your home screen on iPhone and Android like an app.
- Existing project management functions remain available: clients, projects, McG templates, tasks, calendar, freelancer costs, expenses.
- Personal information stays **encrypted locally in each browser/device**, not on GitHub or a remote database. A public code repository does **not** reveal your entered project data.
- **Your phone will NOT automatically show the records on your laptop.** These are separate local databases. Use **Settings & backup → Export encrypted backup**, send the backup to your other device privately, then tap **Restore encrypted backup from laptop** on the phone lock screen and enter the original backup passphrase (or use Settings & backup → Import backup after unlocking). Import **replaces** the device's entire current workspace; export that device's data first if needed.
- Apple sometimes separates Safari website data and home-screen web-app storage. If you started using the browser before installation, export a backup in Safari and import it into the installed app if your workspace doesn't appear.
- There is no server login. Anyone can open the public **empty app interface**, but cannot read your locally encrypted workspace without access to it and the passphrase. **Never upload encrypted backups or task CSV files to GitHub.**
- This is not automatic real-time cross-device syncing. That would require a backend with authentication; this mobile version keeps the simpler, safer local-first architecture.

## Publish on GitHub Pages (different repository from your public TooSocial agency website)

1. Go to https://github.com/new and create a **public** repository called `toosocial-os` under your account (e.g. `kapooeteesha`). Do **not** change `toosocial-website`.
2. Download `TooSocial_OS_Mobile_Installable.zip` and **extract** the ZIP. It contains `index.html`, `manifest.webmanifest`, `sw.js`, and the three `icon-*.png` files. **Upload all six files** to the root of the new `toosocial-os` repository (GitHub's **Add file → Upload files**).
3. GitHub Pages: new repo → **Settings → Pages → Deploy from a branch → main → /(root) → Save**.
4. Open the published URL on phone: `https://kapooeteesha.github.io/toosocial-os/` (replace the username if different).
5. Test the app first using a sample client. Close/reopen the browser and ensure it unlocks and the client persists. Then test **Settings & backup → Export encrypted backup**.

**Deploying an update:** replace the repository's `index.html`, `manifest.webmanifest`, `sw.js`, and icon files with newer versions and commit. Don't upload the ZIP without extraction. If the PWA caches an old version, close/reopen and refresh while online.

## Add to home screen

### iPhone / iPad (Safari)

1. Open the HTTPS TooSocial OS URL in **Safari**.
2. Tap **Share** → **Add to Home Screen** → **Add**.
3. Launch from the TooSocial OS icon, then create or unlock a workspace.

### Android (Chrome)

1. Open the TooSocial OS URL in Chrome.
2. Tap the **three dots** → **Install app** or **Add to Home screen** → Confirm.
3. Open TooSocial OS from the new icon.

The app can reopen without internet **after one online visit has cached the shell**, though backups, new app versions and any external links still require appropriate connectivity.

## Safety checklist

- Set a strong unique passphrase; there is no reset if you forget it.
- Do not rely on browser storage as your only backup: download encrypted backups regularly and keep a copy somewhere you control.
- No incognito/private browsing for your real records.
- Make sure you understand **import replaces all records** on the receiving device; no automatic merge.
- Phone loss/clearing site data may erase that device's records.
- Keep your phone passcode and OS updates enabled.

## Technology

Static HTML/JS, W3C manifest, home-screen icons and a scoped service worker for offline availability. Existing AES-GCM encrypted localStorage and PBKDF2 key derivation unchanged. No analytics, ad scripts, network libraries or external APIs.
