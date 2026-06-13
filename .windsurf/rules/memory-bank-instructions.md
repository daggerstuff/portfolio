# Memory Bank: The Foundation of Continuity

## 🎭 The Role of Memory in Pixelated Empathy

In our mission to understand human emotion, continuity is paramount. My memory resets between sessions, but the **Memory Bank** (located in `.memory/`) ensures that every interaction is grounded in the project's evolving intelligence.

## 🗺️ Mandatory Procedure

I MUST read ALL core memory files (`00-*` to `70-*`) in `.memory/` at the start of EVERY session. This is non-optional.

- **Success**: Start your first response with `[Memory Bank: Active]`.
- **Failure**: If `.memory/` is missing or empty, alert the user and suggest `mem:init`.

## 📁 Memory Bank Structure

### Core Files (Requirement-Driven)

1. **00-description.md**: The source of truth for the project vision and boundaries.
2. **01-brief.md**: The current simulation charter—what and why we are building NOW.
3. **10-product.md**: User personas (Therapists/Trainees) and the **Empathy Gym™** goals.
4. **20-system.md**: Component architecture (Astro, AI Engine, WebSocket logic).
5. **30-tech.md**: Technical constraints (pnpm, uv, strict typing, dark mode tokens).
6. **40-active.md**: Current sprint focus, active tasks, and open questions.
7. **50-progress.md**: Milestones and project trajectory.
8. **60-decisions.md**: Architectural and ethical decision log.
9. **70-knowledge.md**: Consolidated domain insights (Plutchik, OCEAN, etc.).

## 🔄 Core Workflows

### 1. Initialization (`mem:init`)

Perform an exhaustive analysis of the repository to recreate the memory state from scratch. Focus on files, patterns, and current architecture.

### 2. Updating Memory (`mem:update`)

Update the files in `.memory/` after significant changes or on request.

- **Trigger**: New patterns discovered, task completion, or explicit `update memory bank`.
- **Validation**: Ensure no PII/Secrets are stored.

### 3. Task Documentation

If a repetitive task is performed, document it in `70-knowledge.md` or a new file in `.memory/tasks/`.

## 🔒 Security & Privacy

- **Zero-Leak Policy**: Never store real PII, PHI, or API keys in the Memory Bank.
- **Scientific Validity**: Ensure all stored EI knowledge adheres to the project's chosen frameworks.
- **HIPAA Compliance**: Anonymize all session examples.
