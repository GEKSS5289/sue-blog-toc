<template>
  <div class="container">

    <dynamic-list></dynamic-list>
    <blog-service-list></blog-service-list>
  </div>
</template>

<script lang="ts">
  import {defineComponent} from 'vue'

  import ServiceText from '@/components/sue-textarea/ServiceText.vue'
  import DynamicList from "@/components/sue-container/DynamicList.vue";
  import BlogServiceList from "@/components/sue-container/BlogServiceList.vue"
  export default defineComponent({
    name: 'Index',
    components:{

      DynamicList,
      BlogServiceList
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
