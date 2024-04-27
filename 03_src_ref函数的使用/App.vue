<template>
  <!-- vue3 的组件模板结构可以没有根标签 -->
  <h1>我是 App 组件</h1>
  <h1>我叫 {{ name }}, {{ age }} 岁</h1>
  <h3>职位：{{  job.type }}</h3>
  <h3>薪水:{{ job.salary }}</h3>
  <button @click="changeInfo">修改个人信息</button>
</template>

<script>
import { ref } from 'vue';
export default {
  name: 'App',
  setup() {

    // 准备数据
    //ref实现响应式(基本类型)也是采用Object.definedProperty()来实现的 getter和setter
    let name = ref('ypb');
    let age = ref(21);

    //ref实现响应式(对象类型)也是采用Proxy来实现
    let job = ref({
      type: 'customer',
      salary: '30',
    });

    // 数据更改了但是不加 ref 的话页面不会进行修改
    function changeInfo() {
      name.value = 'yxc';
      age.value = 18;
      job.value.type = 'police';
      job.value.salary = '10';
      console.log(name, age);
    }

    // 返回一个对象
    return {
      name,
      age,
      job,
      changeInfo,
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
