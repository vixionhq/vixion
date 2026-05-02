# Vixion

This is the official Vixion company monorepo. It contains the main company website and **Vix** — the Vixion internal component library.

---

## What's inside

```
apps/
└── web/                  # Main company website (Next.js)

packages/
└── ui/                   # Vix — Vixion's internal component library
```

### `apps/web`

The main Vixion website, built with Next.js (App Router). It consumes components exclusively from the Vix library.

### `packages/ui` — Vix

Vixion's internal design system and component library, published internally as `@vix/ui`. All reusable UI components, logos, hooks, and utilities live here.

Components are imported in the app as:

```tsx
import { Button } from '@vix/ui/components'
import { VixionLogo } from '@vix/ui/logos'
```

---

## Tech Stack

| Tool | Purpose |
|---|---|
| [Next.js](https://nextjs.org) | App framework |
| [Turborepo](https://turbo.build/repo) | Monorepo build system |
| [Bun](https://bun.sh) | Package manager & runtime |
| [shadcn/ui](https://ui.shadcn.com) | UI primitives |
| [Tailwind CSS](https://tailwindcss.com) | Styling |
| [TypeScript](https://www.typescriptlang.org) | Language |

---

## Getting Started

### Prerequisites

- [Bun](https://bun.sh) v1.0 or higher
- Node.js v18 or higher

### Install dependencies

```bash
bun install
```

### Start the development server

```bash
bun run dev
```

This starts all workspaces in parallel via Turborepo. The website will be available at `http://localhost:3000`.

### Build for production

```bash
bun run build
```

---

## The Vix Component Library

Vix follows a two-layer model:

- **Primitives** (`packages/ui/src/primitives/`) — raw shadcn/ui components, managed by the CLI. Never edited manually.
- **Components** (`packages/ui/src/components/`) — Vixion-branded wrappers around primitives, with the company's design tokens and variants applied.

### Adding a new shadcn component

Always run the shadcn CLI from inside `apps/web`:

```bash
cd apps/web
npx shadcn@latest add [component-name]
```

The CLI will automatically place the primitive in `packages/ui/src/primitives/`. You then create a Vix wrapper in `packages/ui/src/components/` and export it from `index.ts`.

See [AGENTS.md](./AGENTS.md) for the full component authoring guide.

---

## Project Conventions

- All reusable UI components belong in `packages/ui`, not in `apps/web`
- The app imports components only from `@vix/ui/components` — never from shadcn directly
- Design tokens are defined in `packages/ui/src/styles/globals.css`
- Use `bun add <package> --cwd <workspace>` to add dependencies to a specific workspace

---

## Adding Dependencies

```bash
# Add to the website
bun add <package> --cwd apps/web

# Add to the Vix library
bun add <package> --cwd packages/ui

# Add to the root (dev tooling)
bun add -d <package>
```

---

## Contributing

1. Branch off `main` for your feature or fix
2. If you're building UI, check `packages/ui/src/components/index.ts` first — the component you need may already exist
3. New reusable components go in the Vix library, not in app-level files
4. Run `bun run build` before opening a pull request to catch type and build errors

---

## Useful Links

- [Turborepo docs](https://turbo.build/repo/docs)
- [shadcn/ui docs](https://ui.shadcn.com)
- [Next.js docs](https://nextjs.org/docs)
- [Bun docs](https://bun.sh/docs)
