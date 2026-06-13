---
description: Standards for workspace hygiene and artifact cleanup.
---

# Workspace Hygiene: Keeping the Gym Clean

## 🎭 The Clarity Mandate

In Pixelated Empathy, a cluttered development environment leads to "noisy" emotional analysis. We maintain a pristine workspace to ensure focus and security.

## 🏗️ Organization Standards

### 1. Document Management

- **Task-Specific Docs**: Place in `docs/<task-name>/`.
  - Example: `docs/bias-detection-refinement/`.
- **Permanent Docs**: Maintain in `docs/` categories (e.g., `docs/api/`, `docs/infrastructure/`).
- **Memory Bank**: Official project state belongs in `.memory/`. NEVER create one-off "memory" files outside this directory.

### 2. Script Organization

- **NO Scripts in Root**: All scripts must reside in `scripts/` subfolders:
  - `scripts/infrastructure/`
  - `scripts/testing/`
  - `scripts/utils/`
  - `scripts/.temp/` (For verified one-off tasks).
- **Execution**: Scripts should favor **pnpm** and **uv** triggers.

## 🛡️ Cleanup Protocol (Post-Task)

### 1. Immediate Disposal

After a task is confirmed as complete by the User:

- **Delete** all one-time migration scripts, data processors, or temporary debug logs.
- "We don't keep one-time use type shit around."

### 2. Redaction Check

Ensure no temporary files containing conversational PII, session tokens, or branded credentials remain in the `scripts/` or `docs/` folders.

## 🧪 Verification

- Command: `pnpm check:all` will verify that no unauthorized files are in the root.
- Git: Run `git clean -fdn` to preview untracked cleanup candidates.

## 🚀 Hygiene Checklist

- [ ] Are all one-time scripts deleted?
- [ ] Is there a README or script left in the root? (If yes, move or delete).
- [ ] Has all PII been scrubbed from temporary test artifacts?
- [ ] Is the `docs/` folder organized by specific task subfolders?
- [ ] Does `pnpm check:all` pass with a clean workspace signal?
