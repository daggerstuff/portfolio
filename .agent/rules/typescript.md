---
description: Strict TypeScript standards for the Pixelated Empathy codebase.
---

# TypeScript: Engineering the Emotional Cartography

## 🛡️ The Zero-Tolerance Type System

In a system dealing with mental health and crisis intervention, type safety is not a suggestion—it is a mandatory security layer.

### 1. The `any` Prohibition

- **Absolute Ban on `any`**: The `any` keyword is strictly prohibited.
- **Alternatives**: Use `unknown` with a type guard, or a generic `<T>`.
- **Exceptions**: Only allowed in rare, documented legacy interops (requires PR comment justification).

### 2. Branded Types (Domain Integrity)

We use branded types to ensure critical values aren't accidentally mixed.

```typescript
type EmotionScore = number & { readonly __brand: 'NormalizedScore' } // 0.0 - 1.0
type UserId = string & { readonly __brand: 'UserId' }

function validateScore(n: number): EmotionScore {
  return Math.max(0, Math.min(1, n)) as EmotionScore
}
```

### 3. Zod for Boundary Validation

Verify every piece of data entering the system (AI responses, API payloads, user input) using `zod`.

## 🧩 Architectural Patterns

- **Named Exports**: Mandatory for consistency and refactoring efficiency.
- **Strict Mode**: `strict: true` is enforced in `tsconfig.json`.
- **Discriminated Unions**: Prefer these for state management (e.g., Simulation Status: `Initial` | `Running` | `Crisis` | `Complete`).

## 📦 Package Management & Tools

- **Strictly `pnpm`**: Never use `npm` or `yarn`.
- **Vite**: The primary build tool for both unit tests and the Astro engine.
- **Verifications**: Run `pnpm check:all` to verify types, linting, and formatting.

## 🧪 Testing with Types

- **Vitest**: Preferred testing framework.
- **Type-Safe Mocks**: Always use `vi.mocked()` to ensure mocks adhere to the actual interface.

## 🛡️ Security & Privacy

- **Zero-Leak Policy**: Never include PII in types that might be serialized to logs or generic telemetry.
- **Session Safety**: Authenticated types must be extended from the base `Astro.locals` definition in `src/env.d.ts`.

## 🚀 The Specialist's Checklist

- [ ] Does this file have **Zero** `any` types?
- [ ] Are domain-specific values (Scores, IDs) branded?
- [ ] Is runtime data validated via `zod` at the system boundary?
- [ ] Are all exports named?
- [ ] Does `pnpm check:all` pass without warnings?
