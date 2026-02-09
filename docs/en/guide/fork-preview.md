# Fork Site Preview

After forking a documentation project, you may want to preview the modified site on your own fork. This section explains how to deploy and preview a documentation site from a forked repository.

## GitHub Pages Deployment

Most documentation projects use GitHub Pages for deployment. After forking, you need to enable it manually.

### Enabling GitHub Pages Manually

1. Go to your forked repository's **Settings**
2. Find **Pages** in the left sidebar
3. Under **Source**, select the deployment method

![alt text](/img/fork-preview.png)

### Deploying via GitHub Actions

If the original project uses GitHub Actions for automatic deployment, after forking you need to:

1. Go to the **Actions** tab
2. Click **I understand my workflows, go ahead and enable them**
3. Manually trigger a build, or push a new commit to trigger one

::: warning Note
GitHub Actions are **disabled by default** in forked repositories and must be enabled manually.
:::

## Local Preview for Different Frameworks

Before submitting a PR, it is recommended to preview the site locally first.

### VitePress

```bash
npm install
npm run docs:dev
```

Visit `http://localhost:5173` to see the result.

### Docsify

```bash
# Install docsify-cli (if not already installed)
npm install -g docsify-cli

# Start local server
docsify serve docs
```

Visit `http://localhost:3000` to see the result.

### MkDocs

```bash
pip install mkdocs
mkdocs serve
```

Visit `http://localhost:8000` to see the result.

## Fork Repository URL

After successful deployment, your forked site will be available at:

```
https://your-username.github.io/project-name/
```

::: tip Tip
Previewing locally and confirming everything looks correct before submitting a PR can significantly reduce the number of back-and-forth review cycles.
:::

## Next Step

Now that you know how to preview your site, learn how to configure [SEO & Search Engines](./seo) for your documentation site.
