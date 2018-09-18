<template>
	<section>
		<div class="page page-root simple-pjax page-behind" style="">
			<router-link class="link-page-behind" to="/order/orderDetail/1">B&M - HF1707001 </router-link>
		</div>
		<div class="page page-1 simple-pjax page-behind">
			<router-link class="link-page-behind" to="/order/orderDetail/1">HL0234 品名XXX </router-link>
		</div>
		<div class="page page-2 simple-pjax">
			<div class="page-inner pd40">
				<div class="section">
					<h3 class="section-head">面料 已完成的内部任务</h3>
					<ul class="missionLists">
						<li class="oneMission">
							<div class="time">
								<p>2018-1-31</p>
								<p>周五</p>
							</div>
							<div class="box">
								<ul class="processOne">
									<li @click="goSmallMissionDetailFn">
										<i class="fa fa-check"></i><span>面料供应商签订</span> <label>林志文</label>
									</li>
									<li @click="goSmallMissionDetailFn">
										<i class="fa fa-check"></i><span>面料样品加工</span> <label>林志文</label>
									</li>
								</ul>
								<ul class="processOne">
									<li @click="goSmallMissionDetailFn">
										<i class="fa fa-check"></i><span>面料寄样</span> <label>林志文</label>
									</li>
									<li @click="goSmallMissionDetailFn">
										<i class="fa fa-check"></i><span>面料样品确认</span> <label>林志文</label>
									</li>
									<li @click="goSmallMissionDetailFn">
										<i class="fa fa-check"></i><span>面料采购到位</span> <label>林志文</label>
									</li>
								</ul>
							</div>
						</li>

					</ul>
				</div>
			</div>

		</div>
		</div>
	</section>
</template>

<script>
	import finishedMissionTwo from './finishedMissionTwo'
	export default {
		name: 'bigMissionDetail',
		components: {
			finishedMissionTwo
		},
		data() {
			return {

			}
		},
		methods: {
			goSmallMissionDetailFn() {
				this.$router.push('/order/smallMissionDetail')
			}
		},
		mounted() {

		}
	}
</script>

<style>

</style>