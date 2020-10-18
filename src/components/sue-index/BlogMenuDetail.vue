<template>
  <div class="blog-menu-detail" :class="{'hidden':show}">
    <h1>🍲</h1>
    <div class="reach-info">
      <router-link :to="'/category'" tag="a"  class="menu-item" >📃杂文</router-link>
      <router-link :to="'/problemlog'" tag="a" class="menu-item" >👩‍🚀踩艰</router-link>
      <router-link :to="'/filestorage'" tag="a" class="menu-item" >🍚贡献</router-link>
      <router-link :to="'/logs'" tag="a" class="menu-item">📄日志</router-link>
      <div class="menu-item">☕佚名言</div>
      <div class="menu-item">📜佚态集</div>
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

  @import "../../assets/css/mixin";
  @import "../../assets/css/basic";
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
      font-size: 18px;
      justify-content:space-between;
      flex-wrap: wrap;

      a {
        text-decoration: none;
        color: #333333;
      }

      /*background-color: red;*/

      .menu-item{
        text-decoration: none ;
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
