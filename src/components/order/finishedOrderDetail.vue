<template>
	<section>
		<div class="page page-root simple-pjax page-behind" >
			<router-link class="link-page-behind" to="/order/finishedContractDetail">B&M - HF1707001</router-link>
		</div>
		<div class="page page-1 simple-pjax" >
			<div class="page-inner pd40">
				<div class="detail-actions">
					<div class="item detail-star-action">
						<a href="#" class="detail-action detail-action-star stared">复制订单</a>
					</div>					
				</div>
				<h3 class="grey">HL0234 品名XXX</h3>
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
							2017.5.1 ~ 2017.8.1  
						</div>
						<div class="sizeLine clearfix">
							<label>蓝色</label><span><i>S×45000</i> <i>L×45000</i><i>XL×5000</i> </span>
						</div>
						<div class="sizeLine clearfix">
							<label>黄色</label><span><i>S×45000</i> <i>L×45000</i><i>XL×5000</i></span>

						</div>
						<div class="sizeLine clearfix">
							<label>红色</label><span><i>S×45000</i> <i>L×45000</i><i>XL×5000</i> <i>XXL×4500</i> <i>XXXL×400</i> <i>M×50000</i></span>

						</div>
					</div>

				</div>
				<finishedMissionTwo></finishedMissionTwo>
				<finishedDetailFiles></finishedDetailFiles>
				<finishedDetailMessage></finishedDetailMessage>
			</div>
			<div class="footer clearfix">
				<router-link to="" class="footLink right"><i class="fa fa-trash "></i></router-link>
			</div>
		</div>
	</section>
</template>

<script>
	import finishedMissionTwo from './finishedMissionTwo'
	import finishedDetailFiles from './finishedDetailFiles'
	import finishedDetailMessage from './finishedDetailMessage'
	export default {
		name: 'orderDetail',
		components: {
			finishedMissionTwo,
			finishedDetailFiles,
			finishedDetailMessage
		},
		data() {
			return {

			}

		},
		methods: {

		},
		mounted(){
		console.log(this.$route)	
		}
	}
</script>

<style>

</style>