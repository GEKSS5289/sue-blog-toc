<template>
  <div class="container">
      <ArticleTextarea></ArticleTextarea>
<!--    <article-right></article-right>-->
    <article-user-say></article-user-say>
    <article-comment></article-comment>
  </div>
</template>

<script>
import { defineComponent,onMounted} from 'vue'
import ArticleTextarea from '@/components/sue-article/ArticleTextarea.vue'
import ArticleRight from '@/components/sue-article/ArticleRight'
import ArticleComment from '@/components/sue-article/ArticleComment'
import ArticleUserSay from '@/components/sue-article/comment/ArticleUserSay'
export default defineComponent({
    name:"Article",
    components:{
      ArticleTextarea,
      ArticleRight,
      ArticleComment,
      ArticleUserSay
    },
    setup(){
      onMounted(()=>{
       window.scrollTo(0,0);
      })
    }
})

</script>
<style lang="scss" scoped>
  .container{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
</style>
