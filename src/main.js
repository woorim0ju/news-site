import Vue from 'vue'
import App from './App.vue'
import { router } from './routes/index.js'; //1. import router
import { store } from './store/index';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router, //router: router, 2. router 연결
  store, //store: store,
}).$mount('#app')
