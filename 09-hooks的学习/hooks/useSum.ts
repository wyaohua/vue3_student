import { ref } from 'vue'

export default function () {
  //数据
  let sum = ref(0)
  //函数
  const sumAdd = () => sum.value + 1;


  //向外提供任何东西
  return {sum ,sumAdd}
}
