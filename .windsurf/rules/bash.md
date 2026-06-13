---
description: Standards for Writing Bash and Scripting within the Pixelated Empathy repo.
---

# Shell Scripting: The Automation Engine

## 🏗️ The Project Context

Bash scripts in this repository are primarily used for orchestrating Docker environments, running CI/CD tasks, and managing the bridge between the **Astro Frontend** and the **AI Engine**.

## 🛠️ Scripting Standards

### 1. Safety First

- **Strict Mode**: Every script must start with `set -euo pipefail`.
- **Exits**: Handle non-zero exit codes gracefully with informative error messages.

### 2. Dependency Awareness

- **Package Managers**: Scripts must favor `pnpm` for Node tasks and `uv` for Python tasks.
- **Verification**: Use `command -v <tool>` to verify dependencies before execution.

## 🛡️ Security & Privacy

- **No Secrets**: Never hardcode API keys or credentials in shell scripts. Use environment variables.
- **PII Awareness**: Ensure that script outputs (especially in CI) do not leak PII by using redirection or masking.

## 🧪 Validation

- Use **ShellCheck** to audit scripts for common pitfalls.
- Run `pnpm check:scripts` (if available) to verify script health.

## 🚀 Scripting Checklist

- [ ] Does the script start with `set -euo pipefail`?
- [ ] are all variables quoted to handle spaces?
- [ ] Is `pnpm`/`uv` used for package-specific tasks?
- [ ] Is there an informative help message (`--help`)?
- [ ] Does it clean up temporary files on exit (using `trap`)?
