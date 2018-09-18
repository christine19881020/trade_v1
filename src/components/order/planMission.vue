<template>
	<section>
		
		<div class="page page-root simple-pjax">
			<div class="page-inner pd40">
				<div class="oprateSquare oprateSquareLine clearfix">
					<Button shape="circle" class="left" @click="goListFn">保存计划</Button>
				</div>
				<div class="project-header">
					<div class="project-hd-info">
						<span class="project-name">B&M - HF17001</span>
						<span class="project-desc">林志文</span>
					</div>
				</div>
				<div class="project-sections">
					<planTodos></planTodos>
				</div>
			</div>
			
		</div>
	</section>
</template>

<script>
	import detailMessage from './detailMessage'
	import planTodos from './planTodos'
	import detailFiles from './detailFiles'
	import Document from '@/components/document'
	import Calendar from '@/components/calendar'
	export default {
		name: 'planMission',
		components: {
			detailMessage,
			planTodos,
			detailFiles,
			Document,
			Calendar
		},
		data() {
			return {
				single: false
			}
		},
		methods:{
			goListFn(){
				this.$router.push('/order/list')
			}
		}
	}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

</style>