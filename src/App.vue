<template>
  <div id="app">
    <Header></Header>
    <div class="main">
      <router-view name="slidebar"></router-view>
      <router-view name="main"></router-view>
      <div class="backtotop"  @click="backTop">回到顶部</div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
  import Header from './components/Header/Header'
  import Footer from './components/Footer/Footer'
  import PostList from './components/PostList/PostList'
  export default {
    name: 'App',
    components: {
      Header, PostList, Footer
    },
    mounted () {
      window.addEventListener('scroll', this.scrollToTop)
    },
    destroyed () {
      window.removeEventListener('scroll', this.scrollToTop)
    },
      methods:{
        // 点击图片回到顶部
        backTop () {
          let that = this;
          let timer = setInterval(() => {
            let ispeed = Math.floor(-that.scrollTop / 5)
            document.documentElement.scrollTop = document.body.scrollTop = that.scrollTop + ispeed;
            if (that.scrollTop === 0) {
              clearInterval(timer)
            }
          }, 16)
        },
        // 计算距离顶部的高度
        scrollToTop () {
          let that = this;
          let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
          that.scrollTop = scrollTop;
        }
    }
  }
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }

  body {
    background-color: #e1e1e1;
  }

  .main {
    width: 90%;
    margin: 0 auto;
  }

  .backtotop {
    display: block;
    top: 442px;
    right: 0;
    width: 24px;
    color: gray;
    padding: 12px 0 12px 5px;
    position: fixed;
    cursor: pointer;
    text-align: center;
    font-size: 14px;
    background-color: #fff;
    border-radius: 12px 0 0 12px;
  }

  @media screen and (max-width: 979px){
    .main{
      width:100%;
      position: relative;
    }
  }
</style>
