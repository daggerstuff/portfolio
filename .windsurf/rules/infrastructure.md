---
description: Infrastructure and deployment standards for Pixelated Empathy.
---

# Infrastructure: Orchestrating Understanding

## 🏗️ The Deployment Strategy

Pixelated Empathy utilizes a tiered infrastructure to ensure high-fidelity simulation and absolute data privacy.

### 1. Local Development (Docker Compose)

- **The Ecosystem**: We use `docker-compose.yml` to orchestrate:
  - **Astro Frontend**: The user interface.
  - **AI Engine**: The Python-based EI core.
  - **Databases**: PostgreSQL (Relational), MongoDB (Unstructured), Redis (Caching).
- **Command**: `pnpm docker:up` starts the entire local cluster.

### 2. Production (Astro + Vercel)

- Our primary frontend is deployed on **Vercel** for global edge performance.
- **Serverless Analytics**: We use Vercel Functions for lightweight logic and **Astro Server Islands** for dynamic UI segments.

### 3. Future Scaling (Kubernetes)

- Architecture is designed for eventual migration to K8s. Helm charts are located in `/helm`.
- **Sidecar Pattern**: Conceptually prepared for AI-engine sidecars for low-latency inference.

## 📦 Containerization Standards

- **Minimal Base Images**: use `node:alpine` or `python:3.11-slim`.
- **Multi-stage Builds**: Mandatory for all production-bound images.
- **Security Scanning**: Run `pnpm security:scan` to audit container vulnerabilities.

## 🛡️ Networking & Security

- **Zero-Trust**: All inter-service communication between Frontend and AI Engine must be authenticated.
- **SSL/TLS**: Mandatory for all endpoints. Automated verification via `pnpm check-ssl-certificate-expiry-openssl`.
- **Rate Limiting**: Integrated via Upstash/Redis to protect the simulator.

## 🧪 Environmental Consistency

- **Zod for Env**: Every environment variable must be defined and validated via a strict schema (e.g., `src/env.mjs`).
- **Secret Management**: Never commit `.env` files. Use Vercel Environment Variables or sealed secrets for production.

## 🚀 Infrastructure Checklist

- [ ] Does `docker-compose.yml` pass a health check?
- [ ] Are environment variables validated via `zod`?
- [ ] Is SSL enabled for the target domain?
- [ ] Are rate limits configured for AI endpoints?
- [ ] Has the build been tested in a "Staging" Docker environment?
