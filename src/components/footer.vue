<template>
  <div id="footer">
      <a href="https://vuejs.org" target="_blank">关于我们</a>
      <a href="https://forum.vuejs.org" target="_blank">联系我们</a>
      <a href="https://gitter.im/vuejs/vue" target="_blank">企业介绍</a>
      <a href="https://twitter.com/vuejs" target="_blank">业务说明</a>
  </div>
</template>

<script>
export default {
  name: 'footer'
}
</script>

<style>
#footer{width:100%;height:40px;line-height:40px;position:fixed;left:0;bottom:0;background:#efefef;}
#footer a {
  color: #42b983;
  display:inline-block;
  width:25%;
  text-align:center;
  padding:0;
  float:left;
  font-size:14px;
  text-decoration:none;
}
</style>
