# SEO Strategy — Gabriel Fernandes (Local / São Paulo)

_Last updated: 2026-06-10_

## 1. Positioning

- **Who:** Gabriel Fernandes — solo programador / soluções digitais.
- **Market:** Small businesses & professionals in **São Paulo e região** (clínicas, lojas, prestadores de serviço, infoprodutores).
- **Wedge:** the *integrated* offer — **site + automação de WhatsApp + IA no mesmo fluxo**. Most competitors do one piece; this is the differentiation and the content angle.
- **Funnel:** social / indicação → site → WhatsApp. Optimize for trust on arrival and frictionless contact.

## 2. Target keyword clusters (pt-BR)

| Cluster | Primary terms | Intent | Priority |
|---|---|---|---|
| **WhatsApp** | automação de WhatsApp · bot de WhatsApp para empresas · secretária digital WhatsApp · chatbot de atendimento | Commercial | ⭐ Highest |
| **Sites** | criação de sites São Paulo · desenvolvedor de sites SP · landing page de alta conversão | Commercial, local | High |
| **IA** | integração de IA no atendimento · automação de atendimento com IA | Commercial, emerging | Medium |
| **Vertical** | site para clínica/médico · automação WhatsApp para clínica · site para advogado | Long-tail, high-convert | Medium |
| **Informational** | como automatizar atendimento no WhatsApp · quanto custa um site profissional | Top-funnel (blog) | Ongoing |

> The **WhatsApp automation** cluster is the sweet spot: high commercial intent, less saturated than "criação de sites", and it's exactly what the homepage already sells. First dedicated service page ships there.

## 3. Strategic decisions

### 3.1 Custom domain (open decision — high priority)
Currently on `ferfsnandes.github.io` (shared subdomain). For a serious local push, register a branded domain (`.com.br` / `.dev`) and point GitHub Pages at it via CNAME **before** building citations — so every directory and review platform records the final domain. github.io authority is shared and doesn't accrue cleanly to one path.

### 3.2 Architecture: single-page → hub-and-spoke
Services currently live as sections on the homepage. Dedicated service pages are Whitespark's #1 local-organic factor (and #2 AI-visibility factor). Build one page per core service. See `SITE-STRUCTURE.md`.

### 3.3 E-E-A-T (weakest layer today)
- `/sobre` page with real bio + the **Unicamp certificate** (`assets/pdf/certificadoUnicamp.pdf`, currently unused).
- Case studies with outcomes (already have a 91% AUC-ROC ML project + 3 live clients).
- Named client testimonials feeding both on-page trust and future GBP reviews.

## 4. Channel priorities (by ROI for this business)

1. **AI recommendations** (ChatGPT/Perplexity) — ~15.9% conversion vs ~1.76% Google organic. Requires schema (done on home + WhatsApp page), Bing Places, citations. Run `/seo geo`.
2. **Google Business Profile / local pack** — create as Service-Area Business (São Paulo, no street address).
3. **Local organic** — service pages + blog targeting the clusters above.

## 5. KPI targets

| Metric | Baseline (Jun 2026) | 3 mo | 6 mo | 12 mo |
|---|---|---|---|---|
| Organic traffic / mo | ~0–10 | 50–100 | 200–400 | 600–1,200 |
| Keywords in top 10 | 0 | 3–5 | 10–15 | 25–40 |
| Indexed pages | 4 | 8 | 15 | 25+ |
| Google reviews (GBP) | 0 | 5 | 12 | 25+ |
| Core Web Vitals | improving | pass | pass | pass |

_Targets are deliberately modest — local niche, solo capacity (~3–5 hrs/week). The asymmetric upside is AI-recommendation conversion, not raw traffic volume._

## 6. Risks & constraints

- **Domain decision gates citation work** — resolve early.
- **Solo capacity** is the binding constraint — sequence by impact (WhatsApp page + GBP + reviews are the 80/20).
- **GitHub Pages is static** — no server-side; fine for this site.
- **No live keyword/competitor data** in this plan — validate the keyword map in Google Search Console + Keyword Planner once GSC is connected.

## Related docs
- `SITE-STRUCTURE.md` — URL hierarchy & internal linking
- `CONTENT-CALENDAR.md` — publishing plan
- `IMPLEMENTATION-ROADMAP.md` — phased execution
