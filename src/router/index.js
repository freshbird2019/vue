import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import practice from '@/components/practice'
import login from '@/components/login'
import register from '@/components/register'
import test from '@/components/test'
import step1 from '@/components/step1'
import step2 from '@/components/step2'
import step3 from '@/components/step3'
import step4 from '@/components/step4'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/practice',
      name: 'practice',
      component: practice
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/test',
      name: 'test',
      component: test,
      children:[
        {
          path: '/',
          name: 'step1',
          component: step1
        },
        {
          path: '/test/step2',
          name: 'step2',
          component: step2
        },
        {
          path: '/test/step3',
          name: 'step3',
          component: step3
        }
      ]
    },
    {
      path: '/step4',
      name: 'step4',
      component: step4
    }
  
  ]
})
