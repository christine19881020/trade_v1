<template>
	<section>
		<div class="page page-root simple-pjax page-behind" style="">
			<router-link class="link-page-behind" to="/order/finishedOrderList">B&M - HF1707001</router-link>
		</div>
		<div class="page page-1 simple-pjax  page-behind">
			<router-link class="link-page-behind" to="/order/finishedOrderDetail">HL034 蓝色 S码</router-link>
		</div>
		<div class="page page-2 simple-pjax  page-behind">
			<router-link class="link-page-behind" to="/order/bigMissionDetail">面料已完成的任务</router-link>
		</div>
		<div class="page page-3 simple-pjax">
			<div class="page-inner pd40">
				<div class="subBox">
					<ul class="subTask">
						<li class="todo">
							<Checkbox v-model="single"></Checkbox>
							<!--<input type="checkbox" class="Jcheckbox">-->
							<span>面料供应商签订</span>
							<Button size="small" type="text">(林志文 12-31 , 周一)</Button>
						</li>
					</ul>
					<ul class="stepsUL">
						<li>
							<Icon type="ios-clock-outline"></Icon><span>2017.8.12 09:00 林志文 给 林志文 指派了任务</span>
						</li>
						<li>
							<Icon type="ios-timer-outline"></Icon>2017.8.12 09:00 林志文 将任务完成时间调整到了8月15日</span>
						</li>
						<li class="green">
							<Icon type="ios-checkmark-outline"></Icon>2018.1.31 17:00 林志文 按时完成了任务</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	import orderDetailTodos from './orderDetailTodos'
	export default {
		name: 'bigTask',
		components: {

		},
		data() {
			return {
				single: true
			}
		},
		methods: {

		},
		mounted() {

		}
	}
</script>

<style lang="scss">

</style>