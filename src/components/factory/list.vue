<template>
	<div class="page">
		<div class="page-inner pd40" style="padding-bottom: 0;">
			<div class="teamSection clientSection">
				<div class="oprateSquare clearfix">
					<span class="left">厂家&供应商</span>
					<Button type="text" class="right" @click="$router.push('/factory/newFactory')">新加厂家</Button>
				</div>
				<div class="messages" @click="$router.push('/factory/factoryDetail/1')">
					<Row class="message clearfix" :gutter="48" v-for="item in factoryList" :key="item.id">
						<Col :span="4" class="who">
						<a href="#" class="man" :title="item.man">
							{{item.factoryName}}
						</a>
						<Button class="team" size="small" shape="circle">{{item.where}}</Button>
						</Col>
						<Col :span="10" class="vMiddle">
						<i class="iconfont icon-product"></i>
						<span>{{item.product}}</span>
						</Col>
						<Col :span="10" class="vMiddle">
						<i class="iconfont icon-finish"></i>
						<span>{{item.finishCondition}}</span>
						</Col>
					</Row>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: '',
		components: {},
		data() {
			return {
				factoryList: [{
					id: '1',
					factoryName: '厦门京华',
					position: '管理员',
					where: '福建厦门',
					product: '纽扣，拉链',
					finishCondition: '最近曾超期1天完成'
				}, {
					id: '2',
					factoryName: '杭州丝绸',
					position: '业务员',
					where: '浙江杭州',
					product: '锻织、丝织',
					finishCondition: '最近曾提前1天完成'
				}]
			}
		},
		methods: {

		},
		mounted() {

		}
	}
</script>

<style>

</style>