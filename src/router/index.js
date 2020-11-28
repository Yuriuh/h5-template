import Vue from 'vue'
import VueRouter from 'vue-router'
import Intro from '../views/Intro.vue'
import Component from '../views/Component.vue'
import Scss from '../views/Scss.vue'
import Plugins from '../views/Plugins.vue'
import Vuex from '../views/Vuex.vue'

Vue.use(VueRouter)

export const routes = [
  {
    path: '/',
    name: 'Intro',
    component: Intro,
  },
  {
    path: '/scss',
    name: 'Scss',
    component: Scss,
  },
  {
    path: '/component',
    name: 'Component',
    component: Component,
  },
  {
    path: '/plugins',
    name: 'Plugins',
    component: Plugins,
  },
  {
    path: '/vuex',
    name: 'Vuex',
    component: Vuex,
  },
]

const router = new VueRouter({
  routes,
})

export default router
