import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import Jcontainer from '@/components/Jcontainer'
import orderList from '@/components/order/list'
import contractDetail from '@/components/order/contractDetail'
import orderDetail from '@/components/order/orderDetail'
import taskTemplate from '@/components/order/taskTemplate'
import bigTemplate from '@/components/order/bigTemplate'
import templateProcess from '@/components/order/templateProcess'
import nodeEdit from '@/components/order/nodeEdit'
import nodeEditSmall from '@/components/order/nodeEditSmall'
import preCondition from '@/components/order/preCondition'
import newOrder from '@/components/order/newOrder'
import planMission from '@/components/order/planMission'
import bigProcess from '@/components/order/bigProcess'
import subProcess from '@/components/order/subProcess'
import bigTask from '@/components/order/bigTask'
import smallTask from '@/components/order/smallTask'
import contractBigTask from '@/components/order/contractBigTask'
import finishedOrderList from '@/components/order/finishedOrderList'
import finishedContractDetail from '@/components/order/finishedContractDetail'
import finishedOrderDetail from '@/components/order/finishedOrderDetail'
import bigMissionDetail from '@/components/order/bigMissionDetail'
import smallMissionDetail from '@/components/order/smallMissionDetail'

import teamList from '@/components/team/list'
import inviteNew from '@/components/team/inviteNew'
import memberTaskDetail from '@/components/team/memberTaskDetail'
import finishedMemberTask from '@/components/team/finishedMemberTask'
import memberAddMission from '@/components/team/memberAddMission'
import teamSetting from '@/components/team/teamSetting'
import newTeam from '@/components/team/newTeam'
import editTeam from '@/components/team/editTeam'

import clientList from '@/components/client/list'
import newClient from '@/components/client/newClient'
import clientDetail from '@/components/client/clientDetail'

import factoryList from '@/components/factory/list'
import newFactory from '@/components/factory/newFactory'
import factoryDetail from '@/components/factory/factoryDetail'
import factoryFinishedMission from '@/components/factory/finishedMission'

import register from '@/components/register'
import Login from '@/components/Login'
import forgotPassword from '@/components/user/forgotPassword'
import selfSetting from '@/components/user/selfSetting'
import changePassword from '@/components/user/changePassword'
import changeCellphone from '@/components/user/changeCellphone'
import changeEmail from '@/components/user/changeEmail'

//import mermaid from '@/components/mermaid/demo'

Vue.use(Router)

