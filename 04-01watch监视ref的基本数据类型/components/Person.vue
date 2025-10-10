<template>
  <div class="person">
    <p>我是{{name}}</p>
    <button @click="changeName">点我修改名字</button>
    <button @click="removeWatch">解除监视</button>
  </div>
</template>

<script lang="ts" setup name="Person">
import { ref,watch } from 'vue'

/**
 * 监听ref定义的基本数据类型；不需要.value；
 */

const name=ref('张三');
function changeName(){
  name.value= "李四";
}

const stopWatch =watch(name, (newValue,oldValue)=>{
  console.log("数据发生了改变～～","新的值:",newValue,"   ","旧的值",oldValue);
});

//解除监视；
function removeWatch(){
  stopWatch();
}





</script>

<style>
.person {
  background: #ddd;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 10px;
}
</style>