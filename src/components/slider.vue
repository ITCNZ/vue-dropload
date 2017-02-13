<template>
  <div class="slide" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd" :style="{height: slideHeight + 'px'}">
    <div class="slide-box">
        <ul class="slide-ul" :style="{width: slideWidth + 'px', transform: 'translate3D(' + ulLeft + 'px ,0 ,0)'}">
            <li v-for="(item, index) in datas" :style="{width: windowW + 'px'}">
              <a :href="item.href" :title="item.title"><img :src="item.img"></a>
            </li>
        </ul>
    </div>
    <div class="title-box">
      <p class="title">{{datas[options.index].title}}</p>
      <span class="circle">
        <em v-for="item in pages" :class="item-1 == options.index ? 'active' : ''"></em>
      </span>
    </div>
</div>
</template>

<script>
export default {
  name: 'slide',
  props: ['optionsInit', 'datas'],
  data () {
  	return {
      options: {
        index: this.optionsInit.index || 0,// 初始项
        isAuto: this.optionsInit.isAuto || false,// 自动滚动
        time:  this.optionsInit.time || 3000,// 滚动间隔
        moveTime:  this.optionsInit.moveTime || 700,// 滑动持续多久可以切换
        scale:  this.optionsInit.scale || 0.5// 宽高比
      },
      windowW: window.screen.availWidth,
      ulLeft: 0,
      touch: {
        s: [],
        d: ""
      },
      setInter:''// 定时器
  	}
  },
  computed: {
    slideHeight: function () {// 根据比例计算高度
        return this.windowW * this.options.scale;
    },
    slideWidth: function () {// 计算ul宽度
      return this.windowW * this.datas.length
    },
    pages: function () {// 获取页面个数
      return this.datas.length;
    }
  },
  created() {
    this.autoPlay();// 自动滚动
    this.ulLeft = -this.options.index * this.windowW;
  },
  methods: {
    touchStart (e) {
      this.touch.s[0] = e.targetTouches[0].pageX;
      this.touch.s[1] = e.targetTouches[0].pageY;
      this.touch.s[2] = (new Date()).getTime();
      clearInterval(this.setInter);
    },
    touchMove (e) {
       let a = Math.abs(e.targetTouches[0].pageX - this.touch.s[0]);
       let b = Math.abs(e.targetTouches[0].pageY - this.touch.s[1]);
        //console.log("dMove:" + this.touch.d)
        if (a >= b && this.touch.d == "") {
            this.touch.d = 1;// 左右
        } else if (this.touch.d == "") {
            this.touch.d = 0;// 上下或者偏上下
        }
        if (this.touch.d == 1) {// 左右滚动
           e.preventDefault();
           this.ulLeft = -this.options.index * this.windowW + e.targetTouches[0].pageX - this.touch.s[0];
        }
    },
    touchEnd (e) {
      if (this.touch.d == 1){
          if ((new Date()).getTime() - this.touch.s[2] > this.moveTime){
              if (e.changedTouches[0].pageX - this.touch.s[0] > this.windowW/3){
                this.autoFn("right")
              } else if (this.touch.s[0] - e.changedTouches[0].pageX > this.windowW/3){
                this.autoFn("left")
              } else {
                this.autoFn("reset")
              }
          } else {
              if (e.changedTouches[0].pageX > this.touch.s[0]){
                this.autoFn("right");
              } else if (this.touch.s[0] > e.changedTouches[0].pageX){
                this.autoFn("left")
              }
          }
      }
      console.log(this.options.index)
      this.touch.d = "";
      this.autoPlay();
    },
    autoFn (c) {
        if(c == "left") {
            if(this.options.index >= this.pages - 1){
              this.options.index = this.pages - 1
            }else{
              this.options.index ++
            }
            this.ulLeft = -this.windowW * this.options.index
        }else if (c == "right") {
            if (this.options.index <= 0) {
              this.options.index = 0
            } else {
              this.options.index --
            }
            this.ulLeft = -this.windowW * this.options.index
        }else if(c == "reset") {
            this.ulLeft = -this.windowW * this.options.index;
        }
    },
    autoPlay () {
      let that = this;
      if (this.options.isAuto) {
        this.setInter = setInterval(function() {
            if (that.options.index >= that.pages - 1){
                that.options.index = 0;
            } else {
                that.options.index ++;
            }
            that.ulLeft = -that.windowW * that.options.index;
        }, that.options.time);
      }
    }
  }
}
</script>

<style>
.slide{clear:both;position:relative;z-index:0;width:100%;max-width:960px;max-height:480px;margin:0 auto 0.3em auto;overflow:hidden; margin-top:10px;}
.slide-box{ width:100%;height:100%; margin:0 auto;overflow:hidden}
.slide .slide-ul{z-index:1;width:10000px;-webkit-transition: -webkit-transform 350ms cubic-bezier(.165, .84, .44, 1);transition: transform 350ms cubic-bezier(.165, .84, .44, 1);}
.slide .slide-ul li{float:left;display:block; height: 100%}
.slide .slide-ul li img{display:block;width:100%;height:100%;}
.slide .title-box{ width:90%; padding:0 5%; z-index:999; height:30px; line-height:30px; color:#fff; font-size:14px; background:rgba(0,0,0,.5); position:absolute; left:0; bottom:0;}
.slide .circle{ float:right;}
.slide .title{ float:left; display:inline-block;}
.slide .circle em{ display:inline-block; width:5px; height:5px; margin-left:5px; background-color:#fff; border-radius:50%;}
.slide .circle .active{ background-color:#f00}
</style>
