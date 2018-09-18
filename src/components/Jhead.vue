<template>
	<section>
		<div class="header">
			<Logo></Logo>
			<Jmenu></Jmenu>
			<Jright></Jright>
		</div>
	</section>
</template>

<script>
	import Logo from './logo'
	import Jmenu from './Jmenu'
	import Jright from './Jright'

	export default {
		name: 'Jhead',
		components: {
			Logo,
			Jmenu,
			Jright
		},
		data() {
			return {

			}
		}
	}
</script>

<style scoped>
	.header {
		width: 960px;
		margin: 20px auto;
		height: 30px;
		line-height: 30px;
	}
</style>