<template>
	<div class="page page-root simple-pjax">
		<div class="page-inner">
			<h3>
					分组管理
					<Button  type="ghost" class="h3Btn" @click="$router.push('/team/newTeam')">新建分组</Button>
				</h3>
			<ul class="orderTemplate">
				<li class="clearfix" v-for="(item,index) in teamManageList" @click="$router.push('/team/editTeam')">
					<i class="iconfont icon-team" v-if="item.teamName!='VIP组'"></i>
					<i class="iconfont icon-vip" v-if="item.teamName=='VIP组'"></i>
					<span>{{item.teamName}}<i class="iconfont icon-dot"></i><i class="teamMembers">{{item.children.length}}</i></span>
					<Button type="text" class="greenA btnGroup right" @click="deleteFn(index)">
					  删除
					</Button>
				</li>
				
			</ul>

		</div>
	</div>
</template>

<script>
	import { teamManageList } from "../../fakeData"
	export default {
		name: '',
		data() {
			return {
				teamManageList: teamManageList

			}
		},
		methods: {
			deleteFn(index) {
				this.teamManageList.splice(index, 1)
			},
			
			
		}
	}
</script>

<style>

</style>