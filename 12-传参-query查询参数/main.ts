import {createApp}  from 'vue' //引入Vue框架提供的函数，用于创建应用实例
import App from './App.vue'  //引入根组件
import router from './router' //引入我们创建的路由控制器

//APP组件 来创建我们的应用实例，我们的APP组件就是根组件
const app = createApp(App);


//应用实例 使用router
app.use(router);


//将整个应用挂载到id=app
app.mount('#app');