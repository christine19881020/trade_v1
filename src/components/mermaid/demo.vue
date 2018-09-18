<template>
	<section>
		<div class="page">
			<div class="page-inner pd40" style="padding-bottom: 0;">
				<div class="mermaid">
					graph LR A --- B B-->C[fa:fa-ban forbidden] B-->D(fa:fa-spinner);
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	export default {
		name: 'mermaid',
		data() {
			return {

			}
		},
		methods: {

		},
		mounted() {
			mermaid.initialize({
				startOnLoad: true
			});
		}
	}
</script>

<style>

</style>