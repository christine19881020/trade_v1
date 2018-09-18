<template>
	<ul class="todolist" v-if="!userAssigned">
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
</template>

<script>
	export default {
		data() {
			return {
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
			deleteFn(index) {},
			editFn(index) {},
			addInnerFn(index) {},
			addNextFn(index) {}
		}
	}
</script>

<style lang="scss" scoped>
	.section-todos .todolist .todo {
		padding: 8px 5px 8px 14px;
		.actions {
			width: 140px;
			top: 5px;
			left: -140px;
		}
	}
</style>