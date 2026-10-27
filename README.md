# AI Labs — Enterprise IT Services & Infrastructure Website

Official GitHub Pages corporate website for **AI Labs**, showcasing full-spectrum IT engineering, managed cloud infrastructure, and digital product specializations across **5,000+ global clients**.

## Core Specializations Highlighted

- **Enterprise Websites & Web Platforms** — High-conversion corporate portals, headless CMS architectures, B2B web platforms, and sub-second Core Web Vitals.
- **Mobile Applications (iOS & Android)** — Native Swift/Kotlin and cross-platform Flutter/React Native apps with offline-first synchronization and biometric security.
- **Custom CRM & RevOps Systems** — Bespoke Customer Relationship Management platforms with omnichannel communication hubs, AI deal scoring, and two-way ERP integration.
- **Learning Management Systems (LMS) & EdTech** — High-concurrency digital academies and corporate training ecosystems with SCORM/xAPI compliance, live virtual classrooms, and verifiable credentials.
- **IT Services & Cloud Infrastructure** — 24/7 NOC/SOC monitoring, Kubernetes orchestration, multi-cloud architecture (AWS, GCP, Azure), and 99.99% uptime SLAs.

## Project Structure

- `index.html` — Semantic HTML5 single-page corporate site with SEO/OpenGraph metadata, accessible navigation, and interactive sections.
- `styles.css` — Modern CSS architecture with Executive Dark & Architectural Light themes, native CSS scroll-driven animations, `content-visibility: auto` off-screen rendering optimization, and `:user-invalid` validation styling.
- `app.js` — Zero-dependency client-side interactivity:
  - **Interactive Solution Architecture Explorer** (CRM, LMS, Web, Mobile, Infrastructure)
  - **Filterable 5,000+ Client Portfolio & Case Studies**
  - **Interactive Project Scope & Blueprint Estimator** (auto-fills consultation form)
  - **Dark / Light Theme Switcher**
- `.nojekyll` & `.github/workflows/deploy-pages.yml` — Ready-to-use GitHub Pages configuration.

## Deploying to GitHub Pages

1. Push this repository to GitHub (`main` branch).
2. In your GitHub repository, navigate to **Settings → Pages**.
3. Under **Build and deployment → Source**, choose either:
   - **GitHub Actions** (uses the included `.github/workflows/deploy-pages.yml` workflow automatically), or
   - **Deploy from a branch** → Select `main` and `/ (root)`.

## Local Preview

Run any static file server from the project root:

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080` in your browser.
