<template>
	<div>
		<!-- 轮播图 -->
		首页{{env}}
	</div>
</template>

<script>
	export default {
		data() {
			return {
				env: process.env.ENV,
				a:'2'
			}
		},
		created() {
			// console.log(a, 'webpack 相关信息==')
			console.log(this.env, 'huhuhuu')
			
		}
	}
</script>

<style scoped>
	
	
</style>