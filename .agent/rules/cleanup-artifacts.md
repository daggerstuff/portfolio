# Automatic Artifact Cleanup Rule

## 🧹 Trigger
**MUST EXECUTE** at the end of every task, immediately before sending the final `notify_user` message.

## 🎯 Objective
Prevent "random unusable files" from cluttering the **user's workspace**. Files created for your own internal use should be cleaned up *only* if they are in the user's workspace.

## 📜 The Protocol

### 1. Identify Debris
Scan the user's workspace (`.`) for:
*   **Temporary Scripts**: Any `.sh`, `.py`, or other scripts created solely for execution during the task (e.g., `temp_fix.sh`, `debug_test.js`).
*   **Test Artifacts**: Dummy files created for verification (e.g., `test_perm_022`, `dummy.txt`).
*   **Misplaced Configs**: Any temporary configuration files that are not part of the project proper.

### 2. The Cleanup Action
**DELETE** these files unconditionally upon task completion, unless the user explicitly requested to keep them.
*   *Command:* `rm <file_path>`
*   *Verification:* Ensure they are gone.

### 3. Reporting
In your final `notify_user` message, append a brief footer:
> 🧹 **Cleanup**: Removed [list of files] from your workspace.

## ⚠️ Exceptions
*   **Internal Brain**: Do **NOT** delete files in `.gemini/` or `.agent/`. These are for your context and memory.
*   **Permanent Documentation**: Do **NOT** delete files in `docs/`, `arch/`, or `.memory/` that are intended to be part of the project's long-term record.
*   **User Requests**: If the user explicitly asks to "create a script to do X", that script is a DELIVERABLE, not debris. Do not delete it.

## 🧠 Mindset
"Leave no trace **in the user's home**." The user should see the *results* of your work (code changes, fixed configs), not the *tools* you used to get there.
