// 不再引入Vue构造函数，而是引入一个名为 createApp 的工厂函数
// 注意在这里无法向 vue2 那样去书写（这里不兼容）
import { createApp } from 'vue'
import App from './App.vue'

// 创建应用实例对象 --- app类似 vue2 中 vm，但 app 比 vm 要更轻量化
const app = createApp(App)
//console.log(app);

// 挂载
app.mount('#app')

setTimeout(() => {
    app.unmount('#app');
}, 2000)

// vue2 写法
// const vm = new Vue({
//     render: h => h(App)
// });
// vm.$mount('#app')
