<template>
	<section>
		<div class="page page-root simple-pjax page-behind">
			<router-link class="link-page-behind" to="/team/memberTaskDetail">林志文</router-link>
		</div>
		<div class="page page-1 simple-pjax">
			<div class="page-inner pd40">
				<finishedMission></finishedMission>
			</div>
		</div>
	</section>

</template>

<script>
	import finishedMission from './finishedMission'
	export default{
		name:'',
		components:{
			finishedMission
		},
		data(){
			return{
				
			}
		}
	}
</script>

<style>

</style>