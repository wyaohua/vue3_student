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

//pinia中的监听
loveTalkStore.$subscribe((mutate,state)=>{
  //每次发生数据变化，把最新的集合存储到浏览器的localStorage
  localStorage.setItem("loveTalk",JSON.stringify(state.talkList));
})


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
