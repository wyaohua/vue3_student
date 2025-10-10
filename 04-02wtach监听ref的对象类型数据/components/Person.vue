<template>
  <div class="person">
    <p>我是{{person.name}},年龄是{{person.age}}</p>
    <button @click="changeName">点我修改名字</button>
    <button @click="changeAge">点我修改年龄</button>
    <button @click="changePerson">点我修改整个人</button>
    <button @click="removeWatch">解除监视</button>
  </div>
</template>

<script lang="ts" setup name="Person">
import { ref,watch } from 'vue'

/**
 * 监听ref定义的基本数据类型；不需要.value；
 */

const person=ref({
  name:'张三',
  age:18
});
function changeName(){
  person.value.name += '~';
}
function changeAge(){
  person.value.age += 1;
}

function changePerson(){
  person.value={
    name:'李四',
    age:90
  }
}

/**
 * 默认只能监视到person整个对象的变化--》点我修改整个人
 * 想要监视到person内部属性的变化，要开启深度监视：{deep:true}
 */
const stopWatch =watch(person ,(newValue,oldValue) => {
  console.log(`Person变化了`,newValue,"旧的Person：：",oldValue)
},{deep:true,immediate:true})

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