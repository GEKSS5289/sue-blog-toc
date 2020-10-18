<template>
  <div class="container logs-container">
    <div class="logs-title">
        <h1>周而复始</h1>
    </div>
    <div class="logs-list">
      <div class="logs-item">
        <h1 class="logs-time">2020</h1>
        <h3 class="logs-content">上传了文件</h3>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
    import {defineComponent} from 'vue'

    export default defineComponent({
        name: "Logs"
    })
</script>

<style lang="scss" scoped>
  .logs-container{
    display: flex;
    flex-direction: column;
    padding: 100px;
    justify-content: center;
    align-items: center;

    .logs-title{
      h1{
        text-align: center;
      }
    }
    .logs-list{
      .logs-item{
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-top: 40px;
        h1{

        }
        h3{
          margin-left: 20px;
          font-size: 10px;
        }
      }
    }
  }
</style>
