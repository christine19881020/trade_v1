<template>
	<div class="section section-todos">
		<h3 class="section-head">
			<a class="title">任务</a>	
			<div class="todolist-toolbar">
				<i class="fa fa-th" :class="{'active':!isList}" @click="viewGridFn"></i>
				<i class="fa fa-list" :class="{'active':isList}" @click="viewListFn"></i>
			</div>
		</h3>
		<div class="slideBox">
			<ul class="todolist" :class="{'active':isList,'notActive':!isList}">
				<template v-for="(item,index) in missions">
					<!--<li class="todo subHead clearfix" >
					<div class="todo-actions actions">
						<div class="inr">
							<Tooltip placement="top" content="删除">
								<Icon type="trash-a" @click.native="deleteFn(index)"></Icon>
							</Tooltip>
							<Tooltip placement="top" content="编辑">
								<Icon type="edit"></Icon>
							</Tooltip>
							<Tooltip placement="top" content="关注">
								<Icon type="star"></Icon>
							</Tooltip>
							<Tooltip placement="top">
								<Icon type="ios-download" v-if="item.state=='准备出运'"></Icon>
								<Icon type="ios-upload" v-if="item.state=='取消出运'"></Icon>
								<div slot="content">
									{{item.state}}
								</div>
							</Tooltip>
						</div>
					</div>
					<router-link class="todolist-rest" to="/order/orderDetail/1">{{item.NO}}&nbsp;{{item.kNO}}</router-link>
					<i class="fa" :class="{'fa-angle-up':item.missionShow==true,'fa-angle-down':item.missionShow==false}" @click="sildeFn(item)"></i>
				</li>-->
					<ul v-for="(itemJ,indexJ) in item.todoList" v-if="item.missionShow">
						<li class="todo subHeadSmall clearfix">
							<div class="todo-actions actions">
								<div class="inr">
									<Tooltip placement="top" content="删除">
										<Icon type="trash-a" @click.native="deleteJFn(item.todoList,indexJ)"></Icon>
									</Tooltip>
									<Tooltip placement="top" content="编辑">
										<Icon type="edit"></Icon>
									</Tooltip>
									<Tooltip placement="top" content="复制">
										<Icon type="ios-copy"></Icon>
									</Tooltip>
									<Tooltip content="添加后续任务">
										<i class="fa fa-arrow-right bdl"></i>
									</Tooltip>
								</div>
							</div>
							<router-link class="todolist-rest left" to="/order/contractDetail/1/contractBigTask">{{itemJ.content}}</router-link>
							<Button size="small" shape="circle" style="float:left">{{itemJ.name}}{{itemJ.date}}</Button>
							<i class="fa blueA left" style="margin:5px;" :class="{'fa-angle-up':itemJ.Jshow==true,'fa-angle-down':itemJ.Jshow==false}" @click="sildeJFn(itemJ)"></i>
						</li>
						<li class="todo leafTodo clearfix" v-for="itemM in itemJ.children" v-if="itemJ.Jshow&&item.missionShow">
							<div class="todoCheckbox">
								<Checkbox v-model="itemM.single"></Checkbox>
								<router-link to="/order/orderDetail/1/smallTask" v-html="itemM.content">11</router-link>
								<Poptip placement="right" width="200">
									<Button shape="circle">
								 		<span class="assignee">未指派</span>
								 	</Button>
									<div class="api" slot="content">
										<Form label-position="top">
											<Form-item label="将任务指派给">
												<Input v-model="addTodo.name" placeholder="输入成员姓名" style="width: 150px"></Input>
											</Form-item>
											<Form-item label="任务所需天数">
												<Input v-model="addTodo.days" placeholder="输入任务所需天数" style="width: 150px"></Input>
											</Form-item>
											<Form-item label="任务截止时间">
												<Date-picker transfer class="popDatePicker" type="date" placeholder="选择日期" v-model="addTodo.date" style="width: 150px"></Date-picker>
											</Form-item>
										</Form>
									</div>
								</Poptip>

							</div>
						</li>
						<li class="todo leafTodo clearfix" v-if="itemJ.showAdd&&item.missionShow">
							<div class="addTodo">
								<Checkbox v-model="addTodo.single" disabled></Checkbox>
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
						<li v-if="itemJ.Jshow&&item.missionShow">
							<div class="more" v-if="item.state=='准备出运'">
								<Button type="text" @click="addNewMissionFn(itemJ)" v-if="!itemJ.showAdd">添加新任务</Button>
								<Button type="success" v-if="itemJ.showAdd" @click="addNewFn(itemJ)">添加任务</Button>
								<Button type="text" v-if="itemJ.showAdd" @click="cancelFn(itemJ)">取消</Button>
							</div>
						</li>
						<li class="finishedOrder Small" v-for="itemFsmall in itemJ.finishedSmall">
							<Checkbox v-model="itemFsmall.single"></Checkbox><span @click="goSmallFn">{{itemFsmall.content}}</span><i>( {{itemFsmall.salesman}}，{{itemFsmall.date}} )</i>
						</li>
						<li class="finishedOrder" v-for="itemFbig in itemJ.finishedBig">
							<i class="fa fa-check"></i><span @click="goBigFn">{{itemFbig.content}}</span><i>( {{itemFbig.salesman}}，{{itemFbig.date}} )</i>
						</li>
					</ul>
				</template>
			</ul>
			<bigProcess :class="{'active':!isList,'notActive':isList}"></bigProcess>

		</div>
	</div>
