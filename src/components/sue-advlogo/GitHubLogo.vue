<template>
    <div class="github-logo-box">
      <h1 class="git-logo text-s3">
        <span class="git-char-g">G</span>
        <span class="git-words">ITHUB</span>
        <span class="git-char-m">🌎</span>
      </h1>
    </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    name: 'GitHubLogo'
  })
</script>

<style lang="scss" scoped>
  @import "../../assets/css/mixin.scss";
  .github-logo-box{
    /*background-color: #006699;*/
    background-color:#5D6D7E;
    width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @include shadow();
    margin-top: 20px;
    transition: all 0.5s;
    &:hover{
      transform: scale(1.2);
    }
    .git-logo{
      color: white;
      padding: 30px;
      box-sizing: border-box;
      .git-char-m{
        font-size: 100px;
      }
      .git-char-g{
        font-size: 60px;

      }
      .git-words{
        font-size: 30px;
      }

    }
  }
</style>
