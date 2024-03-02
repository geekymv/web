import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 全局注册指令
// 通过 v-focus 使用
Vue.directive('focus', {
  inserted (el) {
    el.focus()
  }
})


new Vue({
  render: h => h(App),
}).$mount('#app')
