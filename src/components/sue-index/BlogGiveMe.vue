<template>
  <div class="container">
    <div class="give-me">
      <h1 class="give-me-title" >⌨️</h1>
      <h4 class="give-me-slogan">
        <span class="give-me-span-honey">Honey </span>
        <span class="give-me-span-message">leave me a message</span>
      </h4>
      <div class="give-me-button" :class="{'active':!showEditor}" @click="clickSure">{{btnTitle}}</div>
    </div>
    <give-me-editor @clickPush='sendMsg' :showEditor="showEditor"></give-me-editor>
    <blog-hint :showMsg="send" @mouseenter="clear" @mouseleave="start"></blog-hint>
  </div>

</template>

<script lang="ts">
  import { defineComponent,ref } from 'vue'
  import GiveMeEditor from "@/components/sue-editor/GiveMeEditor.vue";
  import BlogHint from "@/components/sue-hint/BlogHint.vue";
  export default defineComponent({
    name: 'BlogGiveMe',
    components:{
      GiveMeEditor,
      BlogHint
    },
    setup(){
      let showEditor = ref(true)
      let btnTitle = ref('🔬SURE')
      let send = ref(false)
      let time:number|undefined;


      function updateStatus() {
        time = setTimeout(()=>{
          send.value = !send.value
        },4000)
      }

      function clickSure() {
        showEditor.value = !showEditor.value
        if(showEditor.value){
          btnTitle.value = '🔬SURE'
        }else{
          btnTitle.value = '🍪CACHE'
        }
      }
      function clear() {
        clearTimeout(time)
      }
      function start() {
        updateStatus()
      }
      function sendMsg() {
        send.value = !send.value
        updateStatus()
        showEditor.value = !showEditor.value
      }

      return{
        showEditor,
        clickSure,
        btnTitle,
        send,
        sendMsg,
        clear,
        updateStatus,
        start
      }
    }
  })
</script>

<style lang="scss" scoped>
  @import "../../assets/css/mixin";
  @import "../../assets/css/basic";
  .container{

    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    height: 500px;

    margin-top: 300px !important;
    margin-bottom: 300px !important;
    .give-me{
      .give-me-title{
        font-size: 70px;
        transition: all 0.5s;
        cursor: pointer;
        &:hover{
          font-size: 100px;
        }
      }
      .give-me-slogan{
        font-size: 40px;
        .give-me-span-honey{
          color: #ff6600;
        }
        .give-me-span-message{
          color:#696969 ;
        }
      }
      .give-me-button{
        margin:30px auto;
        width: 120px;
        height: 10px;
        text-align: center;
        /*border: 5px solid #ff6600;*/
        background-color: #7B7D7D;
        color: white;
        line-height: 10px;
        font-size: 20px;
        padding: 15px;
        font-family: Arial;
        font-weight: bold;
        border-radius: 20px;
        transition: all 0.5s;
        &:hover{
          background-color: #ff6600;
        }
      }
    }
  }

</style>
