<template>
    <div class="article-comment-container">
      <h1 class="comment-title">佚评</h1>
      <div v-for="(item,index) in commentData.data" :key="index" v-if="commentStatus">
        <comment-box :comment-content="item.commentContent" :comment-time="item.createdTime"></comment-box>
      </div>
      <div class="null-message" v-else >
        <h1 class="hint-msg">😭还没有评论</h1>
      </div>

    </div>
</template>

<script lang="ts">
  import { defineComponent ,reactive,ref} from 'vue'
  import CommentBox from "@/components/sue-article/comment/CommentBox.vue";
  import Comment from "@/model/Comment";
  import {blogIndexApi} from "@/common/apirouter";
  import {useRoute} from "vue-router";
  import {dataExtractor} from "@/utils/CommonUtils";
  import axios from 'axios'
  export default defineComponent({
    name: 'ArticleComment',
    components:{
      CommentBox
    },
    setup(){
      const commentData = reactive({
        data:Array<Comment>()
      })
      const commentStatus = ref(false)

      axios.get(blogIndexApi.commentApi+"/"+useRoute().params.id).then(res=>{
        dataExtractor(commentData,res,res.data.data.length)
        if(commentData.data.length != 0){
          commentStatus.value = !commentStatus.value
        }
      })

      return{
        commentData,
        commentStatus
      }
    }
  })
</script>

<style lang="scss" scoped>
  @import "../../assets/css/basic.scss";
.article-comment-container{
  padding: 10px;
  width: 700px;
  .comment-title{
    text-align: center;
    margin-bottom: 30px;
  }
  .null-message{
    background-color: #FEF9E7;
    border-left: 5px solid #F1C40F;
    padding: 20px;
    color: #F4D03F;
  }
}
</style>
