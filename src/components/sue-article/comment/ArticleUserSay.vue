<template>
    <div class="user-say-container">
      <div class="user-say-options">
        <h1>我的观点</h1>
        <div class="send-button">📧</div>
      </div>
      <textarea placeholder="说说看....(450字符)" maxlength="450"></textarea>
    </div>
</template>

<script lang="ts">
    import {defineComponent} from 'vue'

    export default defineComponent({
        name: "ArticleUserSay"
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
