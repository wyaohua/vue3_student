<template>
  <div class="app">
    <h2>person的姓名:{{ person.name }}</h2>
    <h2>person的年龄:{{ person.age }}</h2>




  </div>
</template>

<script setup lang="ts" name="App">
import { reactive, shallowReadonly } from 'vue'

let person = reactive({
  name: '李四',
  age: 18,

})





</script>

<style>
.app {
  background-color: orange;
  border-radius: 10px;
  box-shadow: 0 0 10px;
  padding: 10px;
}
</style>
