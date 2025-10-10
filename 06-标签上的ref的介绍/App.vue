<template>
  <Person ref="myPerson"/>
</template>

<script lang="ts" setup name="App">
import Person from '@/components/Person.vue';
import { onMounted, ref } from 'vue'

const myPerson =ref();

/**
 *   切记只能在onMounted之后才能使用ref获取到的组件实例；setup()的执行在onMounted之前；
 */
onMounted(()=>{
  myPerson.value.sayHello();
})


</script>

<style></style>
