OB Roadside Pros — GitHub Pages Deploy
====================================

This folder is ready to publish to **GitHub Pages** with the custom domain:
**www.obroadsidepros.com**

What to do
----------
1) Create a new **public** repository (e.g., `ob-roadside-pros`).
2) Upload *all* files in this folder to the repo root:
   - index.html
   - manifest.json
   - service-worker.js
   - offline.html
   - icon-64.png, icon-128.png, icon-192.png, icon-512.png
   - CNAME  (already included, sets the custom domain)
3) In GitHub: Settings → Pages → Build and deployment →
   - Source: **Deploy from a branch**
   - Branch: `main` (or `master`) / root (`/`)
4) In the same **Pages** settings:
   - Custom domain: **www.obroadsidepros.com**
   - Check **Enforce HTTPS** (after DNS is set).

DNS (at your domain registrar)
------------------------------
Create this **CNAME** record:
- Host/Name: `www`
- Type: CNAME
- Value/Target: `<your-username>.github.io`
- TTL: Default

(Replace `<your-username>` with your GitHub username. Example: `myname.github.io`)

If you also want the **root** domain (obroadsidepros.com) to work, add A/ALIAS/ANAME records to GitHub Pages IPs:
- 185.199.108.153
- 185.199.109.153
- 185.199.110.153
- 185.199.111.153

Backend (optional)
------------------
- `index.html` contains a placeholder `PASTE_YOUR_WEB3FORMS_ACCESS_KEY_HERE`.
- Create a free Web3Forms account, copy your **Access Key**, and paste it in `index.html`.
- Without the key, the app falls back to **SMS** so customers can still request service.

After deploy
------------
- Visit **https://www.obroadsidepros.com** on your phone.
- Use the browser menu to **Install/Add to Home Screen**.
- Test: select a service → Use My Location → Request Service.
