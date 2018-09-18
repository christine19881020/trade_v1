<template>
	<section>
		<SectionHead></SectionHead>
		<div class="project-sections">
			<Message></Message>
			<Todos></Todos>
			<Files></Files>
			<Document></Document>
			<Calendar></Calendar>
		</div>
		<div class="project-footer">
			<div class="section-control">
				<a href="#" class="link-settings" data-stack="">模块设置</a>
			</div>
			<a href="#" class="project-trash" data-stack="true" title="回收站" data-visible-to="admin,creator">
				<i class="fa fa-trash"></i>
			</a>
		</div>
	</section>
</template>

<script>
	import SectionHead from './sectionHead'
	import Message from './message'
	import Todos from './todos'
	import Files from './files'
	import Document from './document'
	import Calendar from './calendar'
	export default {
		name: 'pageOne',
		components: {
			SectionHead,
			Message,
			Todos,
			Files,
			Document,
			Calendar
		},
		data() {
			return {
				single: false
			}
		}
	}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
	.page {
		width: 100%;
		min-height: 600px;
		border: 1px solid #dbdfd6;
		box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
		background: #ffffff;
		opacity: 1;
		position: relative;
		transform: none;
		-webkit-transform: none;
		transform-origin: 50% 0 0;
		-webkit-transform-origin: 50% 0 0;
		.page-inner {
			padding: 20px 40px 30px;
			.project-sections {
				.section {
					margin-bottom: 50px;
					.more {
						font-size: 14px;
						margin: 20px 0 0 40px;
						font-weight: 600;
						a {
							color: #84a099
						}
						a:hover {
							color: #4ea5ad;
						}
					}
				}
			}
			.project-footer {
				position: absolute;
				bottom: 0;
				margin: 0 -40px;
				padding: 0 40px;
				box-sizing: border-box;
				width: 100%;
				height: 50px;
				line-height: 50px;
				font-size: 14px;
				color: #999;
				border-top: 1px solid #e6e6e6;
				.section-control {
					float: left;
					a {
						color: #999;
						font-size: 16px;
						font-weight: bold;
					}
					:hover {
						color: #4ea5ad;
					}
				}
				.project-trash {
					position: absolute;
					right: 0;
					bottom: 0;
					width: 50px;
					height: 50px;
					font-size: 25px;
					color: #999;
					text-align: center;
					opacity: 0.5;
					-webkit-transition: opacity 100ms ease-in-out;
					-moz-transition: opacity 100ms ease-in-out;
					transition: opacity 100ms ease-in-out;
				}
				:hover {
					color: #333;
				}
			}
		}
	}
</style>