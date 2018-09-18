<template>
	<section>
		<div class="section">
			<h3 class="section-head">林志文 已完成的任务</h3>
			<ul class="missionLists">
				<li class="oneMission">
					<div class="time">
						<p>2018-1-31</p>
						<p>周五</p>
					</div>
					<div class="box">
						<div class="title" @click="goOrderDetailFn">B&M - HF0001 HL0234 品名XXX : 头样</div>
						<ul class="processOne">
							<li>
								<i class="fa fa-check"></i><span @click="goMissionTwoFn">头样寄送</span> 
							</li>
							<li>
								<i class="fa fa-check"></i><span>辅料</span> 
							</li>
						</ul>
					</div>
				</li>
				<li class="oneMission">
					<div class="time">
						<p>2018-1-31</p>
						<p>周五</p>
					</div>
					<div class="box">
						<div class="title" @click="goOrderDetailFn">B&M - HF0001 HL0234 品名XXX : 面料</div>
						<ul class="processOne">
							<li @click="goBigMissionDetailFn">
								<i class="fa fa-check"></i><span @click="goMissionTwoFn">面料寄送</span>
							</li>
							<li @click="goBigMissionDetailFn">
								<i class="fa fa-check"></i><span @click="goMissionTwoFn">面料确认</span>
							</li>
							<li @click="goBigMissionDetailFn">
								<i class="fa fa-check"></i><span @click="goMissionTwoFn">大货面料确认</span>
							</li>
						</ul>
					</div>
				</li>
			</ul>
		</div>
	</section>
</template>

<script>
	export default {
		name: 'finishedMission',
		data() {
			return {}
		},
		methods: {
			goOrderDetailFn() {
                this.$router.push('/order/finishedOrderDetail')
			},
			goBigMissionDetailFn(){
				 this.$router.push('/order/bigMissionDetail')
			},
			goMissionTwoFn(){
				 this.$router.push('/order/smallMissionDetail')
			}
		}
	}
</script>

<style>

</style>