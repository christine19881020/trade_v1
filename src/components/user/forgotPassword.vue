<template>
	<section>
		<div class="wrapper">
			<div class="signPage" id="page-signin">
				<div class="sign-page">
					<div class="hd">
						<h1 class="logo">重设密码</h1>
					</div>
					<div class="bd">						
						<div class="normal-signin sigin-section">						
							<Form ref="formInline" :model="formInline" :rules="ruleInline">
								<FormItem prop="cellphone">
									<input type="text" class="loginInput w300" v-model="formInline.cellphone" placeholder="登录手机号（必填）">

									</input>
								</FormItem>

								<FormItem prop="message" class="inputBtn large">
									<input type="text" class="loginInput w200" v-model="formInline.cellphone" placeholder="短信验证码（必填）">
									</input>
									<button class="messageBtn">发送验证码</button>
								</FormItem>
								<FormItem>
									<input type="password" class="loginInput w300" v-model="formInline.newpass" placeholder="新的登录密码，至少包含8个字符">
									</input>
								</FormItem>
								<FormItem>
									<input type="password" class="loginInput w300" v-model="formInline.surePassword" placeholder="确认密码">
									</input>
								</FormItem>
								<FormItem class="form-buttons">
									<Button class="loginBtn" size="large" @click="handleSubmit('formInline')">保存密码</Button>
								</FormItem>
							</Form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	export default {
		data() {
			return {
				formInline: {
					user: '',
					password: ''
				},
				ruleInline: {
					user: [{
						required: true,
						message: '请填写用户名',
						trigger: 'blur'
					}],
					password: [{
							required: true,
							message: '请填写密码',
							trigger: 'blur'
						},
						{
							type: 'string',
							min: 6,
							message: '密码长度不能小于6位',
							trigger: 'blur'
						}
					]
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
			}
		}
	}
</script>

<style lang="scss">

	
</style>