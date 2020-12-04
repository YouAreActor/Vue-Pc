import Vue from 'vue'
import App from './App.vue'

import router from "./router"
import store from "./store"

//重置样式引入
import "./styles/reset.css"

import "./styles/swiper.min.css"

import "./styles/iconfont.css"

import './plugins/element.js'

//引入mockServer，为了加载里面代码，一旦代码运行，就会启动mock服务器从而拦截响应的请求
import "./mock/mockServer"

Vue.config.productionTip = false

new Vue({
  beforeCreate() {
    Vue.prototype.$bus = this
  },
  render: h => h(App),
  router,
  store
}).$mount('#app')
