// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Polkadot Data Knowledge Base',
  tagline: 'Everything you want to know about Polkadot data',
  favicon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1340 1410.3' xml:space='preserve'%3E%3Cellipse fill='%23E6007A' cx='663' cy='147.9' rx='254.3' ry='147.9'/%3E%3Cellipse fill='%23E6007A' cx='663' cy='1262.3' rx='254.3' ry='147.9'/%3E%3Cellipse transform='rotate(-60 180.499 426.56)' fill='%23E6007A' cx='180.5' cy='426.5' rx='254.3' ry='148'/%3E%3Cellipse transform='rotate(-60 1145.575 983.768)' fill='%23E6007A' cx='1145.6' cy='983.7' rx='254.3' ry='147.9'/%3E%3Cellipse transform='rotate(-30 180.45 983.72)' fill='%23E6007A' cx='180.5' cy='983.7' rx='148' ry='254.3'/%3E%3Cellipse transform='rotate(-30 1145.522 426.601)' fill='%23E6007A' cx='1145.6' cy='426.6' rx='147.9' ry='254.3'/%3E%3C/svg%3E",

  // Set the production url of your site here
  url: 'https://polkalytics.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/Polkadot-Data-Knowledge-Base/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Polkalytics', // Usually your GitHub org/user name.
  projectName: 'Polkadot-Data-Knowledge-Base', // Usually your repo name.
  deploymentBranch: 'main',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/'
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Polkadot Data Knowledge Base',
        logo: {
          alt: 'Polkadot Data Knowledge Base Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/Polkalytics/Polkadot-Data-Knowledge-Base',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Polkadot Data Knowledge Base. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
