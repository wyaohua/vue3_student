<template>
  <div class="talk">
    <button @click="getLoveTalk">获取土味情话</button>
    <ul>
      <li v-for="item in loveTalkStore.talkList" :key="item.id">{{item.title}}</li>
    </ul>
  </div>
</template>

<script lang="ts" setup name="LoveTalk">

import {useLoveTalkStore} from '@/store/loveTalk.ts';

//数据
const loveTalkStore= useLoveTalkStore();

//方法
 function getLoveTalk()  {
   loveTalkStore.getLoveTalk();
}
</script>

<style>
.talk {
  background: orange;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px;
}
</style>
