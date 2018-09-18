<template>
	<div class="section section-todos">
		<h3 class="section-head">
						<a class="title">任务</a>
						<Dropdown  trigger="click" style="margin-left: 20px">
							<Button-group size="small" class="dropShadow">
								<Button type="ghost">添加任务</Button>
								<Button type="ghost"><Icon type="arrow-down-b"></Icon> </Button>
							</Button-group>
						</Dropdown>
						<div class="todolist-toolbar">
							 <Poptip title="提示标题" content="提示内容" placement="bottom">
					            <i class="fa fa-filter divider"></i>
					        </Poptip>
					        <i class="fa fa-server" :class="{active:!userAssigned}" @click="showUnassignedFn"></i>
					        <i class="fa fa-user" :class="{'active':userAssigned}" @click="showAssignedFn"></i>			      
						</div>
					</h3>
		<ul class="todolist" v-if="!userAssigned">
			<li class="todo subHead clearfix">
				<div class="todo-actions actions">
					<div class="inr">
						<i class="fa fa-trash"></i>
						<i class="fa fa-pencil"></i>
						<i class="fa fa-download"></i>
					</div>
				</div>
				更多好用的小技巧
				<i class="fa fa-angle-up"></i>
			</li>
			<li class="todo clearfix" v-for="item in todoList" v-if="item.classify=='tips'">
				<div class="todo-actions actions">
					<div class="inr">
						<i class="fa fa-arrow-circle-up"></i>
						<i class="fa fa-pencil"></i>
						<i class="fa fa-play"></i>
					</div>
				</div>
				<Checkbox v-model="item.single">
					<span v-html="item.content"></span>
					<i class="fa fa-bars" v-if="item.ifDesc==true"></i>
					<Button v-if="item.ifAssigne==true" size="small" shape="circle">{{item.name}}</Button>
					<Button v-if="item.ifAssigne==false" type="ghost" size="small" shape="circle">未指派</Button>
				</Checkbox>
			</li>

		</ul>

		<div class="headClassify clearfix" v-if="userAssigned">
			<a class="headImg">
				<img class="avatar" src="../assets/path.jpg" />
			</a>
			<div class="name">
				<a href="#" title="张丹鸯">张丹鸯</a>
			</div>
			<ul class="todolist">
				<li class="todo clearfix" v-for="item in todoList" v-if="item.name=='张丹鸯'">
					<div class="todo-actions actions">
						<div class="inr">
							<i class="fa fa-arrow-circle-up"></i>
							<i class="fa fa-pencil"></i>
							<i class="fa fa-play"></i>
						</div>
					</div>
					<Checkbox v-model="item.single">
						<span v-html="item.content"></span>
						<i class="fa fa-bars" v-if="item.ifDesc==true"></i>
						<Button v-if="item.ifAssigne==false" type="ghost" size="small" shape="circle">未指派</Button>
						<Button v-if="item.ifAssigne==true" size="small" shape="circle">{{item.name}}</Button>
					</Checkbox>
				</li>
			</ul>
		</div>

		<div class="more" v-if="!userAssigned">
			<a href="#">添加任务</a>
		</div>

		<ul class="todolist" v-if="!userAssigned">
			<li class="todo subHead clearfix">
				<div class="todo-actions actions">
					<div class="inr">
						<i class="fa fa-trash"></i>
						<i class="fa fa-pencil"></i>
						<i class="fa fa-download"></i>
					</div>
				</div>
				完成下面的任务，开始进入工作状态
				<i class="fa fa-angle-up"></i>
			</li>
			<li class="todo clearfix" v-for="item in todoList" v-if="item.classify=='goList'">
				<div class="todo-actions actions">
					<div class="inr">
						<i class="fa fa-arrow-circle-up"></i>
						<i class="fa fa-pencil"></i>
						<i class="fa fa-play"></i>
					</div>
				</div>
				<Checkbox v-model="item.single">
					<span v-html="item.content"></span>
					<i class="fa fa-bars" v-if="item.ifDesc==true"></i>
					<Button v-if="item.ifAssigne==false" type="ghost" size="small" shape="circle">未指派</Button>
					<Button v-if="item.ifAssigne==true" size="small" shape="circle">{{item.name}}</Button>
				</Checkbox>
			</li>
		</ul>
		<div class="headClassify clearfix" v-if="userAssigned">
			<a class="headImg">
				<div class="avatar">
					?
				</div>
			</a>
			<div class="name">
				<a href="#" title="未指派">未指派</a>
			</div>
			<ul class="todolist">
				<li class="todo clearfix" v-for="item in todoList" v-if="item.ifAssigne==false">
					<div class="todo-actions actions">
						<div class="inr">
							<i class="fa fa-arrow-circle-up"></i>
							<i class="fa fa-pencil"></i>
							<i class="fa fa-play"></i>
						</div>
					</div>
					<Checkbox v-model="item.single">
						<span v-html="item.content"></span>
						<i class="fa fa-bars" v-if="item.ifDesc==true"></i>
						<Button v-if="item.ifAssigne==false" type="ghost" size="small" shape="circle">未指派</Button>
						<Button v-if="item.ifAssigne==true" size="small" shape="circle">{{item.name}}</Button>
					</Checkbox>
				</li>
			</ul>
		</div>
		<div class="more" v-if="!userAssigned">
			<a href="#">添加新任务</a>
		</div>
		<div class="section-footer" v-if="!userAssigned">
			<a href="#" class="greenA">已归档清单</a>
			<a href="#" class="greenA">已完成任务</a>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'todos',
		data() {
			return {
				todoList: [{
						single: false,
						content: '<span>打样</span>',
						ifAssigne: true,
						ifDesc: false,
						name: '张丹鸯',
						head: require('../assets/path.jpg'),
						classify: "tips"
					}, {
						single: false,
						content: '<span>点击 ↑ 即可添加任务33333m</span>',
						ifAssigne: true,
						ifDesc: false,
						name: '张丹鸯',
						head: require('../assets/path.jpg'),
						classify: "tips"
					}, {
						single: false,
						content: '←<span>勾选左边的小框，完成这条任务</span>',
						ifAssigne: false,
						ifDesc: false,
						classify: "tips"
					}, {
						single: false,
						content: '<em>!!!</em><span>在任务前面加上感叹号，标注重要或者紧急的任务</span>',
						ifAssigne: false,
						ifDesc: true,
						classify: "tips"
					},
					{
						single: false,
						content: '<span>创建你的第一个项目</span>',
						ifAssigne: false,
						ifDesc: true,
						classify: "goList"
					}, {
						single: false,
						content: '<span>邀请小伙伴加入你的团队</span>',
						ifAssigne: false,
						ifDesc: true,
						classify: "goList"
					},
					 {
						single: false,
						content: '<span>点击 ↑ 即可添加任务33333</span>',
						ifAssigne: true,
						ifDesc: false,
						name: '张丹鸯',
						head: require('../assets/path.jpg'),
						classify: "tips"
					}
				],
				userAssigned: false
			}
		},
		methods: {
			showAssignedFn() {
				this.userAssigned = true
			},
			showUnassignedFn() {
				this.userAssigned = false
			}
		}
	}
</script>

<style lang="scss">
	
</style>