import Vue from 'vue'
import App from './App'
import router from './router'
import element from 'element-ui'
import VueDND from 'awe-dnd'  // 拖拽组件
// 引入'babel-polyfill' 兼容ie 9-11 ie不支持Promise方法
import 'babel-polyfill'
import store from './vuex'
import http from './libs/http' // 经过封装的axios 发送数据为对象
import http2 from './libs/http2' // 经过封装的axios 发送数据为url参数
import util from './plugins/util'
Vue.config.productionTip = false
Vue.use(element)
Vue.use(VueDND)
Vue.prototype.$http = http
Vue.prototype.$http2 = http2
// 将扩展方法挂在到Vue上
Vue.prototype.util = util
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
})
