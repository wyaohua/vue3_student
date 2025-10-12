//引入defineStore  用来定义我们的仓库
import {defineStore} from 'pinia';
import { reactive } from 'vue'
import { nanoid } from 'nanoid'


/**
 * 定义一个仓库 useLoveTalkSotre
 */
export const useLoveTalkStore=defineStore('useLoveTalkStore',{
  state(){
    return {
      talkList : JSON.parse(localStorage.getItem('loveTalk') ?? '[]'),
      number : 0
    }
  },
  //逻辑处理
  actions:{
    getLoveTalk(){
      let str ="新的土味情话";

      this.talkList.unshift({id:nanoid() ,title: `${str+this.number++}`});
    }
  }
})