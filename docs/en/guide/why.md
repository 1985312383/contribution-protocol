# Why Contribution Standards

## Open Source ≠ Free-for-All

Many people misunderstand "open source": since the code is public, I can change it however I want.

This is wrong.

An open-source project is a **collaborative public asset**, not someone's personal notebook. Every modification affects all users and contributors. A careless commit can:

- Break other people's ongoing work
- Make the project history chaotic and untraceable
- Introduce hard-to-debug issues
- Force maintainers to spend hours cleaning up

## Real-World Problems

When maintaining open-source projects, we frequently encounter these issues:

| Problem | Consequence |
|---------|-------------|
| Committing directly to `main` | Causes massive conflicts for other PRs |
| Commit messages like "update" or "fix" | Impossible to trace why changes were made |
| Merging PRs without descriptions | Nobody knows the purpose of the change |
| Not syncing with upstream | Conflicts pile up until merging is impossible |
| Treating public repos as personal projects | Random refactors and deletions affect everyone |

## Goals of This Guide

This guide provides a **universal, practical** standard for open-source contribution workflows. It:

- **Applies to all open-source projects**, not limited to any specific community or tech stack
- **For contributors**: The complete process from Fork to PR
- **For maintainers**: How to manage repositories and transfer ownership
- **Practice-oriented**: Concrete steps for every operation

## Who Is This For

- **First-time contributors**: New to open source and unsure where to start
- **Experienced but informal developers**: Can write code, but don't follow standard workflows
- **Community maintainers**: Want to establish contribution standards for their teams
- **Collaborators on popular projects**: Need to understand why public projects can't be casually modified

::: tip Core Principle
**Respect collaboration**: Every commit you make is a collaboration with developers worldwide. Treat every contribution as seriously as you would treat professional work.
:::

## Next Step

Let's start by [understanding the anatomy of an open-source project](./project-structure) — what a standard open-source repository looks like.
