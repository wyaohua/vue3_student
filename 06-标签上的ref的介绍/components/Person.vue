<template>
  <div class="person">
    <h1>中国</h1>
    <h2 ref="title2">北京</h2>
    <button @click="showLog">点击打印h2元素</button>
  </div>
</template>

<script lang="ts" setup name="Person">
import { ref ,defineExpose} from 'vue';

//将h2的元素存储到 title2的容器中
const title2=ref();

const sayHello=()=>{
  console.log("你好 我是person组件");
}

function showLog() {
  console.log(title2.value);
}

defineExpose({
  sayHello
})
</script>

<style>
.person {
  background: #ddd;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 10px;
}
</style>
