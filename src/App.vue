<!--<template>-->
  <!--<div id="app">-->
    <!--<Header></Header>-->
  <!--</div>-->
<!--</template>-->

<!--<script>-->
  <!--import Header from "./components/Header"-->
  <!--export default {-->
    <!--name: 'App',-->
    <!--component: {-->
      <!--Header-->
    <!--}-->
  <!--}-->
<!--</script>-->

<!--<style>-->
  <!--.main{-->
    <!--width: 80%;-->
    <!--margin: 0 auto;-->
  <!--}-->
<!--</style>-->


<template>
  <div id="app">
    <Header></Header>
    <div class="main">
      <!--<router-view name="slidebar"></router-view>-->
      <!--<router-view name="main"></router-view>-->
    </div>
  </div>
</template>

<script>
  import Header from './components/Header'
//  import PostList from './components/PostList'
  export default {
    name: 'App',
    components:{
//      Header,PostList
      Header
    }
  }
</script>

<style>
  .main{
    width: 80%;
    margin: 0 auto;
  }
</style>
