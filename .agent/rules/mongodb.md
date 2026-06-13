---
description: Standards for MongoDB usage for unstructured conversational and emotional data.
---

# MongoDB: Unstructured Emotional Cartography

## 🏗️ The Behavioral Store

MongoDB is our primary store for high-volume, unstructured conversational flows and fine-grained emotional telemetry from the **Empathy Gym™**.

## 🛠️ Tooling & Integration

- **ODM**: Favor **Mongoose** or the native driver with strict TypeScript interfaces.
- **Validation**: Every document must be validated via a **Zod** schema at the application layer.

## 💎 Performance & Architecture

### 1. Document Design

- Favor embedding for data that is conceptually part of a single simulation session (e.g., chat turns).
- Use references for shared entities like "Patient Personas."

### 2. Indexing

- Ensure `sessionID` and `timestamp` are indexed for fast retrieval of historical simulation playbacks.

## 🛡️ Security & Privacy

- **Sanitization**: Sanitize all inputs to prevent NoSQL Injection.
- **Privacy**: Conversational logs must be anonymized (redacted PII) before being used for aggregate analysis or AI training within the system.

## 🧪 Testing

- **In-Memory Store**: Use `mongodb-memory-server` for fast unit tests without requiring a full Docker instance.
- **Integration**: Verify document structure against interfaces in Playwright E2E suites.

## 🚀 MongoDB Checklist

- [ ] Is the document structure optimized for common simulation queries?
- [ ] Are PII fields redacted in the conversational store?
- [ ] Do all collections have associated TypeScript interfaces?
- [ ] Is indexing applied to `sessionID` and `timestamp`?
- [ ] Is the database running in the `pnpm dev:all-services` stack?
