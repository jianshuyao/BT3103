import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Routes from './router'

Vue.use(BootstrapVue);
Vue.use(VueRouter)
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