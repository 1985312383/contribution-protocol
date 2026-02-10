# Commit 规范

良好的 commit message 是项目可维护性的基石。它让每一次修改都有迹可循，让协作者能快速理解变更的目的。

## Conventional Commits

本指南推荐使用 [Conventional Commits](https://www.conventionalcommits.org/) 规范，格式如下：

```
<type>(<scope>): <description>

[可选的正文]

[可选的脚注]
```

### type（类型）

| 类型 | 说明 |
|------|------|
| `feat` | 新功能 |
| `fix` | 修复 Bug |
| `docs` | 文档修改 |
| `style` | 代码格式（不影响逻辑） |
| `refactor` | 重构（既不是新功能也不是修复） |
| `test` | 添加或修改测试 |
| `chore` | 构建工具、依赖管理等杂项 |
| `ci` | CI/CD 配置修改 |

### scope（范围）

可选，用括号包裹，表示本次修改影响的模块或范围：

```
feat(auth): add OAuth2 login
fix(parser): handle empty input
docs(readme): update installation guide
```

### description（描述）

简短描述本次修改的内容，注意：

- 使用英文，首字母小写
- 不加句号结尾
- 使用祈使语气（add 而不是 added）
- 控制在 50 个字符以内

## 好的 vs 坏的 commit message

### 好的示例

```
feat: add user avatar upload
fix(api): prevent null pointer on empty response
docs: add contributing guidelines
refactor: extract validation logic into utils
```

### 坏的示例

```
update                          # 完全没有信息量
fix bug                         # 修了什么 bug？
1                               # ???
修改了一些东西                    # 中文且无意义
add file                        # 加了什么文件？为什么？
WIP                             # 不应该提交未完成的工作
```

## 每次提交只做一件事

一个 commit 应该是一个**原子操作**——只做一件事，且做完整。

::: danger 反面案例
```
feat: add search, fix login bug, update readme, refactor utils
```
这种把多个不相关修改塞进一个 commit 的做法，会让 `git log`、`git bisect`、`git revert` 全部失效。
:::

## 写好 commit message 的原则

1. **说"为什么"而不是"做了什么"**：代码 diff 已经说明了你做了什么，commit message 应该解释为什么要这样做
2. **面向未来的读者**：想象半年后有人在 `git log` 里看到这条记录，他能理解吗？
3. **保持一致性**：整个项目应该使用统一的 commit 风格

## 借助 AI 辅助撰写

手动写 commit message 对新手来说可能有些困难。好消息是，主流工具已经内置了 AI 辅助功能，可以根据你的代码改动自动生成符合规范的 commit message。

### VSCode（GitHub Copilot）

VSCode 的源代码管理面板（Source Control）集成了 Copilot：

1. 在左侧 Source Control 面板中暂存你的改动
2. 点击 commit message 输入框右侧的 **sparkle 图标**（Copilot 图标）
3. Copilot 会根据暂存的 diff 自动生成 commit message
4. 检查并修改生成的内容，确认无误后提交

### GitHub Desktop（AI 生成）

GitHub Desktop 同样支持 AI 辅助：

1. 在左侧勾选要提交的文件
2. 点击 Summary 输入框右侧的 **sparkle 图标**
3. GitHub Desktop 会自动分析改动并生成 commit message
4. 你可以在此基础上修改，然后点击 Commit

### PR 描述也可以用 AI 生成

在 GitHub 网页上创建 Pull Request 时，描述框同样提供了 Copilot 辅助：

- 点击 PR 描述框中的 **Copilot 图标**
- Copilot 会根据本次 PR 包含的所有 commit 自动生成描述
- 生成的描述通常包含修改内容摘要和关键改动列表

::: warning 注意
AI 生成的内容只是起点，不要盲目接受。你应该：
- 检查生成的 type 是否正确（是 `feat` 还是 `fix`？）
- 确认描述是否准确反映了你的修改意图
- 补充 AI 无法推断的上下文（比如"为什么"要做这个改动）
:::

## 下一步

commit 写好了，接下来看看如何规范地提交 [Pull Request](./pull-request)。
