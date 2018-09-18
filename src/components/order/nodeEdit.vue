<template>
	<section>
		<div class="page page-root simple-pjax page-behind" style="">
			<router-link class="link-page-behind" to="/order/list/taskTemplate/bigTemplate">大货任务模板</router-link>
		</div>
		<div class="page page-1 simple-pjax">
			<div class="page-inner pd40">
				<h3 class="grey">生产</h3>
				<div class="section section-warning">
					<h3 class="section-head">
						<a class="title">预计工期</a>						
					</h3>
					<div class="warningBox">
						<ul>
							<li>
								预计需要占用合同周期<Input v-model="wDate" size="small"></Input>天
							</li>
							<li>
								或者，预计占用合同周期天数的<Input v-model="wDate" size="small"></Input>%
							</li>
						</ul>
					</div>
				</div>
				<!--<div class="section section-todos">
					<h3 class="section-head">
						<a class="title">前置任务</a>
						<Dropdown  trigger="click" style="margin-left: 20px">
							<Button-group size="small" class="dropShadow">
								<Button type="ghost">添加前置</Button>
								<Button type="ghost"><Icon type="arrow-down-b"></Icon> </Button>
							</Button-group>
							<Dropdown-menu slot="list" class="dropMenu">
								<Dropdown-item><router-link to="/order/list/taskTemplate/bigTemplate/preCondition"><i class="fa fa-plus-square-o"></i>添加前置</router-link></Dropdown-item>				
							</Dropdown-menu>
						</Dropdown>
						
					</h3>
					<ul class="todolist" v-if="!userAssigned">-->
						<!--列状排列 任务划分-->
						<!--<li class="todo clearfix" v-for="item in preTodoList" v-if="item.classify=='tips'">
							<div class="todo-actions actions">
								<div class="inr">
									<Tooltip placement="top" content="删除">
										<Icon type="trash-a"></Icon>
									</Tooltip>
									<Tooltip placement="top" content="编辑">
										<Icon type="edit"></Icon>
									</Tooltip>
									<Tooltip content="添加后续任务">
										<i class="fa fa-arrow-right bdl"></i>
									</Tooltip>
								</div>
							</div>
							<div class="todoCheckbox">
								<router-link to="/order/list/taskTemplate/bigTemplate/nodeEdit" v-html="item.content"></router-link>
								<Button v-if="item.stateOne" size="small" shape="circle">{{item.stateOne}}</Button>
								<Button v-if="item.stateTwo" size="small" shape="circle">{{item.stateTwo}}</Button>
								<Button v-if="item.ifAssigne==false" type="ghost" size="small" shape="circle">未指派</Button>
							</div>
						</li>

					</ul>
				</div>-->

				<div class="section section-todos">
					<h3 class="section-head">
						<a class="title">任务</a>
						<Dropdown  trigger="click" style="margin-left: 20px">
							<Button-group size="small" class="dropShadow">
								<Button type="ghost">添加任务</Button>
								<Button type="ghost"><Icon type="arrow-down-b"></Icon> </Button>
							</Button-group>
							
						</Dropdown>
						
					</h3>
					<ul class="todolist">
						<!--列状排列 任务划分-->
						<li class="todo clearfix" v-for="item in todoList" v-if="item.classify=='tips'">
							<!--<Checkbox v-model="item.single">
								<span v-html="item.content"></span>
								<i class="fa fa-bars" v-if="item.ifDesc==true"></i>
								<Button v-if="item.stateOne" size="small" shape="circle">{{item.stateOne}}</Button>
								<Button v-if="item.stateTwo" size="small" shape="circle">{{item.stateTwo}}</Button>
								<Button size="small" shape="circle">
									<span v-if="item.names.length>=1">{{item.names[0].name}}</span><span v-if="item.names.length>1">等</span>
								    <span v-if="item.names.length==0">无负责人</span>
								</Button>
							</Checkbox>-->
							<div class="todo-actions actions">
								<div class="inr">
									<Tooltip placement="top" content="删除">
										<Icon type="trash-a"></Icon>
									</Tooltip>
									<Tooltip placement="top" content="编辑">
										<Icon type="edit"></Icon>
									</Tooltip>
									<Tooltip content="添加后续任务">
										<i class="fa fa-arrow-right bdl"></i>
									</Tooltip>
								</div>
							</div>
							<div class="todoCheckbox">
								<Checkbox v-model="item.single"></Checkbox>
								<router-link to="/order/list/taskTemplate/bigTemplate/nodeEditSmall" v-html="item.content"></router-link>
								<Button v-if="item.stateOne" size="small" shape="circle">{{item.stateOne}}</Button>
								<Button v-if="item.stateTwo" size="small" shape="circle">{{item.stateTwo}}</Button>
								<Button size="small" shape="circle">
									<span v-if="item.names.length>=1">{{item.names[0].name}}</span><span v-if="item.names.length>1">等</span>
								    <span v-if="item.names.length==0">无负责人</span>
								</Button>
							</div>
						</li>
					</ul>

				</div>

				<div class="section section-warning">
					<h3 class="section-head">
						<a class="title">预警</a>												
					</h3>
					<div class="warningBox">
						<ul>
							<li>
								<Select v-model="sendWho" style="width:200px">
									<Option v-for="item in whoList" :value="item.value" :key="item.value">{{ item.label }}</Option>
								</Select>
							</li>
							<li>
								距计划完成日期剩余
								<Input v-model="wDate" size="small"></Input>天开始预警，期间发送
								<Select v-model="sendTimes" style="width:80px;">
									<Option v-for="item in sendTimesList" :value="item.value" :key="item.value">{{ item.label }}</Option>
								</Select>
								预警通知，已超期则每天提醒
							</li>
							
							<li>
								<Checkbox v-model="single1">
									合同签订后
									<Input v-model="wDate1" size="small" ></Input>天若未完成，则每天预警1次
								</Checkbox>
							</li>
							<li>
								<Checkbox v-model="single2">
									距离交货期
									<Input v-model="wDate1" size="small"></Input>天若未完成，则每天预警1次
								</Checkbox>
							</li>
						</ul>
					</div>
				</div>

				<div class="section section-warning">
					<h3 class="section-head">
						<a class="title">任务种类</a>												
					</h3>
					<div class="warningBox">
						<ul>
							<li>
								<Select v-model="mission" style="width:200px" placeholder="请选择任务种类（必选）">
									<Option v-for="item in missionList" :value="item.value" :key="item.value">{{ item.label }}</Option>
								</Select>
							</li>
							<li>
								<Checkbox v-model="missionCheck">
									此为关键节点任务，在进度中标示为节点
						
								</Checkbox>
							</li>
							<li>
								<Checkbox v-model="missionCheck">
									此任务涉及通关出运事宜
								</Checkbox>
							</li>
							<li>
								<Checkbox v-model="missionCheck">
									此任务的完成日为关键交接日，在进度中着重突出日期
								</Checkbox>
							</li>
							
						</ul>
					</div>
				</div>
				<div class="section section-warning">
					<h3 class="section-head">
						<a class="title">负责人员</a>												
					</h3>
					<div class="warningBox resbonBOX">
						<ul>
							<li>
								<el-select v-model="value10" multiple filterable allow-create placeholder="预选取任务负责人" style="width:500px;" @change="selectFN">
									<el-option v-for="item in options5" :key="item.value" :label="item.label" :value="item.value">
									</el-option>
								</el-select>
							</li>
							<li class="choosedShow">
								<div v-for="(item,index) in value10" class="choosedOne">
									<label class="ivu-checkbox-wrapper ivu-checkbox-wrapper-checked"><span class="ivu-checkbox ivu-checkbox-checked"><span class="ivu-checkbox-inner"></span> <input type="checkbox" class="ivu-checkbox-input"></span> </label>
									<span>{{item}}</span>
								</div>
							</li>
						</ul>
					</div>
				</div>

				<div class="section section-warning">
					<h3 class="section-head">
						<a class="title">高级跟踪</a>												
					</h3>
					<div class="warningBox resbonBOX">
						<ul>
							<li>
								<Checkbox v-model="follow">
								预警或完成时，给以下特别人员发送通知
								</Checkbox>
							</li>
							<li>
								<el-select v-model="value12" multiple filterable allow-create placeholder="预选特别人员" style="width:500px;" @change="selectFN">
									<el-option v-for="item in options5" :key="item.value" :label="item.label" :value="item.value">
									</el-option>
								</el-select>
							</li>
							<li class="choosedShow">
								<div v-for="(item,index) in value12" class="choosedOne">
									<label class="ivu-checkbox-wrapper ivu-checkbox-wrapper-checked"><span class="ivu-checkbox ivu-checkbox-checked"><span class="ivu-checkbox-inner"></span> <input type="checkbox" class="ivu-checkbox-input"></span> </label>
									<span>{{item}}</span>
								</div>
							</li>
						</ul>
					</div>
				</div>

				<div class="section-footer">
					<router-link to="" class="btn btn-primary">保存设置</router-link>
					<Button type="text">取消</Button>
				</div>
			</div>
		</div>

	</section>
