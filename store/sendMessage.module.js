const actions = {
  sendMessage(context, data) {
    return this.$axios.$post('https://fur-chins.ru/api/mail', data);
  },
};

export default {
  actions,
};
