<template>
  <!-- vue3 的组件模板结构可以没有根标签 -->
  <h1>我是 App 组件</h1>
  <h1>我叫 {{ name }}, {{ age }} 岁</h1>
  <button @click="sayHello">hello!</button>
  <h3>msg: {{ vue2 }}</h3>
  <p>数据冲突该怎么办？{{ a }}</p>
  <button @click="test1">测试一下在vue2中去读取vue3的配置</button>
  <button @click="test2">测试一下在vue3的setup中去读取vue2的配置</button>
</template>

<script>
//import { h } from 'vue'


export default {
  name: 'App',
  // 此处只是测试 setup， 暂时不考虑响应式的问题
  
  //测试使用 vue2
  data() {
    return {
      vue2: 'still can vue2 in vue3 code',
      a: 1
    }
  },
  methods: {
    // vue2 配置方法的方式
    test1() {
      console.log(this.vue2)
      console.log(this.name)
      console.log(this.sayHello)
      this.sayHello();
    }
  },
  setup() {
    // 表演的舞台

    // 准备数据
    let name = 'ypb';
    let age = 21;
    let a = 300;

    // 方法 methods
    function sayHello() {
      alert(`My name is ${name}, ${age} ${age === 1 ? 'year' : 'years'} old`);
    }

    // 在 vue3 的配置里获取 vue2 的属性
    function test2() {
      console.log(name);
      console.log(age)
      console.log(a)
      console.log(sayHello)
      console.log(this.vue2);
      console.log(this.test1)
    }

    // 返回一个对象
    return {
      name,
      age,
      sayHello,
      test2,
    }


    // 返回一个渲染函数
    // 这里直接将你在这里渲染的东西替换到 template 中
    //return() => h('h1', 'hello')
  },
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
