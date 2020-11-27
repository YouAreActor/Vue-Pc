import Vue from 'vue'
import App from './App.vue'
import router from "./router"

//重置样式引入
import "./styles/reset.css"

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
