<template>
    <div class="blog-server-title">
      <div class="blog-title">
        <h1 class="text-s3">{{title}}</h1>
        <div class="blog-title-info">
          <p content="blog-text-p">{{hint}}</p>
        </div>
      </div>
    </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    name: 'BlogTitle',
    props:{
      title:{
        type:String
      },
      hint:{
        type:String
      }
    },

  })
</script>

<style lang="scss" scoped>
  @import "../../assets/css/basic";
  @import "../../assets/css/mixin";
    .blog-server-title {
      /*margin-bottom: 20px;*/
      width: 400px;
      cursor: pointer;

      .blog-title {
        background-color: #ff6600;
        color: white;
        h1 {
          color: white;
        }
        &:hover {
          box-shadow: 1px 7px 12px #888888;
        }

        transition: all 0.3s;
        padding: 20px;
        @include shadow();

        .blog-title-info {
          /*padding: 20px;*/
          padding: 10px;
          transition: all 0.3s;

          p {
            font-size: 18px;
            font-weight: bold;
            font-family: Arial;
          }
        }
      }
    }

</style>
