<template>
  <div class="logs-banner" :class="{'blog-readme-begin':readmeStatus,'blog-readme-end':!readmeStatus}"></div>
  <div class="container logs-container">
    <div class="logs-list">
      <div class="logs-item">
        <h1 class="logs-time">2020</h1>
        <h3 class="logs-content">上传了文件</h3>
      </div>
      <div class="logs-item">
        <h1 class="logs-time">2020</h1>
        <h3 class="logs-content">上传了文件</h3>
      </div>
      <div class="logs-item">
        <h1 class="logs-time">2020</h1>
        <h3 class="logs-content">上传了文件</h3>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import {defineComponent} from 'vue'
  import {BlogInit} from "@/utils/BLogInit";

  export default defineComponent({
    name: "Logs",
    setup(){

      return{
        ...BlogInit(),
      }
    }
  })
</script>

<style lang="scss" scoped>
  .logs-banner{
    width: 1920px;
    height: 400px;
    background-position: -500px 1050px;
    margin-left: auto;
    margin-right: auto;
    background-image: url("../../public/imgs/banner/chunri.jpg");
  }
  .logs-container{
    display: flex;
    flex-direction: column;
    padding: 100px;
    justify-content: center;
    align-items: center;

    .logs-list{
      /*width: 1226px;*/
      /*background-color: #1ABC9C;*/
      .logs-item{
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-top: 40px;
        width: 500px;
        background-color: #EBF5FB;
        color: #5D6D7E;
        border-left:5px solid #7B7D7D;
        padding: 20px;
        h1{

        }
        h3{
          margin-left: 20px;

          font-size: 10px;
        }
      }
    }
  }
</style>
