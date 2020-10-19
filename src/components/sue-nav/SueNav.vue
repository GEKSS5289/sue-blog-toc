<template>
  <div class="sue-nav-container">
    <div class="content-container">
      <div class="nav-left">
        <router-link to="/"  tag="div"  class="text-s3  mr60">SUE🍪BLOG</router-link>
      </div>

    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'SueNav'
})
</script>
<style>
.sue-nav-container {
  width: 100%;
  padding: 20px;
  margin: 0 auto;
  background-color: white;

  /*position: absolute;*/
  z-index: 100;
}

.content-container {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  width: 1226px;
  margin: 0px auto;
}

</style>
