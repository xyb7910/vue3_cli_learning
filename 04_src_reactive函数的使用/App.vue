<template>
  <!-- vue3 的组件模板结构可以没有根标签 -->
  <h1>我是app组件</h1>
  <h1>我叫{{ person.name }}, {{ person.age }}岁</h1>
  <h3>职位:{{ person.type }}</h3>
  <h3>薪水:{{ person.salary }}</h3>
  <h3>爱好:{{ person.hobbies }}</h3>
  <h4>测试的数据c:{{ person.a.b.c }}</h4>
  <button @click="changeInfo">修改人的信息</button>
</template>

<script>
import { reactive } from 'vue';
export default {
  name: 'App',
  setup() {
    // 准备数据
    //ref实现响应式(对象类型)也是采用Proxy来实现(proxy) 这里如果就算是用ref也是借助了reactive
    let person = reactive({
      name: 'ypb',
      age: 21,
      type: 'customer',
      salary: '30',
      hobbies: ['sing', 'dung', 'eat'],
      a: {
        b: {
          c: 666
        }
      }
    });

    // 数据更改了但是不加 ref 的话页面不会进行修改
    function changeInfo() {
      person.name = 'yxc';
      person.age = 18;
      person.type = 'police';
      person.salary = '10';
      person.a.b.c = 100;
      person.hobbies[0] = 'play';
    }

    // 返回一个对象
    return {
      person,
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
