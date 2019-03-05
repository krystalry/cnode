import Vue from 'vue'
import Router from 'vue-router'
import Article from '../components/Article/Article'
import PostList from '../components/PostList/PostList'
import UserInfo from '../components/UserInfo/UserInfo'
import SlideBar from '../components/SliderBar/SlideBar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      name:'root',
      path:'/',
      components:{
        main:PostList
      }
    },
    {
      name:'post_content',
      path:'/topic/:id&author=:name',
      components:{
        main:Article,
        slidebar:SlideBar
      }
    },
    {
      name:'user_info',
      path:'/userinfo/:name',
      components:{
        main:UserInfo
      }
    }
  ]
})
