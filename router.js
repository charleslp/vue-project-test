import Vue from 'vue'
import Router from 'vue-router'
// 引入自己的全局组件
// import App from './src/app.vue';
import Home from './src/home.vue';
import List from './src/list.vue';

Vue.use(Router)
export default new Router({
    routes: [
        {name: 'default',path: '',redirect: {name: 'home'}}, // 默认
        {name: 'home',path: '/home',component: Home}, // 首页
        {name: 'list',path: '/list',component: List} // 消息
      ]
})