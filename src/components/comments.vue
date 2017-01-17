<template>
  <div id="comments">
  	  <div class="titlebox">
  	  	既然来了，大爷就评论下吧：<input type="button" value="爷要评论" v-on:click="open">
  	  </div>
  	  <div class="comments-list">
  	  	<h2 class="title">评论列表：</h2>
  	    <ul>
  	  	  <li v-for="(name, key) in commentDatas.username">
	  	  	<div class="top"><span class="userName">{{name}}</span><time>{{commentDatas.time[key]}}</time></div>
  	  	  	<div class="content">{{decodeURIComponent(commentDatas.content[key])}}</div>
  	  	  </li>
  	    </ul>
  	    <div class="mores" v-show="allPage">
          <p class="get-more" v-on:click="clickList" v-show="switchShow">点击加载更多</p>
          <p class="loading" v-show="!switchShow">加载中...</p>
        </div>
  	  </div>
	  <modal :styles="styles" :bigst="bigst" :smallst="smallst">
	  	<div slot="body">
	      <form action="" method="get">
	      	<label><span class="tit">用户名:</span><input type="text" placeholder="userName"></label>
	      	<label><span class="tit">内　容:</span><textarea placeholder="content"></textarea></label>
	      	<label class="btns">
	      	  <input type="button" value="提交" class="submit">
	      	  <input type="button" value="重置" class="reset">
	        </label>
	      </form>
	  	</div>
	  	<div slot="footer"></div> 
	  </modal>
  </div>
</template>

<script>
import modal from "./modal.vue";
const windowW = window.screen.availWidth;
const windowH = window.screen.availHeight;
let styles = {
      width:'300px',
      height:'200px',
      zIndex: 999
    }
export default {
  name: 'comments',
  components: {
  	modal
  },
  data () {
  	return {
  	  styles: styles,
      styles2: styles,// 保存初始数据
      switchShow:false,
      allPage: false,
      nowPage: 1,
      commentDatas: {
      	username: [],
      	time: [],
      	content: []
      }
  	} 
  },
  methods: {
    open: function () {
        this.$children[0].show = true;
        this.styles = this.styles2;
    },
    confirm: function () {
       this.$children[0].show = false;
       // console.log('确定回调')
    },
    cancel: function () {
      this.$children[0].show = false;
      // console.log('取消回调')
    },
    bigst: function () {
      this.styles = {
        width: windowW + 'px',
        height: windowH + 'px'
      }
    },
    smallst: function () {
      this.styles = this.styles2;
    },
	getList: function () {
		console.log(this.commentDatas)
		this.$http.get('https://apis.pc6.com/sajax.asp?action=0&id=68029&CommentTpye=0&page=' + this.nowPage).then(function (response) {
		    this.commentDatas.username = this.commentDatas.username.concat(eval ("(" + response.body + ")").sUserForm);
		    this.commentDatas.time = this.commentDatas.time.concat(eval ("(" + response.body + ")").sDateAndTime);
		    this.commentDatas.content = this.commentDatas.content.concat(eval ("(" + response.body + ")").sContent);
		    this.switchShow=!this.switchShow;
		    if (this.nowPage == eval ("(" + response.body + ")").PageCount) {
		    	this.allPage = false;
		        return false;
		    }
			if (eval ("(" + response.body + ")").PageCount > 1) {
				this.allPage = true;
			}
		  }, function (response) {
		    // console.log(response)
		});
	},
	clickList: function () {
		this.switchShow=!this.switchShow;
		this.nowPage++;
		this.getList();
	}
  },
  created () {
  	this.getList();
  }
}
</script>

<style>
.titlebox{ padding:15px; font-weight: bold;; color: #000}
.comments-list{text-align: left; margin: 0 15px; padding-bottom: 40px;}
.comments-list li{ padding: 10px 0; border-bottom: 1px solid #efefef; word-break: break-all}
.comments-list li .top{font-size: 12px; color: #666}
.comments-list li time{float: right}
label{width: 100%; display: block; margin-bottom: 10px; display: flex;}
label .tit{display:inline-block; width:60px; text-align:right;}
label input[type="text"], label textarea{flex:1; margin: 0 10px; border: 1px solid #dfdfdf; padding-left: 6px;}
.btns{padding-left: 60px;}
form input[type="button"]{width:85px; margin:10px;height: 35px; line-height: 35px; border: none;; background: #42b983; color: #fff;}
</style>
