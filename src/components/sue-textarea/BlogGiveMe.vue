<template>
    <div class="container">
      <div class="give-me">
        <h1 class="give-me-title" >⌨️</h1>
        <h4 class="give-me-slogan">
          <span class="give-me-span-honey">Honey </span>
          <span class="give-me-span-message">leave me a message</span>
        </h4>
        <div class="give-me-button" @click="clickSure">sure</div>
      </div>
      <give-me-editor :show="showEditor"></give-me-editor>
    </div>
</template>

<script lang="ts">
  import { defineComponent,ref } from 'vue'
  import GiveMeEditor from "@/components/sue-editor/GiveMeEditor.vue";
  export default defineComponent({
    name: 'BlogGiveMe',
    components:{
      GiveMeEditor
    },
    setup(){
      const showEditor = ref(false)
      function clickSure() {
        showEditor.value = ! showEditor.value
      }
      return{
        showEditor,
        clickSure
      }
    }
  })
</script>

<style lang="scss" scoped>
@import "../../assets/css/mixin.scss";
@import "../../assets/css/basic.scss";
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
        width: 70px;
        height: 10px;
        text-align: center;
        /*border: 5px solid #ff6600;*/
        background-color: #7B7D7D;
        color: white;
        line-height: 10px;
        font-size: 20px;
        padding: 10px;
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
