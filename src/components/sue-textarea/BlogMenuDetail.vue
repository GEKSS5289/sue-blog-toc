<template>
  <div class="blog-menu-detail" :class="{'hidden':show}">
    <h1>🍛</h1>
    <div class="reach-info">
      <h2>完成了初步的前后分离</h2>
      <h4>2020.5.20</h4>
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
      padding: 50px;
      text-align: center;
    }
  }

</style>
