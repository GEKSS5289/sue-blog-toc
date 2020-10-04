<template>
  <div class="hint-box" :class="{'hidden-hint':!showMsg}">
    <h1 class="hint-icon">🌌</h1>
    <div class="hint-msg">噢！你的情书我已经收到了，Thanks!</div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    name: 'BlogHint',
    props:{
      showMsg:{
        type:Boolean
      }
    },
    setup(){
      // let showHint = ref(false)
      // function closeHint() {
      //   showHint.value = true
      // }
      //
      // return{
      //   closeHint,
      //   showHint
      // }
    }
  })
</script>

<style lang="scss" scoped>
  @import "../../assets/css/mixin.scss";
  .hint-box{
    &:hover{
      @include shadowHover();
      border-left: 5px solid #1ABC9C;
    }
    font-weight: bold;
    font-family: Arial;
    display: flex;
    position: absolute;
    transition: all 0.5s;
    border-left: 5px solid #ff6600;
    /*background-color: #ff6600;*/
    right: 20px;
    background-color:white;
    color: #7B7D7D;
    font-size: 20px;
    padding: 20px;
    align-items: center;
    @include shadow();
    .hint-icon{
      padding: 10px;
    }
    .hint-msg{
      width: 200px;
      flex-wrap: wrap;
      display: flex;
      padding: 20px;

    }

  }
</style>
