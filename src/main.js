// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueRouter from 'vue-router';

Vue.use(VueRouter)
Vue.use(VueResource)

/* eslint-disable no-new */
Vue.component('task-item', {
    props: ['task'],
    template: '<li>{{ task.task }}</li>'
})

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
