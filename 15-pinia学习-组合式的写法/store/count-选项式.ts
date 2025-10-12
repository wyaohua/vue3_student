//引入defineStore 用来定义仓库的
import { defineStore } from 'pinia'

/**
 * 这是选项式的
 */
export const useCountStore = defineStore('count', {
  //存储数据的地方，一个函数返回一个对象；
  state() {
    return {
      sum: 2,
      name: '张三',
      age: 18,
    }
  },
  //数据对应的逻辑
  actions: {
    add() {
      this.sum = this.sum += 1
      this.name = '李四'
      this.age = this.age + 1;
      this.log();
    },
    log(){
      console.log("日志打印：当前的sum值",this.sum);
    }
  },
  //计算属性，依据state派生出来的数据
  getters:{
    bigSum(state){
      return state.sum * 10;
    }
  }
})
