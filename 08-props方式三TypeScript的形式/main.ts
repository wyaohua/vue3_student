import {createApp}  from 'vue' //引入Vue框架提供的函数，用于创建应用实例
import App from './App.vue'  //引入跟组件


//根据App组件创建应用实例，并且挂载到'id=app'的组件上；
createApp(App).mount('#app');
