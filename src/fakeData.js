const cilentList = [{
		value: '1',
		label: '王'
	},
	{
		value: '2',
		label: '张'
	},
	{
		value: '3',
		label: '仇'
	},
	{
		value: '4',
		label: '周'
	},
	{
		value: '5',
		label: '沈'
	},
	{
		value: '6',
		label: '姚'
	}
]

let country = [{
		value: '1',
		label: '🇨🇳  中国'
	},
	{
		value: '2',
		label: '🇺🇸  美国'
	}, {
		value: '3',
		label: '🇦🇺  澳大利亚'
	}, {
		value: '4',
		label: '🇦🇷  阿根廷'
	},
	{
		value: '5',
		label: '🇧🇪  比利时'
	},
	{
		value: '6',
		label: '🇪🇸  西班牙'
	}
]

const companyList = [{
	value: "0",
	label: '本公司'
}, {
	value: "1",
	label: '阿里'
}, {
	value: "2",
	label: '新浪'
}, {
	value: "3",
	label: '网易'
}]

const byContactFilterList = [{
	value: '1',
	label: 'B&M-HF0000'
}, {
	value: '2',
	label: 'B&M-HF0001'
}, {
	value: '3',
	label: 'B&M-HF0002'
}]
const memberTaskList = [{
	step: '今天',
	children: [{
		single: false,
		content: '头样加工',
		date: '2017.8.1',
		name: '林志文',
		contract: 'B&M-HF0001',
		kNO: 'HL0234',
		pName: '品名XXX',
		yang: '头样'
	}, {
		single: false,
		content: '头样确认',
		date: '2017.8.1',
		name: '林志文',
		contract: 'B&M-HF0001',
		kNO: 'HL0234',
		pName: '品名XXX',
		yang: '头样'
	}]
}, {
	step: '接下来',
	children: [{
		single: false,
		content: '产前样确认',
		date: '2017.8.1',
		name: '林志文',
		contract: 'B&M-HF0001',
		kNO: 'HL0234',
		pName: '品名XXX',
		yang: '产前样'
	}]
}, {
	step: '以后',
	children: [{
		single: false,
		content: '订舱',
		date: '2017.8.1',
		name: '林志文',
		contract: 'B&M-HF0001',
		kNO: 'HL0234',
		pName: '品名XXX',
		yang: '出运'
	}]
}]

const menberInfo = {
	email: 'linzw@dingtalk.com',
	wechat: 'linzwnb',
	ID: '33022898987654443334',
	telephone: '87654332',
	fax: '897867545'
}

const addList = [{
	person: '林志文',
	children: [{
		single: false,
		content: '头样加工',
		date: '2017.8.1',
		name: '林志文',
		contract: 'B&M-HF0001',
		kNO: 'HL0234',
		pName: '品名XXX',
		yang: '头样'
	}, {
		single: false,
		content: '头样确认',
		date: '2017.8.1',
		name: '林志文',
		contract: 'B&M-HF0001',
		kNO: 'HL0234',
		pName: '品名XXX',
		yang: '头样'
	}]
}]

const teamManageList = [{
	teamName: '林志文组',
	children: [{
			member: '张一山'
		},
		{
			member: '乔征宇'
		}, {
			member: '丁白鹤'
		}
	]
}, {
	teamName: 'VIP组',
	children: [{
			member: '张一山'
		},
		{
			member: '乔征宇'
		}, {
			member: '丁白鹤'
		}
	]
}]

const clientDetailList = [{
	step: '正在做订单',
	children: [{
		single: false,
		content: 'HF1701001',
		date: '2017.8.1',
		ENDdate: '2017.9.1',
		name: '林志文'
	}, {
		single: false,
		content: 'HF1701001',
		date: '2017.8.1',
		ENDdate: '2018.9.1',
		name: '林志文'
	}]
}]

