<template>
  <div class="container">
    <ArticleTextarea></ArticleTextarea>
    <article-right></article-right>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import ArticleTextarea from '@/components/sue-textarea/ArticleTextarea.vue'
import ArticleRight from '@/components/sue-textarea/ArticleRight'
export default defineComponent({
    name:"Article",
    components:{
      ArticleTextarea,
      ArticleRight
    }
})

</script>
<style lang="scss" scoped>
  .container{
    display: flex;
    flex-direction: row;
    justify-content: space-between;

  }
</style>
