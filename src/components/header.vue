<template>
  <div id="header">
      这是页面头部咯。。。。
  </div>
</template>

<script>
export default {
  name: 'header'
}
</script>

<style>
#header{width:100%;height:40px;line-height:40px;position:fixed;left:0;top:0;z-index:999}
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
