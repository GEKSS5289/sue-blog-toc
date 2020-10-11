<template>
  <div class="dynamic-box">
    <h1 class="text-s3">佚态</h1>
    <div class="dynamic-list">
        <div v-for="(item,index) in dynamiclists.data"
        >
          <blog-text :content="item.content" :mood="item.mood" :createdTime="item.createdTime">
          </blog-text>
        </div>

    </div>
  </div>

</template>

<script lang="ts">
  import { defineComponent,onBeforeMount,ref,onMounted,reactive} from 'vue'
  import axios from 'axios'
  import BlogText from "@/components/sue-index/BlogText.vue"
  import store from "@/store/index"
  // import Dynamic from "../../interface/Dynamic";
  export default defineComponent({

    name: 'DynamicList',
    components:{
      BlogText
    },
    setup() {


      interface Dynamic {
        content: string,
        createdTime: Date,
        mood: string
      }
      // let dynamiclists = reactive({
      //   data: Array<Dynamic>()
      // })
      let dynamiclists = reactive({
        data: Array<Dynamic>()
      })
      onMounted(() => {
        getIndexDynamic()
      })

      function getIndexDynamic() {
        axios.get("http://localhost:5288/blog/dynamic").then(res => {
          for (let i = 0; i < res.data.data.length; i++) {
            dynamiclists.data.push(res.data.data[i])
            // console.log(dynamiclists.length)
          }
          console.log(dynamiclists.data.length)
        })
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
