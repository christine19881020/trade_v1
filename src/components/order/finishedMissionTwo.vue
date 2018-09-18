<template>
	<section>
		<div class="section">
			<h3 class="section-head">任务</h3>
			<ul class="missionLists">
				<li class="oneMission">
					<div class="time">
						<p>2018-1-31</p>
						<p>周五</p>
					</div>
					<div class="box">
						<ul class="processOne">
							<li @click="goBigMissionDetailFn">
								<i class="fa fa-check"></i><span>面料</span> <label>林志文 12-31 周一</label>
							</li>
							<li @click="goBigMissionDetailFn">
								<i class="fa fa-check"></i><span>辅料</span> <label>林志文 12-31 周一</label>
							</li>
						</ul>
						<ul class="processOne">
							<li @click="goBigMissionDetailFn">
								<i class="fa fa-check"></i><span>打样</span> <label>林志文 12-31 周一</label>
							</li>
							<li @click="goBigMissionDetailFn">
								<i class="fa fa-check"></i><span>生产</span> <label>林志文 12-31 周一</label>
							</li>
							<li @click="goBigMissionDetailFn">
								<i class="fa fa-check"></i><span>出运</span> <label>林志文 12-31 周一</label>
							</li>
						</ul>
					</div>
				</li>
		
			</ul>
		</div>
	</section>
</template>

<script>
	export default{
		name:'finishedMissionTwo',
		data(){
			return{}
		},
		methods:{
			goBigMissionDetailFn(){
				 this.$router.push('/order/bigMissionDetail')
			}
		}
	}
</script>

<style>

</style>