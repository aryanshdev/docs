const { description } = require("../../package");
const path = require("path");

module.exports = {
  lang: "en-US",
  title: "Counter API",
  description: description,

  head: [
    [
      "link",
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/favicons/apple-icon-180x180.png"
      }
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicons/favicon-32x32.png"
      }
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicons/favicon-16x16.png"
      }
    ],
    ["link", { rel: "shortcut icon", href: "/favicons/favicon.ico" }],
    ["meta", { name: "theme-color", content: "#0842ba" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" }
    ]
  ],
  sassOptions: { indentedSyntax: true },
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "~@/styles/main.scss"`
      }
    }
  },
  dest: "docs",
  themeConfig: {
    repo: "https://github.com/counterapi",
    editLinks: true,
    docsDir: "",
    editLinkText: "",
    lastUpdated: false,
    logo: "/img/counterapi-logo.svg",
    author: "omegion",
    contributors: false,
    themePlugins: {
      git: false
    },
    navbar: [
      {
        text: "Guide",
        link: "/guide/"
      },
      {
        text: "API",
        link: "/api/"
      }
    ],
    sidebar: [
      {
        isGroup: true,
        text: "Guide",
        link: "/guide/",
        children: ["/guide/get-started.md"]
      },
      {
        isGroup: true,
        text: "Javascript",
        link: "/javascript/",
        children: [
          "/javascript/get-started.md",
          "/javascript/quick-start.md",
          "/javascript/counter-name-hashing.md",
          "/javascript/count-list.md"
        ]
      },
      {
        isGroup: true,
        text: "Go",
        link: "/go/",
        children: [
          "/go/get-started.md",
          "/go/quick-start.md",
          "/go/counter-name.md"
        ]
      },
      {
        isGroup: true,
        text: "API",
        link: "/api/",
        children: ["/api/rate-limit.md", "/api/endpoints.md"]
      }
    ]
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    "vuepress-plugin-typescript",
    "@vuepress/plugin-back-to-top",
    "@vuepress/plugin-medium-zoom",
    "sitemap",
    {
      hostname: "https://counterapi.dev",
      outFile: "docs/sitemap.xml"
    },
    "seo",
    {
      siteTitle: (_, $site) => $site.title,
      title: $page => $page.title,
      description: $page => $page.frontmatter.description,
      author: (_, $site) => $site.themeConfig.author,
      tags: $page => $page.frontmatter.tags,
      twitterCard: _ => "summary_large_image",
      type: $page =>
        ["articles", "posts", "blog"].some(folder =>
          $page.regularPath.startsWith("/" + folder)
        )
          ? "article"
          : "website",
      url: (_, $site, path) => ($site.themeConfig.domain || "") + path,
      image: ($page, $site) =>
        $page.frontmatter.image &&
        (($site.themeConfig.domain &&
          !$page.frontmatter.image.startsWith("http")) ||
          "") + $page.frontmatter.image,
      publishedAt: $page =>
        $page.frontmatter.date && new Date($page.frontmatter.date),
      modifiedAt: $page => $page.lastUpdated && new Date($page.lastUpdated)
    }
  ],
  clientAppEnhanceFiles: path.resolve(__dirname, "./clientAppEnhance.ts")
};
