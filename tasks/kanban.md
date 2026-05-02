# Vixion — Project Kanban

---

## ✅ Done

### Monorepo Setup
- [x] Initialize Turborepo monorepo with Bun via shadcn CLI (`npx shadcn@latest init --monorepo`)
- [x] Rename `packages/ui` package from `@workspace/ui` to `@vix/ui` in `packages/ui/package.json`
- [x] Update `exports` map in `packages/ui/package.json` (`./components`, `./primitives/*`, `./logos`, `./hooks`, `./lib`, `./globals.css`)
- [x] Update `packages/ui/components.json` aliases (`ui` → `@vix/ui/primitives`, `components` → `@vix/ui/components`)
- [x] Update `apps/web/package.json` dependency from `@workspace/ui` to `@vix/ui`
- [x] Update `apps/web/components.json` aliases to reference `@vix/ui`
- [x] Update `apps/web/tsconfig.json` path alias (`@vix/ui/*`)
- [x] Update `packages/ui/tsconfig.json` path alias (`@vix/ui/*`)
- [x] Fix imports in `apps/web/app/layout.tsx` and `apps/web/app/page.tsx`
- [x] Fix internal import in `packages/ui/src/components/button.tsx`
- [x] Run `bun install` and verify workspace resolution

### Documentation & Agent Setup
- [x] Create `README.md` at monorepo root
- [x] Create `AGENTS.md` at monorepo root with two-layer model, import rules, and design-to-code guidelines
- [x] Add design files to `.tmp/`
- [x] Audit `.tmp/` design files and extract design tokens (colors, spacing, radii, typography) into `/design`

---

## 🔄 In Progress

### Monorepo Setup
- [ ] Create `packages/ui/src/lib/index.ts` barrel export (`export { cn } from './utils'`)
- [ ] Create `packages/ui/src/hooks/index.ts` barrel export
- [ ] Create `packages/ui/src/components/index.ts` barrel export (all Vix components exported here)
- [ ] Create `packages/ui/src/logos/index.ts` barrel export
- [ ] Scaffold `packages/ui/src/primitives/` folder and move existing shadcn components into it

---

## 📋 Backlog

### Design System — Vix Library
- [ ] Define CSS variables in `packages/ui/src/styles/globals.css` based on extracted tokens
- [ ] Create Vix `Button` component in `packages/ui/src/components/button.tsx` wrapping `primitives/button.tsx`
- [ ] Create Vix `Input` component in `packages/ui/src/components/input.tsx`
- [ ] Create Vix `Card` component in `packages/ui/src/components/card.tsx`
- [ ] Create Vix `Badge` component in `packages/ui/src/components/badge.tsx`
- [ ] Create Vix `Typography` component in `packages/ui/src/components/typography.tsx` (Heading, Text, Label)
- [ ] Create Vix `Logo` component in `packages/ui/src/logos/` (wordmark + mark variants)
- [ ] Export all components from `packages/ui/src/components/index.ts`
- [ ] Verify all components importable as `import { X } from '@vix/ui/components'` in `apps/web`

### Website — Pages
- [ ] Transcribe design files in `.tmp/` to page layouts (using Vix components only)
- [ ] Build `apps/web/app/page.tsx` — Homepage
- [ ] Build `apps/web/app/about/page.tsx` — About page
- [ ] Build `apps/web/app/work/page.tsx` — Work / Portfolio page
- [ ] Build `apps/web/app/contact/page.tsx` — Contact page
- [ ] Build `apps/web/components/nav.tsx` — Site navigation
- [ ] Build `apps/web/components/footer.tsx` — Site footer

### Website — Polish
- [ ] Implement dark mode support via `next-themes` (already installed in `packages/ui`)
- [ ] Audit all pages for mobile responsiveness
- [ ] Add page transitions / animations (`tw-animate-css` already installed)
- [ ] Add metadata and Open Graph tags in `apps/web/app/layout.tsx`
- [ ] Add favicon and brand assets
