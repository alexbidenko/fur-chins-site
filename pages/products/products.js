import { mapGetters } from 'vuex';
import ProductBlock from '~/components/ProductBlock/ProductBlock.vue'

export default {

  head() {
    return {
      title: 'Alliance of breeders fur chinchillas - Дополнительные товары',
      meta: [
        {hid: 'keywords', name: 'keywords', content: 'Товары для шиншиллы, корма, сено, поилки, автопоилки'},
        {hid: 'description', name: 'description', content: 'Купить товары для шиншилл, корма, сено и поилки (автопоилки) для содержания шиншилл'},
        {hid: 'og:title', property: 'og:title', content: 'Alliance of breeders fur chinchillas - Дополнительные товары'},
        {hid: 'og:description', property: 'og:description', content: 'Купить товары для шиншилл, корма, сено и поилки (автопоилки) для содержания шиншилл'}
      ]
    };
  },

  components: {
    ProductBlock,
  },

  computed: {
    ...mapGetters([
      'products'
    ])
  }
}
