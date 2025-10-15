<template>
  <div class="app">
    <div>我是父亲组件 {{hello}}</div>
    <h2 v-beauty="hi">好开心</h2>

  </div>
</template>

<script setup lang="ts" name="App">
import { getCurrentInstance, onMounted, ref } from 'vue'
const hi =ref("today ");
const {proxy} =getCurrentInstance();
onMounted(()=>{
  console.log(proxy.hello);
})


</script>

<style>
.app {
  background-color: orange;
  border-radius: 10px;
  box-shadow: 0 0 10px;
  padding: 10px;
  width: 600px;
  height: 600px;
  filter: saturate(300%);
}
</style>
