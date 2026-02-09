# SEO & Search Engines

If an open-source documentation site is not configured for SEO, search engines may not index the content correctly, making it impossible for users to find your project documentation. This section provides a brief overview of SEO strategies for popular documentation frameworks.

## Why SEO Matters

- Help users find your project documentation through search engines
- Increase the visibility and impact of your project
- Make it easy for contributors to quickly locate relevant documentation pages

## Key SEO Elements

| Element | Description |
|---------|-------------|
| Sitemap | A site map that tells search engines which pages exist |
| Meta Tags | Page title, description, and keywords |
| Open Graph | Preview information when shared on social media |
| Semantic HTML | Proper use of heading hierarchy (h1-h6) |

## VitePress

VitePress has built-in sitemap generation — just specify the `hostname` in the config:

```ts
// .vitepress/config.mts
export default defineConfig({
  sitemap: {
    hostname: 'https://your-site.com',
  },
})
```

VitePress also supports adding global meta tags via the `head` config, and setting individual `title` and `description` in each page's frontmatter.

## Docsify

Docsify is a purely client-side rendered SPA, so search engine crawlers cannot scrape content by default. Solutions include:

- **docsify-ssr**: Server-side rendering plugin
- **prerender**: Use `prerender-spa-plugin` to pre-render static HTML
- Manually add meta tags in `index.html`

::: warning Note
Docsify has inherently weak SEO. If SEO is a hard requirement, consider using a static-generation framework like VitePress or MkDocs instead.
:::

## MkDocs

The MkDocs Material theme has built-in SEO support:

- Automatic sitemap.xml generation
- Open Graph and Twitter Card meta tag support
- `meta` frontmatter for custom page descriptions

## Framework SEO Comparison

| Framework | Sitemap | SSR/SSG | Meta Tags | Out of the Box |
|-----------|---------|---------|-----------|----------------|
| VitePress | Built-in | SSG | Supported | Good |
| Docsify | None | SPA | Manual | Poor |
| MkDocs | Built-in | SSG | Supported | Good |
| Docusaurus | Built-in | SSG | Supported | Good |

::: tip Recommendation
When choosing a documentation framework, if your project needs to be indexed by search engines, prioritize frameworks that support SSG (Static Site Generation).
:::

## Next Step

Finally, take a look at [Common Mistakes & Anti-Patterns](./anti-patterns) in open-source contributions.
