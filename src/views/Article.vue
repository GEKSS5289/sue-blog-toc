<template>
  <div class="container">
    <ArticleTextarea></ArticleTextarea>
<!--    <article-right></article-right>-->
    <article-comment></article-comment>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import ArticleTextarea from '@/components/sue-article/ArticleTextarea.vue'
import ArticleRight from '@/components/sue-article/ArticleRight'
import ArticleComment from '@/components/sue-article/ArticleComment'
export default defineComponent({
    name:"Article",
    components:{
      ArticleTextarea,
      ArticleRight,
      ArticleComment
    }
})

</script>
<style lang="scss" scoped>
  .container{
    display: flex;
    flex-direction: column;
    justify-content: space-between;

  }
</style>
