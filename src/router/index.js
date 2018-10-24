import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes.js'
import {commonRoutes} from './routes.js'
Vue.use(Router)
let map = {}
routes.forEach(item => {
  if (item.children) {
    item.children.forEach(child => {
      if (child.meta) {
        map[child.name] = child.meta.title
      }
    })
  } else {
    if (item.meta) {
      map[item.name] = item.meta.title
    }
  }
})
const router = new Router({
  routes: commonRoutes,
})
router.beforeEach((to, from, next) => {
  if (!sessionStorage.user && to.name !== 'login') {
    next({ name: 'login' })
  }else{
    next()
  }
  var title = map[to.name] ? map[to.name] + ' - 众善行后台管理系统' : '众善行后台管理系统'
  window.document.title = title
})
router.afterEach((to, from) => {

})
export default router
