# Portfolio — gemcity.xyz

Astro + React portfolio deployed on Vercel with Supabase backend.

## Architecture

- **Framework:** Astro (server output) with `@astrojs/vercel` adapter
- **UI:** React islands (.tsx components) inside Astro layouts
- **Styling:** Tailwind CSS v4 + custom keyframe animations in `src/styles/global.css`
- **Backend:** Supabase (backgrounds, content API)
- **Deploy:** Vercel (`pnpm build` → `astro build`)

## Key Patterns

### Astro Image Imports

Use the `?url` suffix to import images as plain string URLs from Vite, not `ImageMetadata` objects.

```ts
// Correct — gets a string URL for CSS background-image or <img src>
import macBg from '../assets/images/bg.jpg?url'

// Wrong — gets ImageMetadata, unusable as a plain string
import macBg from '../assets/images/bg.jpg'
```

Failing to use `?url` causes type mismatches when passing URLs to CSS `background-image` or React string props. This cost 30 min of debugging.

### Background Fallback Pattern

`LandingPage.astro` imports all three `mac-background*.jpg?url` as local fallbacks. When the Supabase API returns `[]` (no backgrounds), the component falls back to these local images. The background will always render in production.

### Custom Animations

Defined in `src/styles/global.css`:

| Keyframe | Class | Purpose |
|---|---|---|
| `ambient-drift` | `.animate-ambient-drift` | Slow floating gradient blobs |
| `ambient-drift-reverse` | `.animate-ambient-drift-reverse` | Counter-direction drift |
| `dock-spring-in` | `.animate-dock-spring-in` | Dock icon spring entrance |
| `dot-breathe` | `.animate-dot-breathe` | Dock indicator pulse |
| `window-enter` | `.animate-window-enter` | App window scale-in |

All use `animation-delay: 0s, 0s !important` reset to prevent Tailwind from overriding with staggered delays.

### Boot Sequence

`src/components/BootSequence.tsx` — full-screen macOS-style boot animation. Plays once per session (checks `sessionStorage`). After completion, fades out and mounts the desktop.

## Build & Deploy

```bash
pnpm build          # Verify locally — must pass clean
git push            # Triggers Vercel deployment
```

## Production Verification

After deploy, verify:

1. `curl -s https://gemcity.xyz/api/content/backgrounds | jq length` — should return backgrounds
2. Fresh incognito window — boot sequence should play
3. Notes app — window should scale-in smoothly
4. Dock dot — should pulse on open app

## Skills to Use

- `modern-web-guidance` — animations, scroll effects, CSS modern features
- `frontend-design` — visual polish, avoiding AI-slop aesthetics
- `brainstorming` — any new feature before touching code
