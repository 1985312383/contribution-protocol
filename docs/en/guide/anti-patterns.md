# Common Mistakes & Anti-Patterns

This section summarizes the most common mistakes in open-source contributions. Every item here is drawn from real-world project maintenance experience.

## 1. Committing Directly to the main Branch

**Severity: Critical**

This is the most common and most damaging mistake. Committing directly to the main branch means:

- No Code Review
- Other people's PRs will conflict
- Individual changes cannot be rolled back
- Project history becomes chaotic

::: danger Correct Approach
Always contribute code through the Fork -> Branch -> PR workflow, even if you are a project collaborator.
:::

## 2. Treating a Public Repository as Your Personal Notebook

**Severity: Critical**

Some people, after gaining write access to a repository, treat it like their own personal project:

- Renaming files and directories at will
- Deleting code they "think is useless"
- Large-scale refactoring without discussion
- Adding content unrelated to the project

::: danger Correct Approach
Every change to a public project needs discussion and review. Major changes should be proposed in an Issue first, and work should only begin after consensus is reached.
:::

## 3. Meaningless Commit Messages

**Severity: High**

```
update
fix
1
asdf
changed
```

These commit messages carry zero information. Six months later, no one (including yourself) will understand what was changed.

::: danger Correct Approach
Follow the [Conventional Commits](./commit-conventions) specification — clearly state the type and description.
:::

## 4. Merging PRs Without a Description

**Severity: High**

A blank PR description means:

- No one knows the purpose of the change
- Cannot be linked to a corresponding Issue
- Reviewers must read every line of code to understand the intent

::: danger Correct Approach
Every PR should have a clear description explaining what was changed, why it was changed, and which Issue it relates to.
:::

## 5. Not Syncing with Upstream

**Severity: Medium**

Never syncing the latest code from upstream after forking leads to:

- Your branch diverges further and further from upstream
- Submitting a PR results in numerous conflicts
- Eventually the PR may become unmergeable

::: danger Correct Approach
Keep in sync with upstream regularly:
- **CLI**: `git fetch upstream && git merge upstream/main`
- **GitHub Web**: On your fork's page, click **Sync fork → Update branch**
- **GitHub Desktop**: Switch to main branch, select Branch → Merge into current branch → upstream/main
:::

## 6. Oversized PRs with Too Many Changes

**Severity: Medium**

A single PR containing dozens of file changes across multiple unrelated features:

- Reviewers don't know where to start
- Difficult to pinpoint problems
- If a rollback is needed, it affects other unrelated changes

::: danger Correct Approach
One PR, one thing. If you have multiple changes, split them into separate PRs and submit them individually.
:::
