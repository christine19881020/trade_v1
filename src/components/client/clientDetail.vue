<template>
	<section>
		<div class="page page-root simple-pjax page-behind">
			<router-link class="link-page-behind" to="/client/list">客户</router-link>
		</div>
		<div class="page page-1 simple-pjax">
			<div class="page-inner pd40">
				<div class="memberTop">
					<Row>
						<Col :span="3" class="flag">
						<!--<svg class="icon" aria-hidden="true">
							<use xlink:href="#icon-meiguo"></use>
						</svg>-->
						<i class="flagIcon">🇺🇸</i>
						<p class="contryName">
							{{countryName}}
						</p>
						</Col>
						<Col :span="7" class="memberP">
						<p><strong>{{name}}</strong></p>
						<p><i class="iconfont icon-email"></i>{{email}}</p>
						</Col>
						<Col :span="7" class="memberP">
						<p>&nbsp;</p>
						<p><i class="iconfont icon-apartment"></i>{{company}}</p>
						</Col>
						<Col :span="7">
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
					<Tabs type="card" class="TabsCard">
						<TabPane label="任务">
							<div class="section section-TabCardTask">
								<h3 class="section-head clearfix">
									<svg class="icon" aria-hidden="true">
										<use xlink:href="#icon-NEW"></use>
									</svg>
									<span class="text">新订单</span>	   
								</h3>
								<div class="section-content">当前没有新订单</div>
							</div>
							<div class="section section-TabCardTask" v-for="item in clientDetailList">
								<h3 class="section-head clearfix">
									<svg class="icon" aria-hidden="true">
										<use xlink:href="#icon-jinhangzhong4"></use>
									</svg>
									<span class="text">{{item.step}}</span>	    						   
								</h3>
								<div class="section-content">
									<ul>
										<li class="todo leafTodo clearfix" v-for="itemM in item.children">
											<div class="todoCheckbox">
												<!--<Checkbox v-model="itemM.single"></Checkbox>-->
												<router-link to="" class="content">{{itemM.content}}</router-link>
												<Button size="small" shape="circle">{{itemM.name}}&nbsp;{{itemM.date}}-{{itemM.ENDdate}}</Button>
											</div>
										</li>
									</ul>

								</div>
							</div>
							<div class="section link-box">
								<router-link to="/order/finishedOrderList">已完成订单</router-link>
							</div>
						</TabPane>
						<TabPane label="信息">
							<ul class="memberInfo">
								<li class="clearfix">
									<i class="iconfont icon-email"></i>
									<span>工作邮箱</span>
									<label>
										{{clientInfo.email}}
									</label>
								</li>
								<li class="clearfix">
									<i class="iconfont icon-telephone1"></i>
									<span>固定电话</span>
									<label>
										{{clientInfo.telephone}}
									</label>
								</li>
								<li class="clearfix">
									<i class="iconfont icon-fax"></i>
									<span>传真号码</span>
									<label>
										{{clientInfo.fax}}
									</label>
								</li>
								<li class="clearfix">
									<i class="iconfont icon-companymanagement"></i>
									<span>公司全称</span>
									<label>
										{{clientInfo.companyFullName}}
									</label>
								</li>
								<li class="clearfix">
									<i class="iconfont icon-abcsousuocixiangqing"></i>
									<span>速记码</span>
									<label>
										{{clientInfo.fax}}
									</label>
								</li>
							</ul>
						</TabPane>
						<span class="grey" slot="extra">上次订单：2017.8.1</span>
					</Tabs>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	import { clientDetailList, clientInfo } from '../../fakeData'
	export default {
		data() {
			return {
				countryName: '美国',
				name: 'Steven',
				relationship: '同事',
				email: 'steven@bandm.com',
				company: 'B&M',
				tabs: 2,
				clientDetailList: clientDetailList,
				clientInfo: clientInfo
			}
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>

</style>