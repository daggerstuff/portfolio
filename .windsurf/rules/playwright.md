---
description: E2E testing standards for the Empathy Gym™ simulator using Playwright.
---

# Playwright: Testing the Human Experience

## 🎭 The Simulator Quality Bar

In Pixelated Empathy, E2E tests aren't just about "matching buttons"; they are about verifying that the **Emotional Feedback Loop** works flawlessly under stress.

## 🛠️ Configuration & Patterns

- **Package Manager**: Strictly use `pnpm`.
- **Scripts**:
  - `pnpm test:e2e` — Run the full suite.
  - `pnpm test:e2e:ui` — Run with the Playwright UI for debugging.

## 🏗️ Core Test Principles

### 1. Verification of Crisis Signals

Every E2E suite MUST include a "Crisis Red-State" test:

1. Input a known crisis signal into the simulator.
2. Verify the UI shifts to Support Mode.
3. Verify that the AI output is "Safety-First."

### 2. High-Fidelity UI Testing

- **Visual Regression**: Use `expect(page).toHaveScreenshot()` for critical simulation screens to ensure Premium Aesthetics (Glassmorphism, Dark Mode) remain intact.
- **Glassmorphism Checks**: Verify that overlays and modals have the correct backdrop blur classes.

### 3. Responsive Performance

- Test on desktop and mobile viewports.
- Verify that response latency for the simulator is visible and within bounds.

## 🛡️ Security & Privacy in Tests

- **No Secrets**: Never hardcode credentials in test files. Use `.env.test`.
- **Shadow DOM**: Be aware of Astro's component structure; use appropriate Playwright locators to pierce through frameworks where necessary.

## 🧪 Shared Test Utilities

- Use `tests/fixtures/` for common patient personas and session scripts.
- Implement a `SimulatorPage` Object for shared interactions.

## 🚀 Playwright Checklist

- [ ] Does the test verify the success of the emotional feedback loop?
- [ ] Is the "Crisis Detection" flow covered?
- [ ] Does the UI pass visual regression tests (Screenshots)?
- [ ] Is the test running on both Desktop and Mobile viewports?
- [ ] Does the test clean up simulation data post-execution?
