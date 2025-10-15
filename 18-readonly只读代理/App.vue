<template>
  <div class="app">
      <h2>求和为:{{sum}}</h2>
      <h2>readonly-sum:{{readOnlySum2}}</h2>


    <button @click="changeSum">修改Sum</button>

  </div>
</template>

<script setup lang="ts" name="App">
import { ref ,readonly} from 'vue';

let sum = ref (0);
let readOnlySum2 =readonly(sum);


const changeSum=()=>{
  sum.value +=1;
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
