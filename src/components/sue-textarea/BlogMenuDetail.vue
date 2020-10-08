<template>
  <div class="blog-menu-detail" :class="{'hidden':show}">
    <h1>🍲</h1>
    <div class="reach-info">
      <router-link :to="'/article'" tag="div" >📃杂文</router-link>
      <div>👩‍🚀踩艰</div>
      <div>📜佚态集</div>
      <div>🍚贡献</div>
      <div>☕佚名言</div>
      <div>👍行动</div>
    </div>
  </div >
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    name: 'BlogMenuDetail',
    props:{
      show:{
         type:Boolean
      }
    }

  })
</script>

<style lang="scss" scoped>

  @import "../../assets/css/mixin.scss";
  @import "../../assets/css/basic.scss";
  .blog-menu-detail{
    width: 350px;
    @include shadow();
    transition: all 1s;
    h1{
      padding: 20px;
      text-align: center;
      font-size: 70px;
    }
    .reach-info{
      padding: 10px;
      display: flex;
      flex-direction: row;
      text-align: center;
      /*align-items:center;*/
      font-size: 15px;
      justify-content:space-between;
      flex-wrap: wrap;

      /*background-color: red;*/
      div{
        width: 80px;
        font-weight: bold;
        /*margin-left:10px;*/
        margin-bottom: 10px;
        padding: 10px;
        /*background-color: red;*/
        /*border-radius: 15px;*/
        /*border: 1px solid #333333;*/
        //@include shadowMenuItem()
        transition: all 0.7s;
        &:hover{
          background-color: #ff6600;
          color: white;
        }
      }
    }

  }

</style>
