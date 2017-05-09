import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import home from '@/components/home.vue'
import mall from '@/components/mall.vue'
import city from '@/components/city.vue'
import me from '@/components/me.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
      children: [
        {
          path: '/hello',
          component:Hello
        },
        {
          path: '/home/mall',
          component:mall
        },
        {
          path: '/home/city',
          component:city
        },
        {
          path: '/home/me',
          component:me
        },
      ]
    }
  ]
})
