module.exports = {
  title: "Power's Digest",
  tagline: "still developing",
  url: "https://digest.wiki-power.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/book.svg",
  //organizationName: "linyuxuanlin", // Usually your GitHub org/user name.
  //projectName: "Wiki_Docusaurus", // Usually your repo name.
  themeConfig: {

    algolia: {
      apiKey: '4cb7cbb290ebf1c47479ada3658c3d8e',
      indexName: 'digest',

      // Optional: see doc section bellow
      contextualSearch: true,

      // Optional: Algolia search parameters
      searchParameters: {},

      //... other Algolia params
    },

    sidebarCollapsible: true,
    colorMode: {
      // "light" | "dark"
      //defaultMode: 'dark',

      // Hides the switch in the navbar
      // Useful if you want to support a single color mode
      disableSwitch: false,

      // Should we use the prefers-color-scheme media-query,
      // using user system preferences, instead of the hardcoded defaultMode
      respectPrefersColorScheme: false,

      // Dark/light switch icon options
      // Dark/light switch icon options
      switchConfig: {
        // Icon for the switch while in dark mode
        darkIcon: " ",
        lightIcon: ' ',

        // CSS to apply to dark icon,
        // React inline style object
        // see https://reactjs.org/docs/dom-elements.html#style
        darkIconStyle: {
          marginLeft: "2px",
        },

        // Unicode icons such as '\u2600' will work
        // Unicode with 5 chars require brackets: '\u{1F602}'
        //lightIcon: '\u{1F602}',

        lightIconStyle: {
          marginLeft: "1px",
        },
      },
    },

    hideableSidebar: true,
    navbar: {
      title: "Power's Digest",
      hideOnScroll: true,
      //style: 'primary',
      /*
      logo: {
        alt: "My Site Logo",
        src:
          "https://cos.wiki-power.com/img/20201122195819.png",
      },
      */
      items: [
        /*
                {
                  to: "docs/",
                  activeBasePath: "docs",
                  label: "Docs",
                  position: "left",
                },
                {
                  to: "blog",
                  label: "Blog",
                  position: "left",
                },
                
                        {
                          to: "docs/digest/",
                          label: "Digest",
                          position: "left",
                        },
                        

        {
          to: "docs/Collection",
          label: "收藏夹",
          position: "right",
        },
        {
          to: "docs/Links",
          label: "友情链接",
          position: "right",
        },
        
        {
          href: "https://wiki-power.com",
          label: "Wiki",
          position: "right",
        },

        */
      ],
    },
    /*
    footer: {
      style: "dark",
     
      links: [{
          title: "Docs",
          items: [{
              label: "Style Guide",
              to: "docs/",
            },
            {
              label: "Second Doc",
              to: "docs/doc2/",
            },
          ],
        },
        {
          
                    title: "Community",
                    items: [

                      {
                        label: "Stack Overflow",
                        href: "https://stackoverflow.com/questions/tagged/docusaurus",
                      },
                      {
                        label: "Discord",
                        href: "https://discordapp.com/invite/docusaurus",
                      },
                      {
                        label: "Twitter",
                        href: "https://twitter.com/docusaurus",
                      },
                      
                    ],
        },
        {
          title: "More",
          items: [{
              label: "Blog",
              to: "blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/facebook/docusaurus",
            },
          ],
        },
      ],
      copyright: `Power Lin © ${new Date().getFullYear()} | <a href="https://beian.miit.gov.cn"> 粤 ICP 备 20014898 号 </a> | Built with Docusaurus`,
    },*/
  },
  presets: [
    [
      "@docusaurus/preset-classic",

      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve("./sidebars.js"),

          // Please change this to your repo.
          //editUrl: "https://github.com/facebook/docusaurus/edit/master/website/",
        },
        /*
        digest: {
          sidebarPath: require.resolve("./sidebars_digest.js"),

          // Please change this to your repo.
          //editUrl: "https://github.com/facebook/docusaurus/edit/master/website/",
        },
        */
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          //editUrl: "https://github.com/facebook/docusaurus/edit/master/website/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};