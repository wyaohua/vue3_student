<template>
  <div class="person">
    <div>
      <!-- 直接使用message ，或者使用props.name 两种形式都可以 -->
      <p>{{ message }}</p>
      <p>{{ props.name }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup name="Person">



/**
 * 方式二：适用对象声明，并且可以进行类型校验和默认值设置等等...
 */
const props = defineProps({
  message:{
    type:String,  //类型要求
    required: true, //是否必填
    default: "" //默认值设置
  },
  name:{
    type:String,  //类型要求
    required: true, //是否必填
    default: "" //默认值设置
  }
});

//进行使用
console.log(props.message);

</script>

<style>
.person {
  background: #ddd;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 10px;
}
</style>
