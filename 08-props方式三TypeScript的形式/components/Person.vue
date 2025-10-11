<template>
  <div class="person">
    <div>
      <ul>
        <li v-for="item in peronList" :key="item.id">姓名:{{item.name}}---年龄：{{item.age}}</li>
      </ul>
    </div>
    <div>
      {{name}}
    </div>
    <div>
      {{friends}}
    </div>
  </div>
</template>

<script lang="ts" setup name="Person">
//引入我们自定义的接口
import {type Persons} from '../types/index';
//引入withDefaults：是typeScript写法，给props设置默认值使用；
import {withDefaults} from 'vue'

/**
 * 方式三： TypeScript 使用泛型和接口来限制类型；
 */

/**
 *  声明接收父组件的personList,并且限制类型是Persons; （默认父组件必须传）
 *  声明接收父组件的 name， 并且限制类型是strring;      （默认父组件必须传）
 *  声明接收父组件的 friends， 并且限制类型是number； （注意：？是用来声明必要性；带了？说明这个父组件可以不传）
 *  并且引入 withDefaults来指定默认值， 第一个参数不变，第二个参数就是默认值
 */
const props =withDefaults(
  defineProps<{peronList:Persons ,name:string ,friends?:number}>(),
  {
    peronList:()=>[{id:'默认id',name:'默认姓名',age:10}] ,
    name:()=>'默认name',
    friends:()=> 900
  }

);


console.log(props.friends)

</script>

<style>
.person {
  background: #ddd;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 10px;
}
</style>
