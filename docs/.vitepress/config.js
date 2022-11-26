export default {
    title: 'Adocs',
    description: 'An awesome docs template built by me',
    themeConfig: {
        logo: "https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/AJ_Digital_Camera.svg",
        siteTitle: "Adocs",
        nav: [
            { text: "About", link: "/about" },
            { text: "Contact", link: "/contact" },
            { text: "Guide", link: "/guide" },
            { text: "Configs", link: "/configs" },
            {
                text: "Changelog",
                items: [
                 { text: "sublink1", link: "/item-1" },
                 { text: "sublink2", link: "/item-2" },
                 { text: "sublink3", link: "/item-3" },
                ],
            },
          ],
          socialLinks: [
            { icon: "github", link: "https://github.com/Evavic44/adocs" },
            { icon: "twitter", link: "https://twitter.com/victorekea" },
            { icon: "discord", link: "..." },
          ],
          sidebar: [
            {
              text: "Section A",
              collapsible: true,
              items: [
                { text: "Introduction", link: "/introduction" },
                { text: "Getting Started", link: "/getting-started" },
              ],
            },
            {
              text: "Section B",
              collapsible: false,
              items: [
                { text: "Introduction", link: "/introduction" },
                { text: "Getting Started", link: "/getting-started" },
              ],
            },
            {
              text: "Section C",
              collapsible: true,
              items: [
                { text: "Introduction", link: "/introduction" },
                { text: "Getting Started", link: "/getting-started" },
              ],
            },
          ],
          footer: {
            message: "Released under the MIT License.",
            copyright: "Copyright © 2022-present Adocs",
          },    
      },
  }