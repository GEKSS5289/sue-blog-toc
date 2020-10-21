<template>
  <div class="blog-auther-detail" :class="{'hidden':show}">
    <h1>自述</h1>
    <p class="blog-text-p">
      {{readme}}
    </p>
  </div >
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import BLogRestfulApi from "@/utils/BLogRestfulApi";

  export default defineComponent({
    name: 'BlogServiceDetail',
    props:{
      show:{
        type:Boolean
      }
    },
    setup(){
      return{
        readme:new BLogRestfulApi().getBlogReadme()
      }
    }
  })
</script>

<style lang="scss" scoped>
  @import "../../assets/css/basic";
  @import "../../assets/css/mixin";
  @import "../../assets/css/theme";


  .blog-auther-detail{
    @include shadow();
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
      border-left:5px solid $sue-theme-color;
    }
    p{
      text-align: left;

      padding:20px;
      line-height: 25px;
    };

  }
</style>
