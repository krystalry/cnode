<template>
  <div class="header">
    <img src="../assets/cnodejs_light.svg" alt="">
    <ul>
      <li><a href="#">首页</a></li>
      <li><a href="#">新手入门</a></li>
      <li><a href="#">API</a></li>
      <li><a href="#">关于我们</a></li>
      <li><a href="#">注册</a></li>
      <li><a href="#">登录</a></li>
    </ul>
  </div>
</template>

<script>
  export default{
    name: "Header"
  }
</script>

<style>
  .header {
    height: 50px;
    background-color: #5a5555;
  }

  img {
    max-width: 120px;
    margin-left: 50px;
    margin-top: 10px;
  }

  ul {
    float: right;
    list-style: none;
  }

  li{
    display: inline-block;
    padding: 10px 15px;
  }

  a{
    color: #cccccc;
    font-size: 14px;
    text-shadow: nonr;
    text-decoration: none;
  }
</style>
