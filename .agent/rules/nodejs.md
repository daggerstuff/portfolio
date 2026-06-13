---
description: Standards for Node.js development within the Astro ecosystem.
---

# Node.js: The Orchestrator

## 🎭 The Logic Layer

Node.js powers our Astro server-side logic, API middleware, and WebSocket orchestration. It is the bridge between the **Astro Frontend** and the **AI Engine Submodule**.

## 🛠️ Package Management

### ⚡ PNPM ONLY

We strictly use **pnpm** for all Node.js projects. **ABSOLUTE PROHIBITION** on `npm` and `yarn`.

- **Sync**: `pnpm install`
- **Execution**: `pnpm dev` or `pnpm run <script>`

## 🏗️ Architectural Patterns

- **Astro Middleware**: Use `src/middleware.ts` for global concerns (Auth, Security, Logging).
- **Zod for Boundaries**: All runtime data entering Node.js logic must be validated via `zod`.
- **Async/Await**: Mandatory. Avoid callbacks or `.then()` chains.
- **Errors**: Use custom Error classes for domain-specific failures (e.g., `SimulatorTimeoutError`).

## 🛡️ Security & Privacy

- **Zero-Leak Policy**: Never log PII. Redact sensitive fields before sending to monitoring.
- **Branded Types**: Use for critical IDs to prevent logic errors.
- **CSRF & Security Headers**: Managed via `helmet` and custom middleware.

## 📦 Integration

- **AI Engine**: Communicate with the Python core via Socket.io or REST.
- **Databases**: Use ORMs/ODMs (Prisma for Postgres, Mongoose for Mongo) with strict type definitions.

## 🚀 Node.js Checklist

- [ ] Is `pnpm` the only package manager referenced?
- [ ] Are all inputs validated via `zod`?
- [ ] Are security headers (CSP, HSTS) applied in middleware?
- [ ] Is error handling exhaustive and descriptive?
- [ ] Does the code pass `pnpm check:all`?
