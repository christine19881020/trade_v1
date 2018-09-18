<template>
	<section>
		<div class="page page-root simple-pjax page-behind" style="">
			<router-link class="link-page-behind" to="/order/orderDetail/1">B&M - HF1707001 </router-link>
		</div>
		<div class="page page-1 simple-pjax  page-behind">
			<router-link class="link-page-behind" to="/order/orderDetail/1">HL034 品名XXX</router-link>
		</div>
		<div class="page page-2 simple-pjax">
			<div class="page-inner pd40">
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
				<div class="subBox">
					<ul class="subTask" style="padding-bottom:10px">
						<li class="todo">
							<Checkbox v-model="single"></Checkbox>
							<span>头样客户确认</span>
							<span class="smallGrey">（林志文，刚刚）</span>
						</li>
						<li class="addTaskDes">
							<Button type="text" class="greenA" @click="fuEditorShow=!fuEditorShow">添加任务描述</Button>
						</li>
						<li>
							{{contentM}}
						</li>

					</ul>
					<div class="editBox" v-if="fuEditorShow">
						<vue-html5-editor :content="contentM" :height="200" class="fuEditor"></vue-html5-editor>
						<p class="btns">
							<Button type="success" @click="saveContentFn">保存修改</Button>
							<Button type="text">取消</Button>
						</p>
					</div>

					<Form class="smallMissionForm">
						<FormItem>
							<DatePicker type="date" placeholder="确认通过日期（任务完成时必填）" style="width:60%"></DatePicker>
						</FormItem>
						<FormItem>
							<Input placeholder="客户意见（任务完成时必填）" style="width:60%"></Input>
						</FormItem>
					</Form>
					<div class="nextMission">
						<h3>后续任务</h3>
						<ul>
							<li class="todo">
								<span style="margin-right:5px">头样加工</span>
								<Button shape="circle" size="small">林志文 2017.8.1</Button>
							</li>
							<li class="todo">
								<span style="margin-right:5px">头样确认</span>
								<Button shape="circle" size="small" type="ghost">未指派</Button>
							</li>
						</ul>
					</div>
					<detailFiles></detailFiles>
					<div class="section-footer" style="margin-left:50px;">
						<Button class="bigBtn" type="warning" size="large">保存设置</Button>
						<Button type="text">取消</Button>
					</div>
					<ul class="stepsUL clearfix">
						<li>
							<Icon type="ios-clock-outline"></Icon><span>2017.8.12 09:00 林志文 将任务完成时间调整到了8月15日</span>
						</li>
						<li>
							<Icon type="ios-timer-outline"></Icon>2017.8.12 09:00 林志文 给 林志文 指派了任务</span>
						</li>
					</ul>
					<ul class="addPizhu" style="margin-top:50px;">
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
		</div>
	</section>
</template>

<script>
	import orderDetailTodos from './orderDetailTodos'
	import detailFiles from './detailFiles'
	export default {
		name: 'bigTask',
		components: {
			detailFiles
		},
		data() {
			return {
				single: false,
				contentM: '',
				contentAdd:'',
				pizhu: '',
				fuEditorShow: false
			}

		},
		ready() {

		},
		methods: {
			saveContentFn() {
               this.contentAdd=this.contentM;
			}
		},
		mounted() {

		}
	}
</script>

<style lang="scss">

</style>