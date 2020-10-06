<template>
    <div class="container">
      <div class="readme-logo">
        <h1 class="readme-icon">🌀</h1>
        <h4 class="readme-title">"苏子云舟过，拨水千里渡"</h4>
      </div>
    </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    name: 'BlogArticleList'
  })
</script>

<style lang="scss" scoped>
  @import "../../assets/css/mixin.scss";
  @import "../../assets/css/basic.scss";
  .container{
    //@include shadow();
    background-color: #F7F9F9;
    height: 300px;
    display: flex;
    flex-direction: row;
    align-items: center;
    .readme-logo{
      display: flex;
      flex-direction: column;

      align-items: center;
    }
    .readme-article{

    }
  }
</style>
