<template>

  <div class="model" >
    <button @click="isShow =true">打开弹窗</button>
    <teleport to="body">
      <div v-show="isShow" class="content">
        <div>hello world</div>
        <button @click="isShow =false">关闭弹窗</button>
      </div>
    </teleport>

  </div>
</template>


<script setup lang="ts" name="Model">

import {ref} from 'vue';
const isShow = ref(false);
</script>



<style>
.content{
  text-align: center;
  color: white;
  background-color: #333;
  width: 300px;
  height: 300px;
  position: fixed;
  left: 50%;
  top: 50%;
  margin-top: -150px;
  margin-left: -150px;
}

</style>