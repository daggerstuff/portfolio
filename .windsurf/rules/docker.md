---
description: Standards for Containerization and Docker Compose orchestration.
---

# Docker: Encapsulating Empathy

## 🏗️ The Orchestration Layer

We use Docker to ensure "it works on every therapist's machine." Our primary tool is **Docker Compose** for local development, staging, and production-ready containers.

## 🛠️ Docker Compose Standards

- **Command**: `pnpm docker:up` (Starts the stack).
- **Services**:
  - `frontend`: The Astro production build.
  - `ai-engine`: The Python/uv environment.
  - `postgres`, `mongodb`, `redis`: The persistent and speed layers.

## 🏗️ Dockerfile Best Practices

### 1. Multi-Stage Builds

Mandatory for decreasing image size and increasing security.

- **Stage 1**: Build (pnpm install/uv sync).
- **Stage 2**: Release (Minimal alpine/slim base).

### 2. Standard Bases

- **Node**: `node:20-alpine` (Astro v5 optimized).
- **Python**: `python:3.11-slim` (AI Engine optimized).

## 🛡️ Security & Privacy

- **Non-Root User**: Never run containers as `root`.
- **Secret Hygiene**: Use Docker Secrets or environment variables; never bake credentials into images.
- **Scanning**: Audit images via `pnpm security:scan`.

## 🚀 Docker Checklist

- [ ] Does the Dockerfile use a multi-stage build?
- [ ] Are base images pinned to specific versions (not `latest`)?
- [ ] Is `pnpm` or `uv` used for package installation?
- [ ] Does the container run as a non-root user?
- [ ] Have you verified the `docker-compose.yml` health checks?
