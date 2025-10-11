<template>
  <div class="person">
    <h2>求和：{{ sum }}</h2>
    <button @click="sumAdd">点我sum+1</button>
    <br />
    <hr />
    <br />
    <img v-for="dog in dogList" :src="dog" alt="狗的图片" />
    <button @click="addDog">加一只狗</button>
  </div>
</template>

<script lang="ts" setup name="Person">
import useDog from '../hooks/useDog.ts';
import useSum from '../hooks/useSum.ts';
const {dogList,addDog} = useDog();
const {sum,sumAdd} = useSum();


</script>

<style>
.person {
  background: #ddd;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 10px;
}

img{
  width: 100px;
}
</style>
