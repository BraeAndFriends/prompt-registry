/** @type {import('@docusaurus/types').Config} */
module.exports = {
  title: "Prompt Registry",
  tagline: "Hierarchical Agent Prompt Documentation",
  favicon: "img/favicon.ico",

  url: "https://braeandfriends.github.io",
  baseUrl: "/",

  // GitHub pages deployment config
  organizationName: "Brae",
  projectName: "prompt-registry",

  onBrokenLinks: "ignore",
  onBrokenMarkdownLinks: "warn",

  // Enable Mermaid diagrams
  markdown: {
    mermaid: true,
  },

  themes: ["@docusaurus/theme-mermaid"],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          sidebarCollapsed: false,
          routeBasePath: 'docs',
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
      navbar: {
        logo: {
          alt: "Brae Logo",
          src: "/img/brae-logo.svg",
        },

        items: [
          {
            type: "docSidebar",
            sidebarId: "docsSidebar",
            position: "left",
            label: "Agents",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Agent Overview",
                to: "/overview/agent-flows-overview",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Prompt Registry. Built with Docusaurus.`,
      },
      prism: {
        theme: require("prism-react-renderer").themes.github,
        darkTheme: require("prism-react-renderer").themes.vsDark,
      },
    }),
    plugins: [
      [
        'docusaurus-plugin-dotenv',
        {
            path: "./.env", 
            systemvars: true, 
        }
      ]
    ]
};
