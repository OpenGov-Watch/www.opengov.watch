// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const {themes} = require('prism-react-renderer');
const lightTheme = themes.github;
const darkTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'OpenGov.Watch',
  tagline: 'Watching OpenGov',
  favicon: "img/logo.svg",

  // Set the production url of your site here
  url: 'https://www.opengov.watch',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'OpenGov-Watch', // Usually your GitHub org/user name.
  projectName: 'www.opengov.watch', // Usually your repo name.
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
        title: 'OpenGov.Watch',
        logo: {
          alt: 'OpenGov.Watch',
          src: 'img/logo.svg',
        },
        items: [
          {
            
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          }/*,
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://www.polkalytics.io/',
            label: 'Subscribe to our Newsletter',
            position: 'right',
          }*/,
        ],
      },
      footer: {
        style: 'dark',
        links: [
        ],
        copyright: `Copyright © ${new Date().getFullYear()} OpenGov.Watch. Built with Docusaurus.`,
      },
      prism: {
        theme: lightTheme,
        darkTheme: darkTheme,
        additionalLanguages: ['bash', 'diff', 'json']
      },
      colorMode: {
        defaultMode: 'dark'
      }
    }),

  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        fromExtensions: ['html'],
        redirects: [
           {
            from: '/technical_fellowship/polkadot_roadmap',
            to: '/polkadot-roadmap',
           }
        ]
      }
    ]
  ]

};

module.exports = config;
