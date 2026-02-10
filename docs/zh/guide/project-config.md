# 项目配置最佳实践

一个规范的开源项目，除了代码本身，还需要一系列配置来保障协作流程的顺畅。本节以真实项目为例，介绍 `.github` 目录下的关键配置。

## .github 目录概览

```
.github/
├── ISSUE_TEMPLATE/          # Issue 模板
│   ├── config.yml           # Issue 模板配置
│   ├── bug_report.md        # Bug 报告模板
│   ├── feature_request.md   # 功能请求模板
│   └── help_wanted.md       # 社区贡献任务模板
├── pull_request_template.md # PR 模板
├── workflows/               # CI/CD 工作流
│   ├── ci.yml               # 持续集成
│   └── deploy.yml           # 文档部署
├── dependabot.yml           # 依赖自动更新
└── release.yml              # Release Notes 配置
```

## Issue 模板

Issue 模板的作用是**引导用户规范地提交问题**，避免出现"不能用了"、"有 bug"这种毫无信息量的 Issue。

### Bug 报告模板

````markdown
---
name: Bug 报告
about: 报告一个 Bug 帮助我们改进
title: '[BUG] '
labels: bug
---

## Bug 描述
简要描述遇到的问题。

## 环境信息
- 操作系统：
- Python 版本：
- 项目版本：

## 复现步骤
1. ...
2. ...

## 期望行为
描述你期望发生什么。

## 实际行为
描述实际发生了什么。

## 错误信息
```
粘贴完整的错误日志
```
````

### 功能请求模板

````markdown
---
name: 功能请求
about: 提出一个新功能建议
title: '[FEATURE] '
labels: enhancement
---

## 功能描述
描述你希望添加的功能。

## 使用场景
为什么需要这个功能？解决什么问题？

## 示例代码
```python
# 期望的使用方式
```
````

### Issue 模板配置

通过 `config.yml` 可以禁用空白 Issue，强制用户使用模板：

```yaml
# .github/ISSUE_TEMPLATE/config.yml
blank_issues_enabled: false
contact_links:
  - name: 💬 讨论区
    url: https://github.com/org/project/discussions
    about: 一般性问题请到讨论区提问
```

这样用户在创建 Issue 时只能选择预设的模板，避免出现信息不全的 Issue。

::: tip 提示
`blank_issues_enabled: false` 是维护大型项目的利器，强烈建议开启。
:::

## Pull Request 模板

PR 模板放在 `.github/pull_request_template.md`，创建 PR 时会自动填充到描述框中。

```markdown
## 修改内容

简要描述本次 PR 做了什么。

## 变更类型

- [ ] Bug 修复
- [ ] 新功能
- [ ] 文档更新
- [ ] 维护/重构

## 关联 Issue

Closes #

## Checklist

- [ ] 代码风格符合项目规范
- [ ] 已添加相关测试
- [ ] 文档已更新（如需要）
- [ ] 本地测试全部通过
```

::: tip 提示
PR 模板中的 Checklist 可以有效提醒贡献者在提交前完成必要的检查。
:::

## GitHub Actions（CI/CD）

GitHub Actions 是自动化流水线，可以在代码提交、PR 创建、Release 发布等事件时自动执行任务。

### 持续集成（CI）

一个典型的 CI 流水线包含以下阶段：

```
代码提交 → Lint 检查 → 单元测试 → 兼容性测试 → 安全扫描 → 构建
```

各阶段的作用：

| 阶段 | 工具示例 | 说明 |
|------|----------|------|
| Lint 检查 | flake8, eslint, isort | 代码风格和格式检查 |
| 单元测试 | pytest, jest | 验证功能正确性 |
| 兼容性测试 | 多版本 Python/Node | 确保不同环境下都能运行 |
| 安全扫描 | Bandit, npm audit | 检测潜在安全漏洞 |
| 构建 | build, webpack | 验证项目能正常构建 |

### 文档部署

文档类项目通常配置自动部署工作流，当 `docs/` 目录有变更时自动构建并发布到 GitHub Pages：

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

## Dependabot 依赖管理

Dependabot 会自动检查项目依赖是否有更新，并创建 PR 来升级。

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

## Release Notes 自动生成

通过 `.github/release.yml` 配置，GitHub 可以在创建 Release 时自动生成分类的变更日志：

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

这样每次发布新版本时，Release Notes 会自动按类别整理所有合并的 PR。

## 配置清单

以下是一个规范开源项目建议配置的完整清单：

| 配置 | 优先级 | 说明 |
|------|--------|------|
| Issue 模板 | 高 | 规范问题报告，减少无效 Issue |
| PR 模板 | 高 | 提醒贡献者填写必要信息 |
| CI 工作流 | 高 | 自动化代码质量检查和测试 |
| 禁用空白 Issue | 中 | 强制使用模板 |
| Dependabot | 中 | 自动依赖更新 |
| Release Notes | 中 | 自动生成变更日志 |
| 文档部署 | 中 | 文档变更自动发布 |

## 下一步

了解了项目配置后，来看看仓库管理相关的内容——[所有权转移](./ownership-transfer)。
