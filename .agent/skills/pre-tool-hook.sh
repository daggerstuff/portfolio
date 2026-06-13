#!/bin/bash
# Pre-tool hook to modify sudo commands

# Source the sudo askpass hook
source /home/vivi/.claude/hooks/sudo-askpass-hook.sh

# Check if the tool is Bash
if [ "$TOOL_NAME" = "Bash" ]; then
    # Modify the command to include -A flag for sudo
    NEW_COMMAND=$(modify_sudo_command "$COMMAND")

    # If command was modified, update it
    if [ "$NEW_COMMAND" != "$COMMAND" ]; then
        echo "Modified command: $NEW_COMMAND"
        # Update the command to use the modified version
        COMMAND="$NEW_COMMAND"
    fi
fi