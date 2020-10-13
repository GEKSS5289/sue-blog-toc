<template>
    <div class="container article-category-container">
      <div class="category-list">
        <div class="category-item">
          <h1>🥘</h1>
          <h6>SpringBoot</h6>
        </div>
        <div class="category-item">
          <h1>🥠</h1>
          <h6>JAVA</h6>
        </div>
        <div class="category-item">
          <h1>🥡</h1>
          <h6>SpringCloud</h6>
        </div>
        <div class="category-item">
          <h1>🍘</h1>
          <h6>Redis</h6>
        </div>
        <div class="category-item">
          <h1>🍨</h1>
          <h6>Mysql</h6>
        </div>
        <div class="category-item">
          <h1>🍹</h1>
          <h6>RabbitMQ</h6>
        </div>
        <div class="category-item">
          <h1>🍣</h1>
          <h6>TypeScript</h6>
        </div>
        <div class="category-item">
          <h1>🍗</h1>
          <h6>JavaScript</h6>
        </div>
        <div class="category-item">
          <h1>🥙</h1>
          <h6>Nginx</h6>
        </div>
      </div>
      <div class="article-list"></div>
    </div>
</template>

<script lang="ts">
    import {defineComponent} from 'vue'

    export default defineComponent({
        name: "ArticleCategory"
    })
</script>

<style lang="scss" scoped>

  @import "../assets/css/mixin";
  .article-category-container{
    /*background-color: #1ABC9C;*/
    margin-top: 50px;
    margin-bottom: 50px;
    display: flex;
    flex-direction: row;
    justify-content: start;
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
    .article-list{
      width: 1200px;
      height: 500px;
      background-color: #ECF0F1;
      margin-left: 50px;
    }


  }
</style>
