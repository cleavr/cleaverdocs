export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Cleavr Documentation',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: ''}
    ],
    script: [
      {
        hid: 'plausible',
        src: 'https://insights.cleavr.io/js/plausible.js',
        'data-domain': 'docs.cleavr.io',
        async: true,
        defer: true
      },
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.png'}
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@/assets/main.css',
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~/plugins/vue-instantsearch'
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    'nuxt-content-algolia'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxt/content',
    '@nuxtjs/redirect-module', {
      redirect: [
        { from: '^/providers#vps-providers', to: '/vps-profiles' },
        { from: '^/providers#dns-providers', to: '/dns-profiles' },
        { from: '^/providers#backup-profiles', to: '/backup-profiles' },
        { from: '^/providers#notification-profiles', to: '/notification-profiles' }
      ]
    }
  ],
  nuxtContentAlgolia: {
    appId: process.env.ALGOLIA_APP_ID,
    apiKey: process.env.ALGOLIA_API_KEY,
    paths: [
      {
        name: 'documentation',
        index: 'docs',
        fields: ['title', 'description', 'toc', 'bodyPlainText'],
      },
      {
        name: 'guides',
        fields: ['title', 'description', 'toc', 'bodyPlainText'],
      },
    ],
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    transpile: ['vue-instantsearch', 'instantsearch.js/es'],
  },
  hooks: {
    'content:file:beforeInsert': (document) => {
      const removeMd = require('remove-markdown');
      if (document.extension === '.md') {
        document.bodyPlainText = removeMd(document.text);
      }
    },
  },
}
