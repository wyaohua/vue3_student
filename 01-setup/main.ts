import {createApp}  from 'vue' //引入Vue框架提供的函数，用于创建应用实例
import App from './App.vue'  //引入跟组件


//根目录下的/indexl.html 中的 id='app'结构 和 App.vue进行关联；
createApp(App).mount('#app');
