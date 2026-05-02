# Agent Guidelines — Vix Monorepo

This file is the source of truth for coding agents (Claude, Cursor, Copilot, etc.)
working in this codebase. Read it fully before writing or modifying any code.

---

## Project Structure

```
apps/
└── web/                        # Main Next.js app (company website)
    ├── app/                    # App router pages
    ├── components/             # App-level components (not reusable library)
    ├── components.json         # shadcn CLI config for this app
    └── package.json

packages/
└── ui/                         # Vix — company component library
    ├── src/
    │   ├── primitives/         # ← shadcn CLI output lands here (DO NOT edit manually)
    │   ├── components/         # ← Vix components (wraps primitives + design system)
    │   │   └── index.ts        # barrel export — all public components exported here
    │   ├── logos/              # SVG logo components
    │   │   └── index.ts
    │   ├── hooks/              # Shared React hooks
    │   │   └── index.ts
    │   └── lib/
    │       └── utils.ts        # cn() and other utilities
    ├── components.json         # shadcn CLI config for this package
    └── package.json            # name: "@vix/ui"
```

---

## Important folders to look into
/docs/* : documentations about various tasks.
/design/* : Company design principles and architecture. 

## The Two-Layer Component Model

This project uses a strict two-layer model. Understand it before touching any component.

### Layer 1 — Primitives (`packages/ui/src/primitives/`)

- Raw shadcn/ui components, installed via the CLI
- **Never edit these files manually**
- They are the unstyled, accessible foundation
- Install new shadcn components with:

```bash
cd apps/web
npx shadcn@latest add [component-name]
# The CLI will place the output in packages/ui/src/primitives/ automatically
```

### Layer 2 — Vix Components (`packages/ui/src/components/`)

- These are the actual company design system components
- They import from primitives and apply Vix design tokens, variants, and API
- This is where all design and branding decisions live
- Every new reusable component belongs here

---

## How to Create a New Vix Component

### Step 1 — Add the shadcn primitive (if needed)

```bash
cd apps/web
npx shadcn@latest add button
# Lands in packages/ui/src/primitives/button.tsx
```

### Step 2 — Create the Vix wrapper

```tsx
// packages/ui/src/components/button.tsx

import { Button as Primitive } from '../primitives/button'
import { cn } from '../lib/utils'
import type { ComponentProps } from 'react'

export interface ButtonProps extends ComponentProps<typeof Primitive> {
  // Add Vix-specific props here if needed
}

export function Button({ className, ...props }: ButtonProps) {
  return (
    <Primitive
      className={cn(
        // Apply Vix design tokens here
        className
      )}
      {...props}
    />
  )
}
```

### Step 3 — Export from the barrel

```ts
// packages/ui/src/components/index.ts
export { Button } from './button'
export type { ButtonProps } from './button'
```

### Step 4 — Import in the app

```tsx
// apps/web/app/page.tsx
import { Button } from '@vix/ui/components'
```

---

## Import Rules

| What you need | Import from | Never import from |
|---|---|---|
| UI components | `@vix/ui/components` | shadcn directly, primitives directly |
| Logos / brand | `@vix/ui/logos` | — |
| Hooks | `@vix/ui/hooks` | — |
| Utilities (cn) | `@vix/ui/lib` | — |
| App-only components | `@/components` | — |

### ✅ Correct
```tsx
import { Button, Input, Calendar } from '@vix/ui/components'
import { VixLogo } from '@vix/ui/logos'
import { cn } from '@vix/ui/lib'
```

### ❌ Wrong
```tsx
import { Button } from '@/components/ui/button'        // shadcn default path
import { Button } from '../primitives/button'           // bypasses design system
import { Button } from 'shadcn/ui'                      // doesn't exist
```

---

## When Converting Designs to Code

When you receive a design (Figma, screenshot, or description) to implement:

1. **Identify reusable elements first.** If a UI element appears more than once or is
   clearly a design system component (Button, Card, Badge, Input, Modal, etc.),
   it must be created as a Vix component in `packages/ui/src/components/`, not
   inlined into the page.

2. **Page-specific layout and composition** goes in `apps/web/app/` or
   `apps/web/components/`. These files consume Vix components but do not define them.

3. **Do not duplicate.** Before creating a new component, check
   `packages/ui/src/components/index.ts` to see if it already exists.

4. **Respect the two-layer model.** If shadcn has a relevant primitive, use it.
   Do not build from scratch what shadcn already provides.

5. **Export everything.** Any new component added to `packages/ui/src/components/`
   must be exported from `index.ts` before it can be used.

---

## Design Tokens

Design tokens (colors, spacing, typography, radii) are defined in:

```
packages/ui/src/styles/globals.css
```

Always use CSS variables and Tailwind utility classes that reference these tokens.
Do not hardcode color hex values or raw pixel values in component files.

---

## Package Manager

This project uses **Bun** with Turborepo.

```bash
bun install           # install dependencies
bun run dev           # start dev server
bun run build         # build all packages
```

To add a dependency to a specific workspace:

```bash
bun add <package> --cwd packages/ui
bun add <package> --cwd apps/web
```

---

## Key Constraints

- Do not install shadcn components directly into `apps/web/components/` — they belong in primitives
- Do not import primitives directly from app code — always go through `@vix/ui/components`
- Do not create one-off styled components in page files — extract them into the library
- The `primitives/` folder is CLI-managed; treat it as read-only
