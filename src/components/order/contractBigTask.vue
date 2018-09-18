<template>
	<section>
		<div class="page page-root simple-pjax page-behind" style="">
			<router-link class="link-page-behind" to="/order/orderDetail/1/1">B&M - HF1707001</router-link>
		</div>
		<div class="page page-1 simple-pjax  page-behind">
			<router-link class="link-page-behind" to="/order/orderDetail/1">HL034 品名XXX</router-link>
		</div>

		<div class="page page-2 simple-pjax">
			<div class="page-inner pd40">
				<h3 class="grey" style="margin-bottom:10px">生产</h3>
				<div class="bdrbottom">
					<Button type="text" class="greenA">添加任务描述</Button>
				</div>
				<div class="detail-actions">
					<div class="item detail-star-action">
						<a href="#" class="detail-action detail-action-star stared">编辑</a>
					</div>
					<div class="item detail-star-action">
						<a href="#" class="detail-action detail-action-star stared">复制</a>
					</div>
					<div class="item">
						<a href="#" class="detail-action detail-action-del">删除</a>
					</div>
				</div>
				<div class="subBox " style="padding-bottom: 30px;">
					<h3 class="section-head">
						<a class="title">内部任务</a>
						<Dropdown  trigger="click" style="margin-left: 20px">
							<Button-group size="small" class="dropShadow">
								<Button type="ghost">添加任务</Button>
								<Button type="ghost"><Icon type="arrow-down-b"></Icon> </Button>
							</Button-group>
							
						</Dropdown>
					</h3>
					<ul class="subTask">
						<li class="todo">
							<router-link to="/order/orderDetail/1/smallTask">
								<div class="todo-actions actions">
									<div class="inr">
										<Tooltip placement="top" content="删除">
											<Icon type="trash-a" @click.native="deleteJFn(item.todoList,indexJ)"></Icon>
										</Tooltip>
										<Tooltip placement="top" content="编辑">
											<Icon type="edit"></Icon>
										</Tooltip>
										<Tooltip content="复制任务">
											<i class="fa fa-copy"></i>
										</Tooltip>
										<Tooltip content="添加后续任务">
											<i class="fa fa-arrow-right bdl"></i>
										</Tooltip>
									</div>
								</div>
								<!--<input type="checkbox" class="Jcheckbox">-->
								<Checkbox v-model="check1"></Checkbox>
								<span>头样加工</span>
								<Button size="small" shape="circle">王某某等</Button>
								<Button size="small" shape="circle">无前量</Button>
								<Button size="small" shape="circle">不发预警通知</Button>
							</router-link>

						</li>
						<li class="todo">
							<router-link to="/order/orderDetail/1/smallTask">
								<div class="todo-actions actions">
									<div class="inr">
										<Tooltip placement="top" content="删除">
											<Icon type="trash-a" @click.native="deleteJFn(item.todoList,indexJ)"></Icon>
										</Tooltip>
										<Tooltip placement="top" content="编辑">
											<Icon type="edit"></Icon>
										</Tooltip>
										<Tooltip content="复制任务">
											<i class="fa fa-copy"></i>
										</Tooltip>
										<Tooltip content="添加后续任务">
											<i class="fa fa-arrow-right bdl"></i>
										</Tooltip>
									</div>
								</div>
								<Checkbox v-model="check2"></Checkbox>
								<span>头样寄送</span>
								<Button size="small" shape="circle">无负责人</Button>
								<Button size="small" shape="circle">头样加工</Button>
								<Button size="small" shape="circle">不发预警通知</Button>
							</router-link>
						</li>
						<li class="todo">
							<router-link to="/order/orderDetail/1/smallTask">
								<div class="todo-actions actions">
									<div class="inr">
										<Tooltip placement="top" content="删除">
											<Icon type="trash-a" @click.native="deleteJFn(item.todoList,indexJ)"></Icon>
										</Tooltip>
										<Tooltip placement="top" content="编辑">
											<Icon type="edit"></Icon>
										</Tooltip>
										<Tooltip content="复制任务">
											<i class="fa fa-copy"></i>
										</Tooltip>
										<Tooltip content="添加后续任务">
											<i class="fa fa-arrow-right bdl"></i>
										</Tooltip>
									</div>
								</div>
								<Checkbox v-model="check3"></Checkbox>
								<span>头样确认</span>
								<Button size="small" shape="circle">无负责人</Button>
								<Button size="small" shape="circle">头样寄送</Button>
								<Button size="small" shape="circle">不发预警通知</Button>
							</router-link>
						</li>
						<li class="todo">
							<router-link to="/order/orderDetail/1/smallTask">
								<div class="todo-actions actions">
									<div class="inr">
										<Tooltip placement="top" content="删除">
											<Icon type="trash-a" @click.native="deleteJFn(item.todoList,indexJ)"></Icon>
										</Tooltip>
										<Tooltip placement="top" content="编辑">
											<Icon type="edit"></Icon>
										</Tooltip>
										<Tooltip content="复制任务">
											<i class="fa fa-copy"></i>
										</Tooltip>
										<Tooltip content="添加后续任务">
											<i class="fa fa-arrow-right bdl"></i>
										</Tooltip>
									</div>
								</div>
								<Checkbox v-model="check4"></Checkbox>
								<span>二次样加工</span>
								<Button size="small" shape="circle">无负责人</Button>
								<Button size="small" shape="circle">头样确认</Button>
								<Button size="small" shape="circle">不发预警通知</Button>
							</router-link>
						</li>
						<li class="todo">
							<router-link to="/order/orderDetail/1/smallTask">
								<div class="todo-actions actions">
									<div class="inr">
										<Tooltip placement="top" content="删除">
											<Icon type="trash-a" @click.native="deleteJFn(item.todoList,indexJ)"></Icon>
										</Tooltip>
										<Tooltip placement="top" content="编辑">
											<Icon type="edit"></Icon>
										</Tooltip>
										<Tooltip content="复制任务">
											<i class="fa fa-copy"></i>
										</Tooltip>
										<Tooltip content="添加后续任务">
											<i class="fa fa-arrow-right bdl"></i>
										</Tooltip>
									</div>
								</div>
								<Checkbox v-model="check5"></Checkbox>
								<span>二次样寄送</span>
								<Button size="small" shape="circle">无负责人</Button>
								<Button size="small" shape="circle">二次样加工</Button>
								<Button size="small" shape="circle">不发预警通知</Button>
							</router-link>
						</li>
						<li class="todo">
							<router-link to="/order/orderDetail/1/smallTask">
								<div class="todo-actions actions">
									<div class="inr">
										<Tooltip placement="top" content="删除">
											<Icon type="trash-a" @click.native="deleteJFn(item.todoList,indexJ)"></Icon>
										</Tooltip>
										<Tooltip placement="top" content="编辑">
											<Icon type="edit"></Icon>
										</Tooltip>
										<Tooltip content="复制任务">
											<i class="fa fa-copy"></i>
										</Tooltip>
										<Tooltip content="添加后续任务">
											<i class="fa fa-arrow-right bdl"></i>
										</Tooltip>
									</div>
								</div>
								<Checkbox v-model="check6"></Checkbox>
								<span>二次样确认</span>
								<Button size="small" shape="circle">无负责人</Button>
								<Button size="small" shape="circle">二次样寄送</Button>
								<Button size="small" shape="circle">不发预警通知</Button>
							</router-link>
						</li>

					</ul>
					<ul class="stepsUL">
						<li>
							<Icon type="ios-clock-outline"></Icon><span>2017.8.12 09:00 林志文 将任务完成时间调整到了8月15日</span>
						</li>
						<li>
							<Icon type="ios-timer-outline"></Icon>2017.8.12 09:00 林志文 给 林志文 指派了任务</span>
						</li>
					</ul>
				</div>
				<ul class="addPizhu">
					<li class="clearfix">
						<Avatar class="left" src="https://i.loli.net/2017/08/21/599a521472424.jpg" size="large" />
						<div class="left">
							<p><label>林志文</label><span class="lightGrey">1分钟前</span></p>
							<p>厂家升级了生产线，工艺正在试验</p>
						</div>
					</li>
					<li class="clearfix">
						<Avatar class="left" icon="person" size="large" />
						<Input class="left txtArea" v-model="pizhu" type="textarea" placeholder="点击发表批注"></Input>
					</li>
				</ul>
			</div>
		</div>
	</section>
</template>

<script>
	import orderDetailTodos from './orderDetailTodos'
	export default {
		name: 'smallTask',
		components: {

		},
		data() {
			return {
				check1: false,
				check2: false,
				check3: false,
				check4: false,
				check5: false,
				check6: false,
				pizhu: '',

			}
		},
		methods: {

		},
		mounted() {

		}
	}
</script>

<style lang="scss">

</style>