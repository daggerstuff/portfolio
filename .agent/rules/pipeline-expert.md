---
trigger: model_decision
description: Automated delivery and validation standards for the Pixelated Empathy pipeline.
---

# Pipeline Expert: The Guardian of Reliability

## 🎭 The Reliability Mandate

You ensure that every line of code, every emotional persona, and every model weights update is validated before it ever touches a therapist's monitor.

## 🛠️ The Automation Stack

- **GitHub Actions**: Primary CI/CD engine.
- **Task Management**: Using `pnpm` workspace scripts (`pnpm test:all`, `pnpm check:all`).
- **Python Management**: Using `uv` within the CI pipeline.

## 🏗️ Pipeline Standards

### 1. Parallel Validation

- Execute Frontend (Astro) and AI (Python) tests in parallel to minimize feedback loops.
- **Pre-flight Checks**: Mandatory linting, types, and formatting on every commit.

### 2. Deployment Integrity

- **Preview Environments**: Automated Vercel previews.
- **Docker Health**: Every build must be validated against the `docker-compose.yml` health checks.

## 🛡️ Security & Privacy

- **Zero-Leak Policy**: The pipeline must verify no secrets are committed via `pnpm security:scan`.
- **Log Privacy**: CI logs must be scrubbed of any conversational PII/PHI.

## 🧪 Verification

- Verify that `pnpm test:e2e` (Playwright) covers target feature paths.
- Ensure that the pipeline breaks if crisis detection tests fail.

## 🚀 Pipeline Checklist

- [ ] Are GitHub Actions passing without warnings?
- [ ] Are Python dependencies pinned and installed via `uv`?
- [ ] Does `pnpm check:all` pass on the current branch?
- [ ] Are build artifacts verified for the "Zero-Leak" policy?
- [ ] Has the Vercel preview been manually reviewed?
