<template>
  <div id="header">
	  <div class="menu-wrap">
		  <div class="menu-ico" v-bind:class="{active: isActive}" v-on:click="isActive = !isActive">菜单<span></span></div>
		  <div class="menu-title">Vue测试项目</div>
	  </div>
	  <transition name="slideTran">
		  <div class="slideNav" v-if="isActive">
			  <ul>
				  <li><router-link to="/news">新闻时政</router-link></li>
				  <li><router-link to="/dropload">下拉加载</router-link></li>
				  <li><router-link to="/down">游戏下载</router-link></li>
				  <li><router-link to="/sports">体育健康</router-link></li>
				  <li><router-link to="/zatan">八卦杂谈</router-link></li>
			  </ul>
			  <div class="mask" v-if="isActive" v-on:click="isActive = false"></div>
		  </div>
	  </transition>
  </div>
</template>

<script>
export default {
  name: 'header',
  data () {
    return {
      isActive: false
	}
  },
  methods: {

  }
}
</script>

<style>
#header{position:relative;z-index:999}
.menu-title{ text-align:center; font-size: 18px;flex:1;}
.menu-wrap{background:#efefef;width:100%;height:40px;line-height:40px;position:fixed;left:0;top:0; display: flex;display: -webkit-flex; flex-flow:row;}
.menu-ico{text-indent:-9999px;width:30px; height:30px;border: none;margin: 5px 8px;outline: none;z-index: 2000;position:relative}
.menu-ico::before,.menu-ico::after,.menu-ico span {background: #42b983;}
.menu-ico::before,.menu-ico::after {content: '';position: absolute;height: 2px;width: 100%;left: 0;top: 50%;-webkit-transform-origin: 50% 50%;transform-origin: 50% 50%;-webkit-transition: -webkit-transform 0.25s;transition: transform 0.25s;}
.menu-ico span {position: absolute;width: 100%;height: 2px;left: 0;top:15px;overflow: hidden;text-indent: 200%;-webkit-transition: opacity 0.25s;transition: opacity 0.25s;}
.menu-ico::before {-webkit-transform: translate3d(0, -10px, 0);transform: translate3d(0, -10px, 0);}
.menu-ico::after {-webkit-transform: translate3d(0, 10px, 0);transform: translate3d(0, 10px, 0);}
.active.menu-ico span {opacity: 0;}
.active.menu-ico::before {-webkit-transform: rotate3d(0, 0, 1, 45deg);transform: rotate3d(0, 0, 1, 45deg);}
.active.menu-ico::after {-webkit-transform: rotate3d(0, 0, 1, -45deg);transform: rotate3d(0, 0, 1, -45deg);}
.slideNav{position:fixed;top:0;bottom:40px;width:45%;height:100%;background:#efefef;}
.slideNav ul{width:100%;height:100%;z-index: 99;position: relative;background:#efefef;}
.slideNav li{width:100%; height:40px; line-height:40px; text-align:center;}
.mask{width: 100%;height: 100%;position: fixed;left: 0;top: 0;right: 0;bottom: 0;background:rgba(0,0,0,.7);}
.slideTran-enter-active{
  transition: all .5s ease;
  left:0;
}
.slideTran-enter{
  left:-100%;
}

.slideTran-leave-active {
  transition: all .5s ease;
  left:-100%;
}
.slideTran-leave{
  left:0;
}


</style>
