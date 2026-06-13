---
description: Design standards for Creating the Pixelated Empathy user experience.
---

# UI Design: The High-Fidelity Simulator

## 🎨 The Aesthetic North Star

We don't just build dashboards; we architect emotional landscapes. The user should be "wowed" at first glance. Our design is **Premium**, **Dynamic**, and **Empathetic**.

## 💎 Visual Core

### 1. Minimalist Mastery

- **Whitespace**: Use generous spacing to allow "emotional breathing room."
- **Typography**: Strictly use **Inter** or **Outfit** from Google Fonts. No browser defaults.
- **Glassmorphism**: Use frosted glass effects (`backdrop-filter: blur()`) for overlays, modals, and sidebar navigation.

### 2. The Color Engine

- Avoid generic colors. Use curated, vibrant HSL tailored palettes.
- **Dark Mode by Default**: Deep charcoals, midnight blues, and subtle gradients.
- **Emotional Mapping**:
  - **Trust/Calm**: Soft cyans and deep indigos.
  - **Joy**: Radiant ambers.
  - **Crisis**: Subdued crimson (avoid bright, triggering reds unless critical).

## ✨ Micro-Animations & Interactivity

- **Feedback Loops**: Every interaction (hover, click, scroll) must provide a subtle, smooth visual response.
- **Transitions**: Use `ease-in-out` for all state changes. Nothing should "snap" unless it's a critical alert.
- **The "Power of Silence" in UI**: Use loading skeletons and subtle pulses to represent AI "thought" processes.

## 🛠️ Implementation Specs

- **Vanilla CSS over Tailwind**: Unless explicitly requested, use modern CSS (Grid, Flex, Layers) for maximum control.
- **Responsive by Nature**: All views MUST look premium on both ultra-wide therapist monitors and mobile devices for on-the-go trainees.
- **No Placeholders**: Never use "Lorem Ipsum" or generic stock photos. Use the `generate_image` tool to create intentional assets.

## 🧪 Accessibility (Psychological Safety)

- **Legibility**: High contrast (WCAG AAA) for all primary data points.
- **Crisis Overrides**: If the simulator detects a crisis, the UI must shift into a clear, non-overwhelming "Support Mode."
- **Reduced Motion**: Respect the `prefers-reduced-motion` media query for sensitive trainees.

## 🚀 Design Checklist

- [ ] Does this look "Premium" and professional?
- [ ] Is Glassmorphism used for non-primary layers?
- [ ] Are animations smooth and subtle (no jarring snaps)?
- [ ] Does it work perfectly in both Dark and Light modes?
- [ ] Are all fonts from the project’s curated set (Inter/Outfit)?
