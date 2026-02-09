# Fork 站点预览

Fork 了一个文档类项目后，你可能想在自己的 Fork 上预览修改后的网站效果。本节介绍如何在 Fork 仓库上部署和预览文档站点。

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

::: tip 提示
本地预览确认无误后再提交 PR，可以大幅减少 Review 来回修改的次数。
:::

## 下一步

了解了站点预览后，来看看如何为文档站点配置 [SEO 与搜索引擎](./seo)。
