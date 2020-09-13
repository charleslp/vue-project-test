import Vue from 'vue';
// 引入vue-router路由插件
import VueRouter from 'vue-router';
Vue.use(VueRouter); // 安装插件

// 引入Mint-ui


// 引入自己的全局组件
import App from './src/app.vue';
import Home from './src/home.vue';
import List from './src/list.vue';


// 配置路由对象
let router = new VueRouter();
router.addRoutes([
	{name: 'default',path: '',redirect: {name: 'home'}}, // 默认
	{name: 'home',path: '/home',component: Home}, // 首页
	{name: 'list',path: '/list',component: List} // 消息
]);



// 加入到vue实例中
new Vue({
	el: '#app',
	router: router,
	render: (c) => {
		return c(App);
	},
});