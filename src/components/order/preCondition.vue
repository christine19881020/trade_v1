<template>
	<section>
		<div class="page page-root simple-pjax page-behind" style="">
			<router-link class="link-page-behind" to="/order/list/taskTemplate/bigTemplate">大货任务模板</router-link>
		</div>
		<div class="page page-1 simple-pjax">
			<div class="page-inner pd40">
				<div class="project-header">
					<div class="project-hd-info">
						<span class="project-name">生产</span>
						<span class="project-desc"></span>
					</div>
				</div>
				<div class="section section-todos">
					<h3 class="section-head">
						<a class="title">前置任务：</a>	
						<span>确定面料厂</span>
					</h3>
				</div>

				<div class="section section-warning">
					<h3 class="section-head">
						<a class="title">前置条件</a>	
					</h3>
					<div class="warningBox">
						<ul>
							<li>
								<Checkbox v-model="single1">
									结束后间隔
									<Input v-model="wDate1" size="small" style="width:50px;"></Input>天
								</Checkbox>
							</li>
							<li>
								<Checkbox v-model="single2">
									结束后马上开始
								</Checkbox>
							</li>
						</ul>
					</div>
				</div>
				<div class="bdtDotted"></div>
				<div class="pageFooter">
					<Button type="success">保存前置条件</Button>
					<Button>取消</Button>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	export default {
		data() {
			return {
				single1: '',
				single2: '',
				wDate1: ''
			}
		}
	}
</script>

<style scoped lang="scss">
	.section {
		margin-top: 40px;
	}
	
	.section-todos .todolist {
		margin-top: 20px;
		.todo {
			margin: 10px 0;
		}
	}
	
	.section-head {
		span {
			font-weight: normal;
		}
	}
</style>