<template>
	<div class="page">
		<div class="page-inner pd40" style="padding-bottom: 0;">
			<div class="teamSection clientSection">
				<div class="oprateSquare clearfix">
					<span class="left">客户</span>
					<Button type="text" class="right" @click="$router.push('/client/newClient')">新加客户</Button>
				</div>
				<div class="messages" @click="$router.push('/client/clientDetail')">
					<Row class="message clearfix" v-for="item in clients" :key="item.id">
						<Col :span="2" class="flag">
							<svg class="icon" aria-hidden="true">
								<use xlink:href="#icon-meiguo" v-if="item.contry=='美国'"></use>
								<use xlink:href="#icon-faguo" v-if="item.contry=='法国'"></use>
								<use xlink:href="#icon-deguo" v-if="item.contry=='德国'"></use>
							</svg>
							<p class="contryName">
							  {{item.contry}}
							</p>
						</Col>
						<Col :span="4" class="who">
						<a href="#" class="man" :title="item.man">
							{{item.man}}
						</a>
						<Button class="team" size="small" shape="circle">{{item.team}}</Button>
						</Col>
						<Col :span="7" class="vMiddle">
						<i class="iconfont icon-email"></i>
						<span>{{item.email}}</span>
						</Col>
						<Col :span="7" class="vMiddle">
						<i class="iconfont icon-shouji"></i>
						<span>{{item.phone}}</span>
						</Col>						
						<Col :span="3" class="vMiddle"> {{item.date}}
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
				clients: [{
					id:'1',
					contry: '美国',
					man: 'Steven',
					position: '管理员',
					team: 'B&M',
					phone: '18905748888',
					ding: '18905748888',
					email: 'linzw@dingtalk.com',
					belong: '本公司',
					date:'2017-08-02'
				}, {id:'2',
					contry: '法国',
					man: 'Jhon',
					position: '业务员',
					team: 'B&M',
					phone: '18905748888',
					ding: '18905748888',
					email: 'linzw@dingtalk.com',
					belong: '本公司',
					date:'2017-08-02'
				}, {id:'3',
					contry: '德国',
					man: 'Buger',
					position: '',
					team: 'B&M',
					phone: '18905748888',
					ding: '18905748888',
					email: 'linzw@dingtalk.com',
					belong: '杭州丝绸',
					date:'2017-08-02'
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