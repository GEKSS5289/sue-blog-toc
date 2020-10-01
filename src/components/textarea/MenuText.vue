<template>
  <div class="blog-server-box">

    <blog-title :title="'🍖餐桌'" :hint="'方便使用'" @click="getReadme"></blog-title>
    <blog-menu-detail :show="status.menu"></blog-menu-detail>
  </div>

</template>

<script lang="ts">
  import { defineComponent, reactive } from 'vue'
  import BlogTitle from "@/components/textarea/BlogTitle.vue";
  import BlogMenuDetail from "@/components/textarea/BlogMenuDetail.vue";
  export default defineComponent({
    name: 'MenuText',
    components:{
      BlogTitle,
      BlogMenuDetail
    },
    setup(){
      const status = reactive({
        menu:false,
      })
      function getReadme(){
        status.menu = !status.menu
      }
      return{
        status,
        getReadme,
      }
    }
  })
</script>

<style lang="scss" scoped>



</style>
