# فلوسي (Feloosy)

**اتعلم الفلوس صح** - موقع تعليم مالي بالعامية المصرية: ميزانية، ادخار، استثمار، دخل جانبي، ومشروعك الخاص.

A free money-education platform in Egyptian Arabic (with full English UI/content): 6 learning tracks, 60 lessons, and 3 interactive money calculators. Honest financial education - no get-rich-quick promises.

**[Open the live site](https://feloosy.pages.dev/)**

## See it in action

Captured from the live site on November 18, 2026. The animated tour shows the homepage, learning tracks, and money calculators. The figures in the calculators are examples, not financial advice.

[![Live Feloosy tour: homepage, tracks and calculators](docs/media/demo.gif)](https://feloosy.pages.dev/)

| Desktop | Mobile |
| --- | --- |
| ![Feloosy homepage on desktop](docs/media/desktop.webp) | ![Feloosy homepage on mobile](docs/media/mobile.webp) |

[Explore the learning tracks](https://feloosy.pages.dev/tracks/) · [Try the calculators](https://feloosy.pages.dev/calculators/)

## What's inside

- **6 learning tracks** - Money Basics, Saving, Investing, Side Income, Your Own Business, Money Mindset
- **60 lessons** in Egyptian Arabic + English, with Egypt-specific context (bank certificates, gold, EGX, freelancing)
- **3 interactive calculators** - compound interest, savings goal, 50/30/20 budget (English digits everywhere)
- **Progress tracking** - localStorage first, synced to your account when you sign in
- **Accounts (optional)** - email/password + Google sign-in on a Hono + Cloudflare Workers + D1 backend; visitors can use everything without signing up
- **Arabic RTL / English LTR** with instant language switch, dark mode, premium Arabic fonts (Readex Pro + El Messiri)

## Stack

- **Frontend:** Next.js (static export) + React 19 + Tailwind CSS 4 + zustand, deployed on Cloudflare Pages
- **Backend:** Hono on Cloudflare Workers + D1 (`backend/`), email + Google OAuth, progress sync

## Development

```bash
npm install
npm run dev        # frontend on :3000
npm run test       # content/calculator/i18n unit tests
npm run build      # static export to out/ (copied to dist/)
npm run preview    # serve out/ on :4173

cd backend && npm install && npm run dev   # local API on :8787
```

## Deploy

- **Pages:** deploy `dist/` to the `feloosy` Cloudflare Pages project.
- **Worker:** create the D1 database `feloosy`, put its ID in `backend/wrangler.jsonc`, run `wrangler d1 migrations apply feloosy --remote`, then `npm run deploy`. Set `NEXT_PUBLIC_FELOOSY_API_URL` at build time to the worker URL. Google sign-in needs `GOOGLE_CLIENT_ID` / `GOOGLE_CLIENT_SECRET` secrets on the worker (the Google button stays hidden until configured).

## License

MIT
