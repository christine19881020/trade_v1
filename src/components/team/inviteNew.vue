<template>
	<section>
		<div class="page page-root simple-pjax">
			<div class="page-inner pd40">
				<div class="section newMember">
					<h3>
					   邀请新成员
				    </h3>
					<div class="formDesign">
						<Row>
							<Col :span="8">
							<AutoComplete v-model="name" :data="cilentList" class="radiusR_0" :filter-method="filterMethod" placeholder="姓名（必填）">
							</AutoComplete>
							</Col>
							<Col :span="8">
							<Select v-model="company" filterable size="large" class="radiusL_0" placeholder="所属公司（必填）" on-change="searchFn">
								<Option v-for="item in companyList" :value="item.value" :key="item.value">{{ item.label }}</Option>
							</Select>
							</Col>
						</Row>
						<Row>
							<Col :span="16">
							<Input v-model="cellphone" placeholder="手机号（必填）" />
							</Col>
						</Row>
						<Row>
							<Col :span="16">
							<Input v-model="ding" placeholder="钉钉号（必填）" />
							</Col>
						</Row>
						<Row>
							<Col :span="16">
							<Input v-model="email" placeholder="工作邮箱" />
							</Col>
						</Row>
						<Row>
							<Col :span="16">
							<Input v-model="wechat" placeholder="微信号" />
							</Col>
						</Row>
						<Row>
							<Col :span="16">
							<Input v-model="ID" placeholder="身份证号" />
							</Col>
						</Row>
						<Row>
							<Col :span="16">
							<Input v-model="telephone" placeholder="固定电话" />
							</Col>
						</Row>
						<Row>
							<Col :span="16">
							<Input v-model="fax" placeholder="传真号码" />
							</Col>
						</Row>
					</div>
				</div>
				<div class="section headUpload">
					<h3 class="section-head">
						<a class="title">头像</a>				
						<Dropdown  trigger="click" style="margin-left: 20px">
							<Button-group size="small" class="dropShadow">
								<Button type="ghost">上传头像</Button>
								<Button type="ghost"><Icon type="arrow-down-b"></Icon> </Button>
							</Button-group>
						</Dropdown>		
							<div class="todolist-toolbar">
								<i class="fa fa-th" :class="{'active':!isList}" @click="viewGridFn"></i>
								<i class="fa fa-list" :class="{'active':isList}" @click="viewListFn"></i>
							</div>
					</h3>
					<div class="Avatars">
						<div class="nowAvatar">
							<Avatar icon="person" size="large" />
						</div>

						<Avatar v-for="item in Avatars" :src="item.src" :key="item.id" />
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
	import { companyList } from '../../fakeData'
	export default {
		data() {
			return {

				cilentList: [
					'张大海',
					'邱天人',
					'梅海峰'
				],
				companyList: companyList,
				name: '',
				company: '0',
				cellphone: '',
				ding: '',
				email: '',
				wechat: '',
				ID: '',
				telephone: '',
				fax: '',
				Avatars: [{
					id: '1',
					src: 'https://i.loli.net/2017/08/21/599a521472424.jpg'
				}, {
					id: '2',
					src: 'http://k2.jsqq.net/uploads/allimg/1705/7_170509151643_3.jpg'
				}, {
					id: '3',
					src: 'http://img1.skqkw.cn:888/2014/12/06/10/oknznc1ak2v-84177.jpg'
				}]
			}
		},
		methods: {
			filterMethod(value, option) {
				return option.toUpperCase().indexOf(value.toUpperCase()) !== -1;
			}
		}
	}
</script>

<style>

</style>