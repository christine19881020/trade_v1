<template>
	<section>
		<div class="page page-root simple-pjax">
			<div class="page-inner pd40" style="padding-bottom:0;">
				<detailHead></detailHead>
				<div class="project-sections">
					<div class="endDayBox">
						<p>
							<span class="range">2017.5.1~2017.8.1</span>
							<span class="rest">剩余10天</span>
						</p>
						<p>
							<span class="range">离岸价</span>
							<span class="rest">FOR NINGBO</span>
						</p>
						<p>
							<span class="range">电汇付款</span>
							<span class="rest">BY T/T IN ADVANCE</span>
						</p>
						<p>
							<span class="range">海运</span>
							<span class="rest">宁波 NINGBO -->西班牙港 PORT OF SPAN</span>
						</p><p>
							<span class="range">客户PO号</span>
							<span class="rest">KJGUGY1998978</span>
						</p>
						<p>
							<span class="range">美元</span>
							<span class="rest">USD 4678.70</span>
						</p>

					</div>
					<!--<detailTodos></detailTodos>-->
					<div class="section section-files clearfix">
						<h3 class="section-head todo">
							<div class="todo-actions actions">
										<div class="inr">
											
											<Tooltip content="生成配比表">
												<i class="iconfont icon-shengchengqianbao"></i>
											</Tooltip>
											<Tooltip content="准备出运">
												<i class="fa fa-upload"></i>
											</Tooltip>
										</div>
									</div>
					        <a class="title">产品</a>
			            </h3>
						<div class="productList">
							<ul class="todolist">
								<li class="todo" v-for="item in products">
									<div class="todo-actions actions">
										<div class="inr">
											<Tooltip placement="top" content="删除">
												<Icon type="trash-a" @click.native="deleteJFn(item.todoList,indexJ)"></Icon>
											</Tooltip>
											<Tooltip placement="top" content="编辑">
												<Icon type="edit"></Icon>
											</Tooltip>
											<Tooltip content="关注">
												<i class="iconfont icon-tese2"></i>
											</Tooltip>
											<Tooltip content="准备出运">
												<i class="iconfont icon-daochu bdl"></i>
											</Tooltip>
										</div>
									</div>
									<div class="proBox clearfix">
										<img :src="item.img" />
										<div class="proDetail" @click="$router.push('/order/orderDetail/1')">
											<p>
												{{item.kno}}&nbsp;&nbsp;{{item.pno}}
											</p>
											<p>
												<span v-for="itemM in item.colors">
													{{itemM}}&nbsp;
												</span>
											</p>
											<p>
												{{item.num}}{{item.unit}}&nbsp;&nbsp;&nbsp;{{item.currency}}{{item.totalPrice}}
											</p>
										</div>
									</div>
								</li>
							</ul>
						</div>
					</div>
					<detailFiles></detailFiles>
					<detailMessage></detailMessage>
				</div>
				<div class="footer clearfix">
					<router-link to="" class="footLink right"><i class="fa fa-trash-o "></i></router-link>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	import detailHead from './detailHead'
	import detailMessage from './detailMessage'
	import detailTodos from './detailTodos'
	import detailFiles from './detailFiles'
	import Document from '@/components/document'
	import Calendar from '@/components/calendar'

	import { products } from '../../fakeData'
	export default {
		name: 'contractDetail',
		components: {
			detailHead,
			detailMessage,
			detailTodos,
			detailFiles,
			Document,
			Calendar
		},
		data() {
			return {
				single: false,
				products: products
			}
		}
	}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

</style>