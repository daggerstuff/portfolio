---
description: Unified testing strategy for the Pixelated Empathy ecosystem.
---

# Testing Strategy: Validating the Experience

## 🎭 The Quality Mandate

In Pixelated Empathy, testing is our proof of **Scientific Validity** and **Psychological Safety**. We test across the stack to ensure every simulation turn is accurate, safe, and performant.

## 🛠️ The Testing Stack

- **Unit Testing**:
  - **Node/TypeScript**: **Vitest** for logic and component-level testing.
  - **Python/AI Engine**: **Pytest** with `uv run pytest`.
- **E2E Testing**:
  - **Playwright** for complete simulation flows and UI regression.
- **Security Testing**:
  - **Snyk** for dependency audits and static code analysis.

## 🏗️ Core Testing Principles

### 1. Test-Driven Development (TDD)

- Prefer writing tests before implementation to ensure requirements are met and edge cases are handled (especially for emotional scoring logic).

### 2. Emotional Continuity

- Integration tests must verify that the **Memory Bank** (`.memory/`) is correctly updated and read between simulation sessions.

### 3. Verification of Crisis Handling

- Mandatory test cases for detecting and mitigating crisis signals in both the Frontend and AI Engine.

## 📦 Automated Workflows

- **Command**: `pnpm test:all` executes the full suite across both repos.
- **CI Integration**: Tests run on every GitHub PR via **GitHub Actions**.

## 🛡️ Security & Privacy in Tests

- **No Stubs**: Stubs that return hardcoded `true` or empty arrays are prohibited in production-bound tests.
- **PII Redaction**: Never use real patient data in tests. Use `faker` or generated therapeutic scenarios.

## 🚀 Testing Checklist

- [ ] Does the test verify the successful update of the Memory Bank?
- [ ] Is the "Crisis Detection" flow covered?
- [ ] Does `pnpm test:all` pass without failures?
- [ ] Are test data files realistic but free of PII?
- [ ] are async operations properly awaited/handled in tests?
