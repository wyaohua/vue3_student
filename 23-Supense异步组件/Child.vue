<template>
  <div class="child">
    <h2>我是child组件</h2>
  </div>
</template>

<script setup lang="ts" name="Child">
import axios from 'axios'

let result = await axios.get('https://dog.ceo/api/breed/pembroke/images/random');
console.log(result);
</script>

<style scoped></style>
