<template>
  <div class="dynamic-item">
    <div class="auther">
      <h1>Sue</h1>
      <h4>{{createdTime}}</h4>
    </div>
    <div class="dynamic-content">
      <p>{{content}}</p>
    </div>
    <div class="mood">
      <h1>{{mood}}</h1>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent ,onMounted} from 'vue'

  export default defineComponent({
    props:{
      createdTime:{
        type:Date
      },
      content:{
        type:String
      },
      mood:{
        type:String
      }
    },
    name: 'BlogText',
    setup(props){

      onMounted(()=>{
        console.log("sfas")
        console.log(props.content)
      })

    }
  })
</script>

<style lang="scss" scoped>

  @import "../../assets/css/mixin.scss";

  .dynamic-item {
    position: relative;
    &:hover {
      box-shadow: 1px 7px 12px #888888;
      .auther {
        color: #ff6600;
      }
    }
    transition: all 0.3s;
    margin-bottom: 20px;
    /*width: 600px;*/
    padding: 30px;
    @include shadow();
    display: flex;
    align-items: center;
    justify-content: space-between;
    .auther {
      transition: all 0.3s;
      padding: 20px;
      border-right: 3px solid #ff6600;
      margin-right: 20px;
    }
    .mood {
      padding: 20px;
    }
    .dynamic-content {
      width: 100%;
      padding: 10px;
      font-size: 18px;
      font-weight: bold;
      font-family: Arial;
      line-height: 40px;
    }
  }
</style>
