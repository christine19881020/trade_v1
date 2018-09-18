<template>
	<div class="section section-todos">
		<h3 class="section-head">
			<a class="title">任务</a>		
			<div class="todolist-toolbar">
			<i class="fa fa-th" :class="{'active':!isList}" @click="viewGridFn"></i>
			<i class="fa fa-list" :class="{'active':isList}" @click="viewListFn"></i>
		</div>
		</h3>
		<ul class="todolist">
			<template v-for="item in missions">
				<li class="todo subHead clearfix">
					<div class="todo-actions actions">
						<div class="inr">
							<Tooltip placement="top" content="删除">
								<Icon type="trash-a"></Icon>
							</Tooltip>
							<Tooltip placement="top" content="编辑">
								<Icon type="edit"></Icon>
							</Tooltip>
							<Tooltip placement="top">								
								<i class="fa fa-arrow-right"></i>
								<div slot="content">
									添加后续任务
								</div>
							</Tooltip>
						</div>
					</div>
					<router-link to="/order/orderDetail/1/bigTask">{{item.pro}}</router-link>
					<i class="fa" :class="{'fa-angle-up':item.missionShow==true,'fa-angle-down':item.missionShow==false}" @click="sildeFn(item)"></i>
				</li>
				<li class="todo clearfix" v-for="itemM in item.todoList" v-if="item.missionShow">	
					<div class="todo-actions actions">
						<div class="inr">
							<Tooltip placement="top" content="删除">
								<Icon type="trash-a"></Icon>
							</Tooltip>
							<Tooltip placement="top" content="编辑">
								<Icon type="edit"></Icon>
							</Tooltip>						
						</div>
					</div>
					<div class="todoCheckbox">						
						<!--<input class="checkbox" type="checkbox" v-model="itemM.single" />-->
						<Checkbox v-model="itemM.single"></Checkbox>
						<router-link to="/order/orderDetail/1/smallTask" v-html="itemM.content"></router-link>
						<Button size="small" shape="circle">{{itemM.date}}</Button>
						<Button size="small" shape="circle">{{itemM.name}}</Button>
					</div>
				</li>
				<li class="todo clearfix" v-if="item.showAdd">					
					<div class="addTodo">
						<Checkbox v-model="addTodo.single"></Checkbox>
						<Input class="addInput" v-model="addTodo.content" placeholder="新的任务" size="small"></Input>
						<Poptip placement="right" width="200">
							<Button shape="circle">
						 		<span class="assignee">未指派</span>
						 		<span class="due">没有截止时间</span>
						 	</Button>
							<div class="api" slot="content">
								<Form label-position="top">
									<Form-item label="将任务指派给">
										<Input v-model="addTodo.name" placeholder="输入成员姓名" style="width: 150px"></Input>
									</Form-item>
									<Form-item label="任务截止时间">
										<Date-picker transfer class="popDatePicker" type="date" placeholder="选择日期" v-model="addTodo.date" style="width: 150px"></Date-picker>
									</Form-item>
								</Form>
							</div>
						</Poptip>
					</div>
				</li>
				<div class="more" v-if="item.state=='准备出运'&&item.missionShow">
					<Button type="text" @click="addNewMissionFn(item)" v-if="!item.showAdd">添加新任务</Button>
					<Button type="success" v-if="item.showAdd" @click="addNewFn(item)">添加任务</Button>
					<Button type="text" v-if="item.showAdd" @click="cancelFn(item)">取消</Button>
				</div>
			</template>
		</ul>
		<div class="section-footer">
			<router-link to="/order/finishedOrderList" class="greenA">已完成任务</router-link>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'orderDetailTodos',
		data() {
			return {
				isList: false,
				addTodo: {
					single: false,
					content: '',
					name: '',
					date: ''
				},
				missions: [{
					NO: 'HL0234',
					color: '蓝色',
					S: '45',
					L: '50',
					XL: '60',
					pro: '头样',
					state: '准备出运',
					missionShow: true,
					startTime: '2017-01-01',
					endTime: '2017-10-10',
					showAdd: false,
					todoList: [{
						single: false,
						content: '<span>确认头样</span>',
						name: '林志文',
						date: '2017.8.1'
					}, {
						single: false,
						content: '<span>确认产前样</span>',
						name: '林志文',
						date: '2017.8.1'
					}]

				}, {
					NO: 'HL0234',
					color: '蓝色',
					S: '45',
					L: '50',
					XL: '60',
					pro: '产前样',
					state: '取消出运',
					missionShow: false,
					todoList: [{
						single: false,
						content: '<span>确认头样</span>',
						name: '林志文',
						date: '2017.8.1'
					}, {
						single: false,
						content: '<span>确认产前样</span>',
						name: '林志文',
						date: '2017.8.1'
					}],
					showAdd: false,

				}]
			}
		},
		methods: {
			sildeFn(item) {
				item.missionShow = !item.missionShow;
			},
			addNewMissionFn(item) {
				item.showAdd = !item.showAdd;
			},
			addNewFn(item) {
				if(this.addTodo.content == "") {
					this.addTodo.content = "未填写内容"
				};
				if(this.addTodo.name == "") {
					this.addTodo.name = "无责任人"
				};
				if(this.addTodo.date == "") {
					this.addTodo.date = "未填写日期"
				};
				item.todoList.push(this.addTodo);
				this.addTodo = {
					single: false,
					content: '',
					name: '',
					date: '',
					step: '',
					referwho: '',
					enddate: ''
				}
			},
			cancelFn(item) {
				item.showAdd = false
			},
			viewGridFn() {
				this.isList = false;
			},
			viewListFn() {
				this.isList = true;
			}

		}
	}
</script>

<style lang="scss" scoped>

</style>