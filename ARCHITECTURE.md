# S.N Group website architecture

## Principles

- The App Router root layout and every route page are React Server Components.
- Static company and project content is centralized in typed modules and emitted at build time.
- Hydration is limited to the header controls, hero slider/video, one-session preloader, scroll reveals, gallery lightbox, and quotation form.
- Detail pages share one route implementation per domain and use `generateStaticParams` plus `generateMetadata`.
- Motion handles interaction and entrance/exit animation. GSAP/ScrollTrigger is dynamically imported only by the blueprint parallax sequence.
- Media dimensions are stable, above-the-fold image preloading is explicit, and the hero video has a poster/reduced-motion fallback.

## Route rendering

| Route | Strategy |
| --- | --- |
| `/` | Static generation; hero is an isolated client island |
| `/about` | Static generation |
| `/sister-concerns` | Static generation |
| `/sister-concerns/[slug]` | Static paths from typed concern data |
| `/gallery` | Static generation; lightbox is a lazy client island |
| `/projects` | Static generation |
| `/projects/[slug]` | Static paths from typed project data |
| `/contact` | Server-rendered static shell; client form calls a Server Action |
| `sitemap.xml`, `robots.txt` | Next.js metadata route APIs |

No ISR is configured because there is no CMS in the current delivery.
