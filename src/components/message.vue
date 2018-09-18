<template>
	<div class="section section-message">
		<h3 class="section-head">
						<a class="title">讨论</a>
						<Dropdown  trigger="click" style="margin-left: 20px">
							<Button-group size="small" class="dropShadow">
								<Button type="ghost">发起讨论</Button>
								<Button type="ghost"><Icon type="arrow-down-b"></Icon> </Button>
							</Button-group>
							<Dropdown-menu slot="list">
								<Dropdown-item>发起讨论</Dropdown-item>
								<Dropdown-item>发起视频讨论<img src="../assets/pro.png" width="26px" height="13px" class="proIcon"/></Dropdown-item>
							</Dropdown-menu>
						</Dropdown>
					</h3>
		<ul class="messages">
			<li class="message clearfix">
				<div class="message-actions actions">
					<div class="inr">
						<i class="fa fa-arrow-circle-up"></i>
						<i class="fa fa-download"></i>
					</div>
				</div>
				<a class="headImg">
					<img alt="老沈（沈学良/Manfred）" class="avatar" src="../assets/headImg.png">
				</a>
				<div class="name">
					<a href="#" data-stack-root="true" data-stack="true" title="老沈（沈学良/Manfred）">老沈（沈学良/Manfred）</a>
				</div>
				<a href="#" class="message-link">
					<span class="message-title">
						                <span class="message-rest">欢迎来到 Tower</span>
					</span>
					<span class="message-content">
						            祝贺你，亲爱的朋友！ 你终于找到了这个世界上最优雅易用的中文协同办公软件——Tower，我们等你很久了！ 很抱歉，在此之前，你一定受够了塞满广告或暗藏陷阱的免费软件，或是不得不接受价格高昂却水土...
						       </span>

				</a>
				<span class="time" title="2015-10-28">2015年10月28日</span>
			</li>
			<li class="message clearfix">
				<div class="message-actions actions">
					<div class="inr">
						<i class="fa fa-arrow-circle-up"></i>
						<i class="fa fa-download"></i>
					</div>
				</div>
				<a class="headImg">
					<img alt="老沈（沈学良/Manfred）" class="avatar" src="../assets/headImg.png">
				</a>
				<div class="name">
					<a href="#" data-stack-root="true" data-stack="true" title="老沈（沈学良/Manfred）">老沈（沈学良/Manfred）</a>
				</div>
				<a href="#" class="message-link">
					<span class="message-title">
						                <span class="message-rest">欢迎来到 Tower</span>
					</span>
					<span class="message-content">
						            祝贺你，亲爱的朋友！ 你终于找到了这个世界上最优雅易用的中文协同办公软件——Tower，我们等你很久了！ 很抱歉，在此之前，你一定受够了塞满广告或暗藏陷阱的免费软件，或是不得不接受价格高昂却水土...
						       </span>

				</a>
				<span class="time" title="2015-10-28">2015年10月28日</span>
			</li>
		</ul>
		<div class="more">
			<a href="#">查看全部讨论</a>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'message'
	}
</script>

<style lang="scss">
	
</style>