</template>

<script>
	import bigProcess from './bigProcess'
	export default {
		name: 'todos',
		components: {
			bigProcess
		},
		data() {
			return {
				isList: true,
				smallchecked: true,
				addTodo: {
					single: false,
					content: '',
					days: '',
					name: '',
					date: ''
				},
				missions: [{
					NO: 'HL0234',
					kNO: '品名XXX',
					color: '蓝色',
					S: '45',
					L: '50',
					XL: '60',
					state: '准备出运',
					missionShow: true,
					startTime: '2017-01-01',
					endTime: '2017-10-10',
					todoList: [{
						Jshow: true,
						showAdd: false,
						single: false,
						content: '头样',
						name: '林志文',
						date: '2017.8.1',
						children: [{
							single: false,
							content: '头样加工',
							name: '林志文',
							date: '2017.8.1',
						}, {
							single: false,
							content: '头样确认',
							name: '林志文',
							date: '2017.8.1',
						}],
						finishedSmall: [{
							single: true,
							content: '已完成的小小1',
							salesman: '林志文',
							date: '20170826'
						}, {
							single: true,
							content: '已完成的小小2',
							salesman: '周海媚',
							date: '20170826'
						}, {
							single: true,
							content: '已完成的小小3',
							salesman: '小天子',
							date: '20170826'
						}],
					}, {
						Jshow: false,
						showAdd: false,
						single: false,
						content: '产前样',
						name: '林志文',
						date: '2017.8.1',
						finishedBig: [{
							content: '已完成的大任务1',
							salesman: '林志文',
							date: '20170826'
						}, {
							content: '已完成的大任务2',
							salesman: '周海媚',
							date: '20170826'
						}, {
							content: '已完成的大任务3',
							salesman: '小天子',
							date: '20170826'
						}],
						children: [{
							single: false,
							content: '产前样加工',
							name: '林志文',
							date: '2017.8.1',
						}]
					}]

				}]
			}
		},
		methods: {
			sildeFn(item) {
				item.missionShow = !item.missionShow;
			},
			sildeJFn(itemJ) {
				itemJ.Jshow = !itemJ.Jshow;
			},
			addNewMissionFn(itemJ) {
				this.missions.forEach((item) => {
					item.todoList.forEach((itemK) => {
						itemK.showAdd = false;
					})
				})
				itemJ.showAdd = true;
			},
			addNewFn(itemJ) {
				if(this.addTodo.content == "") {
					this.addTodo.content = "未填写内容"
				};
				if(this.addTodo.name == "") {
					this.addTodo.name = "无责任人"
				};
				if(this.addTodo.date == "") {
					this.addTodo.date = "未填写日期"
				};
				itemJ.children.push(this.addTodo);
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
			cancelFn(itemJ) {
				itemJ.showAdd = false
			},
			deleteFn(index) {
				this.missions.splice(index, 1)
			},
			deleteJFn(JtodoList, indexJ) {
				JtodoList.splice(indexJ, 1)
			},
			goSmallFn() {
				this.$router.push('/order/smallMissionDetail');
			},
			goBigFn() {
				this.$router.push('/order/bigMissionDetail');
			},
			viewGridFn() {
				this.isList = false;
				this.cols = '2'
			},
			viewListFn() {
				this.isList = true;
				this.cols = '22'
			}
		}
	}
</script>

<style lang="scss" scoped>
	.section-todos .todolist .todo .actions {
		top: -2px;
		i {
			font-size: 18px;
		}
	}
</style>