<template>
  <div class="container">

    <ArticleTextarea :articleId="articleId"></ArticleTextarea>
    <!--    <article-right></article-right>-->
    <article-user-say :class="{'blog-readme-begin':readmeStatus,'blog-readme-end':!readmeStatus}" :article-id="articleId"></article-user-say>
    <article-comment></article-comment>
  </div>
</template>

<script>
import { defineComponent,ref} from 'vue'
import ArticleTextarea from '@/components/sue-article/ArticleTextarea.vue'
import ArticleRight from '@/components/sue-article/ArticleRight'
import ArticleComment from '@/components/sue-article/ArticleComment'
import ArticleUserSay from '@/components/sue-article/comment/ArticleUserSay'
import { BlogInit } from '@/utils/BLogInit'
import router from '@/router'
import {useRoute} from 'vue-router'
export default defineComponent({
  name:"Article",
  components:{
    ArticleTextarea,
    ArticleRight,
    ArticleComment,
    ArticleUserSay
  },
  setup(){

    const router = useRoute()

    return{
      ...BlogInit(),
      articleId:router.params.id
    }
  }
})

</script>
<style lang="scss" scoped>
.container{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 50px;
  width: 1226px !important;
  height: auto !important;
}
</style>
