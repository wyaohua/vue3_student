//导入createRouter函数 用于创建路由的控制器
import {createRouter,createWebHistory} from  'vue-router';
import {toRefs} from 'vue'
//引入组件
import Home from '@/pages/Home.vue';
import About from '@/pages/About.vue';
import News from '@/pages/News.vue';
import Detail from '@/pages/Detail.vue'


//创建路由的控制器
const router= createRouter({
  //第一个必须要配置的：路由器的工作模式
  history:createWebHistory(),
  //一个一个的路由的规则：
  routes:[
    {path:'/home',name:'zhuye',component: Home},
    {path:'/about',name:'guanyu',component: About},
    {path:'/news',
      name:'xinwen',
      component: News,
      children:[
        // 子路由是不需要前面加 '/'的，是相对路由
        {path:'detail/:content/:title', name:'xiangqing',component:Detail,
          props:{
          content:'hello',
            title:'world'
          }
        }
      ]
    },
  ]
});

//路由器的控制器暴露出去
export default router;