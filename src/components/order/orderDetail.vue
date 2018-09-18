<template>
	<section>
		<div class="page page-root simple-pjax page-behind">
			<router-link class="link-page-behind" to="/order/contractDetail/1">B&M - HF1707001 </router-link>
		</div>
		<div class="page page-1 simple-pjax">
			<div class="page-inner pd40">
				<div class="detail-actions">
					<div class="item detail-star-action">
						<a href="#" class="detail-action detail-action-star stared">准备出运</a>
					</div>
					<div class="item">
						<router-link to="/order/newOrder/bigProcess" class="detail-action detail-action-edit">导出配比</router-link>
					</div>
					<div class="item">
						<router-link to="/order/showIMG" class="detail-action detail-action-edit">关注</router-link>
					</div>
					<div class="item">
						<a href="#" class="detail-action detail-action-edit">设置</a>
					</div>
				</div>
				<h3 class="grey">B&M - HF1707001 - HL0234 品名</h3>
				<div class="orderDetailBox clearfix">
					<div class="box left">
						<div class="smallBox">
							<img src="../../assets/u125.png" class="left" v-on="{mouseover:imgZoomInFn,mouseout:imgZoomOutFn}">
							<div class="mask"></div>
						</div>
						<div class="bigBox" v-if="zoomImgShow">
							<img src="../../assets/u125.png" />
						</div>
					</div>
					<div class="details left">
						<div class="sizeLine clearfix">
							蓝色 红色 白色
						</div>
						<div class="sizeLine clearfix">
							1050件
						</div>
						<div class="sizeLine clearfix">
							$1585.50
						</div>
						<div class="sizeLine clearfix">
							2017.5.1 ~ 2017.8.1 剩余 10 天
						</div>
					</div>
				</div>
				<Table border :columns="sizeList" :data="colorList" class="detailTable" style="width:800px;"></Table>
				<!--<orderDetailTodos></orderDetailTodos>-->
				<detailTodos></detailTodos>
				<detailFiles></detailFiles>
				<orderDetailMessage></orderDetailMessage>
			</div>
			<div class="footer clearfix">
				<router-link to="" class="footLink right"><i class="fa fa-trash-o "></i></router-link>
			</div>
		</div>

	</section>
</template>

<script>
	import detailTodos from './detailTodos'
	import detailFiles from './detailFiles'
	import orderDetailMessage from './orderDetailMessage'
	export default {
		name: 'orderDetail',
		components: {
			detailTodos,
			detailFiles,
			orderDetailMessage
		},
		data() {
			return {
				zoomImgShow: false,
				sizeList: [{
						title: '配比',
						key: '配比',
						className: 'demo-table-info-column'
					}, {
						title: 'XS',
						key: 'XS'
					},
					{
						title: 'S',
						key: 'S'
					},
					{
						title: 'M',
						key: 'M'
					}, {
						title: 'L',
						key: 'L'
					}, {
						title: 'XL',
						key: 'XL'
					}, {
						title: 'XXL',
						key: 'XXL'
					}, {
						title: 'XXXL',
						key: 'XXXL'
					}
				],
				colorList: [{
					配比: '蓝色',
					XS: '0',
					S: '2',
					M: '3',
					L: '4',
					XL: '5',
					XXL: '6',
					XXXL: '7'
				}, {
					配比: '红色',
					XS: '1',
					S: '2',
					M: '3',
					L: '4',
					XL: '0',
					XXL: '6',
					XXXL: '7'
				}, {
					配比: '白色',
					XS: '1',
					S: '2',
					M: '3',
					L: '4',
					XL: '5',
					XXL: '6',
					XXXL: '7'
				}]

			}

		},
		methods: {
			imgZoomInFn() {
				this.zoomImgShow = true;
			},
			imgZoomOutFn() {
				this.zoomImgShow = false;
			}

		},
		mounted() {
			console.log(this.$route)
		}
	}
</script>

<style lang="scss">
	.big {
		width: 400px;
		height: 400px;
		position: absolute;
		top: 0;
		left: 360px;
		border: 1px solid #ccc;
		overflow: hidden;
		display: none;
	}
	
	.mask {
		width: 175px;
		height: 175px;
		background: rgba(255, 255, 0, 0.4);
		position: absolute;
		top: 0;
		left: 0;
		cursor: move;
		display: none;
	}
	
	.small {
		position: relative;
	}
	
	.box img {
		vertical-align: top;
	}
	
	.bigBox img {
		position: absolute;
	}
	
	.ivu-table td.demo-table-info-column {
		background-color: #f8f8f9;
		color: #495060;
		font-weight: bold;
	}
</style>