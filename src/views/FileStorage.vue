<template>

  <div class="file-container " :class="{'blog-readme-begin':readmeStatus,'blog-readme-end':!readmeStatus}">
    <h1>🥂</h1>
    <h3>CAN I HELP YOU</h3>
    <div class="file-search">
      <input type="text" placeholder="你需要的我可能有.....">
    </div>

    <div class="file-list" >
      <div class="file-itme">
        <div class="file-icon">
          <img src="../../public/imgs/icon/database.png" alt=""/>
        </div>
        <div class="file-name">mysql.0</div>
        <div class="file-size">37.6KB</div>
        <div class="file-upload-time">2020.8.8</div>
        <a href="" class="file-download">DOWN</a>
      </div>
      <div class="file-itme">
        <div class="file-icon">
          <img src="../../public/imgs/icon/database.png" alt=""/>
        </div>
        <div class="file-name">mysql.0</div>
        <div class="file-size">37.6KB</div>
        <div class="file-upload-time">2020.8.8</div>
        <a href="" class="file-download">DOWN</a>
      </div>
      <div class="file-itme">
        <div class="file-icon">
          <img src="../../public/imgs/icon/database.png" alt=""/>
        </div>
        <div class="file-name">mysql.0</div>
        <div class="file-size">37.6KB</div>
        <div class="file-upload-time">2020.8.8</div>
        <a href="" class="file-download">DOWN</a>
      </div>
    </div>


  </div>


</template>

<script lang="ts">
  import {defineComponent} from 'vue'
  import {BlogInit} from "@/utils/BLogInit";

  export default defineComponent({
    name: "FileStorage",
    setup(){


      return{
        ...BlogInit(),
      }
    }
  })
</script>

<style lang="scss" scoped>

  @import "../assets/css/mixin.scss";


  .file-container{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 100px;
    h1{
      font-size: 100px;
      margin-bottom: 30px;
    }
    h3{
      font-size: 30px;
      margin-bottom: 30px;
    }
    .file-list{
      //@include shadow();
      width: 800px;

      padding: 20px;
      margin-top: 20px;
      .file-itme{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        transition: all 1s;
        font-weight: bold;
        padding: 30px;
        //@include shadowHover();
        /*border-left:5px #273746 solid;*/
        &:hover{
          @include shadowHover();
        }
        .file-name{
          font-size: 15px;
        }
        .file-upload-time{
          font-size: 15px;
        }
        .file-size{
          font-size: 15px;
        }
        img{
          width: 50px;
          height: 50px;
        }
        a{
          text-decoration: none;
          color: white;
          font-weight: bold;
          padding: 10px;
          border-radius: 5px;
          background-color: #3683d6;

        }
      }
    }

    .file-search{
      input{
        height: 10px;
        width: 800px;
        font-size: 20px;
        padding: 20px;
        border:none;
        outline: none;
        @include shadow();
      }
    }
  }

</style>
