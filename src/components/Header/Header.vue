<template>
  <div class="header">
    <router-link :to="{name:'root'}">
      <img src="../../assets/cnodejs_light.svg" alt="">
    </router-link>
    <ul>
      <li>
        <router-link :to='{name:"root"}'>
          首页
        </router-link>
      </li>
      <li>
        <a>新手入门</a>
      </li>
      <li>
        <a>API</a>
      </li>
      <li>
        <a>关于</a>
      </li>
      <li>
        <a>注册</a>
      </li>
      <li>
        <a>登录</a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "Header"
  }
</script>

<style scoped>
  .header {
    background-color: #444;
    height: 50px;
  }

  img {
    max-width: 120px;
    margin-left: 60px;
    margin-top: 10px;
  }

  ul {
    list-style: none;
    float: right;
    margin-right: 65px;
  }

  li {
    display: inline-block;
    line-height: 50px;
    padding: 0 10px
  }

  a {
    text-decoration: none;
    color: #ccc;
    font-size: 13px;
    text-shadow: none;
  }

  li span {
    color: #fff;
    font-size: 13px;
  }

  @media (max-width: 979px) {
    .header {
      height: 100px;
    }

    img {
      margin-left: 20px;
    }

    ul {
      margin-right: 0;
      padding-left: 10px;
      float: none;
    }
  }
</style>

