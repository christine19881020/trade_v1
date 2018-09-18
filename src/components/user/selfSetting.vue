<template>
	<div class="page page-root simple-pjax">
		<div class="page-inner pd40" style="padding-bottom: 0;">
			<h3>个人设置</h3>
			<div class="headImgUpload clearfix">
				<el-upload class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
					<img v-if="imageUrl" :src="imageUrl" class="avatar big">
					<i v-else class="el-icon-plus avatar-uploader-icon"></i>
				</el-upload>
				<div class="chooseNewHead">
					<a>选择新头像</a>
					<p>你可以选择不超过1MB的 png/jpg 图片作为头像</p>
				</div>
			</div>
			<Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="100" class="formValidate">
				<FormItem label="名字" prop="name">
					<Input v-model="formValidate.name" :placeholder="formValidate.name"></Input>
				</FormItem>
				<FormItem label="手机" prop="cellphone">
					<Col :span="22"><Input v-model="formValidate.cellphone" :placeholder="formValidate.cellphone" disabled=""></Input></Col>
					<Col :span="2"><Button type="text" @click="$router.push('/user/changeCellphone')">更换</Button></Col>				    
				</FormItem>
				<FormItem label="钉钉" prop="dingding">
					<Input v-model="formValidate.dingding" :placeholder="formValidate.dingding" disabled=""></Input>
				</FormItem>
				<FormItem label="邮箱" prop="mail">
					<Col :span="22"><Input v-model="formValidate.mail" :placeholder="formValidate.mail" disabled=""></Input></Col>
					<Col :span="2"><Button type="text"  @click="$router.push('/user/changeEmail')">更换</Button></Col>
				</FormItem>
				<FormItem label="微信" prop="wechat">
					<Input v-model="formValidate.wechat" :placeholder="formValidate.wechat" ></Input>
				</FormItem>
				<FormItem label="身份证" prop="ID">
					<Input v-model="formValidate.ID" :placeholder="formValidate.ID" ></Input>
				</FormItem>
				<FormItem label="固话" prop="telephone">
					<Input v-model="formValidate.telephone" :placeholder="formValidate.telephone" ></Input>
				</FormItem>
				<FormItem label="传真" prop="fax">
					<Input v-model="formValidate.fax" :placeholder="formValidate.fax" ></Input>
				</FormItem>
				<FormItem label="密码">
					<router-link to='/user/changePassword'>修改密码</router-link>
				</FormItem>
				<FormItem>
					<Button type="primary" @click="handleSubmit('formValidate')">保存</Button>
					<Button type="ghost" @click="handleReset('formValidate')" style="margin-left: 8px">重置</Button>
				</FormItem>
			</Form>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				imageUrl: '',
				formValidate: {
					name: '林志文',
					cellphone: '18888655285',
					dingding:'18888655285',
					mail:'zwen@dingtalk.com',
					wechat:'nbzwen',
					ID:'33027828823211334433',
					telephone:'18888655285',
					fax:'18899922773'
				},
				ruleValidate: {
//					name: [{
//						required: true,
//						message: '姓名不能为空',
//						trigger: 'blur'
//					}],
//					mail: [{
//							required: true,
//							message: '邮箱不能为空',
//							trigger: 'blur'
//						},
//						{
//							type: 'email',
//							message: '邮箱格式不正确',
//							trigger: 'blur'
//						}
//					]
					
				}
			};
		},
		methods: {
			handleAvatarSuccess(res, file) {
				this.imageUrl = URL.createObjectURL(file.raw);
			},
			beforeAvatarUpload(file) {
				const isJPG = file.type === 'image/jpeg';
				const isLt2M = file.size / 1024 / 1024 < 2;

				if(!isJPG) {
					this.$message.error('上传头像图片只能是 JPG 格式!');
				}
				if(!isLt2M) {
					this.$message.error('上传头像图片大小不能超过 2MB!');
				}
				return isJPG && isLt2M;
			},
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

<style lang="scss">
	
</style>