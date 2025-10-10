<template>
  <div class="person">
    <p>我是{{ person.name }},年龄是{{ person.age }}</p>
    <button @click="changeName">点我修改名字</button>
    <button @click="changeAge">点我修改年龄</button>
    <button @click="changePerson">点我修改整个人</button>
    <button @click="removeWatch">解除监视</button>
  </div>
</template>

<script lang="ts" setup name="Person">
import { reactive, ref, watch } from 'vue'

/**
 * 监听ref定义的基本数据类型；不需要.value；
 */

const person = reactive({
  name: '张三',
  age: 18,
})

function changeName() {
  person.name += '~'
}

function changeAge() {
  person.age += 1
}

function changePerson() {
  Object.assign(person, {
    name: '李四',
    age: 90,
  })
}

/**
 * 不需要 deep:true; 就能实现深度监听；
 * 但是要知道reactive自始至终都是一个对象；newValue和oldValue 自始至终都是同一个对象；
 *
 */
const stopWatch = watch(
  person,
  (newValue, oldValue) => {
    console.log(`Person变化了`, newValue, '旧的Person：：', oldValue)
  }

)

//解除监视；
function removeWatch() {
  stopWatch()
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
