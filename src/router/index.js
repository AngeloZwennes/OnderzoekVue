import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import dashboard from '@/components/dashboard'
import settings from '@/components/settings/settings'
import VeeValidate from 'vee-validate'

Vue.use(Router)
Vue.use(VeeValidate)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: dashboard
    },
    {
      path: '/settings',
      name: 'settings',
      component: settings
    }
  ]
})
