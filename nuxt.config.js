
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'ABFC - Главная',
    htmlAttrs: {
      lang: 'ru',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'keywords', name: 'keywords', content: 'Шиншиллы, купить шиншилл, бонитированные, товары для шиншиллы, содержание животных' },
      { hid: 'description', name: 'description', content: 'Купить шиншилл, меховых шиншилл и товары для шиншилл, узнать больше о содержании, связаться с нами' },
      { hid: 'og:site_name', name: 'og:site_name', content: 'Aliance of breaders fur chinchillas' },
      { hid: 'og:title', name: 'og:title', content: 'Aliance of breaders fur chinchillas' },
      { hid: 'og:type', name: 'og:type', content: 'website' },
      { hid: 'og:url', name: 'og:url', content: 'https://fur-chins.ru' },
      { hid: 'og:image', name: 'og:image', content: 'https://fur-chins.ru/assets/main/Logo.png' },
      { hid: 'og:description', name: 'og:description', content: 'Купить шиншилл, меховых шиншилл и товары для шиншилл, узнать больше о содержании, связаться с нами' },
      { hid: 'og:image:type', name: 'og:image:type', content: 'png' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900&amp;subset=cyrillic,cyrillic-ext' },
    ],
  },
  /*
  ** Customize the progress-bar color
  */
  loading: 'components/loading.vue',
  /*
  ** Global CSS
  */
  css: [
    'bootstrap/dist/css/bootstrap.css',
    '~/assets/styles.css',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/ga', mode: 'client' },
    { src: '~/plugins/clickOutside', mode: 'client' },
    { src: '~/plugins/bootstrap.js', mode: 'client' },
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    [
      '@nuxtjs/yandex-metrika',
      {
        id: '54324816',
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true
      }
    ],
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
