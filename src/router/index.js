import Vue from "vue"
import VueRouter from "vue-router"

import Home from "../views/Home"
import Login from "../views/Login"
import Search from "../views/Search"
import Register from "../views/Register"

//解决编程式导航重复点击报错的解决方案
const push = VueRouter.prototype.push;
const replace = VueRouter.prototype.replace;
VueRouter.prototype.push = function (location, onComplete, onAbort) {
  //如果onComplete,onAbort有值得时候
  if (onComplete && onAbort) {
    return push.call(this, location, onComplete, onAbort)
  }
  return push.call(this, location, onComplete, () => { })
}

VueRouter.prototype.replace = function (location, onComplete, onAbort) {
  if (onComplete && onAbort) {
    return replace.call(this, location, onComplete, onAbort)
  }
  return replace.call(this, location, onComplete, () => { })
}


Vue.use(VueRouter)
export default new VueRouter({
  routes: [
    {
      path: "/",
      component: Home
    },
    {
      path: "/login",
      component: Login,
      // 当组件加载显示时，meta中的参数会传到$route中
      // 当组件不加载显示时，meta中的参数不会传
      meta: {
        isFooterHide: true
      }
    },
    {
      path: "/register",
      component: Register,
      meta: {
        isFooterHide: true
      }
    },
    {
      name: "search",
      path: "/search/:searchValue?",
      component: Search,
    },
  ]
})