<template>
  <div class="article-container " :class="{'blog-readme-begin':readmeStatus,'blog-readme-end':!readmeStatus}">
          <h1 class="article-title">{{article.title}}</h1>
          <h4 class="article-time">{{article.createdTime}}</h4>
    <div class="article-content markdown-html" v-html="markdownContent">
    </div>
  </div>
  <div class="paging">
    <router-link :to="'/category'" tag="h1" class="options-btn">上一篇:我跟你妈妈在一起</router-link>
    <router-link :to="'/index'" tag="h1" class="options-btn">下一篇:你跟我女儿在一起</router-link>
  </div>
</template>

<script lang="ts">
  import {defineComponent, reactive, ref} from 'vue';
  import marked from 'marked';
  import {BlogInit} from "@/utils/BLogInit";
  import axios from "axios";
  import {blogIndexApi} from "@/common/apirouter";

  export default defineComponent({
    name: 'ArticleTextarea',
    props:{
      articleId:Number
    },
    setup(props){

      const article = reactive({
        id:0,
        title:'',
        createdTime:'',
        content:'',
        categoryId:0,
      })
      const markdownContent = ref()
      axios.get(blogIndexApi.articleApi+'/'+props.articleId).then(res=>{
        article.content = res.data.data.content
        article.createdTime = res.data.data.createdTime
        article.categoryId = res.data.data.categoryId
        article.title = res.data.data.title
        article.id = res.data.data.id

        markdownContent.value = marked(res.data.data.content)
      })

      return{

        article,
        markdownContent,
        ...BlogInit(),
      }
    }
  })
</script>

<style lang="scss" scoped>

  @import "../../assets/css/mixin";
  @import "../../assets/css/basic";
  .article-container{
    /*margin-top: 10px !important;*/
    /*margin-bottom: 50px;*/
    /*background-color: #FBFCFC;*/
    padding: 50px;
    border-radius: 15px;
    //width: 1200px;
    margin-left: auto;
    margin-right: auto;


    h1{
      font-size: 60px;
    }
    h4{
      margin-top: 10px;
      font-size: 16px;
    }
    div{
      margin-top: 10px;
      font-size: 18px;
      line-height: 40px;
    }
    //@include shadow()
  }

  .paging{
    /*background-color: #ff6600;*/
    margin-top: 20px;
    width: 700px;
    font-size: 8px;
    font-weight: bold;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 20px;

    .options-btn{
      text-decoration: none;
      color: #333333;
      transition: all 0.5s;
      cursor: pointer;
      &:hover{
        color: #3683d6;
      }


    }

  }
</style>
