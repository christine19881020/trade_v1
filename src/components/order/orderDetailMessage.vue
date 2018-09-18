<template>
	<div class="section section-message">
		<h3 class="section-head">
						<a class="title">批注</a>
						<Dropdown  trigger="click" style="margin-left: 20px">
							<Button-group size="small" class="dropShadow">
								<Button type="ghost">发表批注</Button>
								<Button type="ghost"><Icon type="arrow-down-b"></Icon> </Button>
							</Button-group>
							<Dropdown-menu slot="list">
								<Dropdown-item>发表批注</Dropdown-item>	
							</Dropdown-menu>
						</Dropdown>
					</h3>
		<ul class="messages">
			<li class="message clearfix">
				
				<a class="headImg">
					<img alt="林志文" class="avatar" src="../../assets/headImg.png">
				</a>
				<div class="name">
					<a href="#" data-stack-root="true" data-stack="true" title="林志文">林志文</a>
				</div>
				<a href="#" class="message-link">
					<span class="message-title">
						                <span class="message-rest">面料</span>
					</span>
					<span class="message-content">
						           厂家升级了生产线，工艺正在试验
						       </span>

				</a>
				<span class="time" title="2015-10-28">2015年10月28日</span>
			</li>
			<li class="message clearfix">
				
				<a class="headImg">
					<img alt="林志文" class="avatar" src="../../assets/headImg.png">
				</a>
				<div class="name">
					<a href="#" data-stack-root="true" data-stack="true" title="林志文">林志文</a>
				</div>
				<a href="#" class="message-link">
					<span class="message-title">
						                <span class="message-rest">面料</span>
					</span>
					<span class="message-content">
						            准备选择杭州制造
						       </span>

				</a>
				<span class="time" title="2015-10-28">2015年10月28日</span>
			</li>
		</ul>
		<div class="more">
			<a href="#">查看全部批注</a>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'detailMessage'
	}
</script>

<style lang="scss">
	.messages {
		.message {
			border-bottom: 1px solid #dddddd;
			position: relative;
			height: 70px;
			.message-actions {
				top: 22px;
			}
			.headImg {
				.avatar {
					position: absolute;
					top: 15px;
					left: 5px;
				}
			}
			.name {
				width: 58px;
				font-size: 12px;
				line-height: 12px;
				text-align: center;
				position: absolute;
				top: 29px;
				left: 53px;
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
				a {
					color: #000000;
				}
			}
			.message-link {
				display: block;
				min-height: 40px;
				font-size: 14px;
				line-height: 16px;
				position: absolute;
				left: 120px;
				top: 18px;
				.message-title {
					display: block;
					display: block;
					color: #333333;
					overflow: hidden;
					white-space: nowrap;
					text-overflow: ellipsis;
				}
				.message-content {
					margin-top: 3px;
					width: 670px;
					display: block;
					line-height: 1.2;
					overflow: hidden;
					white-space: nowrap;
					text-overflow: ellipsis;
					color: #999999;
				}
			}
			.time {
				display: block;
				font-size: 12px;
				line-height: 12px;
				color: #aaaaaa;
				position: absolute;
				top: 16px;
				right: 5px;
			}
		}
		.message:hover {
			.message-actions {
				display: block;
			}
			.message-title {
				color: #4ea5ad;
			}
		}
	}
</style>