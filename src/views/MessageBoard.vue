<template>
    <div class="message-container container"  :class="{'blog-readme-begin':readmeStatus,'blog-readme-end':!readmeStatus}">
      <div class="message-title">
        <div class="message-info">
          <h1>山间流言</h1>
          <h4>long long ago</h4>
        </div>
      </div>
      <div class="message-list " :class="{'blog-dynamic-begin':dynamicStatus,'blog-dynamic-end':!dynamicStatus}">
        <div class="message-itme" v-for="(item,index) in message.msgData">
          <div class="message-user-info">
            <h1 class="message-user">山农</h1>
            <h4 class="message-time">{{item.createdTime}}</h4>
          </div>
          <div class="message-content">
            <p>
              {{item.content}}
            </p>
          </div>
        </div>

      </div>

    </div>
</template>

<script lang="ts">
    import {defineComponent,reactive} from 'vue'
    import {BlogInit} from "@/utils/BLogInit";
    import axios from "axios";
    import {blogIndexApi} from "@/common/apirouter";
    import MessageModel from "@/model/MessageModel";
    export default defineComponent({
        name: "MessageBoard",
        setup(){

          const message = reactive({
            msgData:Array<MessageModel>()
          })

          axios.get(blogIndexApi.messageApi).then(res=>{
            for (let i = 0; i < res.data.data.length; i++) {
              message.msgData.push(res.data.data[i])
            }
            console.log(res)
          })



          return{
            ...BlogInit(),
            message
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
      margin-bottom: 100px;
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
