const isDev = process.env.NODE_ENV !== 'production';

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Ателье Северное Бутово ON-ONA - Он и Она, пошив и ремонт одежды',
    htmlAttrs: {
      lang: 'ru'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/fonts/fonts.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/ymapPlugin.js', mode: 'client' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxtjs/style-resources',
  ],

  styleResources: {
    scss: [
      './assets/scss/_variables.scss',
      './assets/scss/_mixins.scss',
    ]
  },

  postcss: {
    plugins: {
      ...(!isDev && {
        cssnano: {
          preset: ['advanced', {
            autoprefixer: false,
            cssDeclarationSorter: false,
            zindex: false,
            discardComments: {
              removeAll: true
            }
          }]
        }
      })
    },
    ...(!isDev && {
      preset: {
        browsers: 'cover 99.5%',
        autoprefixer: true
      }
    }),

    order: 'cssnanoLast'
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'bootstrap-vue/nuxt',
    ['@nuxtjs/yandex-metrika', {
      id: process.env.YANDEX_METRIKA_ID,
      clickmap: true,
      trackLinks: true,
      accurateTrackBounce: true,
      webvisor: true
    }],
    '@nuxtjs/sitemap',
    ['@nuxtjs/robots', {
      UserAgent: '*',
      Host: 'www.on-ona-atelier.ru',
      Sitemap: 'https://on-ona-atelier.ru/sitemap.xml'
    }]
  ],

  bootstrapVue: {
    components: ['BIcon', 'BNav', 'BNavItem'],
    componentPlugins: ['LayoutPlugin', 'TablePlugin'],
    directivePlugins: [],
    directives: []
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: { compact: true },
    optimizeCss: false,
    ...(!isDev && {
      html: {
        minify: {
          collapseBooleanAttributes: true,
          decodeEntities: true,
          minifyCSS: true,
          minifyJS: true,
          processConditionalComments: true,
          removeEmptyAttributes: true,
          removeRedundantAttributes: true,
          trimCustomFragments: true,
          useShortDoctype: true
        }
      },
      extractCSS: {
        ignoreOrder: true
      }
    }),
    splitChunks: {
      layouts: true,
      pages: true,
      commons: true
    },
    optimization: {
      minimize: !isDev
    },
  },

  sitemap: {
    hostname: 'https://on-ona-atelier.ru',
    gzip: true,
    exclude: [],
  },

  publicRuntimeConfig: {
    yandexApiKey: process.env.YANDEX_API_KEY,
  },
};
