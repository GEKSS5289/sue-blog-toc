<template>
  <div class="blog-server-content">
    <div class="blog-server-list">
      <menu-text></menu-text>
      <service-text class="mt20" ></service-text>
      <git-hub-logo></git-hub-logo>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  import MenuText from '@/components/sue-index/MenuText.vue'
  import ServiceText from '@/components/sue-index/ServiceText.vue'
  import GitHubLogo from "@/components/sue-advlogo/GitHubLogo.vue";

  export default defineComponent({
    name: 'BlogServiceList',
    components:{
      ServiceText,
      MenuText,
      GitHubLogo
    },
  })
</script>

<style lang="scss" scoped>
  .blog-server-content {
    margin-left: 30px;

    .blog-server-list {
      width: 500px;
      display: flex;
      flex-direction: column;
      align-items: center;
    //@include shadow();

    }
  }
</style>
