# S.N Group corporate website

Production-oriented Next.js App Router website for S.N Group. The application uses static generation for marketing content and narrowly scoped client islands for interaction.

## Local setup

```bash
npm install
copy .env.example .env.local
npm run dev
```

The site works without an inquiry adapter, but the contact action returns a clear delivery-configuration message until `INQUIRY_WEBHOOK_URL` is set.

## Validation

```bash
npm run lint
npm run typecheck
npm run test
npm run test:e2e
npm run build
```

## Content

- Site and contact settings: `src/config/site.ts`
- Navigation: `src/config/navigation.ts`
- Sister concerns: `src/data/sister-concerns.ts`
- Projects: `src/data/projects.ts`
- Gallery: `src/data/gallery.ts`

See [ARCHITECTURE.md](./ARCHITECTURE.md) for rendering decisions and [ASSET_PROVENANCE.md](./ASSET_PROVENANCE.md) for media provenance.

## Client handoff items

The current project narratives, client labels and generated construction photography are production-safe representative content, but should be replaced when the client supplies verified portfolio facts and final photography. Confirm the exact legal typography/capitalization of all sister-concern names before launch.
