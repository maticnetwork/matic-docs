module.exports = {
  title: "Matic Network | Documentation",
  tagline: "Welcome to Matic developer documentation",
  url: "https://docs.matic.network/",
  baseUrl: "/",
  favicon: "img/favicon.png",
  organizationName: "Matic Network",
  projectName: "matic-docs",
  customFields: {
    description: "Build your next blockchain app on Matic.",
  },
  onBrokenLinks: 'log',
  themeConfig: {
    announcementBar: {
      id: "support_us",
      content:
        '🎉Matic Mainnet <a target="_blank" rel="noopener noreferrer" href="/docs/develop/network-details/network"/>is open for developers🎉! ',
      backgroundColor: "#2b6def", // Defaults to `#fff`
      textColor: "#fff", // Defaults to `#000`
    },
    // googleAnalytics: {
    //   trackingID: "UA-141789564-1",
    //   anonymizeIP: true,
    // },
    image: "https://matic.network/banners/matic-network-16x9.png",
    prism: {
      theme: require("prism-react-renderer/themes/github"),
      darkTheme: require("prism-react-renderer/themes/dracula"),
      defaultLanguage: "javascript",
    },
    algolia: {
      apiKey: "c3ad4eabc5af314ea3ed331efbe0a5c4",
      indexName: "matic_developer",
      algoliaOptions: {},
    },
    navbar: {
      hideOnScroll: true,
      title: "Developer",
      logo: {
        alt: "Matic logo",
        src: "/img/logo.svg",
        srcDark: "/img/logo-white.svg",
        // href: 'https://docs.matic.network/', // default to siteConfig.baseUrl
        target: "_self", // by default, this value is calculated based on the `href` attribute (the external link will open in a new tab, all others in the current one)
      },
      items: [
        {
          to: "docs/home/new-to-matic",
          label: "Basics",
          position: "left",
          activeBasePath: "docs/home",
        },
        {
          to: "docs/develop/getting-started",
          label: "Develop",
          position: "left",
          activeBasePath: "docs/develop",
        },
        {
          to: "docs/validate/orientation",
          label: "Validate",
          position: "left",
          activeBasePath: "docs/validate",
        },
        {
          to: "docs/integrate/quickstart",
          label: "Integrate",
          position: "left",
          activeBasePath: "docs/integrate",
        },
        {
          to: "docs/contribute/orientation",
          label: "Contribute",
          position: "left",
          activeBasePath: "docs/contribute",
        },
        {
          label: "Support",
          href: "https://forum.matic.network",
          position: "right",
        },
        {
          to: "docs/faq/faq",
          label: "FAQ",
          position: "left",
          activeBasePath: "docs/faq",
        },
        {
          label: "Polygon SDK",
          href: "https://sdk-docs.polygon.technology/docs/overview/",
          position: "left",
        },
      ],
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/maticnetwork/matic-docs/tree/master/",
          path: "docs",
          showLastUpdateAuthor: false,
          showLastUpdateTime: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
      // "@docuaurus/plugin-content-pages",
      // {
      //   path: "src/pages",
      //   routeBasePath: "",
      //   include: ["**/*.{js,jsx}"],
      // },
      // "@docusaurus/plugin-google-analytics",
      // "@docusaurus/plugin-sitemap",
      // {
      //   cacheTime: 600 * 1000, // 600 sec - cache purge period
      //   changefreq: "weekly",
      //   priority: 0.5,
      // },
    ],
  ],
};
