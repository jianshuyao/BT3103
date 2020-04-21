import Home from './view/Home.vue'
import About from './view/About.vue'
import Contact from './view/Contact.vue'
import University from './view/University.vue'
import UCSB from './view/university_page/ucsb.vue'
import PKU from './view/university_page/pku.vue'


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
    },
    {
      path: '/University/UCSB',
      component: UCSB
    },
    {
      path: '/University/PKU',
      component: PKU
    },
    { path: '*', redirect: '/' }
]