import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import App from './App';
import router from './router';
import axios from 'axios';

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
axios.defaults.baseURL = process.env.VUE_APP_API_URL

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
});
