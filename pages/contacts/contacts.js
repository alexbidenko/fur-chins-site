import { mapActions, mapGetters } from 'vuex';

export default {

  head() {
    return {
      title: 'Alliance of breeders fur chinchillas - Связаться с нами',
      meta: [
        {hid: 'keywords', name: 'keywords', content: 'Alliance of breeders fur chinchillas, связь, обратная связь, позвонить, email, форма связи, узнать больше, купить шиншилл, купить товары для шиншилл'},
        {hid: 'description', name: 'description', content: 'Связаться с нами (Alliance of breeders fur chinchillas) для получения большей информации или для оформления покупки'},
        {hid: 'og:title', property: 'og:title', content: 'Alliance of breeders fur chinchillas - Связаться с нами'},
        {hid: 'og:description', property: 'og:description', content: 'Связаться с нами (Alliance of breeders fur chinchillas) для получения большей информации или для оформления покупки'}
      ]
    };
  },

  data() {
    return {
      userName: '',
      userPhone: '',
      userEmail: '',
      userTitle: '',
      userMessage: '',
      userAddBasket: true,
      isRequest: false,
    };
  },

  methods: {
    sendOrderMessage() {
      this.isRequest = true;

      let message = `Сообщение с сайта fur-chins.ru:\n
От ${this.userName}\n
Контакты: телефон - ${this.userPhone}, email - ${this.userEmail}\n
Содержание: ${this.userMessage}\n
Содержимое корзины:\n`;
      this.chinchillas.forEach(chinchilla => {
        message += chinchilla.chinchilla.overall.title + ' ' + chinchilla.chinchilla.variant.description + ' x ' +
          chinchilla.count + ' по ' + chinchilla.chinchilla.variant.cost + 'р\n';
      });
      this.products.forEach(product => {
        message += product.product.title + ' x ' + product.count + ' по ' + product.product.cost + 'р\n';
      });
      this.sendMessage({title: this.userTitle, message}).then(
        () => {
          this.userName = '';
          this.userPhone = '';
          this.userEmail = '';
          this.userTitle = '';
          this.userMessage = '';
          alert('Сообщение успешно отправлено!');
        }
      ).catch(() => {
        alert('Во время отправки сообщения произошла ошибка :(\nВоспользуйтесь для связи почтой: furchinchillas@gmail.com');
      }).finally(() => {
        this.isRequest = false;
      });
    },
    ...mapActions([
      'sendMessage'
    ]),
  },

  computed: {
    ...mapGetters({
      chinchillas: 'basketChinchillas',
      products: 'basketProducts',
    })
  },
}
