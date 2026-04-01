import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Worst Server Ever Wiki",
  description: "Wiki for the Worst Server Ever",
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/assets/images/icon.png' }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Back to Website', link: 'https://worstserverever.com/' },
      { text: 'Home', link: '/' },
      { text: 'Contribute', link: '/contributing' },
      { text: 'General', link: '/servers/general/' },
      { text: 'Survival', link: '/servers/survival/' },
      { text: 'Creative', link: '/servers/creative/' },
      { text: 'Oneblock', link: '/servers/oneblock/' }
    ],

    sidebar: {
      '/servers/general/': [
        {
          text: 'General',
          items: [
            { text: 'Server Rules', link: '/servers/general/rules' },
            { text: 'General Overview', link: '/servers/general/' },
            { text: 'How to Join on Console', link: '/servers/general/console' },
            { text: 'Examples', link: '/markdown-examples' },
          ]
        }
      ],
      '/servers/survival/': [
        {
          text: 'Survival',
          items: [
            { text: 'Survival Overview', link: '/servers/survival/' },
            { text: 'Claiming (GriefPrevention)', link: '/servers/survival/claiming' },
            { text: 'EvenMoreFish', link: '/servers/survival/evenmorefish' },
            { text: 'How to Make E-Meralds', link: '/servers/survival/e-meralds' },
            { text: 'Survival Commands', link: '/servers/survival/commands' },
            { text: 'Player Warps', link: '/servers/survival/player-warps' }
          ]
        }
      ],
      '/servers/creative/': [
        {
          text: 'Creative',
          items: [
            { text: 'Creative Overview', link: '/servers/creative/' }
          ]
        }
      ],
      '/servers/oneblock/': [
        {
          text: 'Oneblock',
          items: [
            { text: 'Oneblock Overview', link: '/servers/oneblock/' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'discord', link: 'https://discord.gg/38E7gFPfgP' },
      { icon: 'github', link: 'https://github.com/Worst-Server-Ever/WSE-wiki' }
    ]
  }
})
