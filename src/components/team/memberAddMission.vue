<template>
	<section>
		<div class="page page-root simple-pjax page-behind">
			<router-link class="link-page-behind" to="/team/memberTaskDetail">林志文</router-link>
		</div>
		<div class="page page-1 simple-pjax">
			<div class="page-inner pd40">
				<div class="section section-TabCardTask" v-for="item in addList">
					<h3 class="section-head">
						{{item.person}}  添加的任务  						   
					</h3>
					<div class="section-content">
						<ul>
							<li class="todo leafTodo clearfix" v-for="itemM in item.children">
								<div class="todoCheckbox">
									<Checkbox v-model="itemM.single"></Checkbox>
									<router-link to="" class="content">{{itemM.content}}</router-link>
									<Button size="small" shape="circle">{{itemM.name}}&nbsp;{{itemM.date}}</Button>
									<Button size="small" shape="circle" class="noBorder">{{itemM.content}}&nbsp;{{itemM.kNO}}&nbsp;{{itemM.pName}}&nbsp;{{itemM.yang}}</Button>
								</div>
							</li>
						</ul>
					</div>
					<div class="section link-box">
						<router-link to="">更多已完成任务</router-link>
					</div>
				</div>

			</div>
		</div>
	</section>

</template>

<script>
	import { addList } from '../../fakeData'
	export default {
		name: '',
		components: {

		},
		data() {
			return {
				addList: addList,
			}
		}
	}
</script>

<style>

</style>