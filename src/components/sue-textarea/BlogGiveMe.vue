<template>
    <div class="container">
      <div class="give-me">
        <h1 class="give-me-title" >⌨️</h1>
        <h4 class="give-me-slogan">
          <span class="give-me-span-honey">Honey </span>
          <span class="give-me-span-message">leave me a message</span>
        </h4>
      </div>
      <div class="give-me-text"></div>
    </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    name: 'BlogGiveMe'
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
    .give-me{
      .give-me-title{
        font-size: 70px;
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
    }
  }

</style>
