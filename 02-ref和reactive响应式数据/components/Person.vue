<template>
  <div class="person">
    <p>我有一辆{{car.name}}汽车,价值{{car.price}}万,我是{{name}}</p>
  </div>
</template>

<script lang="ts" setup name="Person">
import { ref,reactive } from 'vue'
  const car=reactive({
    name:'宾利',
    price:3000
  });

const name =ref('张三');
name.value ="李四";




</script>

<style>
.person {
  background: #ddd;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 10px;
}
</style>