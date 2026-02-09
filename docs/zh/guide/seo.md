# SEO 与搜索引擎

开源文档站点如果不做 SEO 配置，搜索引擎可能无法正确索引内容，导致用户搜不到你的项目文档。本节简要介绍各主流文档框架的 SEO 方案。

## 为什么需要关注 SEO

- 让用户通过搜索引擎找到你的项目文档
- 提升项目的可见度和影响力
- 方便贡献者快速定位到相关文档页面

## 关键 SEO 要素

| 要素 | 说明 |
|------|------|
| Sitemap | 站点地图，告诉搜索引擎有哪些页面 |
| Meta 标签 | 页面标题、描述、关键词 |
| Open Graph | 社交媒体分享时的预览信息 |
| 语义化 HTML | 正确使用标题层级（h1-h6） |

## VitePress

VitePress 内置了 sitemap 生成功能，只需在配置中指定 `hostname`：

```ts
// .vitepress/config.mts
export default defineConfig({
  sitemap: {
    hostname: 'https://your-site.com',
  },
})
```

VitePress 还支持通过 `head` 配置添加全局 meta 标签，以及在每个页面的 frontmatter 中设置单独的 `title` 和 `description`。

## Docsify

Docsify 是纯客户端渲染（SPA），搜索引擎爬虫默认无法抓取内容。解决方案：

- **docsify-ssr**：服务端渲染插件
- **prerender**：使用 `prerender-spa-plugin` 预渲染为静态 HTML
- 在 `index.html` 中手动添加 meta 标签

::: warning 注意
Docsify 的 SEO 天然较弱，如果 SEO 是硬需求，建议考虑 VitePress 或 MkDocs 等支持静态生成的框架。
:::

## MkDocs

MkDocs Material 主题内置了 SEO 支持：

- 自动生成 sitemap.xml
- 支持 Open Graph 和 Twitter Card meta 标签
- 支持 `meta` frontmatter 自定义页面描述

## 各框架 SEO 能力对比

| 框架 | Sitemap | SSR/SSG | Meta 标签 | 开箱即用 |
|------|---------|---------|-----------|----------|
| VitePress | 内置 | SSG | 支持 | 好 |
| Docsify | 无 | SPA | 手动 | 差 |
| MkDocs | 内置 | SSG | 支持 | 好 |
| Docusaurus | 内置 | SSG | 支持 | 好 |

::: tip 建议
选择文档框架时，如果项目需要被搜索引擎索引，优先选择支持 SSG（静态站点生成）的框架。
:::

## 下一步

最后，来看看开源贡献中的[常见错误与反面模式](./anti-patterns)。
