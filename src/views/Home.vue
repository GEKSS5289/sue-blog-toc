<template>
  <div class="home-container">
    <sue-nav></sue-nav>
    <router-view></router-view>
    <sue-footer></sue-footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SueNav from '@/components/sue-nav/SueNav.vue'
import SueFooter from '@/components/sue-footer/SueFooter.vue'

export default defineComponent({
  name: 'Home',
  components: {
    SueNav,
    SueFooter
  },

})
</script>

<style lang="scss" scoped>
  @import './../assets/css/mixin.scss';

</style>
