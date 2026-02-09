# 认识开源项目结构

在开始贡献之前，你需要先了解一个标准的开源项目由哪些部分组成。本节以 GitHub 上的真实项目为例，带你认识各个关键区域。

## 仓库首页概览

一个典型的 GitHub 仓库首页包含以下区域：

![alt text](/img/project-structure.png)

| 区域 | 说明 |
|------|------|
| **仓库名称** | `组织名/项目名` 格式，如 `datawhalechina/torch-rechub` |
| **Star / Fork / Watch** | 右上角的三个按钮，反映项目热度和关注度 |
| **About** | 右侧栏的项目简介 |
| **文件列表** | 项目的源代码和配置文件 |
| **README** | 文件列表下方自动渲染的项目说明文档 |

## 关键文件和目录

### README.md

项目的"门面"，通常包含：

- 项目简介和功能说明
- 安装和使用方法
- 贡献指南的链接
- 许可证信息

### LICENSE

声明项目的开源许可证类型（MIT、Apache 2.0、GPL 等）。没有 LICENSE 的项目**默认保留所有权利**，不代表可以随意使用。

### CONTRIBUTING.md

贡献指南，说明如何参与项目开发。通常包含：

- 开发环境搭建
- 代码风格要求
- 提交 PR 的流程
- Issue 报告规范

### .github/ 目录

存放 GitHub 特有的配置文件：

- `ISSUE_TEMPLATE/` — Issue 模板，引导用户规范地报告问题
- `PULL_REQUEST_TEMPLATE.md` — PR 模板，提醒贡献者填写必要信息
- `workflows/` — GitHub Actions 工作流（CI/CD）

## GitHub 功能区域

### Issues

项目的"问题追踪器"，用于：

- 报告 Bug
- 提出新功能建议
- 讨论技术方案

![alt text](/img/issues-list.png)

### Pull Requests

代码贡献的入口。所有对项目的修改都应该通过 PR 提交，而不是直接推送到主分支。

![alt text](/img/pr-list.png)

### Actions

GitHub Actions 是内置的 CI/CD 系统，常见用途：

- 自动运行测试
- 自动构建和部署文档站点
- 代码质量检查（lint）

### Releases

项目的正式发布版本。每个 Release 通常包含：

- 版本号（遵循 [Semantic Versioning](https://semver.org/)）
- 变更日志（Changelog）
- 可下载的构建产物

## 分支模型

大多数开源项目采用以下分支策略：

- **`main`（或 `master`）**：稳定的主分支，只接受通过 PR 合并的代码
- **`dev` / `develop`**：开发分支（部分项目使用）
- **`feature/*`**：功能分支，从 `main` 创建，完成后通过 PR 合并回去

::: warning 重要
永远不要直接向 `main` 分支推送代码。所有修改都应该通过 Pull Request 进行。
:::

## 下一步

了解了项目结构后，让我们进入实际操作——[Fork 工作流](./fork-workflow)。
