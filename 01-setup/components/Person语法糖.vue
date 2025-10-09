<template>
  <div class="person">
    <div @click="changeName">{{ name }}</div>
  </div>
</template>

<script lang="ts" name="Person" setup>
import { ref } from 'vue'


    let name = ref('张三')

    function changeName() {
      name.value = '李四'
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