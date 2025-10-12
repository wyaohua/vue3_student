import { reactive } from 'vue'



export default  function (){
  const newsList=reactive([
    {id:'qqq',title:'新闻01',content:'新闻01的内容'},
    {id:'aaa',title:'新闻02',content:'新闻02的内容'},
    {id:'zzz',title:'新闻03',content:'新闻03的内容'},
    {id:'ddd',title:'新闻04',content:'新闻04的内容'},
  ])

  return {newsList}
}