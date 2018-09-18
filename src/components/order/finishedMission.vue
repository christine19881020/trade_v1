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
						<div class="title" @click="goOrderDetailFn">HL0234 品名xxx</div>
						<ul class="processOne">
							<li>
								<i class="fa fa-check"></i><span @click="goMissionTwoFn">面料</span> <label>林志文 12-31 周一</label>
							</li>
							<li>
								<i class="fa fa-check"></i><span @click="goMissionTwoFn">辅料</span> <label>林志文 12-31 周一</label>
							</li>
						</ul>
						<ul class="processOne">
							<li>
								<i class="fa fa-check"></i><span @click="goMissionTwoFn">打样</span> <label>林志文 12-31 周一</label>
							</li>
							<li>
								<i class="fa fa-check"></i><span @click="goMissionTwoFn">生产</span> <label>林志文 12-31 周一</label>
							</li>
							<li>
								<i class="fa fa-check"></i><span @click="goMissionTwoFn">出运</span> <label>林志文 12-31 周一</label>
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
						<div class="title" @click="goOrderDetailFn">HL0234 品名xxx</div>
						<ul class="processOne">
							<li @click="goBigMissionDetailFn">
								<i class="fa fa-check"></i><span @click="goMissionTwoFn">面料</span> <label>林志文 12-31 周一</label>
							</li>
							<li @click="goBigMissionDetailFn">
								<i class="fa fa-check"></i><span @click="goMissionTwoFn">辅料</span> <label>林志文 12-31 周一</label>
							</li>
						</ul>
						<ul class="processOne">
							<li @click="goBigMissionDetailFn">
								<i class="fa fa-check"></i><span @click="goMissionTwoFn">打样</span> <label>林志文 12-31 周一</label>
							</li>
							<li @click="goBigMissionDetailFn">
								<i class="fa fa-check"></i><span @click="goMissionTwoFn">生产</span> <label>林志文 12-31 周一</label>
							</li>
							<li @click="goBigMissionDetailFn">
								<i class="fa fa-check"></i><span @click="goMissionTwoFn">出运</span> <label>林志文 12-31 周一</label>
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