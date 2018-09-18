<template>
	<section>
		<div class="page page-root simple-pjax">
			<div class="page-inner pd40">
				<div class="oprateSquareLine clearfix">
					<router-link to="/order/list/taskTemplate" class="btn btn-primary">保存模板</router-link>
					<!--<a class="link-template-delete">删除模板</a>--> 
					<!--todo-->
				</div>
				<div class="project-header clearfix">
					<div class="project-hd-info">
						<span class="project-name">大货加工的流程模板</span>
						<span class="project-desc"></span>
					</div>
					<div class="project-links">
						<a href="#" class="link-admin-members" title="邀请新成员加入项目">
							<span class="main">1</span>
							<span>默认成员</span>
						</a>
						<router-link to="" class="link-admin-settings" title="项目设置">
							<span class="main">
			                <i class="fa fa-gear"></i>
			            </span>
							<span>设置</span>
						</router-link>
						<div class="todolist-toolbar">
							<i class="fa fa-th" :class="{'active':isList}" @click=" viewListFn"></i>
							<i class="fa fa-list" :class="{'active':!isList}" @click="viewGridFn"></i>
						</div>
					</div>
				</div>
				<div class="section section-todos">
					<h3 class="section-head">
						<a class="title">任务</a>
						<Dropdown  trigger="click" style="margin-left: 20px">
							<Button-group size="small" class="dropShadow">
								<Button type="ghost" @click="addMissionFn">添加任务</Button>
								<Button type="ghost"><Icon type="arrow-down-b"></Icon> </Button>
							</Button-group>							
						</Dropdown>											
					</h3>
					<ul class="todolist" v-if="!userAssigned&&!isList">
						<!--列状排列 任务划分-->
						<li class="todo clearfix" v-for="(item,index) in todoList" v-if="item.classify=='tips'">
							<div class="todo-actions actions">
								<div class="inr">
									<Tooltip placement="top" content="删除">
										<Icon type="trash-a" @click="deleteFn(index)"></Icon>
									</Tooltip>
									<Tooltip placement="top" content="编辑">
										<Icon type="edit" @click="editFn(index)"></Icon>
									</Tooltip>
									<Tooltip content="复制任务">
										<i class="fa fa-copy" ></i>
									</Tooltip>
									<Tooltip content="添加内部任务">
										<i class="fa fa-plus-square" @click="addInnerFn(index)"></i>
									</Tooltip>
									<Tooltip content="添加后续任务">
										<i class="fa fa-arrow-right bdl" @click="addNextFn(index)"></i>
									</Tooltip>
								</div>
							</div>
							<div class="todoCheckbox">
								<router-link to="/order/list/taskTemplate/bigTemplate/nodeEdit" v-html="item.content"></router-link>
								<Button v-if="item.stateOne" size="small" shape="circle">{{item.stateOne}}</Button>
								<Button v-if="item.stateTwo" size="small" shape="circle">{{item.stateTwo}}</Button>
								<Button v-if="item.ifAssigne==true" size="small" shape="circle">{{item.name}}</Button>
								<Button v-if="item.ifAssigne==false" type="ghost" size="small" shape="circle">未指派</Button>
							</div>

						</li>
					</ul>
					<TemplateProcess v-if="isList"></TemplateProcess>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	import TemplateProcess from './templateProcess'
	import BigList from './bigList'
	import { addDetailedFactorytradeTemplate } from '../../api/api'
	export default {
		name: 'bigTemplate',
		components: {
			TemplateProcess,
			BigList
		},
		data() {
			return {
				isList: false,
					todoList: [{
						single: false,
						content: '打样',
						ifAssigne: true,
						ifDesc: false,
						name: '张丹鸯',
						head: require('../../assets/path.jpg'),
						classify: "tips",
						stateOne: '无前置',
						stateTwo: '只给业务员发'
					}, {
						single: false,
						content: '<span>面料确定</span>',
						ifAssigne: true,
						ifDesc: false,
						name: '张丹鸯',
						head: require('../../assets/path.jpg'),
						classify: "tips",
						stateOne: '无前置',
						stateTwo: '只给业务员发'
					}, {
						single: false,
						content: '<span>辅料确定</span>',
						ifAssigne: false,
						ifDesc: false,
						classify: "tips",
						stateOne: '无前置',
						stateTwo: '只给业务员发'
					}, {
						single: false,
						content: '<span>生产</span>',
						ifAssigne: false,
						ifDesc: true,
						classify: "tips",
						stateTwo: '只给业务员发'
					},
					{
						single: false,
						content: '<span>出运</span>',
						ifAssigne: false,
						ifDesc: true,
						classify: "tips",
						stateTwo: '只给业务员发'
					}
				],
				userAssigned: false
			}
		},
		methods: {
			viewGridFn() {
				this.isList = false;
				//this.$router.push('/order/list/taskTemplate/bigTemplate');
				this.$router.push({
					path: '/order/waitDisBoxDetail/' + row.ID
				});
			},
			viewListFn() {
				this.isList = true;
				this.router.push('/order/list/taskTemplate/bigTemplate/templateProcess');
			},
			showAssignedFn() {
				this.userAssigned = true
			},
			showUnassignedFn() {
				this.userAssigned = false
			},
			addMissionFn() {
				let para = {
					TemplateID: '7cd7d080-e880-4431-9f6a-af6145bed04c',
					DetailedStageName: 2,
					NotificationRange: 1,
					FuzePerson: 111,
					FrontStageName: 121,
				}
				setTimeout(() => {
					addDetailedFactorytradeTemplate(para).then((res) => {
						console.log(res)
					});
				}, 250);
			}
		},
		mounted() {
			//		  this.addMissionFn(); 
		}
	}
</script>

<style lang="scss" scoped>
	.project-links {
		.todolist-toolbar {
			margin: 16px 10px 0 20px;
		}
	}
	.section-todos .todolist .todo {
		padding: 8px 5px 8px 14px;
		.actions {
			width: 140px;
			top: 5px;
			left: -140px;
		}
	}
</style>