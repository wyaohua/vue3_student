<template>
  <div class="person">
    <h2>需求：水温>=60 或者 水位 >= 80时候，向服务器发送请求</h2>
    <p>水位{{ height }}</p>
    <p>水温{{ temp }}</p>

    <button @click="changeTemp">水温+10</button>
    <button @click="changeHeight">水位+10</button>
  </div>
</template>

<script lang="ts" setup name="Person">
import { ref, watch, watchEffect } from 'vue'

let temp = ref(10)
let height = ref(0)

const changeTemp = () => {
  temp.value += 10
}

const changeHeight = () => {
  height.value += 10
}


/**
 * watch监听，第一需要制定明确的监听数据源；
 *           第二想要立即监听需要配置{immediate:true}
 */
watch([()=>temp.value,()=>height.value],()=>{
  if (height.value >= 80 || temp.value >= 60) {
    console.log("watch向服务器发送请求")
  }
},{immediate:true});


/**
 * watchEffect 是一种比较智能的watch
 * 不需要明确指定数据源，用到的响应式数据就是被监视的数据源；
 * 不需要明确的配置立即监听；
 * 无法拿到新旧的值；
 */
watchEffect(()=>{
  console.log("watchEffect ,我执行了~~~")
  if (height.value >= 80 || temp.value >= 60) {
    console.log("watchEffect向服务器发送请求")
  }
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
