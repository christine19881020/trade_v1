<template>
	<div id="app">
		<router-view></router-view>
		<div class="pageFooter">@集货宝</div>
	</div>
</template>

<script>
	export default {
		name: 'app'
	}
</script>

<style>
	#app {
		font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: #2c3e50;
	}
	.pageFooter{
		height:80px;line-height:80px; text-align: center;color: #999;
	}
</style>