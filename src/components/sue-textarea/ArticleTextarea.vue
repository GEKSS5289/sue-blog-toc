<template>
    <div class="article-container">
      <h1 class="article-title">测试文章</h1>
      <h4 class="article-time">2020</h4>
      <div class="article-content">云南大理是一座非常美丽的城市，在这个国庆小假期中，很多人都去大理一睹风采，但是前几天却发生了一件很不愉快的事情，甚至还在网上闹得沸沸扬扬的。据了解，当天一名游客走进大理一家手鼓店，但进店后却没有买手鼓，因此遭到了店员的辱骂，之后该店被停业整顿，官方也作出了道歉，但一直没有得到本人的致歉，根据最新的消息报道，现在这名辱骂游客的女店员已经在网上发布了道歉信。接下来，大家可以和小编一起详细了解一下哦~大理辱骂游客女店员道歉10月5日，云南大理。游客“萨德叔叔”发布视频称，在双廊游玩时，因进店后没买手鼓，被手鼓店红衣女子辱骂“穷鬼，没钱就
        别岀来”。次日官方发布通报责令该店立即停业整顿30天。当事游客虽然
        十分认可官方的处理方式和态度，但还是希望收到本人道歉，但“红衣姐”曾一度消失
        。10月8日，一份疑似辱骂游客的手鼓店员“红衣姐”道歉信出现在网上，记者向当事游
        客求证后得知，此文确为昨天凌晨近4点时，“红衣姐”所做的一个回复，但尚未正式公开。该“回
        复”中提到：被拍的视频放到网络上后没想到产生这么大的影响员“红衣姐”道歉信出现在网上，记者向当事游
        客求证后得知，此文确为昨天凌我很害怕，甚至不知道怎么来面
        对家人、面对公众、面对未来的生活。但逃避不是办法，现在我要勇敢地站出来，向大家说声“对不起”!</div>
    </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    name: 'ArticleTextarea'
  })
</script>

<style lang="scss" scoped>

  @import "../../assets/css/mixin.scss";
  @import "../../assets/css/basic.scss";
  .article-container{
    margin-top: 50px !important;
    margin-bottom: 50px;
    background-color: #F7F9F9;
    padding: 50px;
    border-radius: 15px;
    width: 600px;
    h1{
      font-size: 60px;
    }
    h4{
      margin-top: 10px;
      font-size: 16px;
    }
    div{
      margin-top: 10px;
      font-size: 18px;
      line-height: 40px;
    }
    //@include shadow()
  }
</style>
