<template>
	<section>
		<div class="wrapper">
			<div class="signPage" id="page-signin">
				<div class="sign-page">
					<div class="hd">
						<h1 class="logo">企业注册</h1>
					</div>
					<div class="bd">
						<!--<div class="signin-title">
							<a href="javascript:;" class="link-normal-signin">账户登录</a>
							<span>或</span>
							<a href="javascript:;" class="link-dingtalk-signin">
								<i class="iconfont icon-dingding"></i>钉钉登录
							</a>
						</div>-->
						<div class="normal-signin sigin-section">
							<!--<div class="signin-arrow">
								<i class="arrow arrow-shadow-1"></i>
								<i class="arrow arrow-shadow-0"></i>
								<i class="arrow arrow-border"></i>
								<i class="arrow arrow-basic"></i>
							</div>-->
							<Form ref="formInline" :model="formInline" :rules="ruleInline">
								<FormItem prop="fullname">
									<input type="text" class="loginInput w300" v-model="formInline.fullname" placeholder="企业全称（必填）">
									</input>
								</FormItem>
								<FormItem prop="cellphone">
									<input type="text" class="loginInput w300" v-model="formInline.cellphone" placeholder="管理手机号（必填）">
									</input>
								</FormItem>
								<FormItem prop="message" class="inputBtn large">
									<input type="text" class="loginInput w200" v-model="formInline.cellphone" placeholder="短信验证码（必填）">
									</input>
									<button class="messageBtn">发送验证码</button>
								</FormItem>
								<FormItem>
									<input type="text" class="loginInput w300" v-model="formInline.email" placeholder="管理邮箱">
									</input>
								</FormItem>

								<FormItem>
									<input type="password" class="loginInput w300" v-model="formInline.managePassword" placeholder="管理登陆密码，至少包含8个字符">
									</input>
								</FormItem>
								<FormItem>
									<input type="password" class="loginInput w300" v-model="formInline.sureManagePassword" placeholder="确认管理密码">
									</input>
									<div class="desc clearfix">
										<p class="left">
											<label for="cb-remember"><Checkbox></Checkbox>同意《集货用户服务协议》</label>
										</p>
										
									</div>
								</FormItem>
								<FormItem class="form-buttons">
									<Button class="loginBtn" size="large" @click="handleSubmit('formInline')">注册</Button>
									<div class="desc" style="text-align:center;">
										已有注册企业？
										<router-link to="/login">立即登陆→</router-link>
									</div>
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

<style scoped lang="scss">
	body {
		background: #f4f7ed;
		font-size: 16px;
		font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', sans-serif;
	}	
</style>