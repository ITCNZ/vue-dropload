<template>
  <div id="news">
      少年：{{msg}}
  </div>
</template>

<script>
export default {
  name: 'news',
  data () {
    return {
      msg: '这是新闻页面啦啦啦啦啦啦。。。。'
    }
  }
}
</script>

<style>
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
