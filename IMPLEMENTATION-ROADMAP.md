# Implementation Roadmap

_Last updated: 2026-06-10_

Legend: ✅ done · ⏳ in progress · ⬜ todo · 👤 requires Gabriel (off-site / decision)

## Phase 1 — Foundation (weeks 1–4)

- ✅ `ProfessionalService` JSON-LD on home (telephone, email, areaServed, founder, sameAs)
- ✅ NAP fix — canonical phone **(11) 94702-0766** as `tel:` link; email as `mailto:`
- ✅ Geo title + meta description + canonical on home
- ✅ `robots.txt` + `sitemap.xml`
- ✅ Deleted orphan template files (`project-3.html`, `projectsection`)
- ✅ Image compression to WebP (3.5 MB → 348 KB) + width/height/lazy on `projetos.html`
- ✅ First dedicated service page `/servicos/automacao-whatsapp/` (Service + BreadcrumbList schema)
- ⬜ Add canonical tag to `trabalhos.html` + `projetos.html`
- ⬜ Unify fonts (home uses Archivo + Source Sans 3; other pages still load Source Sans Pro)
- ⬜ Add favicon to `index.html` + `trabalhos.html` (only `projetos.html` has one)
- 👤 **Decide custom domain** (stay github.io vs `.com.br`/`.dev`); set CNAME if moving — *do before citations*
- 👤 Create + verify **Google Business Profile** (SAB, São Paulo)
- 👤 Set up **GA4 + Google Search Console**; submit sitemap

## Phase 2 — Expansion (weeks 5–12)

- ✅ Build `/servicos/criacao-de-sites/` · ⬜ `/servicos/integracao-ia/`
- ⬜ Build `/sobre/` with bio + Unicamp credential
- ⬜ Expand `/trabalhos` into 3 individual case-study pages + testimonials
- 👤 Claim **Bing Places** + **Apple Business Connect**
- 👤 List in BR directories (GuiaMais, Solutudo, Apontador) with exact NAP
- 👤 Get first **5 GBP reviews** from existing clients

## Phase 3 — Scale (weeks 13–24)

- ⬜ Launch `/blog`; 2 posts/month (see `CONTENT-CALENDAR.md`)
- ⬜ GEO/AI work: `llms.txt`, FAQ blocks on key pages — run `/seo geo`
- 👤 Maintain review cadence (Sterling Sky 18-day rule — never 3 weeks without a new review)
- 👤 Pursue local "best of" / agency-list placements (#1 AI-visibility citation factor)

## Phase 4 — Authority (months 7–12)

- ⬜ Thought-leadership content (automation case study with metrics = strongest asset type)
- ⬜ Vertical landing page for best-converting niche (e.g. clínicas)
- 👤 Local digital PR / co-marketing with non-competing SP service providers
- ⬜ Continuous CWV + content refresh

## Verification checklist (after each deploy)
- [ ] Google Rich Results Test passes for new schema (live URL)
- [ ] New URLs present in `sitemap.xml`
- [ ] Mobile menu works on new pages (loads `/index.js`)
- [ ] CWV: run PageSpeed Insights on changed pages
- [ ] WhatsApp/social unfurl looks correct (after OG tags ship — see prior audit)
