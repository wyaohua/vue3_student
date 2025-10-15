<template>
  <div class="app">
    <h2>信息：{{ msg }}</h2>、
    <input type="text" v-model="msg" />





  </div>
</template>

<script setup lang="ts" name="App">
import { customRef, ref } from 'vue'
//vue提供的ref 只要msg 发生变动 页面立即响应；
// let msg = ref('Hello World!');


/**
 * 使用customRef自定义响应式数据：
 *  两个参数：
 *        track()，跟踪的意思；对应底层的依赖收集机制，当读取msg的时候会把所有依赖msg的函数或者组件记录下来；
 *        trigger(),触发的意思；对应底层的依赖触发机制，当msg被修改时，遍历依赖列表，更新；
 */
let initValue ='hello';
let msg =customRef((track,trigger)=>{
  return{
    //msg被读取时，get调用，
    get(){
      track();  //进行对msg的跟踪，手动“记录依赖”（谁在用这个值）
      return initValue;
    },
    //msg被修改时，set调用；
    set(val){
      initValue=val;
      trigger(); //修改值的时候，更新所有依赖msg组件，手动“触发依赖更新”
    }
  }
})






</script>

<style>
.app {
  background-color: orange;
  border-radius: 10px;
  box-shadow: 0 0 10px;
  padding: 10px;
}
</style>
