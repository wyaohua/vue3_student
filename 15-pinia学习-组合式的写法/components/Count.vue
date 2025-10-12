<template>
  <div class="count">
    <h2>当前求和为{{ sum}}....放大十倍后{{bigSum}}</h2>
    <h2>我的名字是{{ age }}</h2>
    <h2>我的年龄是{{ name }}</h2>


    <button @click="add">加</button>
  </div>
</template>

<script lang="ts" setup name="Count">
import { useCountStore } from '@/store/count-选项式.ts'
import {storeToRefs} from 'pinia';
const countStore = useCountStore();
const {sum,age,name,bigSum} = storeToRefs(countStore);




//方法
function add() {
  countStore.add();
}
</script>

<style>
.count {
  background: aquamarine;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px;
}
.select,
button {
  margin: 0 10px;
  height: 25px;
}
</style>
