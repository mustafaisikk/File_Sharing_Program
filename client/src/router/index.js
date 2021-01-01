import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: () => import('@/components/Files'),
      name: 'Files'
    },
    {
      path: '/add',
      component: () => import('@/components/Add'),
      name: 'add'
    }
  ],
  mode: 'history'
})
