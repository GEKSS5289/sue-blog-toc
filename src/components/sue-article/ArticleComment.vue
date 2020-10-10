<template>
    <div class="article-comment-container">
      <h1>佚评</h1>
      <comment-box></comment-box>
      <comment-box></comment-box>
      <comment-box></comment-box>
    </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import CommentBox from "@/components/sue-article/comment/CommentBox.vue";
  export default defineComponent({
    name: 'ArticleComment',
    components:{
      CommentBox
    }
  })
</script>

<style lang="scss" scoped>
  @import "../../assets/css/basic.scss";
.article-comment-container{
  padding: 10px;
  margin-left: auto;
  margin-right: auto;

  width: 700px;
  h1{
    text-align: center;
    margin-bottom: 30px;
  }
}
</style>
