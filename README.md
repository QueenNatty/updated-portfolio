# Natania Ezeigwe — Portfolio (Next.js)

A minimal, game-inspired portfolio site built with Next.js (App Router) + TypeScript.
Boot-screen intro, animated skill bars, a project "quest log," and a working
contact form.

## Structure

```
├── app/
│   ├── layout.tsx      # fonts (next/font) + metadata
│   ├── page.tsx        # page content, assembles all sections
│   └── globals.css     # theme + layout
├── components/
│   ├── BootScreen.tsx  # boot animation
│   ├── Reveal.tsx      # scroll-reveal wrapper
│   ├── StatBar.tsx     # animated skill bar
│   └── ContactForm.tsx # contact form (Formspree)
├── data/
│   └── projects.ts     # edit this to change your projects
├── public/
│   └── assets/Natania_Ezeigwe_Resume.docx
├── .env.example
└── package.json
```

## Run it locally

```bash
npm install
npm run dev
```

Visit http://localhost:3000.

## Connect the contact form (2 minutes)

The form is wired for [Formspree](https://formspree.io) so messages actually reach
your inbox:

1. Go to [formspree.io](https://formspree.io) and sign up free.
2. Create a new form — Formspree gives you an ID, e.g. `abcd1234`.
3. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```
4. Set `NEXT_PUBLIC_FORMSPREE_ID=abcd1234` in `.env.local`.
5. Restart the dev server (or redeploy), submit a test message, and confirm
   your Formspree email.

Free tier covers 50 submissions/month — plenty for a portfolio. On Netlify/Vercel,
add `NEXT_PUBLIC_FORMSPREE_ID` as an environment variable in the site settings
so it works in production too.

## Changing your projects

Projects live in **`data/projects.ts`** — a plain array, no JSX to touch. Open it and:

- **Edit an existing project**: change `title`, `description`, `tags`, or `links`.
- **Add a project**: copy one of the objects in the array, paste it, edit the fields.
- **Remove a project**: delete its object.
- **Status**: use `"LIVE"`, `"IN PROGRESS"`, or `"COMING SOON"` (the last renders as a
  greyed-out locked card with no links needed).
- **Links**: add as many as you want — `{ label: "Demo ↗", href: "..." }` — or leave
  `links: []` for a "no link yet" card.

The page automatically re-renders the project cards from this file — no other file
needs to change.

## Deploying

**Vercel** (recommended for Next.js): import the repo at vercel.com, add the
`NEXT_PUBLIC_FORMSPREE_ID` env var, deploy.

**Netlify**: connect the repo — Netlify auto-detects Next.js. Add the same env
var under Site settings → Environment variables.

## License

MIT — see [LICENSE](./LICENSE). Free to reuse, just keep the copyright notice.
