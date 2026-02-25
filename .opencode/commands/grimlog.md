---
description: Add or update a spellbook note
agent: build
---
Use the user input below to update an existing spellbook note or create a new one.

User input: $ARGUMENTS

Working rules:
- Review `src/content/config.ts` and enforce the `notes` collection schema.
- Review existing notes in `src/content/notes/` and reuse established conventions.
- Follow tone and phrasing guidance in `docs/brand-voice.md`.
- Keep writing practical and concise, with light mystical framing.

Action selection:
- If user input clearly targets an existing note (title/slug/context), update that note.
- If there is no clear match, create a new note in `src/content/notes/`.
- If update target is ambiguous, ask one targeted clarifying question.
- If `domain` cannot be confidently inferred for a new note, ask one targeted clarifying question.

For updates:
- Preserve existing metadata unless user explicitly asks to change it.
- Improve or extend note content without breaking frontmatter validity.

For new notes:
- Include frontmatter fields required by the `notes` schema.
- Set `publishedAt` to today's date.
- Set `featured` to `false` unless user explicitly requests otherwise.
- Choose a slug and filename based on the title in kebab-case.

Required note structure:
## Core Idea

## Spell Pattern

## Why It Works

Response requirements:
- State whether you created or updated a note.
- Provide the exact file path changed.
- Provide a concise summary of what changed.
