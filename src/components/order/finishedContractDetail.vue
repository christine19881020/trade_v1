<template>
	<div class="page page-root simple-pjax">
		<div class="page-inner pd40">
			<div class="project-header">
				<div class="project-hd-info">
					<span class="project-name">B&M - HF17001 <span class="project-time">2017.5.1 ~ 2017.8.1</span></span>
					<span class="project-desc">林志文</span>
				</div>
				<div class="project-links">
					<router-link to="/order/newOrder/bigProcess" class="link-stats" title="进度">
						<span class="main"><i class="fa fa-copy"></i></span>
						<span>复制</span>
					</router-link>
				</div>
			</div>
			<div class="project-sections">
				<finishedMission></finishedMission>
				<files></files>
				<message></message>
			</div>
		</div>
	</div>
</template>

<script>
	import files from './finishedDetailFiles'
	import message from './detailMessage'
	import finishedMission from './finishedMission'
	export default {
		name: 'finishedContractDetail',
		components: {
			files,
			message,
			finishedMission
		},
		data() {
			return {}
		},
		methods: {

		},
		mounted() {

		}
	}
</script>

<style>

</style>