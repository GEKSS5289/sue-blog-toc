<template>
  <div class="sue-footer-container">
    <div class="footer-content">
      <div class="footer-left">
        <div>
          <h1>SUE-BLOG</h1>
          <h5>@2020-9-27</h5>
        </div>
      </div>
      <div class="footer-right">
        <div class="footer-content-options">
          <h4>GITHUB</h4>
          <h4>联系作者</h4>
        </div>
        <div class="footer-content-options">
          <h4>GITHUB</h4>
          <h4>联系作者</h4>
          <h4>GITHUB</h4>
          <h4>联系作者</h4>
        </div>
        <div class="footer-content-options">
          <h4>GITHUB</h4>
          <h4>联系作者</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'SueFooter'
})
</script>
<style>
.sue-footer-container {
  width: 100%;
  padding: 20px;
  margin: 0 auto;
  background-color: white;
  box-shadow: 1px 1px 12px #888888;
}
.footer-content {
  display: flex;
  flex-direction: row;
  width: 1200px;
  margin: 0px auto;
}

.footer-content-options {
  margin: 30px;
  padding: 10px;
}

.footer-content-options h4 {
  margin-top: 20px;
}

.footer-left {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 100px;
}

.footer-right {
  margin-left: 220px;
  display: flex;
  flex-direction: row;
}
</style>
