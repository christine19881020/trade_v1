<template>
	<section>
		<div class="page page-root simple-pjax page-behind">
			<router-link class="link-page-behind" to="/client/list">客户</router-link>
		</div>
		<div class="page page-1 simple-pjax">
			<div class="page-inner pd40">
				<div class="section newMember">
					<div class="formDesign">
						<h3>
					      添加新客户
				       </h3>
						<Form ref="formValidate" :model="formValidate" :rules="ruleValidate">
							<FormItem prop="name">
								<Row>
									<Col :span="16">
									<AutoComplete  v-model="name" :data="cilentList" :filter-method="filterMethod" placeholder="姓名（必填）" >
									</AutoComplete>
									</Col>
								</Row>
							</FormItem>
							<FormItem prop="email">
								<Row>
									<Col :span="16">
									<Input v-model="email" placeholder="工作邮箱（必填）" />
									</Col>
								</Row>
							</FormItem>
							<FormItem prop="cellphone">
								<Row>
									<Col :span="16">
									<Input v-model="cellphone" placeholder="手机号" />
									</Col>
								</Row>
							</FormItem>
							<FormItem prop="telephone">
								<Row>
									<Col :span="16">
									<Input v-model="telephone" placeholder="固定电话" />
									</Col>
								</Row>
							</FormItem>
							<FormItem prop="fax">
								<Row>
									<Col :span="16">
									<Input v-model="fax" placeholder="传真号码" />
									</Col>
								</Row>
							</FormItem>
							<h3> 企业信息</h3>
							<FormItem>
								<Row prop="fullName">
									<Col :span="8">
									<Input v-model="fullName" placeholder="全称（必填）" class="radiusR_0" />
									</Col>
									<Col :span="8">
									<Select v-model="country" filterable size="large" class="radiusL_0" placeholder="国家（必填）">
										<Option v-for="item in countryList" :value="item.value" :key="item.value">{{ item.label }}</Option>
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
	import { companyList, country } from '../../fakeData'
	export default {
		data() {
			return {
				cilentList: [
					'张大海',
					'邱天人',
					'梅海峰'
				],
				countryList: country,
				formValidate: {
					name: '',
					email: '',
					cellphone: '',
					telephone: '',
					fax: '',
					fullName: '',
					country: '',
					quickMa: '',
					fullName: '',
					country: '',
					easyName: '',
					quickMa: ''
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
			},
			 filterMethod (value, option) {
                return option.toUpperCase().indexOf(value.toUpperCase()) !== -1;
            }
		}
	}
</script>

<style scoped>
	.formDesign .ivu-row {
		margin: 0;
	}
</style>