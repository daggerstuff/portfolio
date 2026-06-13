---
description: Standards for the core Emotional Intelligence engine submodule (/ai).
---

# Python AI Engine: The Emotional Core

## 🧠 The Submodule Mission

The `/ai` directory houses our core Emotional Intelligence engine—a sophisticated hybrid model (Plutchik + OCEAN) engineered to translate human psyche into data.

## 🛠️ Package Management & Tooling

### ⚡ UV ONLY

We strictly use **uv** for package management. **ABSOLUTE PROHIBITION** on `pip`, `conda`, or manual `venv` creation.

- **Dependencies**: Managed via `pyproject.toml`.
- **Scripts**: Run Python logic using `uv run <script>`.
- **Sync**: Ensure the environment is up-to-date with `uv sync`.

## 🛡️ Coding Standards

### 1. Type Safety (PEP 484)

- **Mandatory Type Hints**: Every function signature and class attribute MUST be typed.
- **Strict Mypy**: All AI Engine code must pass `mypy --strict`.

### 2. Documentation (Google Style)

Every class and public method must include a docstring explaining its role in the **Emotional Cartography**.

### 3. Logic & Patterns

- **Normalization**: Every emotion score produced must be strictly mapped to a 0.0 - 1.0 range.
- **Crisis Signal Handling**: The engine must have explicit paths for detecting and reporting crisis indicators.
- **No Stubs**: Stubs/Placeholders like `pass`, `...`, or `NotImplementedError` are prohibited in the `main` branch.

## 🧪 Testing with Pytest

- **Pytest**: The mandatory testing framework.
- **Emotional Integrity Tests**: Every persona or analysis algorithm must include tests verifying its alignment with Plutchik's Wheel.
- **Async Testing**: Use `pytest-asyncio` for all I/O-bound operations.

## 📦 Integration with Astro

- **Communication**: The AI Engine typically communicates with the Astro frontend via WebSocket (Socket.io) or FastAPI.
- **Schemas**: Shared data structures between TS and Python must be clearly documented in `.kiro/specs/`.

## 🚀 AI Engine Checklist

- [ ] Is `pyproject.toml` updated via `uv`?
- [ ] Do all functions have PEP 484 type hints?
- [ ] Is every score normalized between 0.0 and 1.0?
- [ ] Have crisis detection edge cases been tested?
- [ ] Does `mypy` pass without errors?
