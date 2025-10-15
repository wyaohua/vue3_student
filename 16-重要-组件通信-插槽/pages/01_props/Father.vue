<template>
  <div class="father">
    <h3>父组件</h3>
    <h4>汽车:{{ car }}</h4>
    <h3 v-if="toy">接收到了孩子的礼物:{{toy}}</h3>
    <Child :car="car" :sendToy="getToy" />
  </div>
</template>

<script setup lang="ts" name="Father">
import Child from '@/pages/01_props/Child.vue'
import { ref } from 'vue'

//数据
const car = ref('奔驰')
const toy: any = ref(null);
//方法
function getToy(value: string) {
  toy.value = value
}
</script>

<style scoped>
.father {
  background-color: rgb(165, 164, 164);
  padding: 20px;
  border-radius: 10px;
}
</style>
