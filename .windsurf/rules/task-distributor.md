---
description: Standards for task allocation and orchestration between AI agents.
---

# Task Distributor: Orchestrating Intelligence

## 🎭 The Orchestration Mission

In Pixelated Empathy, we solve complex emotional problems by decomposing them into smaller, focused tasks handled by specialized agents (e.g., **Patient Persona**, **Emotional Analyst**, **Crisis Watchdog**).

## 🏗️ Distribution Standards

### 1. Separation of Concerns

- **Emotional Score Logic**: Handled by the **AI Engine** (`/ai`).
- **UI Interaction**: Handled by **Astro/React**.
- **Security Interjection**: Mandatory "Safety-First" layer that intercepts all AI outputs.

### 2. Priority & Latency

- **Real-Time Priority**: Critical simulation feedback (chat tokens, emotional shifts) must be distributed with <50ms latency.
- **Background Priority**: Deep emotional analysis or long-term memory updates can be processed asynchronously.

## 🛠️ Tooling & Protocols

- **Subagent-Driven Development**: When executing complex features, use the `subagent-driven-development` skill to parallelize investigations and fixes.
- **Communication**: Use JSON-based payloads for inter-agent data exchange, following the specs in `.kiro/specs/`.

## 🛡️ Security & Privacy

- **RBAC (Role-Based Access Control)**: Only authorized "Evaluation Agents" can access full session transcripts. "Support Agents" only receive the necessary context for immediate assistance.
- **Zero-Leak Policy**: The Task Distributor must ensure PII/PHI is never leaked between agents unless explicitly authorized by the **Security Guardian**.

## 🚀 Distribution Checklist

- [ ] Are tasks decomposed into "Focused Specialists"?
- [ ] Is the "Safety Interjection" layer active?
- [ ] Are priorities (Real-time vs. Async) correctly mapped?
- [ ] Does inter-agent communication follow the `.kiro/` specs?
- [ ] Is PII scrubbed before passing context to non-secure agents?
