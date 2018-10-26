import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Fanbook from './components/Fanbook.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/fanbook',
      name: 'fanbook',
      component: Fanbook
    }
  ]
})
