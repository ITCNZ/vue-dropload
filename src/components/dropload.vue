<template>
  <div class="list" id="app1" v-infinite-scroll="getMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
    <ul>
        <li v-for="item in games">
            <a v-bind:href="item.url" class="img"><img v-bind:src="item.img"></a>
            <p>
                <a v-bind:href="item.url">{{item.title}}</a>
                <em class="lstar4"></em>
                <span>{{item.server}}<u>39.9M</u>v2.1.3</span>
            </p>
            <a v-bind:href="item.url" class="btn"><em class="bg"></em>下载</a>
        </li>
    </ul>
    <div>
        <p class="get-more" v-on:click="getMore" v-show="switchShow">点击加载更多</p>
        <p class="loading" v-show="!switchShow">加载中...</p>
    </div>
</div>
</template>

<script>
export default {
    name: 'app1',
	data () {
	  return {
		url: 'http://dynamic.anfensi.com/dynamic.php?s=/Afs/ajaxHisTestServerData/cate_id/4/sta/',
		nowPage: 0,
		switchShow:false,
		busy: false,
		games: []
	  }
	},
	created () {
      this.init();
    },
	methods: {
		moreFn: function (itemIndex) {
			this.$http.jsonp(this.url + itemIndex*10).then(function (response) {
				this.busy = true;
			    this.games=this.games.concat(response.body);
				this.switchShow=!this.switchShow;
				this.busy = false;
			  }, function (response) {
			    console.log(response)
			});
			
		},
		getMore: function () {
			this.switchShow = !this.switchShow;
			this.nowPage++;
			this.moreFn(this.nowPage);
		},
		init: function () {
		    this.busy =true;
			this.moreFn(this.nowPage);
		}
	}/*,
	directives: {// 自定义滚动指令，本例已用vue-infinite-scroll插件替代
	  scroll: {
		bind: function (el, binding){
		  console.log(binding);
		  window.addEventListener('scroll', function () {
		    console.log(document.body.scrollTop + '--' + window.innerHeight + '--' + el.clientHeight);
			if(document.body.scrollTop + window.innerHeight >= el.clientHeight) {
			  var fnc = binding.value;   
              fnc(); 
			}
		  })
		}
	  }
	}*/
	
}
</script>

<style>
.list{padding-bottom:30px;}
.list ul{margin-bottom:0}
.list ul li{padding:10px 5px 10px 10px;overflow:hidden;zoom:1;position:relative;border-bottom:1px solid #e8e8e8;}
.list ul li .img{margin-right:10px;display:block;width:60px;float:left;}
.list ul li img{width:60px;height:60px;border-radius:8px;}
.list ul li p{-webkit-box-flex:1;color:#777;overflow:hidden;padding-right:70px;}.list ul li p em{margin:7px 0;}
.list ul li p a{display:block;height:16px;line-height:16px;overflow:hidden;font-size:15px;}
.list ul li p span{display:block;line-height:16px;height:16px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;font-size:12px;}
.list ul li p u{margin:0 6px;padding:0 6px;border-left:1px solid #d9d9d9;border-right:1px solid #d9d9d9;}
.list ul li .btn {width: 40px;height: 25px;padding-top: 35px;color: #65bb0a;line-height:25px;text-align:center;background: none;position:absolute;right:5px; top:12px}
.get-more,.loading{display:block;padding:10px 0; line-height:16px;text-align:center;font-size:14px;margin:0}
.loading{width:75px; margin:0 auto; background:url(../common/imgs/loading.gif) 0 center no-repeat; padding-left:15px; background-size:13px auto}
</style>