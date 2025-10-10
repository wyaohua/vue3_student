<template>
  <div class="person">
    <p>姓名{{person.name}}</p>
    <p>年龄{{person.age}}</p>
    <p>汽车{{person.car.carName}}</p>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="changeCarName">修改汽车名</button>
    <button @click="changeAllCar">修改整个车</button>
  </div>
</template>

<script lang="ts" setup name="Person">
import { reactive, watch } from 'vue'

/**
 * 监听ref定义的基本数据类型；不需要.value；
 */

const person=reactive({
  name:'张三',
  age:18,
  car:{
    carName:'奔驰',
    carPrice:'1000万'
  }
});

/**
 * 监视多个值，最佳方案：使用数组并且使用函数的形式并且开启深度监视
 */

const stopWatch = watch(
  [()=>person.name,()=>person.car],
  (newValue,oldValue) => {
  console.log(`person.name`,newValue,"旧的：：",oldValue)
},{deep:true,immediate:true});



//解除监视；
function removeWatch(){
  stopWatch();
}


function changeName(){
  person.name += '~';
}
function changeAge(){
  person.age += 1;
}
function changeCarName(){
  person.car.carName += "!";
}
function changeAllCar(){
  person.car ={carName:'宾利',
    carPrice:'2000万'}
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