<template>
  <div id="app">
    <v-header></v-header>
    <div class="content">
	  <router-link to="/news">时政新闻</router-link>
	  <router-link to="/dropload">下拉加载</router-link>
	  <router-link to="/down">游戏下载</router-link>
    <router-link to="/comments">我的评论</router-link>
    </div>
	<router-view></router-view>
	<v-footer></v-footer>
  </div>
</template>

<script>
import header from "./components/header.vue"
import footer from "./components/footer.vue"
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
      vHeader: header,
      vFooter: footer
  }
}
</script>

<style>
#app {
  font-family: '微软雅黑';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
a {
  color: #42b983;
  padding:3px 10px;
}
</style>
