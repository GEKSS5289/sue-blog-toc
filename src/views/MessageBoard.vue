<template>
    <div class="message-container container"  :class="{'blog-readme-begin':readmeStatus,'blog-readme-end':!readmeStatus}">
      <div class="message-title">
        <div class="message-info">
          <h1>山间流言</h1>
          <h4>long long ago</h4>
        </div>
      </div>
      <div class="message-list " :class="{'blog-dynamic-begin':dynamicStatus,'blog-dynamic-end':!dynamicStatus}">
        <div class="message-itme">
          <div class="message-user-info">
            <h1 class="message-user">山农</h1>
            <h4 class="message-time">2020.10.10</h4>
          </div>
          <div class="message-content">
            <p>
              ）第三方渠道包括应用商店、网盟、SEM、手机预装、联合推广等渠道，
              在这种方式中我们需要关注不同的渠道获取的用户
              质量和数量如何？是否精准？ROI是多少？根据数据不断调整渠道的投入和组合，精细化获客。
            </p>
          </div>
        </div>
        <div class="message-itme">
          <div class="message-user-info">
            <h1 class="message-user">山农</h1>
            <h4 class="message-time">2020.10.10</h4>
          </div>
          <div class="message-content">
            <p>
              ）第三方渠道包括应用商店、网盟、SEM、手机预装、联合推广等渠道，
              在这种方式中我们需要关注不同的渠道获取的用户
              质量和数量如何？是否精准？ROI是多少？根据数据不断调整渠道的投入和组合，精细化获客。
            </p>
          </div>
        </div>
        <div class="message-itme">
          <div class="message-user-info">
            <h1 class="message-user">山农</h1>
            <h4 class="message-time">2020.10.10</h4>
          </div>
          <div class="message-content">
            <p>
              ）第三方渠道包括应用商店、网盟、SEM、手机预装、联合推广等渠道，
              在这种方式中我们需要关注不同的渠道获取的用户
              质量和数量如何？是否精准？ROI是多少？根据数据不断调整渠道的投入和组合，精细化获客。
            </p>
          </div>
        </div>
        <div class="message-itme">
          <div class="message-user-info">
            <h1 class="message-user">山农</h1>
            <h4 class="message-time">2020.10.10</h4>
          </div>
          <div class="message-content">
            <p>
              ）第三方渠道包括应用商店、网盟、SEM、手机预装、联合推广等渠道，
              在这种方式中我们需要关注不同的渠道获取的用户
              质量和数量如何？是否精准？ROI是多少？根据数据不断调整渠道的投入和组合，精细化获客。
            </p>
          </div>
        </div>
        <div class="message-itme">
          <div class="message-user-info">
            <h1 class="message-user">山农</h1>
            <h4 class="message-time">2020.10.10</h4>
          </div>
          <div class="message-content">
            <p>
              ）第三方渠道包括应用商店、网盟、SEM、手机预装、联合推广等渠道，
              在这种方式中我们需要关注不同的渠道获取的用户
              质量和数量如何？是否精准？ROI是多少？根据数据不断调整渠道的投入和组合，精细化获客。
            </p>
          </div>
        </div>
        <div class="message-itme">
          <div class="message-user-info">
            <h1 class="message-user">山农</h1>
            <h4 class="message-time">2020.10.10</h4>
          </div>
          <div class="message-content">
            <p>
              ）第三方渠道包括应用商店、网盟、SEM、手机预装、联合推广等渠道，
              在这种方式中我们需要关注不同的渠道获取的用户
              质量和数量如何？是否精准？ROI是多少？根据数据不断调整渠道的投入和组合，精细化获客。
            </p>
          </div>
        </div>
        <div class="message-itme">
          <div class="message-user-info">
            <h1 class="message-user">山农</h1>
            <h4 class="message-time">2020.10.10</h4>
          </div>
          <div class="message-content">
            <p>
              ）第三方渠道包括应用商店、网盟、SEM、手机预装、联合推广等渠道，
              在这种方式中我们需要关注不同的渠道获取的用户
              质量和数量如何？是否精准？ROI是多少？根据数据不断调整渠道的投入和组合，精细化获客。
            </p>
          </div>
        </div>
      </div>

    </div>
</template>

<script lang="ts">
    import {defineComponent} from 'vue'
    import {BlogInit} from "@/utils/BLogInit";

    export default defineComponent({
        name: "MessageBoard",
        setup(){

          return{
            ...BlogInit(),
          }
        }
    })
</script>

<style lang="scss" scoped>
  @import "../assets/css/theme";
  @import "../assets/css/mixin";
  .message-container{
    /*padding: 40px;*/
    /*background-color: red;*/
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 1500px;

    .message-title{
      width: 1920px;
      height: 450px;
      background-image: url("../../public/imgs/banner/xiaohongmao.jpg");
      background-position: 0 -360px;
      background-repeat: no-repeat;
      font-size: 60px;
      /*padding: 200px;*/
      color: #273746;
      margin-bottom: 40px;
      .message-info{
        position: relative;
        top: 290px;
        left: 600px;
        h1{
          font-size: 50px;
          color: white;
        }
        h4{
          font-size: 20px;
          color:white;
        }
      }
    }
    .message-list{
      padding: 30px;
      display: flex;
      flex-wrap: wrap;
      /*background-color: red;*/
      align-items: center;
      justify-content: center;
      .message-itme{
        width: 800px;
        /*height: 200px;*/
        margin-left: 20px;
        margin-bottom: 50px;
        @include shadow();

        padding: 40px;
        display: flex;
        flex-direction: row;
        transition: all 1s;
        &:hover{
          @include shadowHover();
        }
        align-items: center;

        .message-user-info{
          display: flex;
          flex-direction: column;

          h1{
            font-size: 30px;
          }
        }
        .message-content{
          margin-left: 50px;
          font-size: 20px;
          line-height: 40px;

          /*background-color: #273746;*/
        }

      }
    }
  }
</style>
