# منصة الهوية الهندسية — Mohammed Alakaly Engineering Identity

Professional engineering identity platform for **Mohammed Adil Alakaly** — Smart Building Technology specialist from Dura, Palestine. Built with Next.js 16, TypeScript, Tailwind CSS 4, and shadcn/ui. Dark-first 2026 design with electric lime accent, bento grids, and glassmorphism.

> **Philosophy:** Less Talking, More Proof — every claim has verifiable evidence.

---

## 🎯 Overview

A multi-page portfolio documenting a real graduation project: **Smart Building Management System Using Backup Energy** — 6 systems integrated in one project (fire detection, tamper detection, smart lighting, smart door, environmental monitoring, remote control), built over 8 months, presented to a vocational Tawjihi jury and rated as university-level.

### 7 routes
| Route | Purpose |
|------|---------|
| `/` | Public home — hero, skills learned, project showcase, trajectory summary, CTA |
| `/proof` | Proof index — claims map, capabilities matrix, jury review |
| `/philosophy` | Operating principles, how I think, the why, what I don't do |
| `/trajectory` | 8-stage timeline (1st secondary → future aspirations) |
| `/projects` | Projects index |
| `/projects/smart-building` | Full 9-section case study with real Arduino/ESP8266/Kotlin code |
| `/engage` | Contact form (4 paths) — POSTs to `/api/engage` |

---

## 🛠 Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript (strict)
- **Styling:** Tailwind CSS 4 + shadcn/ui (New York)
- **Fonts:** Inter, Space Grotesk, JetBrains Mono, Noto Sans Arabic (self-hosted via next/font)
- **State:** Zustand (language store with localStorage persistence)
- **Validation:** Zod (engage form API)
- **i18n:** Arabic (RTL, default) + English (LTR) — full layout switch
- **Icons:** lucide-react

---

## 📦 Installation

### Prerequisites
- Node.js 20+ (or Bun)
- npm/bun package manager

### Setup
```bash
# 1. Clone
git clone https://github.com/YOUR_USERNAME/proto-fm.git
cd proto-fm

# 2. Install dependencies
bun install
# or: npm install

# 3. Environment variables
cp .env.example .env
# Edit .env with your values (DATABASE_URL, etc.)

# 4. (Optional) Set up database
bun run db:push

# 5. Run dev server
bun run dev
```

The app runs on `http://localhost:3000`.

---

## 🔧 Available Scripts

| Script | Purpose |
|--------|---------|
| `bun run dev` | Start dev server (port 3000) |
| `bun run build` | Production build |
| `bun run start` | Start production server |
| `bun run lint` | Run ESLint |
| `bun run db:push` | Push Prisma schema to DB |
| `bun run db:generate` | Generate Prisma client |

---

## 📁 Project Structure

```
src/
├── app/                      # Next.js App Router
│   ├── layout.tsx            # Root layout — fonts, RTL, metadata
│   ├── page.tsx              # Home (public showcase)
│   ├── globals.css           # Design tokens (2026 dark-first)
│   ├── api/
│   │   └── engage/route.ts   # Contact form backend (Zod validated)
│   ├── proof/                # Proof index page
│   ├── philosophy/           # Philosophy page
│   ├── trajectory/           # 8-stage timeline page
│   ├── projects/             # Projects index + smart-building deep-dive
│   └── engage/               # Contact page
├── components/
│   ├── ui/                   # shadcn/ui primitives (50+ components)
│   └── site/                 # Custom sections (one file per section)
│       ├── site-layout.tsx   # Shared shell (Navbar + main + Footer)
│       ├── page-header.tsx   # Inner-page header
│       ├── navbar.tsx        # Floating glass pill nav + scroll progress
│       ├── hero-section.tsx
│       ├── trust-signals.tsx
│       ├── branching-question.tsx
│       ├── featured-project.tsx
│       ├── stats-band.tsx
│       ├── proof-index.tsx
│       ├── philosophy.tsx
│       ├── trajectory.tsx
│       ├── project-deep-dive.tsx
│       ├── engage.tsx
│       ├── cta-band.tsx
│       └── footer.tsx
├── hooks/
│   ├── use-scroll-reveal.ts  # IntersectionObserver scroll animations
│   ├── use-mobile.ts
│   └── use-toast.ts
└── lib/
    ├── content.ts            # ALL structured content (bilingual ar/en)
    ├── translations.ts       # UI i18n strings (ar/en)
    ├── store.ts              # Zustand language store
    ├── db.ts                 # Prisma client
    └── utils.ts              # cn() helper
```

---

## 🌐 Internationalization

Arabic is the primary language (RTL). English is fully supported (LTR). The language toggle is in the navbar; preference persists in `localStorage`.

All content is in `src/lib/content.ts` as `{ ar: string; en: string }` pairs. Update content there — no need to touch components.

---

## 🎨 Design System

- **Palette:** Dark-first (`#0A0A0F` bg) + electric lime accent (`#C5FF3E`) + soft violet secondary (`#7C5CFF`)
- **Typography:** Space Grotesk (display) + Inter (body) + JetBrains Mono (code/numbers) + Noto Sans Arabic
- **Components:** glassmorphism cards, bento grids, mesh gradients, grain texture, marquee
- **Motion:** scroll-reveal, count-up stats, pulse dots — all respect `prefers-reduced-motion`

---

## 🔌 API

### `POST /api/engage`
Submit a contact form message.

**Request:**
```json
{
  "path": "review" | "consult" | "build" | "refer",
  "name": "string (2-120 chars)",
  "email": "string (valid email)",
  "fields": { "field name": "value" }
}
```

**Response (200):**
```json
{
  "ok": true,
  "id": "SUB-xxx",
  "message": "Received. I will respond within 48 hours."
}
```

### `GET /api/engage`
Returns submission count (no PII).

---

## 🗄 Database

Prisma + SQLite (local dev). Schema is minimal (User + Post defaults from Next.js scaffold). The engage form uses in-memory storage — replace with email/Formspree for production.

To switch to PostgreSQL: update `prisma/schema.prisma` datasource provider and `DATABASE_URL`.

---

## 🚀 Deployment

### Vercel (recommended)
1. Push to GitHub
2. Import repo at vercel.com
3. Add env vars
4. Deploy

### Railway / Render
1. Connect GitHub repo
2. Set `DATABASE_URL` env var
3. Build command: `bun run build`
4. Start command: `bun run start`

### GitHub Pages (static export)
The public portfolio can be exported as static. Set `output: 'export'` in `next.config.ts` and replace the engage API with a mailto/Formspree link.

---

## 🔒 Security Notes

- `.env*` is gitignored — never commit secrets
- `db/*.db` is gitignored — local SQLite only
- Engage API validates every request with Zod
- No CSRF needed for read-only public API
- For admin/protected routes, add NextAuth + RBAC

---

## 📝 Content Updates

All copy lives in two files:
- `src/lib/content.ts` — structured data (projects, claims, principles, trajectory, components, code snippets, etc.)
- `src/lib/translations.ts` — UI strings (nav, buttons, section labels)

To add a new project, edit `featuredProject` or add to a projects array in `content.ts`.

---

## ✅ Quality

- ESLint: 0 errors, 0 warnings
- TypeScript: strict mode
- Responsive: 375px → desktop
- WCAG: skip-link, focus indicators, ARIA labels, semantic HTML
- `prefers-reduced-motion` respected

---

## 📄 License

MIT — free to use, modify, distribute.

---

## 👤 Author

**Mohammed Adil Alakaly** — Smart Building Technology specialist, Dura, Palestine.

> "Every goal is a mountain you climb only to find another — and thank God I climbed them all."
