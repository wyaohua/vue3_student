//导入createRouter函数 用于创建路由的控制器
import {createRouter,createWebHistory} from  'vue-router';

//引入组件
import Home from '@/components/Home.vue';
import About from '@/components/About.vue';
import News from '@/components/News.vue';


//创建路由的控制器
const router= createRouter({
  //第一个必须要配置的：路由器的工作模式
  history:createWebHistory(),
  //一个一个的路由的规则：
  routes:[
    {path:'/home',component: Home},
    {path:'/about',component: About},
    {path:'/news',component: News},
  ]
});

//路由器的控制器暴露出去
export default router;