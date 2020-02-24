import Home from './view/Home.vue'
import About from './view/About.vue'
import Contact from './view/Contact.vue'
import University from './view/University.vue'


export default[
    {
      path: '/',
      component: Home
    },
    {
      path: '/Home',
      component: Home
    },
    {
      path: '/University',
      component: University
    },
    {
      path: '/About',
      component: About
    },
    {
      path: '/Contact',
      component: Contact
    }
]