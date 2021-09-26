import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import PlandMain from '../components/PlandMain.vue'
import PlandSection1 from '../components/PlandSection1.vue'
import PlandSection2 from '../components/PlandSection2.vue'
import PlandSection3 from '../components/PlandSection3.vue'
import PlandSection4 from '../components/PlandSection4.vue'

export default new VueRouter({
  mode: 'history',
  routes: [
    { 
      path: '/', 
      component: PlandMain,
      name: 'Main'
    },
    { 
      path: '/menu1', 
      component: PlandSection1,
      name: 'Intro'
    },
    { 
      path: '/menu2', 
      component: PlandSection2,
      name: 'Value'
    },
    { 
      path: '/menu3', 
      component: PlandSection3,
      name: 'Graph' 
    },
    { 
      path: '/menu4', 
      component: PlandSection4,
      name: 'Notice'
    },
  ]
}) 