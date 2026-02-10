# Pull Request 规范

Pull Request（PR）是开源协作的核心环节。一个好的 PR 能让维护者快速理解你的修改，加速 Review 和合并。

## PR 标题

PR 标题应该简洁明了，格式与 commit message 类似：

```
feat: add dark mode toggle
fix: resolve login redirect loop
docs: update API reference for v2
```

::: warning 注意
不要写这样的标题：
- "修改了一些东西"
- "Please merge"
- "Update"
- "PR"
:::

## PR 描述

PR 描述是最重要的部分，应该包含：

### 1. 修改了什么

简要说明本次 PR 的内容和目的。

### 2. 为什么要修改

解释修改的动机，是修复 Bug、实现新功能，还是优化性能？

### 3. 关联 Issue

如果有相关的 Issue，使用关键词关联：

```markdown
Closes #123
Fixes #456
Resolves #789
```

GitHub 会在 PR 合并后自动关闭关联的 Issue。

### 4. 测试情况

说明你是否进行了测试，以及测试结果。

## PR 描述模板

```markdown
## 修改内容

简要描述本次 PR 做了什么。

## 修改原因

为什么需要这个修改？关联的 Issue 是什么？

Closes #issue_number

## 测试

- [ ] 本地测试通过
- [ ] 新增/修改了相关测试用例
```

## Code Review 流程

PR 提交后，维护者会进行 Code Review。这个过程中：

### 作为贡献者

- **耐心等待**：维护者可能很忙，不要催促
- **认真对待反馈**：Review 意见是帮助你提升代码质量
- **及时回复和修改**：收到 Review 意见后尽快响应

### 根据 Review 修改代码

::: code-group

```bash [命令行]
# 在同一个分支上修改代码
git add 修改的文件
git commit -m "fix: address review feedback"
git push origin feat/your-branch
```

```txt [GitHub Desktop]
1. 修改代码后，GitHub Desktop 会自动显示改动
2. 勾选修改的文件，输入 commit message
3. 点击 Commit，然后点击 Push origin
```

:::

PR 会自动更新，不需要重新创建。

## PR 的注意事项

- **一个 PR 只做一件事**：不要在一个 PR 里混合多个不相关的修改
- **保持 PR 尽量小**：大 PR 难以 Review，容易被搁置
- **不要在 PR 中包含无关的格式化修改**：只改你需要改的部分

![alt text](/img/pull-request.png)

## 下一步

了解了贡献流程后，来看看仓库管理相关的内容——[所有权转移](./ownership-transfer)。
