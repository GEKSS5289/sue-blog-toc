<template>
  <div class="dynamic-box">
    <h1 class="text-s3">佚态</h1>
    <div class="dynamic-list">
      <blog-text></blog-text>
      <blog-text></blog-text>
      <blog-text></blog-text>
      <blog-text></blog-text>
      <blog-text></blog-text>
      <blog-text></blog-text>
      <blog-text></blog-text>

    </div>
  </div>

</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import BlogText from "@/components/sue-textarea/BlogText.vue";
  export default defineComponent({
    name: 'DynamicList',
    components:{
      BlogText
    }
  })
</script>

<style lang="scss" scoped>

  .dynamic-box{

    display: flex;
    justify-content: space-around;
    .dynamic-list {
      width: 700px;
      /*height: 1100px;*/
      //@include shadow();
    }
    h1{
      width: 30px;
      margin-right: 20px;
    }
  }

</style>
