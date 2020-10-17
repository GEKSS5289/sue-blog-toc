<template>
  <div class="container problemlog-container">
    <div class="problemlog-info">
      <h1>谁还没个摔跤擦伤</h1>
      <h3>be injured </h3>
    </div>
  </div>
  <div class="problemlog-list container">
    <input placeholder="能否也帮帮你....." type="text">
    <div class="problemlog-item">
      <h1 class="log-title">关于数据连接失效</h1>
      <h2 class="log-datetime">2020.5.5</h2>
      <h3 class="log-desc">问题描述</h3>
      <p class="log-content">
        “ICU里的生死竞速”展区，吸
        引了不少观众的眼球。目及之处是用全息技术做的ICU场景：由麻
        醉科医生和护士组成与生命竞速的“插管小分队”，“贴面”插管，抢救
        危重症患者。本次抗击新冠肺炎疫情专题展览设计负责人张振华介
        绍，用全息技术可以完整地再现整个故事，展示医生在病房里救人的
        状态，配上音乐的节奏，强调与时间赛跑的氛围。他
        说：
        “我们这样设计的目的，一方面是想向一线的医务人员
        表示致敬，另一方面是希望能真实还原他们舍身忘死、不畏危险
        的工作状态
      </p>
      <h3 class="log-solution">解决办法</h3>
      <p>把你妈的脑袋砍下来</p>
    </div>



  </div>
</template>

<script lang="ts">
    import {defineComponent} from 'vue'

    export default defineComponent({
        name: "ProblemLog"
    })
</script>

<style lang="scss" scoped>
  @import "../assets/css/mixin";
  .problemlog-container{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 300px;
    .problemlog-info{

      h1{
        font-size: 50px;
      }
      h3{
        font-size: 20px;
      }
    }
  }

  .problemlog-list{
    h1{
      font-size: 60px;
      font-weight: bold;
    }
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    input{
      width: 1169px;
      height: 20px;
      margin-bottom: 50px;
      outline: none;

      border: none;
      @include shadow();
      padding: 30px;
      font-size: 30px;
      transition: all 1s;
      &:hover{
        @include shadowHover();
      }
    }


    .problemlog-item{

      /*background-color: red;*/
      /*padding: 100px;*/
      border-left: 5px solid #ff6600;
      padding: 50px;
      margin-bottom: 50px;
      h1{
        font-size: 50px;
      }
      h2{
        font-size: 20px;
      }
      h3{
        font-size: 30px;
        margin-top: 20px;
      }
      p{
        font-size: 20px;
        /*padding: 50px;*/
        /*background-color: #ff6600;*/
      }
      .log-content{
        line-height: 35px;
      }
      .log-solution{
        font-weight: bold;
      }
      transition: all 0.5s;
      &:hover{
        @include shadowHover();
      }
    }
  }
</style>
