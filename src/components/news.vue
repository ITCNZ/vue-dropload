<template>
  <div id="news">
      <slider v-bind:optionsInit="optionsInit" v-bind:datas="datas"></slider>
<!--       <input type="button" v-bind:value="demoFollowStatus" class="scBox" v-on:click="DEMO__VUEX_FOLLOW">
      <p>{{ count }}</p>
      <p>
        <button @click="DEMO__VUEX_INCREMENT">+</button>
      </p> -->
  </div>
</template>

<script>
import slider from "./slider.vue"
// import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
//console.log(mapState);
//console.log(mapGetters)
export default {
  name: 'news',
  data () {
    return {
      optionsInit: {
        index: 2,
        isAuto: true
      },
      datas: [
        {
           href: 'http://www.baidu.com',
          title: '111',
            img: 'http://www.heibaipig.com/demo/images/test/1.jpg'
        },
        {
          href: 'http://www.pc6.com',
          title: '222',
            img: 'http://0.thumb.pc6.com/up/2016-5/20165199297.jpg'},
        {
          href: 'http://www.9ht.com',
          title: '3333',
            img: 'http://0.thumb.pc6.com/up/2016-4/201642814841.jpg'
        },
        {
          href: 'http://www.qbaobei.com',
          title: '4444',
            img: 'http://m.pc6.com/public/img/20151202.jpg'
        }
      ]

    }
  },
  components: {
    slider
  },
  // computed: {
  //   ...mapState({
  //     //state: ({demo}) => demo,
  //     mapStateFollow: ({demo}) => demo.demoFollow,
  //     mapStateFollowPending: ({demo}) => demo.demoFollowPending,
  //     count: ({demo}) => demo.count
  //   }),
  //   ...mapGetters(['demoFollowStatus'])
  // },
  // methods: {
  //   ...mapMutations(['DEMO__VUEX_FOLLOW', 'DEMO__VUEX_INCREMENT']),
  //   // 同步的改变状态
  //   ...mapActions(['demoFollowAjax'])
  // }
}
</script>

<style>
.scBox{
  position: fixed;
  right: 10px;
  bottom: 50px;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  border: none;
  font-size: 12px;
  text-align: center;
  line-height: 40px;
}
</style>
