---
description: Standards for PostgreSQL usage as the primary relational persistence layer.
---

# PostgreSQL: Structured Understanding

## 🏗️ The Relational Foundation

PostgreSQL stores our core relational data: User accounts, session metadata, therapist certifications, and historical simulation logs.

## 🛠️ Tooling & Integration

- **ORM**: Use **Prisma** or **Drizzle** for type-safe database access.
- **Migration**: Always use migrations; never modify the schema manually in production.
- **Seed Data**: Populated via `pnpm setup:db` using realistic developer data.

## 💎 Performance & Architecture

### 1. Indexing Strategy

- Index foreign keys and frequently queried simulation metadata.
- Use `JSONB` for flexible, but queryable, emotional event logs.

### 2. Branded Types

- Mapping database IDs to Branded TypeScript types (e.g., `UserId`) is mandatory.

## 🛡️ Security & Privacy

- **RBAC**: Enforce Role-Based Access Control at the application level.
- **Data Protection**: Sensitive PII/PHI must be encrypted at rest.
- **Queries**: Use parameterized queries (built-in with modern ORMs) to prevent SQL Injection.

## 🧪 Testing

- **Dockerized Tests**: Use a dedicated PostgreSQL container in Docker Compose for integration tests.
- **Clean State**: Ensure each test run starts with a predictable schema state via `vitest`.

## 🚀 PostgreSQL Checklist

- [ ] Is the schema normalized where appropriate?
- [ ] Are all sensitive fields encrypted or redacted?
- [ ] Does every query have an execution plan audit?
- [ ] Are migration files checked into version control?
- [ ] Is the database healthy in the `docker-compose.yml` environment?
