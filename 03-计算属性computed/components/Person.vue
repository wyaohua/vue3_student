<template>
  <div class="person">
    <p>我是{{fullName}}</p>
    <p>我是{{fullName1}}</p>
  </div>
</template>

<script lang="ts" setup name="Person">
import { ref, computed } from 'vue'

/**
 * 方式一：只读的
 */
const firstName =ref('张');
const lastName =ref('三');
// fullName.value='李四';  会直接报错 因为是只读的
const fullName =computed(()=> firstName.value + lastName.value);


/**
 * 方式二：可写可读
 */
const firstName1=ref('张');
const lastName1=ref('三');
const fullName1 = computed({
  get() {
    return firstName1.value + ' ' + lastName1.value
  },
  set(value) {
    const [first, last] = value.split(' ');
    firstName1.value = first ?? '';
    lastName1.value = last ?? '';
  }
});
fullName1.value ='李 四'


</script>

<style>
.person {
  background: #ddd;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 10px;
}
</style>