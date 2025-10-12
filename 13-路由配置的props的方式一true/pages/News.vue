<template>
  <div class="news">
<!--    导航区-->
    <ul>
      <li v-for="item in newsList" :key="item.id">
        <RouterLink :to="{name:'xiangqing', params:{content:item.content,title:item.title}}">{{ item.title }}</RouterLink>
      </li>
    </ul>

<!--    展示区-->
    <div class="news-content">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script setup lang="ts" name="News">
import { reactive } from 'vue'

const newsList = reactive([
  { id: 'qqq', title: '新闻01', content: '新闻01的内容' },
  { id: 'aaa', title: '新闻02', content: '新闻02的内容' },
  { id: 'zzz', title: '新闻03', content: '新闻03的内容' },
  { id: 'ddd', title: '新闻04', content: '新闻04的内容' },
])
</script>

<style scoped>
/* 新闻 */
.news {
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  height: 100%;
}
.news ul {
  margin-top: 30px;
  list-style: none;
  padding-left: 10px;
}
.news li > a {
  font-size: 18px;
  line-height: 40px;
  text-decoration: none;
  color: #64967e;
  text-shadow: 0 0 1px rgb(0, 84, 0);
}
.news-content {
  width: 70%;
  height: 90%;
  border: 1px solid;
  margin-top: 20px;
  border-radius: 10px;
}
</style>
