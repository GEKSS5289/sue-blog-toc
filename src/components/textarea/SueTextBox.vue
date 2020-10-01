<template>
  <div class="sue-text-container">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SueTextBox",
});
</script>
<style>
.sue-text-container {
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  height: auto;
  background-color: white;
  box-shadow: 1px 3px 5px #888888;
  margin: 25px;
  transition: all 0.2s;
}
.sue-text-container:hover {
  box-shadow: 1px 7px 12px #888888;
}
</style>
