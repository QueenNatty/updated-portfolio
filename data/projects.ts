export type Project = {
  status: "LIVE" | "IN PROGRESS" | "COMING SOON";
  title: string;
  description: string;
  tags: string[];
  links: { label: string; href: string }[];
};

/**
 * Edit this list to change my projects.
 * - status: "LIVE", "IN PROGRESS", or "COMING SOON" (COMING SOON renders as a locked/greyed card)
 * - links: add as many as you want (Live Site, Source, Demo, etc). Leave empty for a "no link yet" card.
 *
 * To add a new project, copy one of the objects below, paste it, and edit the fields.
 * To remove a project, delete its object.
 */
export const projects: Project[] = [
  {
    status: "LIVE",
    title: "This Portfolio",
    description:
      "Rebuilt with a game-inspired HUD, animated stat bars, and a working contact console. Built with Next.js, deployed on Netlify/Vercel.",
    tags: ["Next.js", "React"],
    links: [
      { label: "Live Site ↗", href: "https://nattycodesandgames.vercel.app/" },
      { label: "Source ↗", href: "https://github.com/QueenNatty" },
    ],
  },
  {
    status: "IN PROGRESS",
    title: "AuthTrail",
    description:
      "This is a secure Django web app that tracks and displays user login activity. Users can view their login history, filter by date and status, and monitor failed login attempts..",
    tags: ["React", "localStorage", "HTML", "BOOTSTRAP 5", "Python(DJANGO)"],
    links: [
      { label: "Live Site ↗", href: " " },
      { label: "Source ↗", href: "https://github.com/QueenNatty/AuthTrail" },
    ],
  },
  {
    status: "LIVE",
    title: "Atelier-Ink",
    description:
      "This is a sleek booking and consultation management system for tattoo and piercing studios, featuring automated session blocking and artist availability.",
    tags: ["TypeScript", "Python(DJANGO)", "CSS"],
    links: [
      { label: "Live Site ↗ ", href: "https://atelier-ink.onrender.com" },
      { label: "Source ↗", href: "https://github.com/QueenNatty/Atelier-Ink" },
    ],
  },

  {
    status: "LIVE",
    title: " AI Poem Generator",
    description:
      " This is an ai poem generator project for my SheCodes AI- Add-Ons final project",
    tags: ["JavaScript", "HTML", "CSS"],
    links: [
      { label: "Live Site ↗", href: "https://ai-poems-gen.netlify.app" },
      {
        label: "Source ↗",
        href: " https://github.com/QueenNatty/poem-generator ",
      },
    ],
  },

  {
    status: "LIVE",
    title: " BlockGaze",
    description:
      "BlockGaze is a production style crypto tracker. It features live pricing for the top 100 coins, interactive charts (24hr to 1Yr), searching,sorting and a browser stored watchlist. It is powered by secure server-side API routes with caching, SEO-friendly server rendering, and robust error/loading states.",
    tags: [
      "Next.js",
      " TypeScript",
      "Tailwind CSS",
      "TanStack Query",
      "Recharts",
    ],
    links: [
      { label: "Live Site ↗", href: "https://block-gaze.vercel.app/" },
      {
        label: "Source ↗",
        href: " https://github.com/QueenNatty/BlockGaze",
      },
    ],
  },
];
