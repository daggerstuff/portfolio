---
description: Standards for Redis usage (Upstash/Self-hosted) for rate limiting and session caching.
---

# Redis: High-Performance Empathy

## 🏗️ The Speed Layer

Redis powers our real-time performance, serving as the primary layer for:

- **Rate Limiting**: Protecting the AI Engine from abuse.
- **Session Caching**: Storing ephemeral simulation states for near-instant retrieval.
- **WebSocket State**: Managing active connections in the Gym.

## 🛠️ Tooling & Integration

- **Provider**: **Upstash** (Production) or local Docker Redis (Development).
- **Libraries**: `@upstash/redis` or `ioredis`.
- **Validation**: Cache keys must follow a strict, prefixed naming convention: `pe:session:<id>`, `pe:rate:<user>`.

## 💎 Performance & Architecture

- **TTL (Time To Live)**: Every key must have a TTL. Ephemeral session state should expire after 24 hours of inactivity.
- **Data Structures**: Use `Sorted Sets` for leaderboard or emotional intensity tracking over time.

## 🛡️ Security & Privacy

- **Zero-Leak Policy**: Never store sensitive conversational content (PII) in Redis without encryption.
- **Access Control**: Use dedicated ACLs or API tokens for Upstash.

## 🧪 Testing

- **Mocking**: Use `ioredis-mock` for unit testing logic that depends on Redis.
- **Integration**: Verify rate limiting behavior in Playwright E2E tests.

## 🚀 Redis Checklist

- [ ] Does every key have a defined TTL?
- [ ] Are keys properly prefixed to avoid collisions?
- [ ] Is PII excluded from the cache?
- [ ] Is rate limiting active for the current environment?
- [ ] Are Upstash credentials stored securely (not in version control)?
