<template>
  <div class="dynamic-item">
    <div class="auther">
      <h1>Sue</h1>
      <h4>2020.5.20 11:33</h4>
    </div>
    <div class="dynamic-content">
      <p>足落异乡逢秋雨，绵绵徐徐沾湿衣。恍惚背后妻娘唤，不知心离几重山</p>
    </div>
    <div class="mood">
      <h1>😀</h1>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    name: 'BlogText'
  })
</script>

<style lang="scss" scoped>

  @import "../../assets/css/mixin.scss";

  .dynamic-item {
    position: relative;
    &:hover {
      box-shadow: 1px 7px 12px #888888;
      .auther {
        color: #ff6600;
      }
    }
    transition: all 0.3s;
    margin-bottom: 20px;
    /*width: 600px;*/
    padding: 30px;
    @include shadow();
    display: flex;
    align-items: center;
    justify-content: space-between;
    .auther {
      transition: all 0.3s;
      padding: 20px;
      border-right: 3px solid #ff6600;
      margin-right: 20px;
    }
    .mood {
      padding: 20px;
    }
    .dynamic-content {
      width: 100%;
      padding: 10px;
      font-size: 18px;
      font-weight: bold;
      font-family: Arial;
      line-height: 40px;
    }
  }
</style>
