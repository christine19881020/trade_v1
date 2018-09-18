<template>
	<section>
		<!--<router-link to="/order/contractDetail/1">详情页</router-link>-->
		<div class="page">
			<div class="page-inner pd40" style="padding-bottom: 0;">
				<div class="">
					<div class="oprateSquare clearfix">
						<Button shape="circle" size="large"><i class="fa fa-star-o"></i></Button>
						<Button shape="circle" size="large"><i class="fa fa-exclamation-triangle"></i></Button>
						<Button shape="circle" size="large" class="active" @click="dahuofn">大货</Button>
						<Button shape="circle" size="large">开发样</Button>
						<Poptip trigger="hover" placement="bottom" class="newDrop">
							<router-link href="javascript:;" to="/order/newOrder" class="right">新建订单</router-link>
							<ul slot="content">
								<li v-for="item in models">
									<router-link href="javascript:;" to="/order/newOrder">{{item.name}}</router-link>
								</li>
							</ul>
						</Poptip>
					</div>
					<div @mouseover="mouseoverFn" @mouseout="mouseoutFn" style="padding:20px 30px 0;">
						<Row :gutter="16" class="orderHead clearfix" :class="{'classHide':isHide,'classShow':!isHide}">
							<Col :span="4" class="center">
							<Select v-model="clientCompanySort" multiple style="width:100px" placeholder="客户">
								<Option v-for="item in clientCompanyList" :key="item.value" :value="item.value">{{item.label}}</Option>
							</Select>
							<div class="sortIcon marginRIGHT10">
								<i class="fa fa-sort-alpha-asc" v-if="isAsc1" @click="sortClientFn"></i>
								<i class="fa fa-sort-alpha-desc" v-if="!isAsc1" @click="sortClientFn"></i>
							</div>
							</Col>
							<Col :span="4" class="center">
							<Select v-model="contractSort" multiple placeholder="合同号">
								<Option v-for="item in contractList" :value="item.value" :key="item.value">{{item.label}}</Option>
							</Select>
							</Col>
							<Col :span="4" class="center">
							<Select v-model="salesmanSort" multiple style="width:100px" placeholder="业务员">
								<Option v-for="item in salesmanList" :value="item.value" :key="item.value">{{item.label}}</Option>
							</Select>
							<div class="sortIcon marginRIGHT10">
								<i class="fa fa-sort-alpha-asc" v-if="isAsc2" @click="isAsc2=!isAsc2"></i>
								<i class="fa fa-sort-alpha-desc" v-if="!isAsc2" @click="isAsc2=!isAsc2"></i>
							</div>
							</Col>
							<Col :span="4" class="center">
							<Select v-model="NOsort" multiple placeholder="款号">
								<Option v-for="item in NOList" :value="item.value" :key="item.value">{{item.label}}</Option>
							</Select>
							</Col>
							</Col>
							<Col :span="4" class="center">
							<Select v-model="signDate" multiple style="width:100px" placeholder="签订日">
								<Option v-for="item in signDateList" :value="item.value" :key="item.value">{{ item.label }}</Option>
							</Select>
							<div class="sortIcon marginRIGHT10">
								<i class="fa fa-sort-numeric-asc" v-if="isAsc4" @click="isAsc4=!isAsc4"></i>
								<i class="fa fa-sort-numeric-desc" v-if="!isAsc4" @click="isAsc4=!isAsc4"></i>
							</div>
							</Col>
							<Col :span="4" class="center">
							<!--<DatePicker :value="deliveryDate" class="left" format="yyyy年MM月" type="month" placeholder="交货日期"></DatePicker>-->
							<Select v-model="deliveryDate" multiple style="width:100px" placeholder="交货日">
								<Option v-for="item in deliveryDateList" :value="item.value" :key="item.value">{{ item.label }}</Option>
							</Select>
							<div class="sortIcon marginRIGHT10">
								<i class="fa fa-sort-numeric-asc" v-if="isAsc5" @click="isAsc5=!isAsc5"></i>
								<i class="fa fa-sort-numeric-desc" v-if="!isAsc5" @click="isAsc5=!isAsc5"></i>
							</div>
							</Col>
						</Row>
					</div>
					<div class="orderLists ">
						<div v-for="item in orderList" class="list">
							<div class="listTitle clearfix" @click="goContractDetailFn">
								<span class="left">
				                   	{{item.clientCompany}} &nbsp;- &nbsp;{{item.contract}} &nbsp;-&nbsp; {{item.salesman}}
									</span>
								<span class="right">
								   	{{item.startDAY}} &nbsp;--&nbsp; {{item.endDAY}} &nbsp; &nbsp;剩 &nbsp;{{item.leftDAY}} 天
								   </span>
							</div>
							<ul>
								<li v-for="itemli in item.children" class="clearfix listLi" @click="goOrderDetailFn">
									<img :src="itemli.img" />
									<label>{{itemli.NO}}&nbsp;{{itemli.kNO}}</label>
									<ul class="processBox">
										<li>
											<Tooltip class="left">
												 <div class="dot"></div>  
												 <div slot="content">订单生成</div>
											</Tooltip>
											<div class="proLine" style="width:50px"></div>
										</li>
										<li v-for="(proItem,index) in itemli.steps">									    
											<Tooltip class="left" disabled v-if="proItem.state">
												<div class="dot active"  v-if="index!=itemli.steps.length-1"></div>
												<div class="ingContent" v-if="proItem.state"><i class="fa fa-angle-left"></i>{{proItem.name}}</div>
											</Tooltip>
											<Tooltip class="left" v-if="!proItem.state" placement="right">
												<div class="dot"  v-if="index!=itemli.steps.length-1"></div>
												<div slot="content">{{proItem.name}}</div>
											</Tooltip>
											<Tooltip class="left" placement="right">
												<div class="dashedDot" :class="{'active':proItem.state}" v-if="index==itemli.steps.length-1"></div>
												<div slot="content">{{proItem.name}}</div>
											</Tooltip>
											<div class="proLine"></div>
										</li>
									</ul>
								</li>
							</ul>
						</div>
					</div>
					<router-link to="/order/finishedOrderList" class="pdl20">已完成订单</router-link>
				</div>
				<div class="footer">
					<router-link to="/order/list/taskTemplate" class="footLink">管理任务模板</router-link>
					<router-link to="/client/list" class="footLink">管理客户</router-link>
					<router-link to="/factory/list" class="footLink">管理厂家</router-link>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	export default {
		name: 'orderList',
		data() {
			return {
				isHover: false,
				isLeave: false,
				isHide: false,
				isList: false,
				isAsc1: true,
				isAsc2: true,
				isAsc3: true,
				isAsc4: true,
				isAsc5: true,
				signDateList: [{
						value: '2017-03',
						label: '2017-03'
					},
					{
						value: '2017-04',
						label: '2017-04'
					},
					{
						value: '2017-05',
						label: '2017-05'
					},
					{
						value: '2017-06',
						label: '2017-06'
					},
					{
						value: '2017-07',
						label: '2017-07'
					},
					{
						value: '2017-08',
						label: '2017-08'
					}
				],
				signDate: [],
				deliveryDateList: [{
						value: '2018-01',
						label: '2018-01'
					},
					{
						value: '2018-02',
						label: '2018-02'
					},
					{
						value: '2018-03',
						label: '2018-03'
					},
					{
						value: '2018-05',
						label: '2018-05'
					},
					{
						value: '2018-07',
						label: '2018-07'
					},
					{
						value: '2018-10',
						label: '2018-10'
					}
				],
				deliveryDate: [],
				models: [{
					name: '大货加工'
				}, {
					name: '任务样'
				}],
				clientCompanySort: [],
				clientCompanyList: [{
						value: '1',
						label: 'B&W'
					},
					{
						value: '2',
						label: '集货公司'
					}
				],
				contractSort: [],
				contractList: [{
					value: '1',
					label: 'HF107001'
				}, {
					value: '2',
					label: 'HG6666'
				}],
				salesmanSort: [],
				salesmanList: [{
						value: '1',
						label: '林志文'
					},
					{
						value: '2',
						label: '周华斌'
					}
				],
				NOsort: [],
				NOList: [{
					value: '1',
					label: 'KFG10000',
				}, {
					value: '2',
					label: 'KFG10001',
				}, {
					value: '3',
					label: 'KFG10003',
				}, {
					value: '4',
					label: 'KFG10009',
				}],
				orderList: [{
					clientCompany: 'B&W',
					contract: 'HF107001',
					salesman: '林志文',
					startDAY: '2017.7.30',
					endDAY: '2017.12.30',
					leftDAY: '5',
					children: [{
						img: require('../../assets/u25.png'),
						NO: 'HL0234',
						kNO: '品名XXX',
						steps: [{
							name: '面料到位',
							state: true
						}, {
							name: '辅料到位',
							state: true
						}, {
							name: '打样完成',
							state: true
						}, {
							name: '正在生产',
							state: false
						}]
					}, {
						img: require('../../assets/u25.png'),
						NO: 'HL0235',
						kNO: '品名XXX',
						steps: [{
							name: '面料准备',
							state: true
						}, {
							name: '辅料准备',
							state: true
						}, {
							name: '正在打样',
							state: false
						}, {
							name: '还未生产',
							state: false
						}]
					}, {
						img: require('../../assets/u25.png'),
						NO: 'HL0236',
						kNO: '品名XXX',
						steps: [{
							name: '面料进度',
							state: false
						}, {
							name: '辅料进度',
							state: false
						}, {
							name: '打样进度',
							state: false
						}, {
							name: '生产进度',
							state: false
						}]
					}, {
						img: require('../../assets/u25.png'),
						NO: 'HL0237',
						kNO: '品名XXX',
						steps: [{
							name: '面料进度',
							state: false
						}, {
							name: '辅料进度',
							state: false
						}, {
							name: '打样进度',
							state: true
						}, {
							name: '生产进度',
							state: false
						}]
					}]

				}, {
					clientCompany: '集货公司',
					contract: 'HG6666',
					salesman: '周华斌',
					startDAY: '2017.7.30',
					endDAY: '2017.12.30',
					leftDAY: '5',
					children: [{
						img: require('../../assets/u25.png'),
						NO: 'HL0234',
						kNO: '品名XXX',
						steps: [{
							name: '面料到位',
							state: false
						}, {
							name: '辅料到位',
							state: true
						}, {
							name: '打样完成',
							state: true
						}, {
							name: '正在生产',
							state: false
						}]
					}, {
						img: require('../../assets/u25.png'),
						NO: 'HL0235',
						kNO: '品名XXX',
						steps: [{
							name: '面料准备',
							state: true
						}, {
							name: '辅料准备',
							state: true
						}, {
							name: '正在打样',
							state: false
						}, {
							name: '还未生产',
							state: false
						}]
					}, {
						img: require('../../assets/u25.png'),
						NO: 'HL0236',
						kNO: '品名XXX',
						steps: [{
							name: '面料进度',
							state: false
						}, {
							name: '辅料进度',
							state: false
						}, {
							name: '打样进度',
							state: false
						}, {
							name: '生产进度',
							state: false
						}]
					}, {
						img: require('../../assets/u25.png'),
						NO: 'HL0237',
						kNO: '品名XXX',
						steps: [{
							name: '面料进度',
							state: false
						}, {
							name: '辅料进度',
							state: false
						}, {
							name: '打样进度',
							state: false
						}, {
							name: '生产进度',
							state: false
						}]
					}]

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
			goContractDetailFn() {
				this.$router.push({
					path: '/order/contractDetail/1'
				});
			},
			goOrderDetailFn() {
				this.$router.push({
					path: '/order/orderDetailContract/1'
				});
			},
			sortClientFn() {
				this.isAsc1 = !this.isAsc1
			},
			showHeadFn() {
				this.isHide = !this.isHide;
			},
			dahuofn() {
				//				alert(1)
			},
			mouseoverFn() {
				this.isHover = true;
			},
			mouseoutFn() {
				setInterval(() => {
					this.isHover = false;
				}, 3000)
			}
		},
		mounted() {
			//			setTimeout(() => {
			//				this.isHide = true
			//			}, 3000)
		}
	}
</script>

<style lang="scss" scoped>
	.processBox {
		margin-top: 10px;
		float: right;
		width: 470px;
		ul {
			li {
				padding: 5px 0;
			}
		}
		.proLine {
			float: none;
			width:120px;
		
		}
	}
</style>