// 引入 defineStore、ref 和 computed
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

/**
 * 定义一个 Count 的 store 仓库 (组合式函数写法)
 * 两个参数：
 * 第一个参数：就是当前 store 仓库的 id，一般和文件名一致；
 * 第二个参数：一个 setup 函数，在函数中定义 state、actions 和 getters；
 */
export const useCountStore = defineStore('count', () => {
  // 1. 定义 state (状态) -> 使用 ref
  const sum = ref(2)
  const name = ref('张三')
  const age = ref(18)

  // 2. 定义 getters (计算属性) -> 使用 computed
  const bigSum = computed(() => {
    return sum.value * 10
  })

  // 3. 定义 actions (方法) -> 直接定义函数
  function log() {
    console.log("日志打印：当前的sum值", sum.value);
  }

  function add() {
    // 在函数内部直接修改 ref 的 .value
    sum.value += 1
    name.value = '李四'
    age.value += 1
    // 调用 store 内的另一个 action
    log()
  }

  // 4. 必须将需要暴露给外部的 state、getters 和 actions return 出去
  return {
    sum,
    name,
    age,
    bigSum,
    add,
    log, // 如果 log 方法也希望在组件中被调用，也需要 return
  }
})