// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: "Timeless Docs",
    url: "https://docs.timelessfi.com",
    baseUrl: "/",
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    favicon: "img/favicon.ico",

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: "timeless-fi", // Usually your GitHub org/user name.
    projectName: "docs", // Usually your repo name.

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
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
                },
                theme: {
                    customCss: require.resolve("./src/css/custom.css"),
                },
            }),
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            navbar: {
                title: "Timeless Docs",
                logo: {
                    alt: "Timeless",
                    src: "img/logo.png",
                },
                items: [
                    {
                        type: "doc",
                        docId: "intro",
                        position: "left",
                        label: "Introduction",
                    },
                    {
                        type: "doc",
                        docId: "concepts/yield-tokenization",
                        position: "left",
                        label: "Concepts",
                    },
                    {
                        type: "doc",
                        docId: "smart-contracts/architecture",
                        position: "left",
                        label: "Smart Contracts",
                    },
                    {
                        href: "https://github.com/timeless-fi/docs",
                        label: "GitHub",
                        position: "right",
                    },
                ],
            },
            footer: {
                style: "dark",
                links: [
                    {
                        title: "Github",
                        items: [
                            {
                                label: "timeless",
                                href: "https://github.com/timeless-fi/timeless",
                            },
                            {
                                label: "swapper",
                                href: "https://github.com/timeless-fi/swapper",
                            },
                            {
                                label: "xPYT",
                                href: "https://github.com/timeless-fi/xPYT",
                            },
                        ],
                    },
                    {
                        title: "Community",
                        items: [
                            {
                                label: "Discord",
                                href: "https://discord.gg/khDQVZm7E4",
                            },
                            {
                                label: "Twitter",
                                href: "https://twitter.com/timeless_fi",
                            },
                        ],
                    },
                    {
                        title: "More",
                        items: [
                            {
                                label: "Home page",
                                href: "https://timelessfi.com",
                            },
                            {
                                label: "Blog",
                                href: "https://blog.timelessfi.com",
                            },
                        ],
                    },
                ],
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
            colorMode: {
                // "light" | "dark"
                defaultMode: "dark",

                // Should we use the prefers-color-scheme media-query,
                // using user system preferences, instead of the hardcoded defaultMode
                respectPrefersColorScheme: true,
            },
        }),
};

module.exports = config;
