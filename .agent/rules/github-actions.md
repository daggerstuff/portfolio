---
description: Standards for CI/CD automation using GitHub Actions.
---

# GitHub Actions: Automated Validation

## 🎭 The Quality Gate

In Pixelated Empathy, GitHub Actions acts as the ethical and technical "Quality Gate." No code reaches production without passing our stringent validation suite.

## 🛠️ Pipeline Architecture

- **Path-Based Triggers**:
  - Changes to `/src` trigger the Astro/Frontend CI.
  - Changes to `/ai` trigger the Python AI Engine CI (strictly using `uv`).
- **Standard Workflow**:
  1. **Linting & Formatting**: `pnpm check:all`.
  2. **Type Checking**: `pnpm check:types`.
  3. **Unit Testing**: `pnpm test:unit` (Vitest/Pytest).
  4. **Security Audit**: `pnpm security:scan`.
  5. **E2E Testing**: `pnpm test:e2e` (Playwright).

## 🛡️ Security & Privacy

- **Secrets Management**: Absolutely NO API keys or DB credentials hardcoded in `.yml` files. Use GitHub Repo Secrets.
- **Redaction**: Ensure that CI logs do not print sensitive conversational data or branded tokens.
- **Zero-Leak Policy**: Workflows must not persist PII in build artifacts.

## 📦 Deployment Hub

- **Preview Environments**: Automated Vercel preview deployments for every PR.
- **Production Gate**: Merges to `main` require approval and manual tag creation for production deployment.

## 🚀 GitHub Actions Checklist

- [ ] Does the workflow include a security scan?
- [ ] Are Python dependencies installed via `uv`?
- [ ] Is the Playwright E2E suite executed on UI changes?
- [ ] Are secrets referenced correctly via `${{ secrets.X }}`?
- [ ] is there a "Crisis Detection" test case in the CI pipeline?
