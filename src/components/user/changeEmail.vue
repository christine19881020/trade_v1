<template>
	<section>
		<div class="page page-root simple-pjax page-behind">
			<router-link class="link-page-behind" to="/user/selfSetting">个人设置</router-link>
		</div>
		<div class="page page-1 simple-pjax">
			<div class="page-inner pd40">
				<h3>更改邮箱</h3>
				<Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="100" class="formValidate">
					<FormItem label="输入密码" prop="nowPassword">
						<Input v-model="formValidate.nowPassword" placeholder="您的登录密码"></Input>
					</FormItem>
					<FormItem label="新邮箱" prop="newMail">
						<Input v-model="formValidate.newMail"></Input>
					</FormItem>
					<FormItem label="验证码" class="inputBtn">
						<Input type="text" class="loginInput" v-model="formValidate.message" placeholder="新邮箱收到的验证码（必填）">
						</Input>
						<button class="messageBtn">发送验证码</button>
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
					newMail: '',
					message: ''
				},
				ruleValidate: {
//					nowPassword: [{
//						required: true,
//						message: '现有密码不能为空',
//						trigger: 'blur'
//					}],
//					newMail: [{
//						required: true,
//						message: '新邮箱不能为空',
//						trigger: 'blur'
//					}],
//					message: [{
//						required: true,
//						message: '确认新密码不能为空',
//						trigger: 'blur'
//					}]
				}
			}
		}
	}
</script>

<style scoped lang="scss">
	
</style>