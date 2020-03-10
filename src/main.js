import Vue from "vue";
import Vue2Filters from 'vue2-filters'
import App from "./App.vue";
import store from "./store";

import router from './router'

Vue.config.productionTip = false;

Vue.use(Vue2Filters);

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
