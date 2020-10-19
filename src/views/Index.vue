<template>
  <blog-read-me :class="{'blog-readme-begin':readmeStatus,'blog-readme-end':!readmeStatus}"></blog-read-me>
  <div class="container dynamic-area">
    <dynamic-list :class="{'blog-dynamic-begin':dynamicStatus,'blog-dynamic-end':!dynamicStatus}"></dynamic-list>
    <blog-service-list :class="{'blog-service-begin':serviceStatus,'blog-service-end':!serviceStatus}"></blog-service-list>
  </div>
  <blog-give-me></blog-give-me>

</template>

<script lang="ts">
  import {defineComponent} from 'vue'
  import DynamicList from "@/components/sue-container/DynamicList.vue";
  import BlogServiceList from "@/components/sue-container/BlogServiceList.vue"
  import BlogGiveMe  from "@/components/sue-index/BlogGiveMe.vue"
  import BlogReadMe from "@/components/sue-index/BlogReadme.vue";
  import {BlogInit} from "@/utils/BLogInit";
  export default defineComponent({
    name: 'Index',
    components:{

      DynamicList,
      BlogServiceList,
      BlogGiveMe,
      BlogReadMe

    },
    setup(){


      return{
        ...BlogInit(),
      }
    }

  })
</script>


<style lang="scss" scoped>
  @import './../assets/css/mixin.scss';

  .container {
    display: flex;
    justify-content: space-between;
    /*padding: 20px;*/
    margin-bottom: 50px;
    //@include marginTopAndBottom();
    //@include shadow();
  }

  .dynamic-area{
    /*margin-top: 200px;*/
    width:1300px;
    padding: 100px;
    background-color: white;
  }
</style>
