# Pull Request Standards

Pull Requests (PRs) are the core mechanism of open-source collaboration. A well-crafted PR helps maintainers quickly understand your changes, speeding up review and merging.

## PR Title

The PR title should be concise and clear, following a format similar to commit messages:

```
feat: add dark mode toggle
fix: resolve login redirect loop
docs: update API reference for v2
```

::: warning Note
Do not write titles like:
- "Changed some stuff"
- "Please merge"
- "Update"
- "PR"
:::

## PR Description

The PR description is the most important part and should include:

### 1. What Was Changed

Briefly describe the content and purpose of this PR.

### 2. Why It Was Changed

Explain the motivation — is it a bug fix, a new feature, or a performance optimization?

### 3. Linked Issues

If there are related Issues, link them using keywords:

```markdown
Closes #123
Fixes #456
Resolves #789
```

GitHub will automatically close the linked Issues when the PR is merged.

### 4. Testing

Describe whether you tested the changes and what the results were.

### 5. Preview Link (Documentation PRs)

If your PR involves documentation changes, you should deploy a preview on your fork and include the preview link for the relevant pages. See [Fork Site Preview](./fork-preview) for details.

## PR Description Template

```markdown
## What Changed

Briefly describe what this PR does.

## Why

Why is this change needed? What Issue is it related to?

Closes #issue_number

## Preview (for documentation PRs)

- Modified page preview: https://your-username.github.io/project-name/path/to/page.html

## Testing

- [ ] Local tests pass
- [ ] Added/updated relevant test cases
```

## Code Review Process

After submitting a PR, maintainers will conduct a Code Review. During this process:

### As a Contributor

- **Be patient**: Maintainers may be busy — don't rush them
- **Take feedback seriously**: Review comments are there to help improve code quality
- **Respond and revise promptly**: Reply to review feedback as soon as possible

### Updating Code Based on Review

::: code-group

```bash [CLI]
# Make changes on the same branch
git add modified-file
git commit -m "fix: address review feedback"
git push origin feat/your-branch
```

```txt [GitHub Desktop]
1. After making changes, GitHub Desktop will show the modified files
2. Check the files, enter a commit message
3. Click Commit, then click Push origin
```

:::

The PR will update automatically — no need to create a new one.

## PR Tips

- **One PR, one thing**: Don't mix multiple unrelated changes in a single PR
- **Keep PRs small**: Large PRs are hard to review and tend to get stalled
- **Don't include unrelated formatting changes**: Only modify what you need to

![alt text](/img/pull-request.png)

## Next Step

Now that you understand the contribution workflow, learn about repository management — [Ownership Transfer](./ownership-transfer).
