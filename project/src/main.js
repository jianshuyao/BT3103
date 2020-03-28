import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/css/bootstrap.min.css'
//import 'bootstrap-vue@latest/dist/bootstrap-vue-icons.min.css'
/* eslint-disable */
import Routes from './router'

import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css"; // Ensure you are using css-loader


Vue.use(BootstrapVue);
Vue.use(VueRouter)
Vue.use(Vuetify)
Vue.config.productionTip = false


const router = new VueRouter({
  routes: Routes,
  mode: 'history'
});

new Vue({
  el:'#app',
  render: h => h(App),
  router:router
})