<template>
  <div class="app">
    <h2>
      我是父亲
    </h2>
    <br/>
    <br/>
    <Model/>
  </div>
</template>

<script setup lang="ts" name="App">
import Model from '@/Model.vue'


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
