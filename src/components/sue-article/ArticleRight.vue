<template>

    <div class="article-right-container">
      <div class="article-op-container">
        <h1>上一篇</h1>
        <div class="article-op">
          <h1 class="article-title">关于vue3的配置</h1>
<!--          <h4 class="article-desc">描述了vue3中常见的配置信息，和配置功能，使得大家能够清除vue3给大家带来的新功能</h4>-->
          <div class="goto-button">去看看</div>
        </div>
      </div>
      <div class="article-op-container">
        <h1>下一篇</h1>
        <div class="article-op">
          <h1 class="article-title">关于vue3的配置</h1>
<!--          <h4 class="article-desc">描述了vue3中常见的配置信息，和配置功能，使得大家能够清除vue3给大家带来的新功能</h4>-->
          <div class="goto-button">去看看</div>
        </div>
      </div>

    </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    name: 'ArticleRight'
  })
</script>

<style lang="scss" scoped>

  @import "../../assets/css/mixin";
  @import "../../assets/css/basic";
  .article-right-container{


    margin-top: 50px;
    display: flex;
    flex-direction: column;
    h1{
      font-size: 25px;
      margin-bottom: 20px;
    }


    .article-op-container{
      &:last-child{
        margin-top: 30px;
      }
    }
    .article-op{
      padding: 30px;
      background-color:#ff6600;
      @include shadow();
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 200px;
      /*height: 100px;*/
      .goto-button{
        padding: 10px;
        background-color: white;
        width: 80px;
        height: 20px;
        text-align: center;
        line-height: 20px;
        margin-top: 0px;
        font-weight: bold;
        transition: all 0.6s;
        &:hover{
          background-color: #273746;
          color: white;
        }
      }
      .article-title{
        color: white;
        padding: 10px;
        overflow: hidden;
        text-align: center;
        font-size: 20px;
      }
      .article-desc{
        color: white;
        font-size: 14px;
        line-height: 30px;
        /*background-color: white;*/
      }
    }
  }
</style>
