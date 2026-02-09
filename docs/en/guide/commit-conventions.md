# Commit Conventions

Good commit messages are the cornerstone of project maintainability. They make every change traceable and help collaborators quickly understand the purpose of each modification.

## Conventional Commits

This guide recommends using the [Conventional Commits](https://www.conventionalcommits.org/) specification, with the following format:

```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

### type

| Type | Description |
|------|-------------|
| `feat` | New feature |
| `fix` | Bug fix |
| `docs` | Documentation changes |
| `style` | Code formatting (no logic changes) |
| `refactor` | Refactoring (neither a new feature nor a bug fix) |
| `test` | Adding or modifying tests |
| `chore` | Build tools, dependency management, and other miscellaneous tasks |
| `ci` | CI/CD configuration changes |

### scope

Optional, wrapped in parentheses, indicating the module or area affected by the change:

```
feat(auth): add OAuth2 login
fix(parser): handle empty input
docs(readme): update installation guide
```

### description

A short description of the change. Keep in mind:

- Use English, lowercase first letter
- No period at the end
- Use imperative mood (add, not added)
- Keep it under 50 characters

## Good vs Bad Commit Messages

### Good Examples

```
feat: add user avatar upload
fix(api): prevent null pointer on empty response
docs: add contributing guidelines
refactor: extract validation logic into utils
```

### Bad Examples

```
update                          # No information at all
fix bug                         # What bug?
1                               # ???
changed some stuff              # Vague and meaningless
add file                        # What file? Why?
WIP                             # Don't commit unfinished work
```

## One Commit, One Thing

A commit should be an **atomic operation** — it does one thing, and does it completely.

::: danger Anti-Pattern
```
feat: add search, fix login bug, update readme, refactor utils
```
Cramming multiple unrelated changes into a single commit renders `git log`, `git bisect`, and `git revert` all useless.
:::

## Principles for Writing Good Commit Messages

1. **Say "why", not "what"**: The code diff already shows what you did — the commit message should explain why you did it
2. **Write for future readers**: Imagine someone reading this entry in `git log` six months from now — will they understand it?
3. **Stay consistent**: The entire project should use a unified commit style

## Next Step

Now that your commits are well-written, learn how to submit a proper [Pull Request](./pull-request).
