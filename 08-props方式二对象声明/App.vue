<template>
  <Person
    message="hello world!!!"
    :name="myName"

  />
</template>

<script lang="ts" setup name="App">
import Person from '@/components/Person.vue';
import { ref } from 'vue'

const myName = ref('武耀华');



</script>

<style></style>
