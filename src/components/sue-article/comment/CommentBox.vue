<template>
  <div class="comment-box">
    <div class="time-shaft">{{commentTime}}</div>
    <h1 class="comment-user">佚人</h1>
    <div class="comment-content">{{commentContent}}</div>
  </div>
</template>

<script lang="ts">
    import {defineComponent} from 'vue'

    export default defineComponent({
        name: "CommentBox",
        props:{
          commentContent:{
            type:String,
            require:true
          },
          commentTime:{
            type:Date,
            require: true
          }
        }
    })
</script>

<style lang="scss" scoped>
  @import "../../../assets/css/mixin.scss";
  @import "../../../assets/css/theme";
  .comment-box{
    //@include shadow();
    display: flex;
    position: relative;
    border-left: 5px solid;
    background-color:#FBFCFC;
    flex-direction: row;
    align-items: center;
    margin-bottom: 40px;
    transition: all 1s;
    color: #333333;
    border-color:$sue-theme-color;
    .time-shaft{
      /*background-color: #ff6600;*/
      //width: 100px;
      height: 50px;
      position: absolute;
      display: flex;
      left: -140px;
      color: #333333;
      text-align: center;
      font-weight: bold;
      line-height: 50px;

    }
    &:hover{

      @include shadow();

    }
    .comment-user{
      padding: 20px;
    }
    .comment-content{
      font-size: 15px;

      padding: 10px;
    }
  }
</style>
