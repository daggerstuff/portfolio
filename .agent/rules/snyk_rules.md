---
description: Security scanning protocol using Snyk for Pixelated Empathy.
---

# Snyk: Continuous Security Auditing

## 🛡️ The Security Gate

We protect the psychological safety of our users by ensuring our dependencies and code are free from vulnerabilities. Snyk is our primary tool for this.

## 🛠️ Operational Rules

### 1. Mandatory Scanning

- Run `pnpm security:scan` whenever:
  - New dependencies are added via `pnpm add`.
  - Python dependencies are updated via `uv`.
  - Major logic changes are made to the **AI Engine**.

### 2. Failure Handling

- If Snyk identifies High or Critical vulnerabilities:
  - **STOP** development.
  - Implement a fix via `pnpm update` or dependency overriding.
  - Rescan until clear.

## 📦 Project-Specific Commands

- **Full Project Scan**: `pnpm security:scan`
- **Node-only Audit**: `pnpm audit`
- **Python-only Audit**: (Implicitly handled by uv-integrated scanners or manual snyk CLI in `/ai`).

## 🛡️ Zero-Leak Compliance

- Verify that `snyk` does not upload PII or Branded Tokens during the scanning process.

## 🚀 Snyk Checklist

- [ ] Has a scan been run after adding new packages?
- [ ] are any "High" or "Critical" vulnerabilities present?
- [ ] Is the scan integrated into the GitHub CI pipeline?
- [ ] Are all `.env` files correctly excluded from the scan?
