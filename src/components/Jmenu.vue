<template>
	<!--顶部导航-->
	<nav>
		<ul>
			<template v-for="(item,index) in $router.options.routes">
				<li>
					<router-link :to="item.path" v-if="!item.hidden">{{item.label}}</router-link>
				</li>
			</template>
		</ul>
	</nav>
</template>

<script>
	export default {
		name: 'Jmenu',
		data() {
			return {
				theme1: 'light'
			}

		},
		methods: {
			viewGridFn() {
				this.isList = false;
			},
			viewListFn() {
				this.isList = true;
			}

		}
	}
</script>

<style scoped lang="scss">
	nav {
		float: left;
		margin-left: 30px;
		ul {
			margin: 0;
			padding: 0;
			li {
				display: block;
				float: left;
				margin: 0 15px;
				cursor: pointer;
				a {
					color: rgba(85, 85, 85, 0.5);
				}
				.router-link-active {
					font-weight: bold;
					color: #84a099;
				}
			}
			li:hover,
			li.active {
				color: #555;
				font-weight: bold;
			}
		}
	}
</style>