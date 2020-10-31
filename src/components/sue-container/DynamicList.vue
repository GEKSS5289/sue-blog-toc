<template>
  <div class="dynamic-box">
    <h1 class="text-s3">佚态</h1>
    <div class="dynamic-list">
      <div v-for="(item,index) in dynamiclists" :key="index">
        <blog-text
          :content="item.content"
          :mood="item.mood"
          :createdTime="item.createdTime">
        </blog-text>
        <article class="context" v-html="compiledMarkdown"></article>
      </div>
    </div>


  </div>

</template>

<script lang="ts">
  import { defineComponent,onMounted,reactive,computed} from 'vue'
  import BlogText from "@/components/sue-index/BlogText.vue"
  import Dynamic from "@/model/Dynamic";
  import BLogRestfulApi from "@/api/BLogRestfulApi";
  import 'mavon-editor/dist/css/index.css'


  export default defineComponent({
    name: 'DynamicList',
    components:{
      BlogText,
    },
    setup() {
      return {
        dynamiclists:new BLogRestfulApi().getBlogDynamicList(),
      }
    }

  })
</script>

<style lang="scss" scoped>

  .dynamic-box{

    display: flex;
    justify-content: space-around;

    .dynamic-list {
      .md{
        background-color: red;
        width: 500px;
        height: 500px;
      }
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
