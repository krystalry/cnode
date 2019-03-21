<template>
  <div class="article">
    <div class="loading" v-if="isLoading">
      <img src="../../assets/loading.gif" >
    </div>
    <div v-else>
      <div class="topic_header">
        <div class="topic_title">{{post.title}}</div>
        <ul>
          <li>•发布于：{{post.create_at | formatDate}}</li>
          <li>• 作者：
            <router-link :to="{name:'user_info',params:{name:post.author.loginname}}">
              {{post.author.loginname}}
            </router-link>
          </li>
          <li>• {{post.visit_count}}次浏览</li>
          <li>•来自{{post | tabFormatter}}</li>
        </ul>
        <div v-html="post.content" class="topic_content markdown-body"></div>
      </div>
      <div id="reply">
        <div class="topbar">回复</div>
        <div v-if="post.replies.length === 0" class="noReplyStyle">本文暂无评论...</div>
        <div v-for="(reply,index)  in post.replies" class="replySec">
          <div class="replyUp">
            <router-link :to="{
          name:'user_info',
          params:{
            name:reply.author.loginname
          }
          }">
              <img :src="reply.author.avatar_url" class="replyUserImg" alt="">
            </router-link>
            <router-link :to="{
          name:'user_info',
          params:{
            name:reply.author.loginname
          }
          }">
              <span>{{reply.author.loginname}}</span>
            </router-link>
          <span>
          {{index+1}}楼
        </span>
          </div>
          <p v-html="reply.content" class="replyContentStyle markdown-body"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Article",
    data(){
      return {
        isLoading:false,
        post:{}
      }
    },
    methods:{
      getArticleData(){
        this.$http.get(`https://cnodejs.org/api/v1/topic/${this.$route.params.id}`)
          .then(res=>{
          if(res.data.success == true){
          this.isLoading =false;
          this.post = res.data.data;
        }
      })
      .catch(function (err) {
          console.log(err)
        })
      }
    },
    beforeMount(){
      this.isLoading =true;
      this.getArticleData();
    },
    watch:{
      '$route'(to,from){
        this.getArticleData()
      }
    }
  }
</script>

<style scoped>
  @import url('../../assets/markdown-github.css');
  .noReplyStyle{
    margin: 10px;
    padding-bottom: 10px;
    font-size: 12px;
    color: #778087;
  }

  .topbar {
    padding: 10px;
    background-color: #f6f6f6;
    height: 16px;
    font-size: 12px;
    margin-top: 10px;
  }

  .article:not(:first-child) {
    margin-right: 340px;
    margin-top: 15px;
  }

  #reply,
  .topic_header {
    background-color: #fff;
  }

  #reply {
    margin-top: 15px;
    margin-bottom: 15px;
  }

  #reply img {
    width: 30px;
    height: 30px;
    position: relative;
    bottom: -9px;
  }

  .replyUserImg {
    width: 30px;
    height: 30px;
    position: relative;
    bottom: -9px;
  }

  #reply a,
  #reply span,
  .topic_header a,{
    font-size: 13px;
    color: #666;
    text-decoration: none;
  }
  .replySec{
    border-bottom:1px solid #e5e5e5;
    padding:0 10px;
  }

  .loading {
    text-align: center;
    padding-top: 300px;
  }

  .replyUp a:nth-of-type(2) {
    margin-left: 0;
    display: inline-block;
  }

  .topic_header {
    padding: 10px;
  }

  .topic_title {
    font-size: 22px;
    font-weight: 700;
    margin: 8px 0;
    display: inline-block;
    vertical-align: bottom;
    width: 75%;
    line-height: 130%;
  }

  .topic_header ul {
    list-style: none;
    padding: 0 0;
    margin: 6px 0;
  }

  .topic_header li {
    display: inline-block;
    font-size: 12px;
    color: #838383;
  }
  .topic_header li a {
    text-decoration: none;
  }

  .topic_content {
    padding: 10px 10px;
    font-size: 15px;
    line-height: 1.7em;
    overflow: auto;
    border-top: 1px solid #e5e5e5;
  }

  .replyContentStyle{
    font-size: 15px;
    line-height: 1.7em;
    overflow: auto;
    padding: 10px 35px  0 35px;
    margin-bottom: 1em;
  }

  @media screen and (max-width: 979px){
    .article:not(:first-child){
      margin: 10px 10px 10px;
    }
  }

  @media screen and (max-width: 979px){
    .loading {
      text-align: center;
      padding-top: 100px;
    }
  }

  .markdown-text img {
    width: 90% !important;
    /*height: auto;*/
    /*max-width: 100%;*/
    /*display: inline-block;*/
    /*vertical-align: middle;*/
    /*border: 0;*/
  }
</style>
