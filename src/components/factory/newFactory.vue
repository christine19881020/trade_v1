<template>
	<section>
		<div class="page page-root simple-pjax">
			<div class="page-inner pd40">
				<div class="section newMember">
					<div class="formDesign">
						<h3>
					      添加新厂家&供应商
				       </h3>
						<Form ref="formValidate" :model="formValidate" :rules="ruleValidate">
							<FormItem>
								<Row>
									<Col :span="8">
									<Input v-model="fullName" class="radiusR_0" placeholder="全称（必填）" />
									</Col>
									<Col :span="8">
									<Select v-model="region" class="radiusL_0" filterable size="large" placeholder="地区（必填）">
										<Option v-for="item in regionList" :value="item.value" :key="item.value">{{ item.label }}</Option>
									</Select>
									</Col>
								</Row>
							</FormItem>
								<FormItem prop="easyName">
								<Row>
									<Col :span="16">
									<Input v-model="easyName" placeholder="简称（必填）" />
									</Col>
								</Row>
							</FormItem>
							
							<FormItem prop="quickMa">
								<Row>
									<Col :span="16">
									<Input v-model="quickMa" placeholder="速记码" />
									</Col>
								</Row>
							</FormItem>
						</Form>
					</div>
				</div>

				<div class="section-footer">
					<Button class="bigBtn" type="warning" size="large">保存</Button>
					<Button type="text">取消</Button>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	import { regionList } from '../../fakeData'
	export default {
		data() {
			return {
				regionList: regionList,
				formValidate: {
					region: '',
					fullName: '',					
					quickMa: '',					
					easyName: ''
				},
				ruleValidate: {
					name: [{
						required: true,
						message: '姓名不能为空',
						trigger: 'blur'
					}],
					email: [{
							required: true,
							message: '邮箱不能为空',
							trigger: 'blur'
						},
						{
							type: 'email',
							message: '邮箱格式不正确',
							trigger: 'blur'
						}
					],
					country: [{
						required: true,
						message: '请选择国家',
						trigger: 'change'
					}],
					fullName: [{
						required: true,
						message: '请选择全称',
						trigger: 'change'
					}],
					easyName: [{
						required: true,
						message: '请选择简称',
						trigger: 'change'
					}]
				}
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
			}
		}
	}
</script>

<style scoped>
	.formDesign .ivu-row {
		margin: 0;
	}
</style>