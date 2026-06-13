---
description: Technical security implementation standards for Pixelated Empathy.
---

# Security Implementation: Shielding the Psyche

## 🎭 The Technical Fortification

We handle sensitive emotional data and therapeutic simulations. Security is implemented at every layer of the stack, not just as an afterthought.

## 🛠️ Security Stack

- **Auth**: Secure session management in `src/middleware.ts`.
- **Validation**: Strict `zod` schemas for all boundaries (I/O).
- **Redaction**: PII/PHI redaction in the **Emotional Intelligence Engine**.
- **Audit**: `pnpm security:scan` (Snyk/Audit) for dependency vulnerabilities.

## 🛡️ Hardening Standards

### 1. Web Security (Astro/Node)

- **CSP (Content Security Policy)**: Strict policy enforced via headers to block XSS.
- **CSRF**: Astro 5 built-in CSRF protection must be enabled.
- **Cookies**: `SameSite=Lax` or `Strict` and `HttpOnly` for all sensitive tokens.
- **HSTS**: Mandatory for all production environments.

### 2. AI Engine Security (Python/uv)

- **Prompt Injection Defense**: Every input to an LLM must be sanitized and wrapped in protective system prompts.
- **Constraint Enforcement**: The engine must never output PII/PHI discovered during analysis.

### 3. Database & Secrets

- **Zero-Leak Policy**: Secrets must NEVER be committed to Git. Use Vercel Environment Variables or sealed secrets.
- **Encryption**: Sensitive database fields (conversational text) should be encrypted at rest.

## 🧪 Testing & Verification

- **Snyk**: Automated scanning on every PR.
- **Playwright**: Verify that security headers are present in responses.
- **SSL**: Automated check via `pnpm check-ssl-certificate-expiry-openssl`.

## 🚀 Security Checklist

- [ ] Are all `.env` files gitignored?
- [ ] Are security headers (CSP, HSTS) active?
- [ ] Does `pnpm security:scan` pass with zero high-risk vulnerabilities?
- [ ] Is every AI input sanitized?
- [ ] Is PII/PHI redacted in simulation logs?
