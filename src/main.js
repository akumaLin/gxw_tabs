// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {tabs,tab}from 'muse-components/tabs'
import 'muse-components/styles/base.less'
Vue.component(tabs.name, tabs)
Vue.component(tab.name, tab)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
