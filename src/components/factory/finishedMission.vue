<template>
	<section>
		<div class="page page-root simple-pjax page-behind">
			<router-link class="link-page-behind" to="/factory/list">厂家&供应商</router-link>
		</div>
		<div class="page page-1 simple-pjax page-behind">
			<router-link class="link-page-behind" to="/factory/factoryDetail/2">杭州丝绸</router-link>
		</div>
		<div class="page page-2 simple-pjax">
			<div class="page-inner pd40">
				<div class="section">
					<h3 class="section-head">蒋大为 已完成的任务</h3>
					<ul class="missionLists">
						<li class="oneMission">
							<div class="time">
								<p>2018-1-31</p>
								<p>周五</p>
							</div>
							<div class="box">
								<div class="title" @click="goOrderDetailFn">B&M - HF0001 HL0234 品名XXX : 产前样</div>
								<ul class="processOne">
									<li>
										<i class="fa fa-check"></i><span @click="goMissionTwoFn">产前样加工</span>
									</li>
									<li>
										<i class="fa fa-check"></i><span>大货样加工</span>
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
								<div class="title" @click="goOrderDetailFn">B&M - HF0001 HL0234 品名XXX : 头样</div>
								<ul class="processOne">
									<li @click="goBigMissionDetailFn">
										<i class="fa fa-check"></i><span @click="goMissionTwoFn">头样加工</span>
									</li>
									<li @click="goBigMissionDetailFn">
										<i class="fa fa-check"></i><span @click="goMissionTwoFn">二次样加工</span>
									</li>
								</ul>
							</div>
						</li>
					</ul>
				</div>
			</div>
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
			goBigMissionDetailFn() {
				this.$router.push('/order/bigMissionDetail')
			},
			goMissionTwoFn() {
				this.$router.push('/order/smallMissionDetail')
			}
		}
	}
</script>

<style>

</style>