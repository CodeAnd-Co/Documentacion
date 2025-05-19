// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Code&Co Wiki",
  tagline: "Documentación oficial 🚀",
  favicon: "img/code&co-logoSimpleRound.ico",

  themes: ["@docusaurus/theme-mermaid"],
  // In order for Mermaid code blocks in Markdown to work,
  // you also need to enable the Remark plugin with this option
  markdown: {
    mermaid: true,
  },

  // Set the production url of your site here
  url: "https://codeandco-wiki.netlify.app",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Code&Co", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/CodeAnd-Co/Documentacion/tree/main/documentation",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/CodeAnd-Co/Documentacion/tree/main/documentation",
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      algolia: {
        // The application ID provided by Algolia
        appId: '5L3YX9YMBS',

        // Public API key: it is safe to commit it
        apiKey: '5393c067185bf2d8ffdbd3c6da5eb968',

        indexName: 'codeandco-wiki',

        // Optional: see doc section below
        contextualSearch: true,

        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        externalUrlRegex: 'external\\.com|domain\\.com',

        // Optional: Algolia search parameters
        searchParameters: {},

        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',

        // Optional: whether the insights feature is enabled or not on Docsearch (`false` by default)
        insights: false,

        //... other Algolia params
      },
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "Code&Co",
        logo: {
          alt: "Code&Co Logo",
          src: "img/code&co-logoSimpleRound.svg",
        },
        items: [
          {
            to: "/docs/category/textiles",
            label: "Text&Lines",
            position: "left",
          },
          {
            to: "/docs/category/tractores",
            label: "TracTech",
            position: "left",
          },
          {
            to: "/docs/category/larvas",
            label: "Technebrios",
            position: "left",
          },
          {
            type: "docsVersionDropdown",
            position: "right",
          },
          {
            to: "https://discord.gg/RheuUC8s",
            label: "Discord",
            position: "right",
          },
          {
            to: "https://drive.google.com/drive/folders/14rRuIvjLRNxXxczcR0kbLQOxzOCmcomg?usp=sharing",
            label: "Google Drive",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        copyright: `Copyright © ${new Date().getFullYear()} Code&Co. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      colorMode: {
        defaultMode: "dark",
      },
    }),
};

export default config;
