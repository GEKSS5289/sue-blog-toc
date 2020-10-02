<template>
  <div class="blog-auther-detail" :class="{'hidden':show}">
    <h1>自述</h1>
    <p class="blog-text-p">擅长JAVA后端开发，
      了解SpringCloud、SpringBoot、MVC、RabbitMQ、KafkaMQ、RocketMQ
      ElasticSearch、Mysql、Redis、ELK、Docker、OSS、FastDFS、Nginx、Keepalived、Haproxy、MyCat
      前端也有涉及如VUE.js、node.js
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
  @import "../../assets/css/basic.scss";
  @import "../../assets/css/mixin.scss";


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
