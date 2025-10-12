<template>
  <div class="count">
  <h2>当前求和为{{countStore.sum}}</h2>
    <select v-model="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
    </select>

    <button @click="add">加</button>
    <button @click="sub">减</button>
  </div>
</template>

<script lang="ts" setup name="Count">
import {ref} from 'vue';
import {useCountStore} from '@/store/count.ts';

const n =ref(1);

const  countStore = useCountStore();

//方法
function add() {
  countStore.sum += Number( n.value);
}

function sub() {
  countStore.sum -= Number(n.value);
}

</script>

<style>
.count{
  background: aquamarine;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px;
}
.select,button{
  margin: 0 10px;
  height: 25px;
}

</style>
