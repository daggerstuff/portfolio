---
description: Standards for Documentation and Content in Markdown format.
---

# Markdown: Documenting Empathy

## 📚 The Source of Truth

Markdown is our primary medium for Documentation, **Memory Bank** (`.memory/`), and **Simulation Briefs**. It must be readable for both humans and AI.

## 🛠️ Formatting Standards

- **Headers**: Use a single `#` (H1) for the main title and `##` (H2) for sections.
- **Lists**: Favor bullet points for checklists and numbered lists for sequential steps.
- **Code Blocks**: Always specify the language for syntax highlighting (e.g., ` ```typescript `).

## 🚀 Memory Bank Protocol

- **Continuity**: Updates to the `.memory/` directory must follow a strict, chronological structure.
- **No Placeholders**: `TODO` or `FIXME` items are prohibited in official documentation unless they are tracked in a `tasks.md` spec.

## 🛡️ Security & Ethics

- **Zero-Leak Policy**: PII/PHI must NEVER appear in Markdown files. Use anonymized IDs.
- **Redaction**: Documentation describing sensitive therapeutic paths must focus on logic, not specific patient details.

## 🧪 Validation

- Use **markdownlint** to ensure consistency.
- Command: `pnpm check:all` includes Markdown linting.

## 🚀 Markdown Checklist

- [ ] Is the first line a top-level H1?
- [ ] Are all code blocks language-tagged?
- [ ] Does the file avoid PII/PHI?
- [ ] Is the structure consistent with the **Memory Bank**?
- [ ] Are there any "stubs" or "placeholders" that should be removed?
