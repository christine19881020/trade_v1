<template>
	<section>
		<div class="page page-root simple-pjax">
			<div class="page-inner pd40">
				<div class="memberTop">
					<Row>
						<Col :span="2">
						<Avatar size="large" :src="avatarSrc"></Avatar>
						</Col>
						<Col :span="5">
						<p><strong>{{name}}</strong><span class="relationship">{{relationship}}</span></p>
						<p><i class="iconfont icon-shouji"></i>{{cellphone}}</p>
						</Col>
						<Col :span="5">
						<p>&nbsp;</p>
						<p><i class="iconfont icon-dingding1"></i>{{ding}}</p>
						</Col>
						<Col :span="12">
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
								<h3 class="section-head">
									新任务
									 <Select class="byContactFilter" filterable transfer placeholder="按合同筛选-全部" v-model="byContactFilter" >
									 	<Option class="dottedLine" value="0">按合同筛选-全部</Option>
								        <Option v-for="item in byContactFilterList" :value="item.value" :key="item.value">{{ item.label }}</Option>
								    </Select>								    						   
								</h3>
								<div class="section-content">当前没有新任务</div>
							</div>
							<div class="section section-TabCardTask" v-for="item in memberTaskList">
								<h3 class="section-head">
									{{item.step}}    						   
								</h3>
								<div class="section-content">
									<ul>
										<li class="todo leafTodo clearfix" v-for="itemM in item.children">
											<div class="todoCheckbox">
												<Checkbox v-model="itemM.single"></Checkbox>
												<router-link to="" class="content">{{itemM.content}}</router-link>
												<Button size="small" shape="circle">{{itemM.name}}&nbsp;{{itemM.date}}</Button>
												<Button size="small" shape="circle" class="noBorder">{{itemM.content}}&nbsp;{{itemM.kNO}}&nbsp;{{itemM.pName}}&nbsp;{{itemM.yang}}</Button>
											</div>
										</li>
									</ul>

								</div>
							</div>
							<div class="section link-box">
								<router-link to="/team/finishedMemberTask">已完成任务</router-link>
								<router-link to="/team/memberAddMission">添加的任务</router-link>
							</div>
						</TabPane>
						<TabPane label="信息">
							<ul class="memberInfo">
								<li class="clearfix">
									<i class="iconfont icon-email"></i>
									<span>工作邮箱</span>
									<label>
										{{menberInfo.email}}
									</label>
								</li>
								<li class="clearfix">
									<i class="iconfont icon-wechat"></i>
									<span>微信</span>
									<label>
										{{menberInfo.wechat}}
									</label>
								</li>
								<li class="clearfix">
									<i class="iconfont icon-Id"></i>
									<span>身份证号</span>
									<label>
										{{menberInfo.ID}}
									</label>
								</li>
								<li class="clearfix">
									<i class="iconfont icon-telephone1"></i>
									<span>固定电话</span>
									<label>
										{{menberInfo.telephone}}
									</label>
								</li>
								<li class="clearfix">
									<i class="iconfont icon-fax"></i>
									<span>传真</span>
									<label>
										{{menberInfo.fax}}
									</label>
								</li>
							</ul>
						</TabPane>
						<span class="grey" slot="extra">上次登录：6小时前</span>
					</Tabs>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	import { byContactFilterList, memberTaskList, menberInfo } from '../../fakeData'
	export default {
		data() {
			return {
				avatarSrc: 'https://i.loli.net/2017/08/21/599a521472424.jpg',
				name: '林志文',
				relationship: '同事',
				cellphone: '18905748888',
				ding: '18605748888',
				tabs: 2,
				byContactFilterList: byContactFilterList,
				byContactFilter: '',
				memberTaskList: memberTaskList,
				menberInfo: menberInfo
			}
		},
		methods: {

		}
	}
</script>

<style>

</style>