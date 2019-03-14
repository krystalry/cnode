<template>
  <div class="UserInfo">
    <!--在数据未返回的时候，显示这个正在加载的gif-->
    <div class="loading" v-if="isLoading">
      <img src="../../assets/loading.gif" >
    </div>
    <div class="userInfomation" v-else>
      <p>主页</p>
      <section>
        <img :src="userinfo.avatar_url" >
        <span>{{userinfo.loginname}}</span>
        <p>
          {{userinfo.score}}积分
        </p>
        <p>
          注册时间：{{userinfo.create_at | formatDate}}
        </p>
      </section>
      <div class="topics">
        <p>最近创建的话题</p>
        <ul>
          <li v-for="item in userinfo.recent_topics">
              <img :src="userinfo.recent_topics[0].author.avatar_url" alt="">
            <router-link :to="{
          name:'post_content',
          params:{
            id:item.id
          }
          }">
              {{item.title}}
            </router-link>
            <span>{{item.last_reply_at | formatDate}}</span>
          </li>
        </ul>
      </div>
      <div class="replies">
        <p>最近参与的话题</p>
        <ul>
          <li v-for="item in userinfo.recent_replies">
            <img :src="item.author.avatar_url" >
            <router-link :to="{
          name:'post_content',
          params:{
            id:item.id
          }
          }">
              {{item.title}}
            </router-link>
            <span>{{item.last_reply_at | formatDate}}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "UserInfo",
    data(){
      return {
        isLoading:false,
        userinfo:{}
      }
    },
    methods:{
      getData(){
        this.$http.get(`https://cnodejs.org/api/v1/user/${this.$route.params.name}`)
          .then(res=>{
          this.isLoading = false; //加载成功，去除动画
          this.userinfo = res.data.data;
      })
      .catch(function (err) {
          //处理返回失败后的问题
          console.log(err)
        })
      }
    },
    beforeMount(){
      this.isLoading = true;//加载成功之前显示加载动画
      this.getData();//在页面加载之前获取数据
    }
  }
</script>

<style scoped>
  .userInfomation {
    background: white;
    width: 75%;
    margin: 10px auto;
  }
  .userInfomation section {
    padding: 12px;
    position: relative;
  }
  .userInfomation section p,
  .userInfomation section span{
    font-size: 14px;
  }
  .userInfomation section p{
    padding-top: 5px;
  }
  .userInfomation section span{
    color:#778087;
    position: absolute;
    transform: translateX(10px)
  }
  .userInfomation section p:nth-last-child(){
    color: #ababab;
  }
  .userInfomation img {
    width: 40px;
  }
  .userInfomation li {
    list-style:none;
  }
  .userInfomation .replies,
  .userInfomation .topics {
    font-size: 0.72rem;
    border-top: 10px #DDDDDD solid;
  }
  .userInfomation > div > p,
  .userInfomation > p{
    padding: 12px 0 12px 12px;
    background-color: rgba(212, 205, 205, 0.17);
    font-size: 0.75rem;
    margin: 0;
  }
  .userInfomation > div >ul > li {
    padding: 4px 0 4px 12px;
    white-space: nowrap;
    font-size: 0.72rem;
    text-overflow: ellipsis;
    overflow: hidden;
    line-height: 30px;
    vertical-align: middle;
  }
  .userInfomation > div >ul > li > a {
    color: #094E99;
    text-decoration: none;
  }
  .replies img{
    width: 30px;
    position: absolute;
  }
  /*.replies a{*/
    /*position: absolute;*/
    /*left:60px;*/
  /*}*/
  .replies span{
    float: right;
    color:#777;
  }
  .topics span{
    float: right;
    color:#777;
  }
  .loading {
    text-align: center;
    padding-top: 300px;
  }
  @media screen and (max-width: 979px){
    .userInfomation > div > ul > li > a{
      max-width: 66%;
      -o-text-overflow: ellipsis;
      white-space: nowrap;
      display: inline-block;
      vertical-align: middle;
      line-height: 30px;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .userInfomation .topics > ul > li > a{
      max-width: 80%;
      -o-text-overflow: ellipsis;
      white-space: nowrap;
      display: inline-block;
      vertical-align: middle;
      line-height: 30px;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .userInfomation{
      width: 96%;
    }
  }
</style>
