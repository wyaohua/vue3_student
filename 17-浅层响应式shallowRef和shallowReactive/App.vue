<template>
  <div class="app">
      <h2>求和为:{{sum}}</h2>
      <h2>名字为:{{person.name}}</h2>
      <h2>年龄为:{{person.age}}</h2>
    <button @click="changeSum">修改Sum</button>
    <button @click="changeName">修改Name</button>
    <button @click="changeAge">修改Age</button>
    <button @click="changePerson">修改Person</button>
  </div>
</template>

<script setup lang="ts" name="App">
import { ref ,shallowRef} from 'vue';

let sum = shallowRef (0);
let person= shallowRef({
  name:'张三',
  age:18
});

const changeSum=()=>{
  sum.value +=1;
}
const changeAge=()=>{
  person.value.age+=1;
}
const changeName=()=>{
  person.value.name += '!';
}
const changePerson=()=>{
person.value={
  name :'李四',
  age:20
}
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
