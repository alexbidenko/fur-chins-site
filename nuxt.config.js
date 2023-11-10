export default {
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
      { hid: 'og:site_name', name: 'og:site_name', content: 'Alliance of breeders fur chinchillas' },
      { hid: 'og:title', name: 'og:title', content: 'Alliance of breeders fur chinchillas' },
      { hid: 'og:type', name: 'og:type', content: 'website' },
      { hid: 'og:url', name: 'og:url', content: 'https://fur-chins.ru' },
      { hid: 'og:image', name: 'og:image', content: 'https://fur-chins.ru/assets/main/Logo.png' },
      { hid: 'og:description', name: 'og:description', content: 'Купить шиншилл, меховых шиншилл и товары для шиншилл, узнать больше о содержании, связаться с нами' },
      { hid: 'og:image:type', name: 'og:image:type', content: 'png' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:200,300,400,500,700&amp;subset=cyrillic,cyrillic-ext' },
    ],
  },
  loading: 'components/loading.vue',
  css: [
    'bootstrap/dist/css/bootstrap.css',
    '~/assets/styles.css',
  ],
  plugins: [
    { src: '~/plugins/ga', mode: 'client' },
    { src: '~/plugins/clickOutside', mode: 'client' },
    { src: '~/plugins/bootstrap.js', mode: 'client' },
  ],
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
}
