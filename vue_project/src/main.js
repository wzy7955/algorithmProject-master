import Vue from 'vue'
import App from './App.vue'
import axios from "axios";
import VueRouter from "vue-router";

Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.use(VueRouter)

new Vue({
  render: h => h(App),
  router:'router'
}).$mount('#app')
