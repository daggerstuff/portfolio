---
description: Standards for developing the Pixelated Empathy REST and WebSocket APIs.
---

# API Best Practices: The Simulation Bridge

## 🎭 The Communication Layer

Our APIs connect the **Astro Frontend** with the **AI Engine Submodule** and external integrations. They must be fast, secure, and type-safe.

## 🛠️ Design & Standards

### 1. RESTful Principles

- **Versioning**: All APIs must be versioned (e.g., `/api/v1/...`).
- **Resource-Oriented**: Use nouns for resources (`/api/v1/sessions`).
- **Idempotency**: Ensure `PUT` and `DELETE` operations are idempotent.

### 2. WebSocket Orchestration (The Gym)

- **Real-Time Delivery**: Favor WebSockets (Socket.io) for streaming emotional scores and chat tokens.
- **Heartbeat**: Implement a robust heartbeat/retry mechanism to prevent simulation dropouts.

## 🧪 Documentation & Types

- **OpenAPI**: Maintain a strict OpenAPI/Swagger spec for all REST endpoints.
- **Auto-Generation**: Use `openapi-typescript` to generate type-safe clients for the frontend.
- **Zod Validation**: Every request body and query parameter must be validated via `zod`.

## 🛡️ Security & Privacy

- **Zero-Leak Policy**: Never include PII in success/error messages unless necessary and authorized.
- **Rate Limiting**: Mandatory for all endpoints via Upstash/Redis.
- **CORS**: Strict CORS policy configured in `astro.config.mjs` or server middleware.

## 🧪 Testing

- **Contract Testing**: Verify that the AI Engine output matches the expected API schema.
- **Playwright**: E2E verification of API-to-UI flows.

## 🚀 API Checklist

- [ ] Is the endpoint versioned?
- [ ] Is input validated via `zod`?
- [ ] Is rate limiting applied?
- [ ] Are types generated from the OpenAPI spec?
- [ ] Does the endpoint follow the Branded Type pattern for IDs?
