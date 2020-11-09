<template>

  <div >
    <div class="category-banner container" :class="{'blog-readme-begin':readmeStatus,'blog-readme-end':!readmeStatus}">
      <div class="category-text-area" >
        <h1>📄</h1>
        <h4>随手记录，随风而动</h4>
      </div>
    </div>
    <div class="container article-category-container" :class="{'blog-readme-begin':readmeStatus,'blog-readme-end':!readmeStatus}" >
      <div class="category-list">
        <div class="category-item" v-for="(item,index) in categoryList.data" :key="index">
          <h1>{{item.categoryImg}}</h1>
          <h6>{{item.categoryName}}</h6>
        </div>
      </div>


      <div class="article-area" :class="{'blog-service-begin':serviceStatus,'blog-service-end':!serviceStatus}">
        <div class="article-search">
          <input  placeholder="搜搜看....." class="article-search-input"/>
          <!--          <div class="search-btn">🔎</div>-->
        </div>
        <div class="article-list">


          <router-link class="none-style" :to="`/article/${item.id}`" tag="a" v-for="(item,index) in articleDescList.data" :key="index">
            <div class="article-item">
              <div class="article-content">
                <div class="article-info-title">{{item.title}}</div>
                <div class="article-category">{{item.categoryId}}</div>
                <div class="article-comment-count">佚言:{{item.commentCount}}</div>
                <div class="article-read-count">随眼:{{item.readCount}}</div>
                <div class="article-create-time">发布时间:{{item.createdTime}}</div>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>

</template>

<script lang="ts">
    import {defineComponent, reactive} from 'vue'
    import {BlogInit} from "@/utils/BLogInit";
    import axios from 'axios'
    import {ArticleDesc} from "@/model/ArticleDesc";
    import {blogIndexApi} from "@/common/apirouter";
    import { Category } from '@/model/Category';
    export default defineComponent({
        name: "ArticleCategory",
        setup(){

          const articleDescList = reactive({
            data:Array<ArticleDesc>(),

          })
          const categoryList = reactive({
            data:Array<Category>()
          })

          axios.get(blogIndexApi.articleApi).then(res=>{
            for (let i = 0; i < res.data.data.length; i++) {
              articleDescList.data.push(res.data.data[i])
            }
          })

          axios.get(blogIndexApi.categoryApi).then(res=>{
            for (let i = 0; i < res.data.data.length; i++) {
              categoryList.data.push(res.data.data[i])
            }
          })

          return{
            articleDescList,
            categoryList,
            ...BlogInit(),
          }
        }
    })
</script>

<style lang="scss">

  @import "../assets/css/mixin.scss";
  @import "../assets/css/basic.scss";


  .category-banner{
    width: 100%;
    height: 400px;
    background-color: #F8F9F9;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    .category-text-area{

      /*background-color: red;*/
      color: #333333;
      display: flex;
      flex-direction: row;
      align-items: center;
      h1{
        font-size: 100px;
      }
      h4{
        font-size: 20px;
        margin-left: 50px;
        margin-top: 30px;
      }
    }
  }
  .article-category-container{
    /*background-color: #1ABC9C;*/
    margin-top: 50px;
    margin-bottom: 50px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    .category-list{
      width: 300px;
      display: flex;
      align-items: center;
      flex-direction: row;
      flex-wrap: wrap;
      align-content: flex-start;
      .category-item{
        width: 100px;
        height: 100px;
        margin-left: 10px;
        margin-bottom: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        transition: all 0.5s;
        @include shadow();
        h1{
          margin-bottom: 10px !important;
        }
        &:hover{
          /*background-color: #EAF2F8;*/
          /*color: #5DADE2;*/
          @include shadowHover();
        }
      }
    }
    .article-area{
      width: 1200px;
      /*height: 500px;*/
      /*background-color: red;*/

      margin-left: 50px;
      .article-search{
        /*width: 300px;*/
        /*height: 70px;*/
        width: 861px;
        display: flex;
        flex-direction: row;
        /*justify-content: space-between;*/
        background-color: white;
        align-items: center;
        margin-left: 50px;
        border-left:5px solid #273746;
        /*border-top: 3px solid #ff6600;*/
        transition: all 1s;
        &:hover{
          @include shadowHover();
        }
        input{
          width: 600px;
          height: 20px;
          font-size: 34px;
          padding: 30px;
          outline: none;
          border: none;
        }
      }
      .article-list{

        box-sizing: border-box;
          a {
            text-decoration: none;
            color: #5D6D7E;
          }
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        /*overflow-scrolling: auto;*/
        padding: 20px;
        /*height: 500px;*/
        .article-item{
          width: 378px;
          height: 200px;
          margin-left: 30px;
          font-weight: bold;
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          align-items: center;
          transition: all 1s;
          margin-bottom: 20px;
          /*border-bottom: 1px solid #333333;*/
          /*box-sizing: border-box;*/
          @include shadow();
          padding: 20px;
          .article-icon{
            font-size: 30px;
          }
          .article-info-title{
            font-size: 20px;
            width: 300px;
          }
          .article-create-time{
            font-size: 15px;
          }
          &:hover{
            @include shadowHover();
          }
          .article-content{
            margin-left: 30px;

            .article-category{
              display: flex;
              align-items: center;
              justify-content: center;
              margin-top: 10px;
              color: white;
              background-color: #273746;
              width: 30px;
              padding: 10px;
              margin-bottom: 10px;
            }
          }
        }
      }
    }


  }
</style>
