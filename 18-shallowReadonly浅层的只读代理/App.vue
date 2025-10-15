<template>
  <div class="app">
    <h2>原始person:{{ person }}</h2>
    <h2>代理perosn:{{ person1 }}</h2>

  <button @click="changePerson1Forname">修改代理的name</button>
  <button @click="changePerson1">修改代理的深层的address.y</button>

  </div>
</template>

<script setup lang="ts" name="App">
import { reactive, shallowReadonly } from 'vue'

let person = reactive({
  name: '李四',
  age: 18,
  address:{
    x:'河南',
    y:'南阳'
  }
})
let person1 = shallowReadonly(person);


const changePerson1Forname=()=>{
  person1.name += "!!";
}

const changePerson1 =()=>{
  person1.address.y +='!'
}


</script>

<style>
.app {
  background-color: orange;
  border-radius: 10px;
  box-shadow: 0 0 10px;
  padding: 10px;
}
</style>
