# Project Config Best Practices

A well-maintained open-source project needs more than just code — it requires a set of configurations to ensure smooth collaboration. This section introduces the key configurations in the `.github` directory using real project examples.

## .github Directory Overview

```
.github/
├── ISSUE_TEMPLATE/          # Issue templates
│   ├── config.yml           # Issue template config
│   ├── bug_report.md        # Bug report template
│   ├── feature_request.md   # Feature request template
│   └── help_wanted.md       # Community contribution template
├── pull_request_template.md # PR template
├── workflows/               # CI/CD workflows
│   ├── ci.yml               # Continuous integration
│   └── deploy.yml           # Documentation deployment
├── dependabot.yml           # Automated dependency updates
└── release.yml              # Release notes config
```

## Issue Templates

Issue templates **guide users to submit well-structured reports**, preventing vague issues like "it's broken" or "there's a bug".

### Bug Report Template

````markdown
---
name: Bug Report
about: Report a bug to help us improve
title: '[BUG] '
labels: bug
---

## Bug Description
Briefly describe the issue.

## Environment
- OS:
- Python version:
- Project version:

## Steps to Reproduce
1. ...
2. ...

## Expected Behavior
What you expected to happen.

## Actual Behavior
What actually happened.

## Error Message
```
Paste the full error log
```
````

### Issue Template Config

Use `config.yml` to disable blank issues and force users to use templates:

```yaml
# .github/ISSUE_TEMPLATE/config.yml
blank_issues_enabled: false
contact_links:
  - name: 💬 Discussions
    url: https://github.com/org/project/discussions
    about: For general questions, please use Discussions
```

This ensures users can only create issues using predefined templates, preventing low-quality submissions.

::: tip
`blank_issues_enabled: false` is essential for maintaining large projects. Highly recommended.
:::

## Pull Request Template

The PR template is placed at `.github/pull_request_template.md`. When creating a PR, its content is automatically populated in the description field.

```markdown
## What Changed

Briefly describe what this PR does.

## Change Type

- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Maintenance / Refactoring

## Related Issue

Closes #

## Checklist

- [ ] Code follows the project's style guidelines
- [ ] Relevant tests have been added
- [ ] Documentation has been updated (if needed)
- [ ] All local tests pass
```

::: tip
The checklist in a PR template effectively reminds contributors to complete necessary checks before submitting.
:::

## GitHub Actions (CI/CD)

GitHub Actions is an automation pipeline that runs tasks automatically on events like code pushes, PR creation, or release publishing.

### Continuous Integration (CI)

A typical CI pipeline includes the following stages:

```
Code Push → Lint → Unit Tests → Compatibility Tests → Security Scan → Build
```

What each stage does:

| Stage | Example Tools | Purpose |
|-------|---------------|---------|
| Lint | flake8, eslint, isort | Code style and formatting checks |
| Unit Tests | pytest, jest | Verify functional correctness |
| Compatibility | Multi-version Python/Node | Ensure it works across environments |
| Security Scan | Bandit, npm audit | Detect potential vulnerabilities |
| Build | build, webpack | Verify the project builds successfully |

### Documentation Deployment

Documentation projects typically have an auto-deploy workflow that builds and publishes to GitHub Pages when the `docs/` directory changes:

```yaml
# .github/workflows/deploy.yml
name: Deploy Docs
on:
  push:
    branches: [main]
    paths:
      - 'docs/**'
      - 'package.json'

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm install
      - run: npm run docs:build
      - uses: peaceiris/actions-gh-pages@v4
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: docs/.vitepress/dist
```

## Dependabot

Dependabot automatically checks for dependency updates and creates PRs to upgrade them.

```yaml
# .github/dependabot.yml
version: 2
updates:
  - package-ecosystem: pip
    directory: /
    schedule:
      interval: weekly
    labels:
      - dependencies
      - python
    open-pull-requests-limit: 5

  - package-ecosystem: github-actions
    directory: /
    schedule:
      interval: weekly
    labels:
      - dependencies
      - github-actions
    open-pull-requests-limit: 2
```

## Automated Release Notes

With `.github/release.yml`, GitHub can automatically generate categorized changelogs when creating a Release:

```yaml
# .github/release.yml
changelog:
  exclude:
    labels:
      - ignore-for-release
    authors:
      - dependabot
  categories:
    - title: ✨ Features
      labels:
        - enhancement
    - title: 🐛 Bug Fixes
      labels:
        - bug
    - title: 📝 Documentation
      labels:
        - documentation
    - title: 🔄 Other Changes
      labels:
        - '*'
```

This way, every time a new version is released, the Release Notes will automatically organize all merged PRs by category.

## Config Checklist

Here is a complete checklist of recommended configurations for a well-maintained open-source project:

| Config | Priority | Purpose |
|--------|----------|---------|
| Issue Templates | High | Standardize bug reports, reduce low-quality issues |
| PR Template | High | Remind contributors to provide necessary information |
| CI Workflow | High | Automate code quality checks and testing |
| Disable Blank Issues | Medium | Force users to use templates |
| Dependabot | Medium | Automated dependency updates |
| Release Notes | Medium | Auto-generate changelogs |
| Docs Deployment | Medium | Auto-publish on documentation changes |

## Next Step

Now that you understand project configuration, let's move on to repository management — [Ownership Transfer](./ownership-transfer).
