<template>
	<div class="page">
		<div class="page-inner pd40" style="padding-bottom: 0;">
			<div class="teamSection">
				<div class="oprateSquare clearfix">
					<Button shape="circle" size="large" class="active">本司同事</Button>
					<Button shape="circle" size="large">合作单位</Button>
					<Button shape="circle" size="large">林志文组</Button>
					<Button type="text" class="right" @click="$router.push('/team/teamSetting')">
					  分组设置
				    </Button>
					<Button type="text" class="right" @click="$router.push('/team/inviteNew')">
					邀请新成员
				</Button>
				</div>
				<div class="messages" @click="$router.push('/team/memberTaskDetail')">
					<Row class="message clearfix" v-for="item in teams" :key="item.man">
						<Col :span="2" class="headImgM">
						<img alt="林志文" class="avatar" :src="item.head" />
						</Col>
						<Col :span="4" class="who">
						<a href="#" class="man" :title="item.man">
							{{item.man}}
						</a>
						<span class="position" :class="{'red':item.position=='业务员'}">
								{{item.position}}
							</span>
						<Button class="team" size="small" shape="circle">{{item.team}}</Button>
						</Col>
						<Col :span="5" class="vMiddle">
						<i class="iconfont icon-shouji"></i>
						<span>{{item.phone}}</span>
						</Col>
						<Col :span="5" class="vMiddle">
						<i class="iconfont icon-dingding1"></i>
						<span>{{item.ding}}</span>
						</Col>
						<Col :span="5" class="vMiddle">
						<i class="iconfont icon-email"></i>
						<span>{{item.email}}</span>
						</Col>
						<Col :span="3" class="vMiddle"> {{item.belong}}
						</Col>
					</Row>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import { teams } from '../../fakeData'
	export default {
		name: '',
		components: {},
		data() {
			return {
				teams: teams
			}
		},
		methods: {

		},
		mounted() {

		}
	}
</script>

<style>

</style>