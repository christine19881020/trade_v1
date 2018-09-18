<template>
	<div class="section section-calendar-event">
		<h3 class="section-head">
			<a class="title">日程</a>				
			    <Button type="ghost" size='small' style="margin-left:20px;">创建日程</Button>							
			<div class="todolist-toolbar">
		        <i class="fa fa-th active"></i>
		        <i class="fa fa-list"></i>					      
			</div>
		</h3>
		<div class="calendar-events">
			<div class="init init-calendar-event clearfix">
				<img src="../assets/calendar.png"/>
				<div class="title">合理安排日程，让项目有条不紊</div>
			</div>
		</div>
		<div class="section-footer">
			<a href="#" class="greenA">查看全部日程</a>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'calendar',
		data() {
			return {

			}
		}
	}
</script>

<style lang="scss">
.section-calendar-event{
	.calendar-events{
		.init-calendar-event{
			color: #CCCCCC;
			margin:30px 0;
			img{				
				float:left;
			}
			.title{
				font-weight: 600;
				float:left;
				color: #999;
				line-height:35px;margin-left:20px;
			}
		}
	}
}
</style>