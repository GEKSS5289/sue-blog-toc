<template>
  <div class="editor-container" :class="{'hidden-editor':showEditor}">
    <textarea
      placeholder="说说你的想法.....(320字符)"
      maxlength="320"
      :class="{'hidden-editor':showEditor}"
      v-model="content"
      @keydown="test"
    ></textarea>
    <div class="word-count"><span :class="{'full':full}">{{count}}</span>/320</div>
    <div class="give-me-push" :class="{'hidden':showEditor}" @click="clickPush">📧</div>
  </div>

</template>

<script lang="ts">
  import { defineComponent,ref} from 'vue'

  export default defineComponent({
    props:{
      showEditor:{
        type:Boolean,
      }
    },
    name: 'GiveMeEditor',
    setup(prors,context){
      const content = ref('');
      const count = ref(0)
      const full = ref(false)
      const showTextarea = ref(false);
      function test() {
        count.value = content.value.length
        if(count.value == 320){
          full.value = true
        }else{
          full.value = false
        }
        console.log(content)
      }
      function clickPush() {
        context.emit("clickPush")
      }
      return{
        content,
        clickPush,
        count,
        test,
        showTextarea,
        full
      }
    }
  })
</script>

<style lang="scss" scoped>
  @import "../../assets/css/basic.scss";
  @import "../../assets/css/mixin.scss";
.editor-container{
  width: 700px;
  height: 300px;
  transition: all 1s;
  background-color:#F8F9F9;
  border-radius: 25px;
  /*overflow: hidden;*/
  padding: 50px;

  textarea{
    font-size: 24px;
    width: 630px;
    height: 200px;
    /*padding: 50px;*/
    color: #7B7D7D;
    font-weight: bold;
    font-family: Arial;
    background: none;
    @include textareaDef();
    margin-bottom: 20px;
  }
  .full{

    color:#E74C3C;
  }
}

  .give-me-push{
    margin:30px auto;
    width: 50px;
    height: 10px;

    text-align: center;
    /*border: 5px solid #ff6600;*/
    /*background-color:#5DADE2;*/
    color: white;
    line-height: 10px;
    font-size: 20px;
    padding: 15px;
    font-family: Arial;
    font-weight: bold;
    border-radius: 20px;
    cursor: pointer;
    transition: all 0.5s;
    &:hover{
      /*background-color:#3498DB;*/
      @include shadow();
    }
  }
</style>
