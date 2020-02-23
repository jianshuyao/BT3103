import Vue from 'vue'
import Router from 'vue-router'

import Home from './view/Home.vue'
import About from './view/About.vue'
import Contact from './view/Contact.vue'
import University from './view/University.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      name: "Index",
      components: Home
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/university',
      name: 'University',
      component: University
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ]
})