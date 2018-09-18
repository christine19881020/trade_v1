<template>
	<section>
		<div class="page page-root simple-pjax">
			<div class="page-inner pd40" style="padding-bottom: 0;">
				<div class="section section-finished">
					<h3 class="section-head">
						<a class="title">已完成订单</a>
						<Dropdown  trigger="click" style="margin-left: 20px">
							<Button-group size="small" class="dropShadow">
								<Button type="ghost">按类型筛选-所有</Button>
								<Button type="ghost"><Icon type="arrow-down-b"></Icon> </Button>
							</Button-group>
							<Dropdown-menu slot="list">
								<Dropdown-item class="dottedLine"><i class="fa fa-check"></i>按类型筛选-所有</Dropdown-item>
								<Dropdown-item >大货</Dropdown-item>
								<Dropdown-item>开发样</Dropdown-item>
							</Dropdown-menu>
						</Dropdown>
					</h3>
					<ul>
						<li class="borderTop">
							<router-link to="/order/finishedContractDetail">
								<Row class="finishedTitle">
									<Col :span="5" class="time">12-31 周一</Col>
									<Col :span="10">B&M - HF1707001 - 林志文</Col>
									<Col :span="9" class="Tright">2017.7.30--2017.12.30</Col>
								</Row>
							</router-link>
							<ul class="finishedList">
								<li class="clearfix" @click="goDetailOrderFn">
									<img class="left" src="../../assets/u25.png" />
									<span class="left">款号 品名XXX</span>
									<span class="right">10-30 周五</span>
								</li>
								<li class="clearfix" @click="goDetailOrderFn">
									<img class="left" src="../../assets/u25.png" />
									<span class="left">款号 品名XXX</span>
									<span class="right">10-30 周五</span>
								</li>
								<li class="clearfix" @click="goDetailOrderFn">
									<img class="left" src="../../assets/u25.png" />
									<span class="left">款号 品名XXX</span>
									<span class="right">10-30 周五</span>
								</li>
								<li class="clearfix" @click="goDetailOrderFn">
									<img class="left" src="../../assets/u25.png" />
									<span class="left">款号 品名XXX</span>
									<span class="right">10-30 周五</span>
								</li>
							</ul>
						</li>
						<li class="borderTop">
							<router-link to="/order/finishedContractDetail">
								<Row class="finishedTitle">
									<Col :span="5" class="time">12-31 周一</Col>
									<Col :span="10">B&M - HF1707001 - 林志文</Col>
									<Col :span="9" class="Tright">2017.7.30--2017.12.30</Col>
								</Row>
							</router-link>
							<ul class="finishedList">
								<li class="clearfix" @click="goDetailOrderFn">
									<img class="left" src="../../assets/u25.png" />
									<span class="left">款号 品名XXX</span>
									<span class="right">10-30 周五</span>
								</li>
								<li class="clearfix" @click="goDetailOrderFn">
									<img class="left" src="../../assets/u25.png" />
									<span class="left">款号 品名XXX</span>
									<span class="right">10-30 周五</span>
								</li>
								<li class="clearfix" @click="goDetailOrderFn">
									<img class="left" src="../../assets/u25.png" />
									<span class="left">款号 品名XXX</span>
										<span class="right">10-30 周五</span>
								</li>
								<li class="clearfix" @click="goDetailOrderFn">
									<img class="left" src="../../assets/u25.png" />
									<span class="left">款号 品名XXX</span>
									<span class="right">10-30 周五</span>
								</li>
							</ul>
						</li>
					</ul>
				</div>
				<div class="footer">
					<router-link to="/order/list/taskTemplate" class="footLink">管理任务模板</router-link>
					<router-link to="" class="footLink">管理客户</router-link>
					<router-link to="" class="footLink">管理厂家</router-link>
				</div>
			</div>

		</div>
	</section>
</template>

<script>
	export default {
		data() {
			return {
				finishedList: [{
					time: '12-31 周一',
					company: 'B&M ',
					contract: 'HF1707001',
					salesman: '林志文'
				}]
			}
		},
		methods: {
			goDetailOrderFn() {
				this.$router.push('/order/finishedOrderDetail')
			}
		}
	}
</script>

<style scoped>
	.fa-check {
		color: #333;
		margin-right: 2px;
	}
</style>