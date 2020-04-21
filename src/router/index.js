import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
 

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/yo',
    name: 'Yo',
    component: () => import('../views/Yo.vue')
  },
    {
      path: '/formacion',
      name: 'Formacion',
      component: () => import('../views/Formacion.vue')
    },
    {
      path: '/portfolio',
      name: 'Portfolio',
      component: () => import('../views/Portfolio.vue')
    },
    {
      path: '/experiencia',
      name: 'Experiencia',
      component: () => import('../views/Experiencia.vue')
    },
    {
      path: '/contacto',
      name: 'Contacto',
      component: () => import('../views/Contacto.vue')
    },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
