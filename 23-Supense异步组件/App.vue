<template>
  <div class="app">
    <div>我是父亲组件</div>
    <Suspense>
<!--      异步任务结束后显示-->
      <template #default>
        <Child/>
      </template>

<!--      默认显示内容-->
      <template #fallback>
        默认显示内容
      </template>
    </Suspense>


  </div>
</template>

<script setup lang="ts" name="App">
import {Suspense} from 'vue'
import Child from '@/Child.vue'

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
