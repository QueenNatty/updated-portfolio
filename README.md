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

## Adding project links

Open `app/page.tsx` and find the `ADD MORE PROJECTS HERE` comment inside the
Projects section. Copy an existing `<article className="quest-card">` block and edit:

- the status badge (`LIVE` / `IN PROGRESS`)
- the title and description
- the tags
- the links (swap `href="#"` for your real project/demo URLs)

## Deploying

**Vercel** (recommended for Next.js): import the repo at vercel.com, add the
`NEXT_PUBLIC_FORMSPREE_ID` env var, deploy.

**Netlify**: connect the repo — Netlify auto-detects Next.js. Add the same env
var under Site settings → Environment variables.

## License

MIT — see [LICENSE](./LICENSE). Free to reuse, just keep the copyright notice.
