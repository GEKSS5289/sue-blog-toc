<template>
  <div class="blog-server-box">

    <blog-title :title="'👨‍🔬愚者'" :hint="'学生，普通学生，底层搬运工'" @click="getReadme"></blog-title>
    <blog-service-detail :show="status.readme"></blog-service-detail>
  </div>

</template>

<script lang="ts">
  import { defineComponent, reactive } from 'vue'
  import BlogTitle from "@/components/sue-index/BlogTitle.vue";
  import BlogServiceDetail from "@/components/sue-index/BlogServiceDetail.vue";

  export default defineComponent({
    name: 'ServiceText',
    components:{
      BlogTitle,
      BlogServiceDetail
    },
    setup(){
      const status = reactive({
        readme:false,
      })
      function getReadme(){
        status.readme = !status.readme

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
