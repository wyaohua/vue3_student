import {createApp}  from 'vue' //引入Vue框架提供的函数，用于创建应用实例
import App from './App.vue'  //引入根组件
import {createPinia} from 'pinia'



const app = createApp(App); //APP组件 来创建我们的应用实例，我们的APP组件就是根组件
const pinia = createPinia() // 创建 Pinia 实例



app.use(pinia);//pinia 挂载到应用实例上

app.mount('#app');//将整个应用挂载到id=app