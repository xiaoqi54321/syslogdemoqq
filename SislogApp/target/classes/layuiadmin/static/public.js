/** 公用JS */
/^http(s*):\/\//.test(location.href) || // alert('不支持本地静态文件访问！');

function afterPageRender(params) {
	if (params != undefined) {}
	window.onresize = function () {}
}

var _layui_base_url = '../../layuiadmin';
var _layui_module;

var _script_js_layui_admin_public = document.getElementById('_layui_admin_public');

if (_script_js_layui_admin_public) {
	var _base_url = _script_js_layui_admin_public.getAttribute('data-base-url');
	if (_base_url) {
		_layui_base_url = _base_url;
	}

	var _module = _script_js_layui_admin_public.getAttribute('data-module');
	if (_module) {
		_layui_module = _module;
	}
}
/*统一输出公用外部文件*/
document.write('<link rel="stylesheet" href="' + _layui_base_url + '/layui/css/layui.css" media="all">');
document.write('<link rel="stylesheet" href="' + _layui_base_url + '/style/admin.css" media="all">');
document.write('<link rel="stylesheet" href="' + _layui_base_url + '/style/custom.css" media="all">');
document.write('<link rel="stylesheet" href="' + _layui_base_url + '/style/template.css" media="all">');
document.write('<script src="' + _layui_base_url + '/layui/layui.js"></script>');
document.write('<script>layui.config({base: "' + _layui_base_url + '/"}).extend({index: "lib/index"}).use(["index"], function(){});</script>');

if (_module) {
	document.write('<script>layui.use(["index","' + _module + '"]);</script>');
}
