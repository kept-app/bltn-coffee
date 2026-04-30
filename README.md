# bltn-coffee

Sample site for Better Late Than Never (BLTN), Causeway Bay, Hong Kong.

## Local dev

```bash
npm install
npm run dev
```

## Deploy

Push to GitHub under `kept-app/bltn-coffee`, import on Vercel, accept defaults.

## Editing content

All copy lives directly in the page files under `app/`:

- `app/page.tsx` — home
- `app/menu/page.tsx` — menu landing
- `app/visit/page.tsx` — visit / directions
- `app/layout.tsx` — site header, footer, address, hours

No CMS, no database. Edit the strings, push, Vercel redeploys.
