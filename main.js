

import router from './router'
import App from './src/app.vue'
import Vue from 'vue'



// 加入到vue实例中
// new Vue({
// 	el: '#app',
// 	router: router,
// 	render: (c) => {
// 		return c(App);
// 	},
// });
new Vue({
	el: '#app',
	router,
	render: h=>h(App)
  })