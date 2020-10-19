<template>
    <div class="readme-banner">
      <!--        <h1 class="readme-icon">"山不在高，有我则林"</h1>-->
      <!--        <h4 class="readme-title"></h4>-->
      <div class="readme-title">
        <h1>去做梦，去创造</h1>
        <h4>To dream, to create</h4>
      </div>

    </div>

</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    name: 'BlogArticleList'
  })
</script>

<style lang="scss" scoped>
  @import "../../assets/css/mixin";
  @import "../../assets/css/basic";


    .readme-banner{
      margin-left: auto;
      margin-right: auto;
      width: 1920px;
      height: 600px;
      /*position: relative;*/
      background-image: url("../../../public/imgs/banner/yuzhou.jpg");
      background-position: 0 -100px ;
      /*margin-bottom: 50px;*/
      display: flex;
      flex-direction: row;


      .readme-title{
        display: flex;

        position: relative;
        color: white;
        top: 250px;
        left: 400px;
        flex-direction: column;
        h1{
          font-size: 40px;
        }
        h4{
          font-size: 20px;
        }
      }

    }
</style>
