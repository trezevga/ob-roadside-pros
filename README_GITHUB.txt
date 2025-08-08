OB Roadside Pros — Burnt Orange PWA
==================================
Theme: burnt orange & black with smoke grey accents

Files
-----
- index.html — main app (PWA ready, SMS fallback)
- manifest.json — PWA metadata & colors
- service-worker.js — caching + offline
- offline.html — offline message
- icon-64.png, icon-128.png, icon-192.png, icon-512.png — app icons
- CNAME — sets GitHub Pages custom domain to www.obroadsidepros.com

Deploy to GitHub Pages
----------------------
1) Create a public repo and upload all files to the repo root.
2) Settings → Pages → Deploy from a branch → `main` → `/ (root)`.
3) Custom domain: www.obroadsidepros.com → Save. Then check **Enforce HTTPS** when available.
4) Namecheap DNS:
   - CNAME `www` → `YOUR-GITHUB-USERNAME.github.io`
   - A `@` → 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153

Backend (optional)
------------------
Add your Web3Forms Access Key in `index.html` where it says `PASTE_YOUR_WEB3FORMS_ACCESS_KEY_HERE` to receive request emails; otherwise it falls back to prefilled SMS.
