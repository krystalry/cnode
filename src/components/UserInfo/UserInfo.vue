<template>
  <div class="UserInfo">
    <div class="loading" v-if="isLoading">
      <img src="../../assets/loading.gif" >
    </div>
    <div class="userInfomation" v-else>
      <p>
        <router-link :to='{name:"root"}'>
          首页
        </router-link></p>
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
          <li v-for="item in topcilimitby5">
            <!--<router-link :to="{name:'user_info',params:{name:item.loginname}}">-->
              <img :src="userinfo.recent_topics[0].author.avatar_url" alt="">
            <!--</router-link>-->
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
          <li v-for="item in replylimitby5">
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
          this.isLoading = false;
          this.userinfo = res.data.data;
      })
      .catch(function (err) {
          console.log(err)
        })
      }
    },
    computed:{
      topcilimitby5(){
        if(this.userinfo.recent_topics){
          return this.userinfo.recent_topics.slice(0,5);
        }
      },
      replylimitby5(){
        if(this.userinfo.recent_replies){
          return this.userinfo.recent_replies.slice(0,5);
        }
      }
    },
    beforeMount(){
      this.isLoading = true;
      this.getData();
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
  .userInfomation p a{
    text-decoration: none;
    color: #80bd01;
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
    border-radius: 3px;
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
    overflow: hidden;
    text-overflow: ellipsis;
    text-decoration: none;
  }
  .userInfomation > div >ul > li {
    padding: 8px 12px 8px 12px;
    white-space: nowrap;
    font-size: 0.72rem;
    text-overflow: ellipsis;
    overflow: hidden;
    line-height: 30px;
    vertical-align: middle;
    position: relative;
    border-bottom: 1px solid #E1E1E1;
  }
  .userInfomation > div >ul > li > a {
    overflow: hidden;
    text-overflow: ellipsis;
    text-decoration: none;
    color: #08c;
  }
  .userInfomation > div >ul > li > a:hover {
    color: #005580;
    text-decoration: underline;
  }
  .replies img,
  .topics img {
    width: 30px;
    position: absolute;
  }
  .replies a,
  .topics a{
    position: absolute;
    left:60px;
  }
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
    }
    .userInfomation .topics > ul > li > a{
      max-width: 80%;
      -o-text-overflow: ellipsis;
      white-space: nowrap;
      display: inline-block;
      vertical-align: middle;
      line-height: 30px;
    }
    .userInfomation{
      width: 96%;
    }
  }
</style>