</template>

<script>
	export default {
		name: 'nodeEdit',
		data() {
			return {
				follow: false,
				missionCheck: false,
				sendTimes: '3',
				sendWho: '4',
				single1: false,
				single2: false,
				single3: false,
				wDate: '',
				wDate1: '',
				mission: '',
				choosed: [],
				sendTimesList: [{
						value: '3',
						label: '3次'
					},
					{
						value: '2',
						label: '2次'
					}

				],
				whoList: [{
						value: '1',
						label: '只给业务员发'
					},
					{
						value: '2',
						label: '只给负责人发'
					}, {
						value: '3',
						label: '给相关人都发'
					},
					{
						value: '4',
						label: '不发预警通知'
					}
				],
				missionList: [{
						value: '1',
						label: '供应厂家挑选类'
					},
					{
						value: '2',
						label: '内销合同签订类'
					}, {
						value: '3',
						label: '寄样给客户类'
					},
					{
						value: '4',
						label: '客户确认类'
					},
					{
						value: '5',
						label: '加工开始类'
					},
					{
						value: '6',
						label: '加工结束类'
					},
					{
						value: '7',
						label: '内部验货类'
					},
					{
						value: '8',
						label: '第三方验货类'
					},
					{
						value: '9',
						label: 'QC检查结束类'
					},
					{
						value: '10',
						label: '港前出运类'
					},
					{
						value: '11',
						label: '订舱通关类'
					}
				],
				model1: '',

				isList: false,
				preTodoList: [{
					single: false,
					content: '<span>确定辅料商</span>',

					ifDesc: false,
					name: '张丹鸯',
					head: require('../../assets/path.jpg'),
					classify: "tips",
					stateOne: '结束后间隔5天'
				}, {
					single: false,
					content: '<span>确定面料厂</span>',

					ifDesc: false,
					name: '张丹鸯',
					head: require('../../assets/path.jpg'),
					classify: "tips",
					stateOne: '无前置条件'
				}],
				todoList: [{
						single: false,
						content: '<span>头样加工</span>',

						ifDesc: false,
						names: [],
						head: require('../../assets/path.jpg'),
						classify: "tips",
						stateOne: '无前置',
						stateTwo: '不发预警通知'
					}, {
						single: false,
						content: '<span>头样寄送</span>',

						ifDesc: false,
						names: [{
							name: '张丹鸯'
						}],
						head: require('../../assets/path.jpg'),
						classify: "tips",
						stateOne: '头样加工',
						stateTwo: '不发预警通知'
					}, {
						single: false,
						content: '<span>头样确认</span>',

						ifDesc: false,
						names: [{
								name: '张丹鸯'
							},
							{
								name: '周华斌'
							}
						],
						head: require('../../assets/path.jpg'),
						classify: "tips",
						stateOne: '头样寄送',
						stateTwo: '不发预警通知'
					}, {
						single: false,
						content: '<span>二次样加工</span>',

						ifDesc: false,
						names: [],
						classify: "tips",
						stateOne: '头样确认',
						stateTwo: '不发预警通知'
					}, {
						single: false,
						content: '<span>二次样寄送</span>',

						ifDesc: false,
						names: [],
						classify: "tips",
						stateOne: '二次样加工',
						stateTwo: '不发预警通知'
					},
					{
						single: false,
						content: '<span>二次样确认</span>',

						ifDesc: false,
						names: [],
						classify: "tips",
						stateOne: '二次样寄送',
						stateTwo: '只给业务员发'
					}
				],
				userAssigned: false,
				options5: [{
					value: '张某某',
					label: '张某某'
				}, {
					value: '蔡某某',
					label: '蔡某某'
				}, {
					value: '沈某某',
					label: '沈某某'
				}],
				value10: [],
				options6: [{
					value: '张某某',
					label: '张某某'
				}, {
					value: '蔡某某',
					label: '蔡某某'
				}, {
					value: '沈某某',
					label: '沈某某'
				}],
				value12: []
			}
		},
		methods: {
			viewGridFn() {
				this.isList = false;
			},
			viewListFn() {
				this.isList = true;
			},
			showAssignedFn() {
				this.userAssigned = true
			},
			showUnassignedFn() {
				this.userAssigned = false
			},
			selectFN() {

			}
		},
		mounted() {

		}
	}
</script>

<style lang="scss" scoped>
	.section {
		margin-top: 40px;
	}
	
	.section-todos .todolist {
		margin-top: 20px;
		.todo {
			margin: 10px 0;
		}
	}
</style>