<template>
	<section>
		<div class="page page-root simple-pjax page-behind" style="">
			<router-link class="link-page-behind" to="/order/orderDetail/1">B&M - HF1707001</router-link>
		</div>
		<div class="page page-1 simple-pjax  page-behind">
			<router-link class="link-page-behind" to="/order/orderDetail/1">HL034 品名XXX</router-link>
		</div>

		<div class="page page-2 simple-pjax">
			<div class="page-inner pd40">
				<h3 class="grey">头样</h3>
				<div class="detail-actions">
					<div class="item detail-star-action">
						<a href="#" class="detail-action detail-action-star stared">复制</a>
					</div>
					<div class="item">
						<a href="#" class="detail-action detail-action-del">删除</a>
					</div>
				</div>
				<div class="subBox">
					<h3 class="section-head">
						<a class="title">内部任务</a>
						<Dropdown  trigger="click" style="margin-left: 20px">
							<Button-group size="small" class="dropShadow">
								<Button type="ghost">添加任务</Button>
								<Button type="ghost"><Icon type="arrow-down-b"></Icon> </Button>
							</Button-group>
							<!--<Dropdown-menu slot="list">
								<Dropdown-item>添加任务</Dropdown-item>	
							</Dropdown-menu>-->
						</Dropdown>
					</h3>
					<ul class="subTask">
						<li class="todo">

							<!--<input type="checkbox" class="Jcheckbox">-->
							<Checkbox v-model="single1"></Checkbox>
							<router-link to="/order/orderDetail/1/smallTask">头样加工</router-link>
							<Button size="small" shape="circle">王某某等</Button>
							<Button size="small" shape="circle">无前量</Button>
							<Button size="small" shape="circle">不发预警通知</Button>

						</li>
						<li class="todo">
							<Checkbox v-model="single2"></Checkbox>
							<span>头样寄送</span>
							<Button size="small" shape="circle">无负责人</Button>
							<Button size="small" shape="circle">头样加工</Button>
							<Button size="small" shape="circle">不发预警通知</Button>
						</li>
						<li class="todo">
							<Checkbox v-model="single3"></Checkbox>
							<span>头样确认</span>
							<Button size="small" shape="circle">无负责人</Button>
							<Button size="small" shape="circle">头样寄送</Button>
							<Button size="small" shape="circle">不发预警通知</Button>
						</li>
						<li class="todo">
							<Checkbox v-model="single4"></Checkbox>
							<span>二次样加工</span>
							<Button size="small" shape="circle">无负责人</Button>
							<Button size="small" shape="circle">头样确认</Button>
							<Button size="small" shape="circle">不发预警通知</Button>
						</li>
						<li class="todo">
							<Checkbox v-model="single5"></Checkbox>
							<span>二次样寄送</span>
							<Button size="small" shape="circle">无负责人</Button>
							<Button size="small" shape="circle">二次样加工</Button>
							<Button size="small" shape="circle">不发预警通知</Button>
						</li>
						<li class="todo">
							<Checkbox v-model="single6"></Checkbox>
							<span>二次样确认</span>
							<Button size="small" shape="circle">无负责人</Button>
							<Button size="small" shape="circle">二次样寄送</Button>
							<Button size="small" shape="circle">不发预警通知</Button>
						</li>

					</ul>
					<ul class="stepsUL">
						<li>
							<Icon type="ios-clock-outline"></Icon><span>2017.8.12 09:00 林志文 将任务完成时间调整到了8月15日</span>
						</li>
						<li>
							<Icon type="ios-timer-outline"></Icon>2017.8.12 09:00 林志文 给 林志文 指派了任务</span>
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
		name: 'smallTask',
		components: {

		},
		data() {
			return {
				single1: false,
				single2: false,
				single3: false,
				single4: false,
				single5: false,
				single6: false,
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