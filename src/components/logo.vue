<template>
	<section>
		<Dropdown trigger="click" style="margin-left: 20px" class="logo">
			<a href="javascript:void(0)">
				嘉德
				<Icon type="arrow-down-b"></Icon>
			</a>
			<Dropdown-menu slot="list">
				<Dropdown-item>团队账户</Dropdown-item>
				<Dropdown-item><div @click="$router.push('/team/inviteNew')">邀请成员</div></Dropdown-item>			
			</Dropdown-menu>
		</Dropdown>
	</section>
</template>

<script>
	export default {
		name: 'logo',
		data() {
			return {
				dropShow: false,
			}
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.logo {
		font-size: 20px;
		font-weight: normal;
		line-height: 30px;
		cursor: pointer;
		float: left;
		a {
			color: #84a099;
			font-weight: 600;
		}
	}
	
	.dropbox {
		float: left;
		display: block;
		position: relative;
		.logo {
			font-size: 20px;
			font-weight: normal;
			line-height: 30px;
			color: #84a099;
			cursor: pointer
		}
		.arrowup {
			position: absolute;
			top: -20px;
			left: 40px;
		}
		.dropdown {
			padding: 5px 0;
			background: #fff;
			border: 1px solid #ccc;
			border-radius: 6px;
			box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
			position: absolute;
			top: 40px;
			left: -20px;
			z-index: 5;
			box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
			ul {
				list-style: none;
				margin: 0;
				padding: 0;
			}
			li {
				padding: 0 27px 0 20px;
				display: block;
				font-size: 14px;
				min-width: 103px;
				a {
					color: #555;
					text-decoration: none;
					span,
					img {
						display: block;
						float: left;
					}
					img {
						margin: 8px 4px;
					}
				}
			}
			li:hover {
				background: #f6f8f0;
				a {
					color: #4ea5ad;
				}
			}
			li.small {
				font-size: 12px;
				a {
					color: #999;
				}
			}
		}
	}
</style>