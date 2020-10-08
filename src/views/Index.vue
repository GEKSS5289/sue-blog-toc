<template>
  <blog-read-me></blog-read-me>
  <div class="container">
    <dynamic-list></dynamic-list>
    <blog-service-list></blog-service-list>
  </div>
  <blog-give-me></blog-give-me>

</template>

<script lang="ts">
  import {defineComponent} from 'vue'
  import DynamicList from "@/components/sue-container/DynamicList.vue";
  import BlogServiceList from "@/components/sue-container/BlogServiceList.vue"
  import BlogGiveMe  from "@/components/sue-textarea/BlogGiveMe.vue"
  import BlogReadMe from "@/components/sue-textarea/BlogReadme.vue";
  export default defineComponent({
    name: 'Index',
    components:{

      DynamicList,
      BlogServiceList,
      BlogGiveMe,
      BlogReadMe

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
  }
</style>
