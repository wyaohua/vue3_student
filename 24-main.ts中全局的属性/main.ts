import {createApp} from 'vue'
import App from './App.vue'

import Child from './Child.vue'

// 创建应用
const app = createApp(App)

//注册全局组件
app.component("Child", Child);


//全局的属性
app.config.globalProperties.hello ='helloWorld';

//定义指令
app.directive("beauty",(element,{value})=>{
  //element 就是当前元素的DOM；
  //value 在本案例中就是 today
  console.log(element,value);
  element.innerText +=value;
  //修改样式
  element.style.color='red'

})

// 挂载应用
app.mount('#app')