import axios from 'axios';

let base = '';
let url = 'https://www.jihuobao.net:10443/jihuo/rest/ApiRest/Index';
function PostUrl(params) {
	return axios.post(url, params).then(function (response) {
		if (!response.data.is_error) {
			return { code: 200, msg: '', data: response.data.body };
		} else {
			return { code: 500, msg: response.data.err_msg };
		}
	}).catch(function (error) {
		return { code: 500, msg: error.response.data.err_msg };
	});
}
//用户登陆
export const requestLogin = params => {
	params.method = "com.im.account.login";
	return PostUrl(params);
};
//模板一级名称添加 
export const addFactorytradeTemplate = params => {
	params.method = "com.factorytrade.template.add";
	return PostUrl(params);
};

//【模板】大任务添加
export const addDetailedFactorytradeTemplate = params => {
	params.method = "com.factorytrade.template.detailedadd";
	return PostUrl(params);
};