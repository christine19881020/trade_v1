<template>
	<section>
		<div class="page page-root simple-pjax">
			<div class="page-inner pd40">
				<h3>
					创建新订单
				</h3>
				<div class="formDesign">
					<Row>
						<Col :span="10">
						<Select v-model="model11" filterable size="large" class="radiusR_0" placeholder="输入客户名称（必填）">
							<Option v-for="item in cilentList" :value="item.value" :key="item.value">{{ item.label }}</Option>
						</Select>
						</Col>
						<Col :span="7">
						<Select v-model="model22" filterable size="large" class="radiusL_0" placeholder="输入所在国家" on-change="searchFn">
							<Option v-for="item in country" :value="item.value" :key="item.value">{{ item.label }}</Option>
						</Select>
						</Col>
					</Row>
					<Row>
						<Col :span="10">
						<Input v-model="one" placeholder="输入合同号（必填）" class="radiusR_0"></Input>
						</Col>
						<Col :span="7">
						<Input v-model="two" placeholder="客户PO号" class="radiusL_0"></Input>
						</Col>
					</Row>
					<Row>
						<Col :span="10">
						<Date-picker v-model="three" class="radiusR_0" type="date" size="large" placeholder="外销合同签订日（必填）" style="width: 100%"></Date-picker>
						</Col>
						<Col :span="7">
						<Date-picker v-model="four" class="radiusL_0" type="date" size="large" placeholder="交货日/Time of Shipment（必填）" style="width: 100%"></Date-picker>
						</Col>
					</Row>
					<Row>
						<Col :span="12">
						<Date-picker v-model="five" type="date" size="large" placeholder="下单加工日期" style="width: 100%"></Date-picker>
						</Col>
					</Row>
					<Row>
						<Col :span="12">
						<Input v-model="six" placeholder="付款方式/Terms of Payment"></Input>
						</Col>
					</Row>
					<Row>
						<Col :span="12">
						<Input v-mode="seven" placeholder="起运港/Port of Shipment"></Input>
						</Col>
					</Row>
					<Row>
						<Col :span="12">
						<Input v-model="eight" placeholder="目的港/Port of Destination"></Input>
						</Col>
					</Row>

					<Row>
						<Col :span="12">
						<Input v-model="nine" placeholder="报价方式/Terms of Price"></Input>
						</Col>
					</Row>
					<Row>
						<Col :span="12">
						<Input v-model="ten" type="textarea" class="myTextArea" placeholder="唛头/Shipping Mark"></Input>
						</Col>
					</Row>
				</div>
				<div class="section section-files">
					<h3 class="section-head">
							<a class="title">产品</a>
							<Dropdown trigger="click" style="margin-left: 20px">
								<Button-group size="small" class="dropShadow">
									<Button type="ghost">添加产品</Button>
									<Button type="ghost"><Icon type="arrow-down-b"></Icon> </Button>
								</Button-group>
								<Dropdown-menu slot="list" class="dropMenu">
									<Dropdown-item><i class="fa fa-plus"></i>添加产品</Dropdown-item>
								</Dropdown-menu>
							</Dropdown>
							
                     </h3>
					<div class="productBox">
						<div class="productLine" v-for="item in products">
							<div class="todo-actions actions">
								<div class="inr">
									<Tooltip content="删除" placement="top">
										<i class="fa fa-trash"></i>
									</Tooltip>
									<Tooltip content="复制" placement="top">
										<i class="fa fa-copy"></i>
									</Tooltip>
								</div>
							</div>
							<Row class="produceLine">
								<Col :span="3">
								<Input placeholder="款号" class="radiusR_0" v-model="item.styleNo"></Input>
								</Col>
								<Col :span="3">
								<Input placeholder="品名" class="radiusRL_0" v-model="item.className"></Input>
								</Col>
								<Col :span="3">
								<!--	<Input placeholder="图片" class="radiusRL_0" v-model="item.pic">-->
								<el-upload class="ivu-input listUpload radiusRL_0" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
									<img v-if="imageUrl" :src="imageUrl" class="avatar">
									<!--	<i v-else class="el-icon-plus"></i>-->
									<Button size="small">上传图片</Button>
								</el-upload>

								<!--</Input>-->
								</Col>
								<Col :span="3">
								<Input placeholder="颜色" class="radiusRL_0" v-model="item.color"></Input>
								</Col>
								<Col :span="3">
								<Input placeholder="尺码" class="radiusRL_0" v-model="item.size"></Input>
								</Col>
								<Col :span="3">
								<Input placeholder="数量" class="radiusRL_0" v-model="item.amount"></Input>
								</Col>
								<Col :span="3">
								<Input placeholder="单价$" class="radiusRL_0" v-model="item.unitprice"></Input>
								</Col>
								<Col :span="3">
								<Input placeholder="金额$" class="radiusL_0" v-model="item.totalprice"></Input>
								</Col>
							</Row>
						</div>
					</div>
					<newFiles></newFiles>
					<div class="section-footer">
						<Button class="bigBtn" type="warning" size="large" @click="planMissionFn">下一步，排计划</Button>
						<Button type="text">先保存不排计划</Button>
						<Button type="text">取消</Button>
					</div>
				</div>

			</div>
		</div>
	</section>
</template>

<script>
	import newFiles from '@/components/order/newFiles'
	import { cilentList, country } from '../../fakeData'
	export default {
		name: 'newOrder',
		components: {
			newFiles
		},
		data() {
			return {
				imageUrl: '',
				cilentList: cilentList,
				country: country,
				model11: '',
				model22: '',
				isList: false,
				one: '',
				two: '',
				three: '',
				four: '',
				five: '',
				six: '',
				seven: '',
				eight: '',
				nine: '',
				ten: '',
				products: [{
					styleNo: '款号1',
					className: '品名1',
					pic: '图片1',
					color: '颜色1',
					size: '尺码1',
					amount: '数量1',
					unitprice: '单价$',
					totalprice: '金额$'
				}, {
					styleNo: '2',
					className: '3',
					pic: '4',
					color: '5',
					size: '6',
					amount: '7',
					unitprice: '11',
					totalprice: '222'
				}]
			}
		},
		methods: {
			viewGridFn() {
				this.isList = false;
			},
			viewListFn() {
				this.isList = true;
			},
			searchFn(query) {
				console.log(query)

			},
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
			planMissionFn(){
				this.$router.push('/order/newOrder/planMission')
			}

		}
	}
</script>

<style lang="scss">

</style>