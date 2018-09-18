<template>
	<div class="command-bar">
		<div class="search-wrap">
			<i class="fa fa-search left" @click="searchInputShowFn"> </i>
			<div class="searchInput" :class="{'active':searchInputShow}">
				<!--<Date-picker type="date" placeholder="搜索客户/合同/业务员" style="width:160px"></Date-picker>-->
				<DatePicker placeholder="搜索客户/合同/业务员" :open="open" :value="value3" type="month" confirm @on-change="handleChange" @on-clear="handleClear" @on-ok="handleOk">
					<a href="javascript:void(0)" @click="handleClick">
						<Icon type="ios-calendar-outline" style=""></Icon>
						<Input placeholder="搜索客户/合同/业务员" v-model="searchData" v-if="value3 === ''">选择日期</Input>
						<Input v-else :value="value3"></Input>
					</a>
				</DatePicker>
			</div>
		</div>
		<div class="notification-info">
			<Poptip placement="bottom" width="400">
				<i class="fa fa-bell-o"></i>
				<div class="noti-header clearfix" slot="title">
					<b class="title">通知</b>
					<a class="noti-markRead"><i class="fa fa-gear"></i></a>
					<a class="noti-settings"><i class="fa fa-check"></i></a>
				</div>
				<div class="api" slot="content">
					<ul v-if="notices.length>0">
						<li v-for="item in notices">
							<a class="greenA" href="#" title="">{{item.notice}}</a>
						</li>
					</ul>
					<div v-else class="noData">
						-没有新的通知-
					</div>
					<div class="noti-footer">
						<a href="#">查看全部</a>
					</div>
				</div>

			</Poptip>
		</div>
		<div class="account-info">
			<Dropdown trigger="click">
				<a href="javascript:void(0)" class="clearfix">
					<img class="avatar" src="../assets/path.jpg" />
					<Icon type="arrow-down-b" class="headerImgArrow"></Icon>
				</a>
				<Dropdown-menu slot="list">
					<Dropdown-item class="dottedLine">
						<div @click="selfSetting">个人设置</div>
					</Dropdown-item>
					<Dropdown-item>
						<div @click="goLogin">退出</div>
					</Dropdown-item>
				</Dropdown-menu>
			</Dropdown>
		</div>
	</div>

</template>

<script>
	export default {
		name: 'Jright',
		data() {
			return {
				searchData: '',
				searchInputShow: false,
				dropShow: false,
				dropShowHead: false,
				notices: [{
						notice: '通知一内容通知一内容通知一内容通知一内容通知一内容通知一内容通知一内容通知一内容通知一内容通知一内容通知一内容通知一内容通知一内容通知一内容通知一内容通知一内容通知一内容通知一内容'
					},
					{
						notice: '通知二通知二通知二通知二通知二通知二通知二通知二'
					}
				],
				open: false,
				value3: ''
			}
		},
		methods: {
			searchInputShowFn() {
				this.searchInputShow = !this.searchInputShow
			},
			handleClick() {
				this.open = !this.open;
			},
			handleChange(date) {
				this.value3 = date;
			},
			handleClear() {
				this.open = false;
			},
			handleOk() {
				this.open = false;
			},
			goLogin() {
				var _this = this;
				this.$confirm('确认退出吗?', '提示', {
					//type: 'warning'
				}).then(() => {
					sessionStorage.removeItem('user');
					_this.$router.push('/login');
				}).catch(() => {

				});

			},
			selfSetting(){
				this.$router.push('/user/selfSetting')
			}
		},
		mounted() {

		}
	}
</script>

<style scoped lang="scss">

</style>