export default new Router({
	routes: [{
			path: '',
			redirect: '/order',
			hidden: true
		},
//		{
//			path: '/mermaid',
//			name: 'www',
//			label: 'mermaid',
//			component: index,
//			active: true,
//			children: [{
//				path: '',
//				redirect: '/mermaid/demo',
//				component: mermaid
//			}, {
//				path: '/mermaid/demo',
//				name: 'mermaid',
//				component: mermaid,
//			}]
//
//		},
		{
			path: '/order',
			name: '',
			label: '订单',
			component: index,
			active: true,
			children: [{
				path: '',
				redirect: '/order/list',
				component: orderList
			}, {
				path: '/order/list',
				name: 'orderList',
				component: orderList,
			}, {
				path: '/order/list/taskTemplate',
				name: 'taskTemplate',
				component: taskTemplate
			}, {
				path: '/order/list/taskTemplate/bigTemplate',
				name: 'bigTemplate',
				component: bigTemplate
			}, {
				path: '/order/list/taskTemplate/bigTemplate/templateProcess',
				name: 'templateProcess',
				component: templateProcess
			}, {
				path: '/order/list/taskTemplate/bigTemplate/nodeEdit',
				name: 'nodeEdit',
				component: nodeEdit
			}, {
				path: '/order/list/taskTemplate/bigTemplate/nodeEditSmall',
				name: 'nodeEditSmall',
				component: nodeEditSmall
			}, {
				path: '/order/list/taskTemplate/bigTemplate/preCondition',
				name: 'preCondition',
				component: preCondition
			}, {
				path: '/order/contractDetail/:id',
				name: 'contractDetail',
				component: contractDetail
			}, {
				path: '/order/contractDetail/1/contractBigTask',
				name: 'contractBigTask',
				component: contractBigTask

			}, {
				path: '/order/orderDetail/:id',
				name: 'orderDetail',
				component: orderDetail
			}, {
				path: '/order/finishedOrderList',
				name: 'finishedOrderList',
				component: finishedOrderList
			}, {
				path: '/order/finishedContractDetail',
				name: 'finishedContractDetail',
				component: finishedContractDetail
			}, {
				path: '/order/finishedOrderDetail',
				name: 'finishedOrderDetail',
				component: finishedOrderDetail
			}, {
				path: '/order/orderDetailContract/:id',
				name: 'orderDetailContract',
				component: orderDetail
			}, {
				path: '/order/bigMissionDetail',
				name: 'bigMissionDetail',
				component: bigMissionDetail
			}, , {
				path: '/order/smallMissionDetail',
				name: 'smallMissionDetail',
				component: smallMissionDetail
			}, {
				path: '/order/orderDetail/1/smallTask',
				name: 'smallTask',
				component: smallTask
			}, {
				path: '/order/orderDetail/1/bigTask',
				name: 'bigTask',
				component: bigTask
			}, , {
				path: '/order/newOrder',
				name: 'newOrder',
				component: newOrder
			}, {
				path: '/order/newOrder/planMission',
				name: 'planMission',
				component: planMission
			}, {
				path: '/order/newOrder/bigProcess',
				name: 'bigProcess',
				component: bigProcess
			}, {
				path: '/order/newOrder/subProcess',
				name: 'subProcess',
				component: subProcess
			}]
		},
		{
			path: '/team',
			name: '',
			label: '团队',
			component: index,
			active: false,
			children: [{
				path: '',
				redirect: '/team/list',
				component: teamList
			}, {
				path: '/team/list',
				name: 'teamList',
				component: teamList
			}, {
				path: '/team/inviteNew',
				name: 'inviteNew',
				component: inviteNew
			}, {
				path: '/team/memberTaskDetail',
				name: 'memberTaskDetail',
				component: memberTaskDetail
			}, {
				path: '/team/finishedMemberTask',
				name: 'finishedMemberTask',
				component: finishedMemberTask
			}, {
				path: '/team/memberAddMission',
				name: 'memberAddMission',
				component: memberAddMission
			}, {
				path: '/team/teamSetting',
				name: 'teamSetting',
				component: teamSetting
			}, {
				path: '/team/newTeam',
				name: 'newTeam',
				component: newTeam
			}, {
				path: '/team/editTeam',
				name: 'editTeam',
				component: editTeam
			}]
		},
		{
			path: '/client',
			name: '',
			component: index,
			active: false,
			hidden: true,
			children: [{
					path: '',
					redirect: '/client/list',
					component: clientList
				},
				{
					path: '/client/list',
					name: 'clientList',
					component: clientList
				}, {
					path: '/client/newClient',
					name: 'newClient',
					component: newClient
				}, {
					path: '/client/clientDetail',
					name: 'clientDetail',
					component: clientDetail
				}
			]
		},
		{
			path: '/factory',
			name: '',
			component: index,
			active: false,
			hidden: true,
			children: [{
				path: '',
				redirect: '/factory/list',
				component: factoryList
			}, {
				path: '/factory/list',
				name: 'factoryList',
				component: factoryList
			}, {
				path: '/factory/newFactory',
				name: 'newFactory',
				component: newFactory
			}, {
				path: '/factory/factoryDetail/:tabIndex',
				name: 'factoryDetail',
				component: factoryDetail
			}, {
				path: '/factory/finishedMission',
				name: 'factoryFinishedMission',
				component: factoryFinishedMission
			}]
		},
		{
			path: '/login',
			name: '登陆',
			component: Login,
			hidden: true
		},
		{
			path: '/register',
			name: '注册',
			component: register,
			hidden: true
		},
		{
			path: '/forgotPassword',
			name: '忘记密码',
			component: forgotPassword,
			hidden: true
		},
		{
			path: '/user',
			name: '工厂',
			component: index,
			active: false,
			hidden: true,
			children: [{
				path: '/user/selfSetting',
				name: '个人设置',
				component: selfSetting,
				hidden: true
			}, {
				path: '/user/changePassword',
				name: '修改密码',
				component: changePassword,
				hidden: true
			}, {
				path: '/user/changeCellphone',
				name: '修改手机',
				component: changeCellphone,
				hidden: true
			}, {
				path: '/user/changeEmail',
				name: '修改邮箱',
				component: changeEmail,
				hidden: true
			}]

		}

	]
})