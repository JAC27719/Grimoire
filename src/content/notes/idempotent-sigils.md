---
title: "Idempotent Sigils"
summary: "Guardrails for safe reruns in jobs, queues, and webhook handlers."
domain: "Backend"
tags: ["Idempotency", "Webhooks", "Jobs"]
publishedAt: 2026-02-18
featured: false
---

## Core Idea

Distributed systems repeat work. Idempotency ensures repeated execution converges to one correct outcome.

## Spell Pattern

- Derive stable idempotency keys from business identity.
- Persist key state with outcome and expiry.
- Return prior successful result when the same key appears.

## Why It Works

You gain consistency under retries and reduce duplicate side effects during partial failures.
