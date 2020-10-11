<template>
  <blog-read-me :class="{'blog-readme-begin':readmeStatus,'blog-readme-end':!readmeStatus}"></blog-read-me>
  <div class="container">
    <dynamic-list :class="{'blog-dynamic-begin':dynamicStatus,'blog-dynamic-end':!dynamicStatus}"></dynamic-list>
    <blog-service-list :class="{'blog-service-begin':serviceStatus,'blog-service-end':!serviceStatus}"></blog-service-list>
  </div>
  <blog-give-me></blog-give-me>

</template>

<script lang="ts">
  import {defineComponent,ref,onMounted,onBeforeMount} from 'vue'
  import DynamicList from "@/components/sue-container/DynamicList.vue";
  import BlogServiceList from "@/components/sue-container/BlogServiceList.vue"
  import BlogGiveMe  from "@/components/sue-index/BlogGiveMe.vue"
  import BlogReadMe from "@/components/sue-index/BlogReadme.vue";
  export default defineComponent({
    name: 'Index',
    components:{

      DynamicList,
      BlogServiceList,
      BlogGiveMe,
      BlogReadMe

    },
    setup(){
      const begin = ref('blog-readme-begin')
      const end = ref('blog-readme-end')
      const readmeStatus = ref(true)
      const dynamicStatus = ref(true)
      const serviceStatus = ref(true)

      onMounted(()=>{
        setTimeout(()=>{
          readmeStatus.value = !readmeStatus.value
        },200)

        setTimeout(()=>{
          dynamicStatus.value = !dynamicStatus.value
          serviceStatus.value = !serviceStatus.value
        },700)



        // clearTimeout(time)
      })


      return{
        begin,
        end,
        readmeStatus,
        dynamicStatus,
        serviceStatus
      }
    }

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
