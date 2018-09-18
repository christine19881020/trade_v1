<template>
	<div class="section section-todos">
		<h3 class="section-head">
			<a class="title">任务</a>					
		</h3>
		<ul class="todolist plan">
			<template v-for="item in missions">
				<li class="todo subHead clearfix">
					<Row>
						<Col span="12"> {{item.NO}}&nbsp;&nbsp;{{item.kNo}}&nbsp;&nbsp;						
						<i class="fa" :class="{'fa-angle-up':item.missionShow==true,'fa-angle-down':item.missionShow==false}" v-if="item.state=='准备出运'" @click="sildeFn(item)"></i>
						</Col>
					</Row>
				</li>
				<li class="todo leaf clearfix" v-for="itemM in item.todoList" v-if="item.missionShow">
					<div class="todoCheckbox">
						<!--<Checkbox v-model="itemM.single"></Checkbox>-->
						<router-link to="/order/list/taskTemplate/bigTemplate/nodeEdit" v-html="itemM.content"></router-link>
						<Button size="small" shape="circle">{{itemM.date}}</Button>
						<Button size="small" shape="circle">{{itemM.name}}</Button>
					</div>
				</li>
				<li class="todo leaf clearfix" v-if="item.showAdd&&item.missionShow">				
					<div class="addTodo">
						<!--<Checkbox v-model="addTodo.single" disabled></Checkbox>-->
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
				</div>
			</template>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'todos',
		data() {
			return {
				addTodo: {
					single: false,
					content: '',
					name: '',
					date: ''

				},
				missions: [{
					NO: 'HL0234',				
					kNo: "品名XXX",
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
					}],
					process: [{
							name: '面料已到位',
							state: false,
							startTime: '2017-01-01',
							endTime: '2017-01-20',
							proline: '0'
						},
						{
							name: '辅料已到位',
							state: true,
							startTime: '2017-02-06',
							endTime: '2017-02-20',
							proline: '0'
						},
						{
							name: '打样完成',
							state: false,
							startTime: '2017-03-01',
							endTime: '2017-04-20',
							proline: '0'
						},
						{
							name: '正在生产',
							state: true,
							startTime: '2017-06-01',
							endTime: '2017-08-20',
							proline: '0'
						}
					]
				}, {
					NO: 'HL0234',
					kNo: "品名XXX",
					state: '取消出运',
					missionShow: true,
					todoList: [],
					showAdd: false,
					process: [{
							name: '面料已到位',
							state: true,
							startTime: '2017-01-01',
							endTime: '2017-01-20',
							proline: '0'
						},
						{
							name: '辅料已到位',
							state: true,
							startTime: '2017-02-06',
							endTime: '2017-02-20',
							proline: '0'
						},
						{
							name: '打样完成',
							state: true,
							startTime: '2017-03-01',
							endTime: '2017-04-20',
							proline: '0'
						},
						{
							name: '正在生产',
							state: true,
							startTime: '2017-06-01',
							endTime: '2017-08-20',
							proline: '0'
						}
					]
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
			}
		}
	}
</script>

<style lang="scss">

</style>