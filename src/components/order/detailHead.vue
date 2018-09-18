<template>
	<div class="project-header">
		<div class="project-hd-info">
			<span class="project-name">B&M - HF17001</span>
			<span class="project-desc">林志文</span>
		</div>
		<div class="project-links">
			<router-link to="/order/newOrder/bigProcess" class="link-stats" title="进度">
				<span class="main"><Icon type="record" class="green"/></span>
				<span>进度</span>
			</router-link>
			
			<a href="#" class="link-admin-members" title="成员">
				<span class="main">4</span>
				<span>成员</span>
			</a>
			<a href="#" class="link-admin-settings" title="项目设置">
				<span class="main">
			                <i class="fa fa-gear"></i>
			            </span>
				<span>设置</span>
			</a>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'detailHead'
	}
</script>

<style lang="scss">
 
</style>