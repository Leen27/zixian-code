import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "vue 自现",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      {
        text: 'Vue reactive',
        items: [
          { text: 'Reactive Object', link: '/reactive/reactive-object' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },

  vite: {
    define: {
      __DEV__: true,
      __TEST__: true,
      __VERSION__: '"test"',
      __BROWSER__: false,
      __GLOBAL__: false,
      __ESM_BUNDLER__: true,
      __ESM_BROWSER__: false,
      __NODE_JS__: true,
      __SSR__: true,
      __FEATURE_OPTIONS_API__: true,
      __FEATURE_SUSPENSE__: true,
      __FEATURE_PROD_DEVTOOLS__: false,
      __COMPAT__: true
    },
  }
})
