import Home from './view/Home.vue'
import About from './view/About.vue'
import Contact from './view/Contact.vue'
import Program from './view/Program.vue'
import ETHZ from './view/university_page/ethz.vue'
import FDU from './view/university_page/fdu.vue'
import ICL from './view/university_page/icl.vue'
import PKU from './view/university_page/pku.vue'
import TSINGHUA from './view/university_page/tsinghua.vue'
import UCSB from './view/university_page/ucsb.vue'
import UOFT from './view/university_page/uoft.vue'
import UTOKYO from './view/university_page/utokyo.vue'



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
      path: '/Program',
      component: Program 
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
      path: '/University/ETHZ',
      component: ETHZ
    },    
    {
      path: '/University/FDU',
      component: FDU
    },    
    {
      path: '/University/ICL',
      component: ICL
    },
    {
      path: '/University/PKU',
      component: PKU
    },
    {
      path: '/University/TSINGHUA',
      component: TSINGHUA
    },    
    {
      path: '/University/UCSB',
      component: UCSB
    },
    {
      path: '/University/UOFT',
      component: UOFT
    },        
    {
      path: '/University/UTOKYO',
      component: UTOKYO
    },    
    { path: '*', redirect: '/' }
]