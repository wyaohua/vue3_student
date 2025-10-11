<template>
  <Person
    :peronList="list"
    :name="myName"
  />
</template>

<script lang="ts" setup name="App">
import Person from '@/components/Person.vue';
import { ref } from 'vue'

const list = ref([
    {id:'xxx',name:'张三',age:18},
    {id:'qqq',name:'李四',age:20},
    {id:'yyy',name:'王五',age:19}
  ]);

const myName=ref('张三');

</script>

<style></style>
