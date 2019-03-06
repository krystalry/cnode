<template>
  <div id="app">
    <Header></Header>
    <div class="main">
      <router-view name="slidebar"></router-view>
      <router-view name="main"></router-view>
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
    components:{
      Header,PostList,Footer
    }
  }
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }
  .main{
    width: 80%;
    margin: 0 auto;
  }
</style>
