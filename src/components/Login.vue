<template>
	<section>
		<div class="wrapper">
			<div class="signPage" id="page-signin">
				<div class="sign-page">
					<div class="hd">
						<h1 class="logo">账户登录</h1>
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
								<FormItem prop="user">
									<input type="text"  class="loginInput w300" v-model="formInline.user" placeholder="登录邮箱" size="large">

									</input>
								</FormItem>
								<FormItem prop="password" style="margin-bottom:0;">
									<input type="password" class="loginInput w300" v-model="formInline.password" placeholder="密码" size="large"></input>
									<div class="desc clearfix">
										<p class="left">
											<label for="cb-remember"><Checkbox></Checkbox> 下次自动登录</label>
										</p>
										<p class="right">
											<span class="forgot-pw"><router-link to="/forgotPassword">忘记密码了？</router-link></span>
										</p>
									</div>
								</FormItem>
								<FormItem class="form-buttons">
									<Button class="loginBtn" size="large" @click="handleSubmit('formInline')">登录</Button>
									<div class="desc" style="text-align:center;">
										没有账号？
										<router-link to="/register">立即注册 →</router-link>
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
					user: '1111',
					password: '11111111111'
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
							min: 8,
							message: '密码长度不能小于8位',
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
						sessionStorage.setItem('user', JSON.stringify('111'));
						this.$router.push({path:'/order'})
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