<template>
  <div class="autherinfo">
    <div class="authersummay">
      <div class="topbar">作者</div>
      <router-link :to="{
          name:'user_info',
          params:{
            name:userinfo.loginname
          }
          }">
        <img :src="userinfo.avatar_url" alt="">
        <span>{{userinfo.loginname}}</span>
      </router-link>
      <p class="scoreStyle"> 积分 {{ userinfo.score}} </p>
    </div>
    <div class="recent_topics">
      <div class="topbar">作者最近创建的话题</div>
      <ul>
        <li v-for="list in topcilimitby5">
          <router-link :to="{
        name:'post_content',
        params:{
          id:list.id,
          name:list.author.loginname
        }
        }">
            {{list.title}}
          </router-link>
        </li>
      </ul>
    </div>
    <div class="recent_replies">
      <div class="topbar">作者最近参与的话题</div>
      <ul>
        <li v-for="list in replylimitby5">
          <router-link :to="{
        name:'post_content',
        params:{
          id:list.id,
          name:list.author.loginname
        }
        }">
            {{list.title}}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "SlideBar",
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
  .authersummay, .recent_replies, .recent_topics {
    background-color: #fff;
    margin-bottom: 10px;
  }
  .autherinfo {
    width: 328px;
    float: right;
  }
  li{
    padding: 2px 10px;
  }
  .recent_replies ul, .recent_topics ul {
    margin-top: 0;
    margin-bottom: 0;
    list-style: none;
  }

  ul a {
    font-size: 14px;
    text-decoration: none;
    color: #778087;
  }

  .topbar {
    padding: 10px;
    background-color: #f6f6f6;
    height: 16px;
    font-size: 14px;
  }

  .authersummay a span {
    font-size: 16px;
    color: #778087;
    position: absolute;
    margin-top: 20px;
  }

  img {
    height: 48px;
    width: 48px;
    border-radius: 3px;
    margin: 10px;
  }

  .loginname {
    width: 100px;
    float: right;
    margin-top: 22px;
    margin-right: 159px;
    font-size: 14px;
  }

  .loginname a {
    text-decoration: none;
    color: #778087;
  }

  .authersummay .topbar {
    margin-top: 0;
  }

  .scoreStyle {
    padding: 0 10px 10px;
    font-size:14px;
  }

  @media screen and (max-width: 979px){
    .autherinfo{
      float: none;
      position: absolute;
      bottom: -4px;
      left: 22px;
      display: none;
    }

    ul a{
      max-width: 96%;
      -o-text-overflow: ellipsis;
      white-space: nowrap;
      display: inline-block;
      vertical-align: middle;
      line-height: 30px;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
</style>
