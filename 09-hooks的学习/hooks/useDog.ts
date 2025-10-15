
import { reactive} from 'vue';
import axios from 'axios';

export default function () {
  //数据
  let dogList = reactive([
    'https://images.dog.ceo//breeds//pembroke//n02113023_15462.jpg',
  ])



    //方法
  async function addDog(){
    try{
      let result = await axios.get('https://dog.ceo/api/breed/pembroke/images/random');
      dogList.push(result.data.message);
    }catch (error){
      alert(error);
    }
  }

  //向外界提供任何东西
  return{
    dogList,addDog
  }

}
