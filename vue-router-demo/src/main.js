import Vue from 'vue'
import App from './App.vue'
// 引入VueRouter
import router from './router/index'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router: router // 注入到 new Vue 中
}).$mount('#app')
