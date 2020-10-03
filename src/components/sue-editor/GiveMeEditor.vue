<template>
  <div class="editor-container" :class="{'hidden-editor':show}">
    <textarea  maxlength="500"  :class="{'hidden-editor':show}" v-model="content" @keydown="test"></textarea>
    <div class="word-count"><span :class="{'full':full}">{{count}}</span>/500</div>
  </div>
</template>

<script lang="ts">
  import { defineComponent,ref} from 'vue'

  export default defineComponent({
    props:{
      show:{
        type:Boolean
      }
    },
    name: 'GiveMeEditor',
    setup(){
      const content = ref('');
      const count = ref(0)
      const full = ref(false)
      const showTextarea = ref(false);
      function test() {
        count.value = content.value.length
        if(count.value == 500){
          full.value = true
        }else{
          full.value = false
        }
        console.log(content)
      }

      return{
        content,
        test,
        count,
        showTextarea,
        full
      }
    }
  })
</script>

<style lang="scss" scoped>
  @import "../../assets/css/basic.scss";
.editor-container{
  width: 700px;
  height: 400px;
  transition: all 1s;
  background-color:#F8F9F9;
  border-radius: 25px;
  /*overflow: hidden;*/
  padding: 50px;

  textarea{
    font-size: 24px;
    width: 630px;
    height: 300px;
    /*padding: 50px;*/
    color: #7B7D7D;
    font-weight: bold;
    font-family: Arial;
    background: none;
    border: none;
    overflow-x:hidden;
    overflow-y:hidden;
    resize: none;
    margin-bottom: 20px;
  }
  .full{

    color:#E74C3C;
  }
}
</style>