const clientInfo = {
	email: 'linzw@dingtalk.com',
	telephone: '87322222',
	fax: '87322222',
	companyFullName: 'Business and Machine LMT.',
	quickMa: 'BMA'
}
const regionList = [{
		value: '1',
		label: '鄞州区'
	},
	{
		value: '2',
		label: '海曙区'
	},
	{
		value: '3',
		label: '江北区'
	},
	{
		value: '4',
		label: '北仑区'
	}
]
const factoryDetailList = [{
	step: '今天',
	children: [{
		single: false,
		content: '头样加工',
		date: '2017.8.1',
		name: '蒋大为',
		contract: 'B&M-HF0001',
		kNO: 'HL0234',
		pName: '品名XXX',
		yang: '头样'
	}]
}, {
	step: '接下来',
	children: [{
		single: false,
		content: '产前样确认',
		date: '2017.8.22',
		name: '蒋大为',
		contract: 'B&M-HF0001',
		kNO: 'HL0234',
		pName: '品名XXX',
		yang: '产前样'
	}]
}, {
	step: '以后',
	children: [{
		single: false,
		content: '大货生产',
		date: '2017.10.12',
		name: '林志文',
		contract: 'B&M-HF0001',
		kNO: 'HL0234',
		pName: '品名XXX',
		yang: '生产'
	}]
}]

const factoryInfo = {
	companyFullName: '浙江杭州丝绸织造厂',
	quickMa: 'HSCH'
}
const teams = [{
	head: 'https://i.loli.net/2017/08/21/599a521472424.jpg',
	man: '林志文',
	position: '管理员',
	team: '林志文组',
	phone: '18905748888',
	ding: '18905748888',
	email: 'linzw@dingtalk.com',
	belong: '本公司'
}, {
	head: require('@/assets/headImg.png'),
	man: '张大中',
	position: '业务员',
	team: '林志文组',
	phone: '18905748888',
	ding: '18905748888',
	email: 'linzw@dingtalk.com',
	belong: '本公司'
}, {
	head: require('@/assets/headImg.png'),
	man: '林小帅',
	position: '',
	team: '林志文组',
	phone: '18905748888',
	ding: '18905748888',
	email: 'linzw@dingtalk.com',
	belong: '杭州丝绸'
}]
const colleagues = [{
	id:'1',
	head: 'https://i.loli.net/2017/08/21/599a521472424.jpg',
	man: '林志文',
	position: '管理员',
	team: '林志文组',
	phone: '18905748888',
	ding: '18905748888',
	email: 'linzw@dingtalk.com',
	belong: '本公司'
}, {
	id:'2',
	head: require('@/assets/headImg.png'),
	man: '张大中',
	team: '林志文组',
	phone: '18905748888',
	ding: '18905748888',
	email: 'linzw@dingtalk.com',
}, {
	id:'3',
	head: require('@/assets/headImg.png'),
	man: '林小帅',
	team: '林志文组',
	phone: '18905748888',
	ding: '18905748888',
	email: 'linzw@dingtalk.com'
}]
const products= [{
		img: require('@/assets/u136.png'),
		kno: 'HL0234',
		pno: '男士T恤',
		colors: ['蓝色', '红色', '白色', '紫色'],
		num: '150',
		currency: '$',
		unitPrice: '1.500',
		unit: '件',
		totalPrice: '265.00'
	},
	{
		img: require('@/assets/u136.png'),
		kno: 'HL0235',
		pno: '男士T恤',
		colors: ['颜色1', '颜色2', '颜色3', '颜色4'],
		num: '150',
		currency: '$',
		unitPrice: '1.500',
		unit: '件',
		totalPrice: '265.00'
	}
]

export {
	cilentList,
	country,
	companyList,
	byContactFilterList,
	memberTaskList,
	menberInfo,
	addList,
	teamManageList,
	clientDetailList,
	clientInfo,
	regionList,
	factoryDetailList,
	factoryInfo,
	teams,
	colleagues,
	products
}