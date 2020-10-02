<template>
  <div class="container">
    <h1 class="text-s3">佚态</h1>
    <div class="dynamic-list">
      <blog-text></blog-text>
      <blog-text></blog-text>
      <blog-text></blog-text>
    </div>
    <div class="blog-server-content">
      <div class="blog-server-list">
        <menu-text></menu-text>
        <service-text class="mt20" ></service-text>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
  import {defineComponent} from 'vue'
  import BlogText from '@/components/textarea/BlogText.vue'
  import MenuText from '@/components/textarea/MenuText.vue'
  import ServiceText from '@/components/textarea/ServiceText.vue'
  export default defineComponent({
    name: 'Index',
    components:{
      BlogText,
      MenuText,
      ServiceText
    },

  })
</script>


<style lang="scss" scoped>
  @import './../assets/css/mixin.scss';

  .container {
    display: flex;
    justify-content: space-around;
    padding: 20px;
    @include marginTopAndBottom();
    //@include shadow();
    .dynamic-list {
      width: 700px;
      /*height: 1100px;*/
      //@include shadow();
    }
    .blog-server-content {
      margin-left: 30px;

      .blog-server-list {
        width: 500px;
        display: flex;
        flex-direction: column;
        align-items: center;
        //@include shadow();

      }
    }

  }
</style>
