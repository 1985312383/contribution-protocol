import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Contribution Protocol',
  description: 'A practical guide to standard open-source contribution workflows',

  locales: {
    zh: {
      label: '简体中文',
      lang: 'zh-CN',
      link: '/zh/',
      themeConfig: {
        nav: [
          { text: '首页', link: '/zh/' },
          { text: '指南', link: '/zh/guide/why' },
        ],
        sidebar: {
          '/zh/guide/': [
            {
              text: '开始之前',
              items: [
                { text: '为什么需要贡献规范', link: '/zh/guide/why' },
                { text: '认识开源项目结构', link: '/zh/guide/project-structure' },
              ],
            },
            {
              text: '标准贡献流程',
              items: [
                { text: 'Fork 工作流', link: '/zh/guide/fork-workflow' },
                { text: 'Commit 规范', link: '/zh/guide/commit-conventions' },
                { text: 'Pull Request 规范', link: '/zh/guide/pull-request' },
              ],
            },
            {
              text: '仓库管理',
              items: [
                { text: '所有权转移', link: '/zh/guide/ownership-transfer' },
                { text: 'Fork 站点预览', link: '/zh/guide/fork-preview' },
                { text: 'SEO 与搜索引擎', link: '/zh/guide/seo' },
              ],
            },
            {
              text: '附录',
              items: [
                { text: '常见错误与反面模式', link: '/zh/guide/anti-patterns' },
              ],
            },
          ],
        },
        outline: { label: '页面导航' },
        docFooter: { prev: '上一页', next: '下一页' },
      },
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'Guide', link: '/en/guide/why' },
        ],
        sidebar: {
          '/en/guide/': [
            {
              text: 'Before You Start',
              items: [
                { text: 'Why Contribution Standards', link: '/en/guide/why' },
                { text: 'Anatomy of an Open-Source Project', link: '/en/guide/project-structure' },
              ],
            },
            {
              text: 'Standard Workflow',
              items: [
                { text: 'Fork Workflow', link: '/en/guide/fork-workflow' },
                { text: 'Commit Conventions', link: '/en/guide/commit-conventions' },
                { text: 'Pull Request Standards', link: '/en/guide/pull-request' },
              ],
            },
            {
              text: 'Repository Management',
              items: [
                { text: 'Ownership Transfer', link: '/en/guide/ownership-transfer' },
                { text: 'Fork Site Preview', link: '/en/guide/fork-preview' },
                { text: 'SEO & Search Engines', link: '/en/guide/seo' },
              ],
            },
            {
              text: 'Appendix',
              items: [
                { text: 'Common Mistakes & Anti-Patterns', link: '/en/guide/anti-patterns' },
              ],
            },
          ],
        },
      },
    },
  },

  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com' },
    ],
    search: {
      provider: 'local',
    },
  },

  head: [
    ['meta', { name: 'author', content: '柯慕灵' }],
    ['meta', { name: 'keywords', content: 'open-source, contribution, guide, fork, pull-request, git' }],
  ],

  sitemap: {
    hostname: 'https://contribution-protocol.example.com',
  },
})
