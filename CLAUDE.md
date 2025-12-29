# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Core Commands
- `npm install` - Install dependencies
- `npm run dev` - Start development server with Turbopack (http://localhost:3000)
- `npm run build` - Build production bundle
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Architecture Overview

### Project Type
This is a Next.js 16 (App Router) landing page component library built with React 19, Tailwind CSS v4, and shadcn/ui. It provides production-ready website sections for building modern landing pages.

### Directory Structure

**`app/`** - Next.js App Router
- `layout.tsx` - Root layout with ThemeProvider, metadata, and font configuration
- `page.tsx` - Homepage that composes section components
- `globals.css` - Tailwind v4 configuration with custom theme tokens

**`components/`** - All React components
- `sections/` - Landing page sections (Hero, Navbar, Footer, CTA, FAQ, Items, Logos, Pricing, Stats)
  - Each section has a `default.tsx` export with customizable props
  - Sections are designed to be drop-in replaceable on pages
- `ui/` - Base UI components (Button, Badge, Card, Section, Mockup, Glow, etc.)
  - Follows shadcn/ui patterns
  - `section.tsx` is the base wrapper with consistent padding/spacing
- `contexts/` - React contexts (ThemeProvider for dark mode)
- `logos/` - SVG logo components

**`config/`** - Configuration
- `site.ts` - Centralized site configuration (name, URLs, pricing links, stats)

**`lib/`** - Utilities
- `utils.ts` - Contains `cn()` helper for merging Tailwind classes
- `fonts.ts` - Font configuration (Inter from Google Fonts)

### Styling System

**Tailwind v4** is used with custom CSS variables defined in `app/globals.css`:
- Custom `@theme inline` block defines design tokens (colors, spacing, shadows, animations)
- CSS variables use OKLCH color space for better perceptual uniformity
- Dark mode is class-based (`.dark` class)
- Custom spacing: `--spacing-container` (1280px) and `--spacing-container-lg` (1536px)
- Custom animations: `animate-appear`, `animate-appear-zoom`, `accordion-down`, `accordion-up`
- Utility classes from `tw-animate-css` package

**Key Design Patterns:**
- All colors use CSS variables for light/dark theme support
- The `cn()` utility from `lib/utils.ts` is used throughout for conditional class merging
- Components use `data-slot` attributes for styling hooks
- Glow effects and layout lines provide visual polish

### Component Architecture

**Section Components** (`components/sections/*/default.tsx`):
- Export a default function with typed props interface
- Use the `<Section>` wrapper component for consistent layout
- Props provide defaults but allow full customization
- Common pattern: `title`, `description`, `badge`, `buttons`, `className` props

**UI Components** (`components/ui/*.tsx`):
- Follow shadcn/ui patterns with Radix UI primitives
- Use `class-variance-authority` for variant management
- Export both component and variant types
- Base components are in `components/ui/`, imported with `@/components/ui/*`

**Theme System:**
- `next-themes` library handles theme switching
- Theme provider wraps app in `app/layout.tsx`
- Default theme is dark mode
- System theme detection is disabled (`enableSystem={false}`)
- Theme is applied via class attribute on `<html>` element

### Path Aliases

All imports use `@/*` alias mapping to project root:
```typescript
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
```

### Code Style Conventions

**ESLint Configuration:**
- Extends Next.js recommended configs
- `simple-import-sort` plugin enforces alphabetical import ordering
- `unused-imports` plugin removes unused imports automatically
- Variables starting with `_` are ignored by unused vars rule

**Prettier:**
- Uses `prettier-plugin-tailwindcss` for class sorting

**Import Ordering:**
- External packages first (alphabetical)
- Then internal imports with `@/*` paths (alphabetical)
- Blank line between external and internal imports

## Key Implementation Details

### Adding New Sections
1. Create new component in `components/sections/[name]/default.tsx`
2. Define props interface with sensible defaults
3. Wrap content in `<Section>` component
4. Use theme-aware CSS variables for colors
5. Import and add to `app/page.tsx`

### Site Configuration
All site-wide settings live in `config/site.ts`:
- URLs, metadata, links
- Pricing configuration
- Statistics and metrics
Update this file rather than hardcoding values in components.

### Customizing Themes
Theme colors are defined in `app/globals.css`:
- Light theme in `:root` selector
- Dark theme in `.dark` selector
- Use OKLCH format for colors
- All components reference CSS variables, not hardcoded colors

### Working with Icons
- Lucide React is the icon library
- Import specific icons: `import { ArrowRightIcon } from "lucide-react"`
- Custom logo components in `components/logos/`
