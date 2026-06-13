---
description: Standards for Version Control and Collaborative Development using Git.
---

# Git: Versioning the Human Experience

## 🎭 The Collaborative Flow

We use Git to maintain a high-fidelity history of our code and **Emotional Cartography**. Every commit should be a meaningful step toward enhancing the simulation.

## 🛠️ Commit Standards

### 1. The Conventional Format

Favor the Conventional Commits specification:

- `feat:`, `fix:`, `docs:`, `style:`, `refactor:`, `test:`, `chore:`.

### 2. Meaningful Messages

- **Subject**: Concise summary of the change.
- **Body**: Explain the **Why** and **How**, especially for complex AI logic or security fixes.

## 🏗️ Workflow (GitHub Flow)

- **Branches**: Small, focused feature branches (e.g., `feature/emotion-normalization`).
- **Pull Requests**:
  - Requires a **Kiro Spec** reference.
  - Requires passing `pnpm check:all`.
  - PR titles should reflect the user-facing impact.

## 🛡️ Security & Privacy

- **Zero-Leak Policy**: Mandatory pre-commit hooks (**Husky**) to scan for secrets and PII.
- **Ignore**: Strictly maintain `.gitignore`. Never commit `.env`, `node_modules`, or `venv`.

## 🚀 Git Checklist

- [ ] is the branch focused on a single task?
- [ ] does the commit message follow the conventional format?
- [ ] has `pnpm check:all` passed locally?
- [ ] Are all secrets and PII excluded from the stage?
- [ ] Is there a corresponding spec in `.kiro/specs/`?
