<template>
  <div class="submit" >确认</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";


export default defineComponent({
  name: "SueButton",
  setup(props, context) {
    
    return {
   
    };
  },
});
</script>
<style>
.submit {
  width: 120px;
  height: 50px;
  background-color: rgb(67, 115, 227);
  line-height: 50px;
  text-align: center;
  color: white;
  font-size: 20px;
  font-weight: 900;
  border-radius: 10px;
}
</style>