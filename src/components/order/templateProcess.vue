<template>
	<section>
		<div class="process">
			<div class="levelOne">
				<div class="block hoverFn clearfix">
					<Button @click="goDetailFn">面料到位</Button>
					<div class="addSquare  pos">
						<router-link to="/order/list/taskTemplate/bigTemplate/nodeEdit">添加内部任务</router-link>
						<router-link to="">添加下一步</router-link>
					</div>
					<div class="line"></div>
					<div class="lineConer rightTop">
					</div>
				</div>
				<div class="block hoverFn clearfix">
					<Button>打样确认</Button>
					<div class="addSquare  pos">
						<router-link to="/order/list/taskTemplate/bigTemplate/nodeEdit">添加内部任务</router-link>
						<router-link to="">添加下一步</router-link>
					</div>
					<div class="line"></div>
					<div class="middleLine">
					</div>
				</div>
				<div class="block hoverFn clearfix">
					<Button>辅料到位</Button>
					<div class="addSquare  pos">
						<router-link to="/order/list/taskTemplate/bigTemplate/nodeEdit">添加内部任务</router-link>
						<router-link to="">添加下一步</router-link>
					</div>
					<div class="line"></div>
					<div class="lineConer rightBottom">
					</div>
				</div>
			</div>
			<div class="connectLines">
			</div>
			<div class="lineTOend">
			</div>
			<i class="fa fa-caret-right"></i>
			<div class="levelTwo hoverFn">
				<Button>生产</Button>
				<div class="addSquare">
					<router-link to="/order/list/taskTemplate/bigTemplate/nodeEdit">添加内部任务</router-link>
					<router-link to="">添加下一步</router-link>
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
				isList: false
			}
		},
		methods: {
			viewGridFn() {
				this.isList = false;
			},
			viewListFn() {
				this.isList = true;
			},
			goDetailFn() {
				this.$router.push('/order/list/taskTemplate/bigTemplate/nodeEdit')
			}
		}
	}
</script>

<style lang="scss" scoped>
	.project-links {
		.todolist-toolbar {
			margin: 16px 10px 0 20px;
		}
	}
	
	.section-todos .todolist .todo {
		padding: 8px 5px 8px 14px;
		.actions {
			width: 110px;
			top: 5px;
			left: -110px;
		}
	}
	
	.process {
		padding: 40px 80px;
		.levelOne {
			float: left;
			.block {
				float: none;
				margin-bottom: 50px;
				position: relative;
				button {
					float: left;
				}
				.line {
					float: left;
					width: 100px;
					height: 1px;
					background: #84a099;
					margin-top: 15px;
				}
				.lineConer {
					float: left;
					width: 20px;
					height: 20px;
					border-color: #84a099;
					border-style: solid;
				}
				.lineConer.rightTop {
					border-width: 1px 1px 0 0;
					border-top-right-radius: 50%;
					margin-top: 15px;
				}
				.lineConer.rightBottom {
					border-width: 0 1px 1px 0;
					border-bottom-right-radius: 50%;
					margin-top: -4px;
				}
				.middleLine {
					width: 20px;
					height: 1px;
					background: #84a099;
					float: left;
					margin-top: 15px;
				}
			}
		}
		.levelTwo {
			float: left;
			margin-top: 85px;
		}
		.connectLines {
			float: left;
			height: 140px;
			width: 1px;
			background: #84a099;
			margin-top: 35px;
			margin-left: -1px;
		}
		.lineTOend {
			width: 150px;
			height: 1px;
			background: #84a099;
			float: left;
			margin-top: 100px;
		}
		.fa-caret-right {
			float: left;
			margin-top: 92px;
			color: #84a099;
		}
		.addSquare {
			margin-top: 10px;
			margin-left: -40px;
			opacity: 0;
			transition: opacity 500ms ease-in-out;
			a {
				font-size: 12px;
				margin-right: 10px;
			}
		}
		.hoverFn:hover .addSquare {
			opacity: 1;
		}
		.pos {
			position: absolute;
			top: 30px;
			left: 0
		}
	}
	
	.ivu-btn {
		width: 80px;
		span {width:48px;display:block;white-space: normal; overflow: hidden;text-overflow:ellipsis;} 
	}
</style>