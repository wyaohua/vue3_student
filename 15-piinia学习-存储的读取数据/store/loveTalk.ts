//引入defineStore  用来定义我们的仓库
import {defineStore} from 'pinia';
import { reactive } from 'vue'


/**
 * 定义一个仓库 useLoveTalkSotre
 */
export const useLoveTalkStore=defineStore('useLoveTalkStore',{
  state(){
    return {
      talkList : reactive([
        { id: 'qqq', title: '土味情话01' },
        { id: 'xxx', title: "土味情话02" },
        { id: 'zzz', title: "土味情话03" },
        { id: 'aaa', title: "土味情话04" },
      ]),
      number : 0
    }
  }
})