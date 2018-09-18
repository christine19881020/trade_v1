<template>
	<section>		
		<div class="page page-root simple-pjax">
			<div class="page-inner">
				<h3>
					流程模板
				</h3>
				<ul class="orderTemplate">
					<li class="clearfix" @click="goDetailFn">
						<Icon type="ios-paper"></Icon>
							<span>大货加工</span>
							<Button-group class="right btnGroup">
								<Button type="text" class="greenA">  
					            复制模板
					        </Button>
								<Button type="text" class="greenA">
					            生成新订单					    
					        </Button>
							</Button-group>
					</li>
					<li class="clearfix"><Icon type="ios-paper"></Icon><span>任务样</span></li>
				</ul>

			</div>
		</div>
	</section>
</template>

<script>
	export default {
		name: 'taskTemplate',
		data() {
			return {
			}
		},
		methods:{
			goDetailFn(){
				this.$router.push('/order/list/taskTemplate/bigTemplate')
			}
		},
		mounted() {

		}
	}
</script>

<style lang="scss" >
	
</style>