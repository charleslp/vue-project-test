<template>
	<div>
		<!-- 头部内容 -->
		<router-view></router-view>
		<!-- 底部 -->
		<nav class="mui-bar mui-bar-tab">
			<router-link :to="{name:'home'}" class="mui-tab-item mui-active" href="#tabbar">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link :to="{name:'list'}" class="mui-tab-item" href="#tabbar-with-chat">
				<span class="mui-tab-label">消息</span>
			</router-link>
		</nav>
	</div>
</template>

<script>
	export default {
		data() {
			return {
			}
		}
	}
</script>

<style>
	
</style>