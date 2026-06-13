---
description: Comprehensive best practices for Astro v5 development within the Pixelated Empathy ecosystem.
---

# Astro Best Practices: Pixelated Empathy Edition

## 🎭 The Simulator Architecture

In Pixelated Empathy, Astro is more than a framework; it's the high-fidelity window into the human psyche. We leverage **Astro 5** to deliver a premium, near-instant experience.

## 🏗️ Core Principles

### 1. Islands Architecture (The Empathy Gym™)

- **Static by Default**: Use `.astro` components for 90% of the UI to ensure maximum performance.
- **Selective Hydration**: Only hydrate interactive elements (e.g., the simulation chat, emotion charts).
  - Use `client:idle` for background analytics.
  - Use `client:visible` for components below the fold.
  - Use `client:only="react"` for the main simulator if it requires complex client-side state.

### 2. Server Islands (Astro 5)

- Use **Server Islands** for dynamic, user-specific emotional analytics that shouldn't block the initial page load.

  ```xml
  <EmotionalHeatmap server:island />
  ```

### 3. Middleware-First Security

- All session validation and device binding must occur in `src/middleware.ts`.
- Use `Astro.locals` to propagate `user` and `emotionalContext` across the request.

## 📦 Package Management

- **NO NPM/YARN**: Strictly use `pnpm`.
- **Command**: `pnpm dev:all-services` starts the Astro frontend alongside the AI Engine.

## 🎨 Creative & Premium UI

### 1. Design System

- All components MUST use tokens from `src/styles/tokens.css`.
- **Glassmorphism**: Use the `.glass-panel` utility for overlays.
- **Dark Mode**: High-contrast dark mode is the default state for the Simulator.

### 2. Assets & Optimization

- **Images**: Use the `<Image />` component for all static assets. Favor WebP/AVIF.
- **Fonts**: Use local font files (Inter/Outfit) to avoid CLS and third-party tracking.

## 🛠️ Data Handling

- **Content Collections**: Use for patient personas, therapeutic scenarios, and lesson plans.
- **Zod Schemas**: Every content collection must have a strict schema to prevent malformed simulation data.

## 🧪 Testing

- **Playwright**: Mandatory for E2E testing of the simulation flow.
- **Vitest**: Use for logic within `.astro` scripts and `src/lib/` utilities.

## 🛡️ Security & Privacy

- **Zero-Leak Policy**: Never expose PII in `Astro.props` or client-side scripts.
- **CSRF**: Astro 5 CSRF protection must be enabled in `astro.config.mjs`.

## 🚀 Proactive Checklist

- [ ] Is this component static? If so, is it a `.astro` file?
- [ ] Is hydration necessary? If so, is the directive appropriate?
- [ ] Does the UI adhere to the "Premium Aesthetic" (Gradients, Glassmorphism)?
- [ ] Are dynamic analytics wrapped in a Server Island?
- [ ] Has the middleware validated the current session?
