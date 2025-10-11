<template>
  <div class="person">
    <div>
      <p>{{ message }}</p>
      <p>{{ name }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup name="Person">



/**
 * 方式一： 使用数组声明，最简单的方式，无法检验类型 ,接收后直接可以提供给模板使用
 *         也可以接收后使用
 */
const props = defineProps(['message', 'name']);

//进行使用
console.log(props.message);

</script>

<style>
.person {
  background: #ddd;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 10px;
}
</style>
