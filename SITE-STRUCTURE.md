# Site Structure & Internal Linking

_Last updated: 2026-06-10_

## Target architecture (hub-and-spoke)

```
/ (home — hub · ProfessionalService schema)            [done]
├── /servicos/automacao-whatsapp/   ← WhatsApp cluster  [done]
├── /servicos/criacao-de-sites/     ← Sites cluster     [todo]
├── /servicos/integracao-ia/        ← IA cluster        [todo]
├── /trabalhos.html                 ← case-study hub     [exists]
│   ├── /trabalhos/dra-thais-maltempi/   (clínica)      [todo]
│   ├── /trabalhos/casa-guaruja/         (turismo)      [todo]
│   └── /trabalhos/nautica-mar-azul/     (náutica)      [todo]
├── /projetos.html                  ← technical portfolio [exists]
├── /sobre/                         ← E-E-A-T / bio       [todo]
└── /index.html#contact             ← contact / WhatsApp  [exists]
```

## URL conventions
- Service & content pages: **subdirectory with `index.html`** → clean URLs (`/servicos/automacao-whatsapp/`).
- Use **root-relative asset paths** (`/css/style.css`, `/assets/...`) on nested pages so they survive a future custom-domain move.
- Keep existing root `.html` pages as-is for now (no need to break `trabalhos.html` / `projetos.html` URLs).

## Internal linking rules
- Every page reachable within **3 clicks of home**.
- Each service page links **up** to home and **across** to ≥1 relevant case study.
- Home hub links **down** to each service page (the WhatsApp card now links to `/servicos/automacao-whatsapp/`).
- 2–5 contextual links per ~1,000 words, descriptive anchors (e.g. "automação de WhatsApp em São Paulo", not "clique aqui").
- Blog posts link to the service page for their cluster.

## Schema per page type
| Page type | Schema |
|---|---|
| Home | `ProfessionalService` + `founder` Person + `sameAs` |
| Service page | `Service` (+ `provider` ProfessionalService) + `BreadcrumbList` |
| Case study | `Article` or `CreativeWork` + `BreadcrumbList` |
| Sobre | `Person` (jobTitle, alumniOf Unicamp, sameAs) |

## Crawl infrastructure
- `robots.txt` — allow all + sitemap directive [done]
- `sitemap.xml` — list canonical URLs; update when adding pages [done]
- Canonical tag on every page [done: home + WhatsApp page; add to others]
