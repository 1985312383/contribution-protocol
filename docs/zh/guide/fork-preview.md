# Fork 站点预览

Fork 了一个文档类项目后，你可能想在自己的 Fork 上预览修改后的网站效果。本节介绍如何在 Fork 仓库上部署和预览文档站点。

## 为什么要在 Fork 仓库预览

很多新手修改了文档后，直接提交 PR 到主仓库，让维护者去看效果。这是不对的。

正确的做法是：

1. **先在自己的 Fork 仓库部署预览**，确认页面渲染正确、排版无误
2. **确认没问题后再提交 PR**，并在 PR 描述中附上你的预览链接

::: danger 反面模式
修改文档后直接提交 PR，不检查构建效果。维护者打开一看：格式错乱、图片丢失、链接 404。这种 PR 只会被打回，浪费双方时间。
:::

## 完整的文档贡献流程

```
1. Fork 仓库 → Clone 到本地
2. 创建分支，修改文档内容
3. 本地预览，确认效果 ✓
4. Push 到自己的 Fork 仓库
5. 在 Fork 仓库开启 GitHub Pages，在线预览 ✓
6. 确认无误后，创建 PR，附上预览链接
```

## GitHub Pages 部署

大多数文档项目使用 GitHub Pages 部署。Fork 后，你需要手动开启。

### 手动开启 GitHub Pages

1. 进入你 Fork 的仓库 **Settings**
2. 左侧菜单找到 **Pages**
3. 在 **Source** 中选择部署方式

![alt text](/img/fork-preview.png)

### 通过 GitHub Actions 部署

如果原项目使用 GitHub Actions 自动部署，Fork 后需要：

1. 进入 **Actions** 标签页
2. 点击 **I understand my workflows, go ahead and enable them**
3. 手动触发一次构建，或 push 新的 commit 触发

::: warning 注意
Fork 仓库的 GitHub Actions 默认是**禁用**的，需要手动启用。
:::

## 不同框架的本地预览

在提交 PR 之前，建议先在本地预览效果。

### VitePress

```bash
npm install
npm run docs:dev
```

访问 `http://localhost:5173` 查看效果。

### Docsify

```bash
# 安装 docsify-cli（如果没有）
npm install -g docsify-cli

# 启动本地服务
docsify serve docs
```

访问 `http://localhost:3000` 查看效果。

### MkDocs

```bash
pip install mkdocs
mkdocs serve
```

访问 `http://localhost:8000` 查看效果。

## Fork 仓库的访问地址

部署成功后，你的 Fork 站点地址格式为：

```
https://你的用户名.github.io/项目名/
```

例如，原项目是 `https://original-org.github.io/my-docs/`，你 Fork 后的预览地址就是：

```
https://your-username.github.io/my-docs/
```

::: tip 提示
如果你修改的是某个具体页面，可以直接拼出该页面的完整 URL。例如你修改了 `docs/guide/setup.md`，预览地址就是：
```
https://your-username.github.io/my-docs/guide/setup.html
```
:::

## 在 PR 中附上预览链接

确认 Fork 仓库的预览效果没问题后，创建 PR 时应该在描述中附上预览链接，方便维护者直接查看渲染效果。

### 推荐写法

在 PR 描述中添加一个 **Preview** 部分：

```markdown
## 修改内容

更新了安装指南，补充了 Windows 环境的配置步骤。

## 预览链接

- 修改页面预览：https://your-username.github.io/project-name/guide/setup.html

Closes #42
```

### 为什么要附预览链接

- **维护者不需要本地构建**就能看到你的修改效果
- **加速 Review 流程**：一眼就能看出排版是否正确
- **体现专业态度**：说明你已经验证过修改效果

::: warning 注意
确保你的 Fork 仓库 GitHub Pages 已经构建完成再提交 PR。如果 Pages 还在构建中，维护者点开链接会看到 404。
:::

## 下一步

了解了站点预览后，来看看如何为文档站点配置 [SEO 与搜索引擎](./seo)。
