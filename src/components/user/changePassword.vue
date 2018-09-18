<template>
	<section>
		<div class="page page-root simple-pjax page-behind">
			<router-link class="link-page-behind" to="/user/selfSetting">个人设置</router-link>
		</div>
		<div class="page page-1 simple-pjax">
			<div class="page-inner pd40">
				<h3>更改密码</h3>
				<Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="100" class="formValidate">
					<FormItem label="现有密码" prop="nowPassword">
						<Input v-model="formValidate.nowPassword"></Input>
					</FormItem>
					<FormItem label="新密码" prop="newPassword">
						<Input v-model="formValidate.newPassword" placeholder="强烈建议输入字母、数字和标点混合的密码"></Input>
					</FormItem>
					<FormItem label="确认新密码" prop="sureNew">
						<Input v-model="formValidate.sureNew"></Input>
					</FormItem>
					<FormItem>
						<Button type="primary" @click="handleSubmit('formValidate')">保存</Button>
						<Button type="text" style="margin-left: 8px" @click="$router.push('/user/selfSetting')">取消</Button>
					</FormItem>
				</Form>
			</div>
		</div>
	</section>
</template>

<script>
	export default {
		data() {
			return {
				formValidate: {
					nowPassword: '',
					newPassword: '',
					sureNew: ''
				},
				ruleValidate: {
					nowPassword: [{
						required: true,
						message: '现有密码不能为空',
						trigger: 'blur'
					}],
					newPassword: [{
						required: true,
						message: '新密码不能为空',
						trigger: 'blur'
					}],
					sureNew: [{
						required: true,
						message: '确认新密码不能为空',
						trigger: 'blur'
					}]
				}
			}
		}
	}
</script>

<style>

</style>