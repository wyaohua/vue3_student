<template>
  <div class="person">
    <div @click="changeName">{{ name }}</div>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'

export default {
  name: 'Person',

  //setup和data,methods....都是同级的配置
  setup() {
    let name = ref('张三')

    function changeName() {
      name.value = '李四'
    }

    /**
     * 可以返回对象 也可以返回一个函数 ；有区别：
     *   ○ 第一种返回一个对象：最常用的，会将返回的对象中的属性和方法提供给组件的模板使用；
     *   ○ 第二种返回一个函数：高级的用法，函数的返回值会覆盖<template>的内容，去渲染页面；
     */
    return { name, changeName }
  },
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