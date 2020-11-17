<template>
  <div class="user-say-container">
    <div class="user-say-options">
      <h1>我的观点</h1>
      <div class="send-button" @click="pushComment">📧</div>
    </div>
    <textarea placeholder="说说看....(450字符)" maxlength="450" v-model="commentContent"></textarea>
  </div>
</template>

<script lang="ts">
import {defineComponent,ref,reactive} from 'vue'
import CommentModel from "@/model/CommentModel";
import {useRoute} from "vue-router";
import axios from 'axios'
import {blogIndexApi} from "@/common/apirouter";
import router from "@/router";
export default defineComponent({
  name: "ArticleUserSay",
  props:{
    articleId:Number
  },
  setup(props){
    Number(useRoute().params.id)
    const commentContent = ref('')
    function pushComment(){

      let comment:CommentModel = {
        commentContent:commentContent.value,
        articleId:Number(props.articleId)
      }
      axios.post(blogIndexApi.commentApi,comment).then(res=>{
        router.go(0)
      })
    }

    return{
      pushComment,
      commentContent
    }
  }
})
</script>

<style lang="scss" scoped>
@import "../../../assets/css/mixin.scss";

.user-say-container{
  display: flex;
  flex-direction: column;

  width: 700px;
  height: 200px;
  /*height: 150px;*/
  padding: 20px;
  /*background-color:#F0F3F4;*/
  /*margin-left: auto;*/
  /*margin-right: auto;*/
  /*border-left: 5px solid #626567;*/
  margin-bottom: 20px;
  @include shadow();
  /*border: 1px solid #333333;*/
  transition: all 0.6s;
  &:hover{
    @include shadowHover();
  }

  .user-say-options{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    .send-button{
      font-size: 50px;
      /*margin-right: 20px;*/
      cursor: pointer;
      /*margin-left: 40px;*/
    }
  }
  textarea{

    padding: 10px;
    box-sizing: border-box;
    height: 300px;
    font-size: 24px;
    background:none;
    color: #333333;
    width: 700px;
    margin-top: 20px;
    overflow: auto;
    @include textareaDef();
    overflow-y:scroll;
  }
}

</style>
