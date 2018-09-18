<template>
	<section>
		<div class="page page-root simple-pjax page-behind">
			<router-link class="link-page-behind" to="/team/memberTaskDetail">分组管理</router-link>
		</div>
		<div class="page page-1 simple-pjax">
			<div class="page-inner pd40">
				<Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
					<h3 class="section-head">新建分组</h3>
					<FormItem label="分组名称" prop="name">
						<Input v-model="formValidate.name" placeholder="请输入分组名称"></Input>
					</FormItem>
				</Form>
				<div class="section section-warning">
					<h3 class="section-head">
						<a class="title">高级跟踪</a>												
					</h3>
					<div class="warningBox resbonBOX">
						<ul>
							<li>
								<el-select v-model="choosedPeople" multiple filterable placeholder="预选特别人员" style="width:500px;" @change="selectFN">
									<el-option v-for="item in people" :key="item.value" :label="item.label" :value="item.value">
									</el-option>
								</el-select>
								<Checkbox v-model="checkAll" @click.prevent.native="handleCheckAll">所有人</Checkbox>
							</li>
							<li class="choosedShow">
								<div v-for="(item,index) in choosedPeople" class="choosedOne">
									<label class="ivu-checkbox-wrapper ivu-checkbox-wrapper-checked"><span class="ivu-checkbox ivu-checkbox-checked"><span class="ivu-checkbox-inner"></span> <input type="checkbox" class="ivu-checkbox-input"></span> </label>
									<span>{{item}}</span>
								</div>
							</li>
						</ul>
					</div>
				</div>
				<div class="section-footer">
					<Button class="bigBtn" type="warning" size="large" >保存设置</Button>
					<Button type="text">取消</Button>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	export default {
		data() {
			return {

				formValidate: {
					name: '',
					member: []
				},
				ruleValidate: {
					name: [{
						required: true,
						message: '姓名不能为空',
						trigger: 'blur'
					}],
					member: [{
							required: true,
							type: 'array',
							min: 1,
							message: '至少选择一个爱好',
							trigger: 'change'
						},
						{
							type: 'array',
							max: 2,
							message: '最多选择两个爱好',
							trigger: 'change'
						}
					],
				},
				checkAll: false,
				people: [{
					value: '张某某',
					label: '张某某'
				}, {
					value: '蔡某某',
					label: '蔡某某'
				}, {
					value: '沈某某',
					label: '沈某某'
				}],
				choosedPeople: []
			}
		},
		methods: {
			handleSubmit(name) {
				this.$refs[name].validate((valid) => {
					if(valid) {
						this.$Message.success('提交成功!');
					} else {
						this.$Message.error('表单验证失败!');
					}
				})
			},
			handleReset(name) {
				this.$refs[name].resetFields();
			},
			selectFN() {
				if(this.people.length == this.choosedPeople.length) {
					this.checkAll = true;
				} else {
					this.checkAll = false;
				}
			},
			handleCheckAll() {
				if(this.checkAll == false) {
					this.checkAll = true;
					this.choosedPeople=[];
					this.people.forEach((item) => {
						this.choosedPeople.push(item.label);
					})
				} else {
					this.checkAll = false;
					this.choosedPeople = [];
				}

			}

		}
	}
</script>

<style>

</style>