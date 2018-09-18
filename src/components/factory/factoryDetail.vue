<template>
	<section>
		<div class="page page-root simple-pjax page-behind">
			<router-link class="link-page-behind" to="/factory/list">厂家&供应商</router-link>
		</div>
		<div class="page page-1 simple-pjax">
			<div class="page-inner pd40">
				<div class="memberTop">
					<Row>
						<Col :span="4" class="who">
						<a href="#" class="man">
							{{factoryName}}
						</a>
						<br>
						<Button class="team" size="small" shape="circle">{{where}}</Button>
						</Col>

						<Col :span="20">
						<div class="project-links">
							<a href="#" class="link-admin-settings" title="项目设置">
								<span class="main">
			                      <i class="fa fa-gear"></i>
			                 </span>
								<span>设置</span>
							</a>
						</div>
						</Col>
					</Row>
					</div>
					<Tabs type="card" class="TabsCard" :value="tabIndex">
						<TabPane label="任务" name="1">
							<div class="section section-TabCardTask">
								<h3 class="section-head">
									新任务
									 <Select class="byContactFilter" filterable transfer placeholder="按合同筛选-全部" v-model="byContactFilter" >
									 	<Option class="dottedLine" value="0">按合同筛选-全部</Option>
								        <Option v-for="item in byContactFilterList" :value="item.value" :key="item.value">{{ item.label }}</Option>
								    </Select>								    						   
								</h3>
								<div class="section-content">当前没有新任务</div>
							</div>
							<div class="section section-TabCardTask" v-for="item in factoryDetailList">
								<h3 class="section-head">
									{{item.step}}    						   
								</h3>
								<div class="section-content">
									<ul>
										<li class="todo leafTodo clearfix" v-for="itemM in item.children">
											<div class="todoCheckbox">
												<Checkbox v-model="itemM.single"></Checkbox>
												<router-link to="/order/contractDetail/1/contractBigTask" class="content">{{itemM.content}}</router-link>
												<Button size="small" shape="circle">{{itemM.name}}&nbsp;{{itemM.date}}</Button>
												<Button size="small" shape="circle" class="noBorder">{{itemM.contract}}&nbsp;{{itemM.kNO}}&nbsp;{{itemM.pName}}&nbsp;{{itemM.yang}}</Button>
											</div>
										</li>
									</ul>

								</div>
							</div>
							<div class="section link-box">
								<router-link to="/factory/finishedMission">已完成任务</router-link>
							</div>
						</TabPane>
						<TabPane label="信息" name="2">
							<ul class="memberInfo">
								<li class="clearfix">
									<i class="iconfont icon-companymanagement"></i>
									<span>公司全称</span>
									<label>
										{{factoryInfo.companyFullName}}
									</label>
								</li>
								<li class="clearfix">
									<i class="iconfont icon-abcsousuocixiangqing"></i>
									<span>速记码</span>
									<label>
										{{factoryInfo.quickMa}}
									</label>
								</li>
							</ul>
						</TabPane>
						<TabPane label="员工" name="3">
							<div class="messages" @click="$router.push('/team/memberTaskDetail')">
								<Row class="message clearfix" v-for="item in colleagues" :key="item.id">
									<Col :span="2" class="headImgM">
									<img alt="林志文" class="avatar" :src="item.head" />
									</Col>
									<Col :span="4" class="who">
									<a href="#" class="man" :title="item.man">
										{{item.man}}
									</a>

									<Button class="team" size="small" shape="circle">{{item.team}}</Button>
									</Col>
									<Col :span="5" class="vMiddle">
									<i class="iconfont icon-shouji"></i>
									<span>{{item.phone}}</span>
									</Col>
									<Col :span="5" class="vMiddle">
									<i class="iconfont icon-dingding1"></i>
									<span>{{item.ding}}</span>
									</Col>
									<Col :span="5" class="vMiddle">
									<i class="iconfont icon-email"></i>
									<span>{{item.email}}</span>
									</Col>
								</Row>
							</div>
						</TabPane>
						<span class="grey" slot="extra">上次完成：2017.8.1</span>
					</Tabs>
				
			</div>
		</div>
	</section>
</template>

<script>
	import { byContactFilterList, factoryDetailList, factoryInfo, colleagues } from '../../fakeData'
	export default {
		data() {
			return {
				tabIndex:'',
				factoryName: '杭州丝绸',
				where: '浙江杭州',
				cellphone: '18905748888',
				byContactFilterList: byContactFilterList,
				byContactFilter: '',
				factoryDetailList: factoryDetailList,
				factoryInfo: factoryInfo,
				colleagues: colleagues
			}
		},
		methods: {
         
		},
		mounted() {
			this.tabIndex =this.$route.params.tabIndex;
		}
	}
</script>

<style scoped>
	.avatar {
		margin: 15px 0 0 20px;
	}
	
	.who {
		margin-top: 12px;
	}
</style>