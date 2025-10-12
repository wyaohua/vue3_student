//引入defineStore 用来定义仓库的
import { defineStore } from 'pinia'

/**
 * 定义一个Count的store仓库，
 * 两个参数：
 *   第一个参数：就是当前store仓库的id，一般和文件名一致；
 *   第二个参数：就是配置项；state数据， Geeters计算属性，Actions方法；
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
})
