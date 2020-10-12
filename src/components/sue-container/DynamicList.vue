<template>
  <div class="dynamic-box">
    <h1 class="text-s3">佚态</h1>
    <div class="dynamic-list">
        <div v-for="(item,index) in dynamiclists.data" :key="index">
          <blog-text
            :content="item.content"
            :mood="item.mood"
            :createdTime="item.createdTime">
          </blog-text>
        </div>

    </div>
  </div>

</template>

<script lang="ts">
  import { defineComponent,onMounted,reactive} from 'vue'
  import BlogText from "@/components/sue-index/BlogText.vue"
  import Dynamic from "@/interface/Dynamic";
  import BLogRestfulApi from "@/utils/BLogRestfulApi";

  export default defineComponent({
    name: 'DynamicList',
    components:{
      BlogText
    },
    setup() {

      let dynamiclists = reactive({
        data: Array<Dynamic>()
      })

      onMounted(() => {
        dynamiclists.data = getIndexDynamic()
      })

      function getIndexDynamic() {
          return new BLogRestfulApi().getBlogDynamicList()
      }

      return {
        dynamiclists
      }
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
