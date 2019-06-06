layui.define(['table'], function (e) {
	var table = layui.table,
	i = function (e) {
		return new d(e)
	},
	d = function (e) {};

	table.set({
		limit: 50,
		method: 'post',
		//contentType: 'application/json',
		headers: {
			'Request-By': 'alimx'
		},
		parseData: function (response) { //将原始数据解析成 table 组件所规定的数据
			return {
				"code": response.count !== undefined ? 0 : 1, //接口状态
				"msg": response.count !== undefined ? '' : '数据加载异常，请重试或联系管理员。', //提示文本
				"count": response.count, //记录条数
				"data": response.list //数据列表
			};
		},
		request: {
			pageName: 'paginator.page', //页码的参数名称，默认：page
			limitName: 'paginator.limit' //每页数据量的参数名，默认：limit
		}
	});
	e("alimx.table", i)
});
