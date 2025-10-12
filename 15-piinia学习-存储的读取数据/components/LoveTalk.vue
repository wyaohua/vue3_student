<template>
  <div class="talk">
    <button @click="getLoveTalk">获取土味情话</button>
    <ul>
      <li v-for="item in loveTalkStore.talkList" :key="item.id">{{item.title}}</li>
    </ul>
  </div>
</template>

<script lang="ts" setup name="LoveTalk">
import {  ref } from 'vue';
import {useLoveTalkStore} from '@/store/loveTalk.ts';
import {nanoid} from 'nanoid'
//数据
const loveTalkStore= useLoveTalkStore();

//方法
 function getLoveTalk()  {
  let str ="新的土味情话";
   loveTalkStore.talkList.unshift({id:nanoid() ,title: `${str+loveTalkStore.number++}`});

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
