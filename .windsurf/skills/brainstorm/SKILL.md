---
name: brainstorm
description: Socratic questioning protocol + user communication. MANDATORY for complex requests, new features, or unclear requirements. Includes progress reporting and error handling.
allowed-tools: Read, Glob, Grep
---

# Brainstorming & Communication Protocol

> **MANDATORY:** Use for complex/vague requests, new features, updates.

---

## 🛑 SOCRATIC GATE (ENFORCEMENT)

### When to Trigger

| Pattern                                     | Action                             | Trade-offs                                               |
| ------------------------------------------- | ---------------------------------- | -------------------------------------------------------- |
| "Build/Create/Make [thing]" without details | 🛑 Ask 3 questions                 | Increased user effort vs. reduced rework                 |
| Complex feature or architecture             | 🛑 Clarify before implementing     | Increased initial time vs. improved final solution       |
| Update/change request                       | 🛑 Confirm scope                   | Potential for minor scope creep vs. clearer expectations |
| Vague requirements                          | 🛑 Ask purpose, users, constraints | Increased user effort vs. more targeted solution         |

### 🚫 MANDATORY: 3 Questions Before Implementation

1. **STOP** - Do NOT start coding
2. **ASK** - Minimum 3 questions:
   - 🎯 Purpose: What problem are you solving?
   - 👥 Users: Who will use this?
   - 📦 Scope: Must-have vs nice-to-have?
3. **WAIT** - Get response before proceeding

---

## 🧠 Dynamic Question Generation

**⛔ NEVER use static templates.** Read `dynamic-questioning.md` for principles.

### Core Principles

| Principle                          | Meaning                                                                      |
| ---------------------------------- | ---------------------------------------------------------------------------- |
| **Questions Reveal Consequences**  | Each question connects to an architectural decision and its trade-offs.      |
| **Context Before Content**         | Understand the overall context (greenfield, feature, refactor, debug) first. |
| **Minimum Viable Questions**       | Each question should eliminate at least one implementation path.             |
| **Generate Data, Not Assumptions** | Ask questions to gather information rather than making assumptions.          |

### Question Generation Process

```text
1. Parse request → Extract domain, features, scale indicators
2. Identify decision points → Blocking vs. deferable
3. Generate questions → Priority: P0 (blocking) > P1 (high-leverage) > P2 (nice-to-have)
4. Format with trade-offs → What, Why, Options, Default
```

### Question Format (MANDATORY)

```markdown
### [PRIORITY] **[DECISION POINT]**

**Question:** [Clear question]

**Why This Matters:**

- [Architectural consequence]
- [Affects: cost/complexity/timeline/scale]

**Options:**
| Option | Pros | Cons | Best For |
|--------|------|------|----------|
| A | [+] | [-] | [Use case] |
| B | [+] | [-] | [Use case] |

**Trade-offs:**

- [Trade-off 1]
- [Trade-off 2]
  **If Not Specified:** [Default + rationale]
```

**For detailed domain-specific question banks and algorithms**, see: `dynamic-questioning.md`

---

## Progress Reporting (PRINCIPLE-BASED)

**PRINCIPLE:** Transparency builds trust. Status must be visible and actionable.

### Status Board Format

| Agent Name | Status     | Current Task       | Progress     |
| ---------- | ---------- | ------------------ | ------------ |
| Agent Name | ✅🔄⏳❌⚠️ | [Task description] | [% or count] |

### Status Icons

| Icon | Meaning   | Usage                           |
| ---- | --------- | ------------------------------- |
| ✅   | Completed | Task finished successfully      |
| 🔄   | Running   | Currently executing             |
| ⏳   | Waiting   | Blocked, waiting for dependency |
| ❌   | Error     | Failed, needs attention         |
| ⚠️   | Warning   | Potential issue, not blocking   |
| ❌   | Error     | Failed, needs attention         |
| ⚠️   | Warning   | Potential issue, not blocking   |

---

## Error Handling (PRINCIPLE-BASED)

**PRINCIPLE:** Errors are opportunities for clear communication.

### Error Response Pattern

```text
1. Acknowledge the error
2. Explain what happened (user-friendly)
3. Offer specific solutions with trade-offs
4. Ask user to choose or provide alternatives
5. Provide option to report (if needed)
```

### Error Categories

| Category               | Response Strategy                                                                                 |
| ---------------------- | ------------------------------------------------------------------------------------------------- |
| **Port Conflict**      | Offer alternative port or close existing (Trade-offs: User disruption vs. immediate availability) |
| **Dependency Missing** | Auto-install or ask permission (Trade-offs: Speed vs. User control)                               |
| **Build Failure**      | Show specific error + suggested fix (Trade-offs: Verbosity vs. actionable information)            |
| **Unclear Error**      | Ask for specifics (screenshot, console output) (Trade-offs: User effort vs. faster diagnosis)     |

---

## Completion Message (PRINCIPLE-BASED)

**PRINCIPLE:** Celebrate success, guide next steps.

### Completion Structure

```text
1. Success confirmation (celebrate briefly)
2. Summary of what was done (concrete)
3. How to verify/test (actionable)
4. Next steps suggestion (proactive)
```

---

## Communication Principles

| Principle        | Implementation                           |
| ---------------- | ---------------------------------------- |
| **Concise**      | No unnecessary details, get to point     |
| **Visual**       | Use emojis (✅🔄⏳❌) for quick scanning |
| **Specific**     | "~2 minutes" not "wait a bit"            |
| **Alternatives** | Offer multiple paths when stuck          |
| **Proactive**    | Suggest next step after completion       |

---

## Anti-Patterns (AVOID)

| Anti-Pattern                              | Why                          |
| ----------------------------------------- | ---------------------------- |
| Jumping to solutions before understanding | Wastes time on wrong problem |
| Assuming requirements without asking      | Creates wrong output         |
| Over-engineering first version            | Delays value delivery        |
| Ignoring constraints                      | Creates unusable solutions   |
| "I think" phrases                         | Uncertainty → Ask instead    |

---
