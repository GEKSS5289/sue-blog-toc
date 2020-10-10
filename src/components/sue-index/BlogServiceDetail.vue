<template>
  <div class="blog-auther-detail" :class="{'hidden':show}">
    <h1>自述</h1>
    <p class="blog-text-p">
      擅长采茶
    </p>
  </div >
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    name: 'BlogServiceDetail',
    props:{
      show:{
        type:Boolean
      }
    }
  })
</script>

<style lang="scss" scoped>
  @import "../../assets/css/basic";
  @import "../../assets/css/mixin";


  .blog-auther-detail{
    box-sizing: border-box;
    transition: all 1s;
    width: 350px;
    /*padding: 20px;*/
    h1{
      margin: 20px;
      box-sizing: border-box;
      /*margin-top: 20px;*/
      margin-left: 20px;

      padding: 30px;
      border-left:5px solid #ff6600;
    }
    p{
      text-align: left;

      padding:20px;
      line-height: 25px;
    };
    @include shadow();
  }
</style>
