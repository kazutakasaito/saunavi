import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import BootstapVue, { NavbarPlugin } from 'bootstrap-vue';

Vue.config.productionTip = false;
Vue.use(BootstapVue);
Vue.use(NavbarPlugin);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
