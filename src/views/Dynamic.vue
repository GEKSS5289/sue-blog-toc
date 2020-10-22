<template>

    <div class="dynamic-banner" :class="{'blog-readme-begin':readmeStatus,'blog-readme-end':!readmeStatus}"></div>
    <div class="dynamic-container container" :class="{'blog-service-begin':serviceStatus,'blog-service-end':!serviceStatus}">
      <div class="dynamic-title">
        <h1>佚态集</h1>
      </div>
      <div class="dynamic-list">
        <div class="dynamic-item">
          <h1 class="dynamic-auther">江城游人:</h1>
          <p class="dynamic-content">风雨路遥道阻险,夜里秋来未等闲。不是长江东逝水，万家灯火照渔船</p>
          <h4 class="dynamic-time">2002.5.2</h4>
        </div>


      </div>

    </div>
</template>

<script lang="ts">
    import {defineComponent} from 'vue'
    import {BlogInit} from "@/utils/BLogInit";

    export default defineComponent({
        name: "Dynamic",
        setup(){

            return{
              ...BlogInit(),
            }
        }
    })
</script>

<style lang="scss" scoped>
  @import "../assets/css/mixin.scss";
  .dynamic-banner{
    width: 1920px;
    height: 400px;
    background-position: 0px 800px;
    margin-left: auto;
    margin-right: auto;
    background-image: url("../../public/imgs/banner/lvxing.jpg");
  }
  .dynamic-container{
    /*background-color: red;*/
    width: 1226px;
    padding: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 300px;
    .dynamic-title{
      h1{
        font-size: 80px;
      }
      margin-bottom: 60px;
    }
    .dynamic-list{
      /*padding: 100px;*/
      /*background-color: #1ABC9C;*/
      /*margin-left: 150px;*/
      .dynamic-item{
        width: 800px;
        /*height: 100px;*/
        padding: 20px;
        background-color: white;
        margin-bottom: 50px;
        /*background-color: #333333;*/
        /*background-color: ;*/

        h1{
          font-size: 25px;
          transition: all 1s;
          cursor: pointer;
          display: inline-block;
          &:hover{
            color: #E74C3C;
          }
        }

        h4{
          font-size: 20px;
          text-align: right;
        }

        p{
          /*width: 400px;*/

          font-size: 20px;
          line-height: 40px;
          margin: 50px;
          border-left: 5px solid #E74C3C;
          padding: 20px;
          transition: all 0.6s;
          &:hover{
            @include shadowHover()
          }
        }

      }
    }
  }
</style>
