import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import infiniteScroll from 'vue-infinite-scroll'
import App from './App.vue'
import news from "./components/news.vue"
import dropload from "./components/dropload.vue"
import down from "./components/down.vue"
import comments from "./components/comments.vue"
Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(infiniteScroll)

//创建路由
var router = new VueRouter({
  routes: [
	  { path: '/news', component: news },
	  { path: '/dropload', component: dropload},
	  { path: '/down', component: down },
	  { path: '/comments', component: comments }
  ]
});

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})