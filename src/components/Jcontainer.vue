<template>
	<div class="container workspace simple-stack simple-stack-transition">
		<router-view></router-view>
	</div>
</template>

<script>
	import PageOne from './pageOne'
	export default {
		name: "Jcontainer",
		components: {
			PageOne
		},
		data() {
			return {
				single: false
			}
		}
	}
</script>

<style  lang="scss">
	
</style>