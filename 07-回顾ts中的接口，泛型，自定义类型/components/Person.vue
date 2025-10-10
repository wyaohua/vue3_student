<template>
  <div class="person">
    <h1>中国</h1>
  </div>
</template>

<script lang="ts" setup name="Person">
import { type PersonInter,type Persons } from '@/types/index.ts'

/**
 * 通过接口限制一个person对象
 */
let person: PersonInter = {
  id: 'xsqwe',
  name: '张三',
  age: 18,
}

/**
 * 要求personlist是一个数组，并且每个元素都符合PersonInter接口的规范；
 * Persons是我们自定义的类型，Persons = Array<PersonInter>;
 */
let personlist:Persons= [
  { id: 'xsqw', name: '张三', age: 18, },
  { id: 'qqqq', name: '李四', age: 19, },
  { id: 'sxxs', name: '王五', age: 20, }
]






</script>

<style>
.person {
  background: #ddd;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 10px;
}
</style>
