# Fork 工作流

Fork 工作流是开源项目贡献的标准方式。它的核心思想是：**你不直接修改原始仓库，而是在自己的副本上工作，完成后通过 Pull Request 提交修改**。

## 为什么不能直接在主仓库改代码

很多新手会问：我有仓库的写权限，为什么不能直接 push？

原因很简单：

- 主仓库是所有人共享的，你的未经审查的代码可能破坏项目
- 没有 Code Review 环节，质量无法保证
- 其他人无法知道你在做什么，容易产生冲突
- 项目历史会变得混乱

::: danger 反面案例
直接在主仓库的 `main` 分支上修改代码，是最常见也是最严重的贡献错误。即使你是项目的 collaborator，也应该通过 Fork + PR 的方式贡献代码。
:::

## 完整流程概览

```
原始仓库 (upstream)
    │
    ├── 1. Fork ──→ 你的仓库 (origin)
    │                    │
    │                    ├── 2. Clone 到本地
    │                    │
    │                    ├── 3. 创建功能分支
    │                    │
    │                    ├── 4. 编写代码 + Commit
    │                    │
    │                    ├── 5. Push 到 origin
    │                    │
    │                    └── 6. 创建 Pull Request ──→ 原始仓库
    │
    └── 7. Review & Merge
```

## 第一步：Fork 仓库

在 GitHub 上打开你想贡献的项目，点击右上角的 **Fork** 按钮。

![alt text](/img/fork-button.png)

![alt text](/img/create-fork.png)

Fork 完成后，你的 GitHub 账号下会出现一个同名仓库，格式为 `你的用户名/项目名`。

![alt text](/img/fork-repo.png)

## 第二步：Clone 到本地

::: code-group

```bash [命令行]
# Clone 你 Fork 后的仓库（不是原始仓库）
git clone https://github.com/你的用户名/项目名.git
cd 项目名
```

```txt [GitHub Desktop]
1. 打开 GitHub Desktop
2. 点击 File → Clone Repository
3. 在列表中找到你 Fork 的仓库，或粘贴仓库 URL
4. 选择本地存储路径，点击 Clone
```

:::

## 第三步：添加上游仓库

::: code-group

```bash [命令行]
# 添加原始仓库为 upstream
git remote add upstream https://github.com/原始组织/项目名.git

# 验证 remote 配置
git remote -v
# origin    https://github.com/你的用户名/项目名.git (fetch)
# origin    https://github.com/你的用户名/项目名.git (push)
# upstream  https://github.com/原始组织/项目名.git (fetch)
# upstream  https://github.com/原始组织/项目名.git (push)
```

```txt [GitHub Desktop]
GitHub Desktop 会自动识别 Fork 关系。
Clone 完成后，你可以在菜单栏看到：
  Branch → Merge into current branch → 选择 upstream/main
GitHub Desktop 会自动将原始仓库设置为 upstream。
```

:::

## 第四步：创建功能分支

::: code-group

```bash [命令行]
# 确保你在 main 分支上，并同步上游最新代码
git checkout main
git fetch upstream
git merge upstream/main

# 创建并切换到新的功能分支
git checkout -b feat/add-search-feature
```

```txt [GitHub Desktop]
1. 确保当前分支是 main（左上角 Current Branch）
2. 点击 Branch → New Branch
3. 输入分支名，如 feat/add-search-feature
4. 点击 Create Branch
```

:::

::: tip 分支命名建议
使用有意义的前缀：
- `feat/xxx` — 新功能
- `fix/xxx` — 修复 Bug
- `docs/xxx` — 文档修改
- `refactor/xxx` — 代码重构
:::

## 第五步：编写代码并提交

::: code-group

```bash [命令行]
# 编写代码后，查看修改
git status
git diff

# 添加修改的文件（不要用 git add .）
git add src/search.js
git add docs/search.md

# 提交（遵循 Commit 规范，详见下一章）
git commit -m "feat: add search functionality"
```

```txt [GitHub Desktop]
1. 编写代码后，GitHub Desktop 左侧会自动显示所有改动文件
2. 勾选你要提交的文件（不要全选无关文件）
3. 点击某个文件可以查看具体的 diff
4. 在左下角的 Summary 框中输入 commit message，如：
   feat: add search functionality
5. 点击 Commit to feat/add-search-feature
```

:::

::: warning 注意
- 不要使用 `git add .` 或 `git add -A`，逐个添加你修改的文件
- 每次提交只做一件事，不要把多个不相关的修改混在一起
- commit message 要有意义，详见 [Commit 规范](./commit-conventions)
:::

## 第六步：Push 到你的仓库

::: code-group

```bash [命令行]
git push origin feat/add-search-feature
```

```txt [GitHub Desktop]
提交完成后，点击顶部的 Push origin 按钮即可。
如果是新分支第一次推送，按钮会显示为 Publish branch。
```

:::

## 第七步：创建 Pull Request

Push 完成后，打开 GitHub，你会看到一个提示横幅，点击 **Compare & pull request**。

![alt text](/img/compare-pull-request.png)

填写 PR 信息（详见 [Pull Request 规范](./pull-request)），然后点击 **Create pull request**。

## 保持与上游同步

在你开发的过程中，原始仓库可能已经有了新的提交。你需要定期同步：

::: code-group

```bash [命令行]
git checkout main
git fetch upstream
git merge upstream/main
git push origin main
```

```txt [GitHub 网页]
1. 打开你 Fork 的仓库页面
2. 如果落后于上游，页面会显示 "This branch is X commits behind"
3. 点击 Sync fork → Update branch 即可一键同步
```

```txt [GitHub Desktop]
1. 切换到 main 分支
2. 点击菜单 Branch → Merge into current branch
3. 选择 upstream/main
4. 合并完成后点击 Push origin
```

:::

如果你的功能分支也需要同步上游的最新改动：

```bash
git checkout feat/add-search-feature
git rebase main
```

::: warning 冲突处理
如果 rebase 过程中出现冲突，Git 会暂停并提示你手动解决。解决后：
```bash
git add 冲突文件
git rebase --continue
```
:::

## 下一步

代码提交了，但 commit message 怎么写才规范？请看 [Commit 规范](./commit-conventions)。
