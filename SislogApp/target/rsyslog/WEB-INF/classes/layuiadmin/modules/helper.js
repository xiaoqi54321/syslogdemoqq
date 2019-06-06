layui.define([], function (e) {
	//yyyy-MM-dd hh:mm:ss.SSSS
	Date.prototype.format = function (pattern) {
		const o = {
			"M+": this.getMonth() + 1, //月份
			"d+": this.getDate(), //日
			"h+": this.getHours(), //小时
			"m+": this.getMinutes(), //分
			"s+": this.getSeconds(), //秒
			"q+": Math.floor((this.getMonth() + 3) / 3), //季度
			"S": this.getMilliseconds() //毫秒
		};
		if (/(y+)/.test(pattern))
			pattern = pattern.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
		for (const k in o) {
			if (new RegExp("(" + k + ")").test(pattern)) {
				pattern = pattern.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
			}
		}
		return pattern;
	};

	const i = function (e) {};

	const $ = layui.$;

	$.ajaxSetup({
		type: 'POST',
		async: true,
		timeout: 1000 * 60,
		headers: {
			'Request-By': 'alimx'
		},
		statusCode: {
			200: function () {},
			400: function () {},
			401: function () {},
			402: function () {},
			403: function () {},
			404: function () {},
			408: function () {}
		},
		beforeSend: function (request) {},
		complete: function (request, status) {},
		error: function (request, status, thrown) {}
	});
	//获取url查询参数，GET方式下有效
	i.getParamValue = function (param) {
		const reg = new RegExp("(^|&)" + param + "=([^&]*)(&|$)");
		const r = window.location.search.substr(1).match(reg);
		if (r != null)
			//return unescape(r[2]);
			return decodeURI(r[2]);
		return null;
	};
	i.api = {
		upload: 'http://10.254.222.26:8080/export/common/1/file/upload.html',
		download: 'http://10.254.222.26:8080/export/common/1/file/download.html'
	};
	i.ajax = function (_url, _params, _callback, _options) {
		let options = {
			url: _url,
			data: _params,
			success: function (response) {
				response = JSON.parse(response);

				if ($.isFunction(_callback)) {
					_callback(response);
				}
			}
		};

		if (_options) {
			options = $.extend(options, _options);
		}

		$.ajax(options);
	};
	/*
	e.elem:'div.btn-upload-file',//必须
	e.check:false,//如果需要绑定checkbox，则需要将该参数置为true，且不要使用checkbox控件触发，需要使用render之后的div触发。控件会在在checkbox选中时触发文件上传 eg:{elem:'div.layui-form-checkbox',check:true
	e.multiple: false,是否支持多文件
	e.size: 60, //限制文件大小，单位 KB
	e.headers: {},
	e.accept: '',//音频 audio,视频 video,文件 file
	e.acceptMime: 'image/*',
	e.exts: 'zip|rar|7z',
	e.data::{
	params：{
	path:'/res/prize'
	}
	},//额外参数
	callback_before:文件上传前执行,
	callback_done:文件上传后执行,
	callback_error:文件上传发生错误时执行
	 */
	i.uploadRender = function (e, callback_before, callback_done, callback_error) {
		const upload = layui.upload;
		let options = {
			url: e.url || i.api.upload, //地址固定，使用文件上传服务器
			before: function (res) {
				if ($.isFunction(callback_before)) {
					callback_before(res);
				}
				layer.load(1, {
					shade: 0.3
				}); //loading
			},
			done: function (res) {
				const item = this.item;

				item.find('i.layui-icon').removeClass('layui-icon-upload').addClass('layui-icon-ok');

				item.data('serial', res.message.serial);
				item.data('code', res.message.code);
				item.data('path', res.message.path);

				if ($.isFunction(callback_done)) {
					callback_done(item, res);
				}

				layer.closeAll('loading'); //关闭loading
			},
			error: function () {
				if ($.isFunction(callback_error)) {
					callback_error();
				}
				layer.closeAll('loading'); //关闭loading
			}
		};

		options = $.extend(options, e);

		upload.render(options);
	};
	i.uploadReset = function (e) {
		const item = $(e.elem);
		const icon = item.find('i.layui-icon');
		if (icon.hasClass('layui-icon-ok')) {
			icon.removeClass('layui-icon-ok').addClass('layui-icon-upload');
		}
		item.data('serial', null);
		item.data('code', null);
		item.data('path', null);
	};
	i.toFile = function (content, base64, fileName) {
		if (fileName == undefined || fileName == null) {
			fileName = '未命名.file';
		}
		if (base64) {
			var base = new Base64();
			content = base.decode(content);
		}
		var file = new File([content], fileName, {
				type: "text/plain;charset=utf-8"
			});

		saveAs(file);
	};
	i.download = function (e) {
		const formId = new Date().getTime();

		const form = $("<form id='" + formId + "'>");
		form.attr("style", "display:none");
		form.attr("target", "");
		form.attr("method", "post");
		form.attr("action", i.api.download);

		const a = $("<input>");
		a.attr("type", "hidden").attr("id", e.serial).attr("name", 'params["serial"]').attr("value", e.serial);
		const b = $("<input>");
		b.attr("type", "hidden").attr("name", 'params["index"]').attr("value", 'Upload');
		form.append(a).append(b);

		$("body").append(form);

		form.submit().remove();
	};
	i.getOptions = function (e) {
		i.ajax('../../common/1/option/getOptions.html', {
			cache: false,
			code: e.code,
			params: e.params
		}, function (response) {
			if (response.count && e.callback && $.isFunction(e.callback)) {
				e.callback(response.list);
			}
		}, e.options);
	};
	// 增加分钟
	i.addMinutes = function (_date, _value) {
		_date.setMinutes(_date.getMinutes() + _value);
		return _date;
	};
	// 增加天
	i.addDays = function (_date, _value) {
		_date.setDate(_date.getDate() + _value);
		return _date;
	};
	// 增加月
	i.addMonths = function (_date, _value) {
		_date.setMonth(_date.getMonth() + _value);
		return _date;
	};
	// 增加年
	i.addYears = function (_date, _value) {
		_date.setFullYear(_date.getFullYear() + _value);
		return _date;
	};
	//Unix时间戳转日期格式
	i.unix2Date = function (_unixTime, _isFull, _timeZone) {
		if (_unixTime == undefined || _unixTime == null || _unixTime === '')
			return '';
		if (typeof(_timeZone) == 'number') {
			_unixTime = parseInt(_unixTime) + parseInt(_timeZone) * 60 * 60;
		}
		var _date = new Date(_unixTime * 1000);

		return _date;
	}
	/*
	obj.expr jquery选择器索引,
	obj.name: name，主要用于取值赋值,
	obj.val: checkbox值,
	obj.title: checkbox文本
	obj.checked 是否选中
	 */
	i.addCheckBox = function (obj) {
		$(obj.expr).append("<input type=\"checkbox\" " + (((typeof obj.checked === 'boolean' && obj.checked === true) || obj.checked === 'checked') ? 'checked' : "") + " name=\"" + obj.name + "\" lay-filter=\"" + obj.name + "\" value=\"" + obj.val + "\" title=\"" + obj.title + "\" />");
	};
	/*
	obj.expr: jquery选择器索引,
	obj.name: 分组,
	obj.val: radio选项值,
	obj.title: radio选项文本
	obj.checked 是否选中
	 */
	i.addRadio = function (obj) {
		$(obj.expr).append("<input type=\"radio\" " + (((typeof obj.checked === 'boolean' && obj.checked === true) || obj.checked === 'checked') ? 'checked' : "") + " name=\"" + obj.name + "\" value=\"" + obj.val + "\" title=\"" + obj.title + "\" />");
	};
	/*
	obj.expr: jquery选择器索引,
	obj.val: 下拉框选项值,
	obj.text: 下拉框选项文本
	 */
	i.addOption = function (obj) {
		let option = "<option value='" + obj.val + "'"

			if (obj.data && (typeof obj.data === 'object')) {
				for (let i in obj.data) {
					option += " data-" + i + "=" + obj.data[i];
				}
			}
			option += (">" + obj.text + "</option>");

		$(obj.expr).append(option);
	};
	/*
	obj.expr: jquery 选择器索引
	 */
	i.getMapCheckboxVal = function (obj) {
		return $(obj.expr).map(function () {
			if ($(this).is(":checked") === true) {
				return $(this).val();
			}
		}).get().join(",");
	};

	i.reload = function () {
		self.location.reload();
	};

	i.openTabsPage = function (title, url) {
		top.layui.index.openTabsPage(url, title);
	};

	i.closeThisTab = function () {
		top.layui.admin.closeThisTabs();
	};

	i.setTimeout = function (callback, timeout) {
		if ($.isFunction(callback)) {
			setTimeout(callback, timeout);
		}
	};

	i.getLastMonths = function (offset, size) {
		const today = new Date();
		today.setMonth(today.getMonth() + 1 + offset);

		const results = [];

		for (let i = 0; i < size; i++) {
			today.setMonth(today.getMonth() - 1);

			results.push(today.format('yyyy-MM'));
		}

		return results;
	};

	i.getLastDays = function (offset, size, pattern) {
		const today = new Date();
		today.setDate(today.getDate() + 1 + offset);

		const results = [];

		for (let i = 0; i < size; i++) {
			today.setDate(today.getDate() - 1);

			results.push(today.format(pattern || 'yyyy-MM-dd'));
		}

		return results;
	};

	i.toYesOrNo = function (_value) {
		if (_value == undefined || _value == null || _value === '')
			return '';
		if (_value == '1' || _value == 1 || _value == 'true' || _value == true)
			return '是';
		return '否';
	};

	i.getCheckedData = function (id, field) {
		const table = layui.table;

		const status = table.checkStatus(id);

		if (status.data.length > 0) {
			if (field) {
				const results = [];
				status.data.forEach(function (_item, _index) {
					results.push(_item[field]);
				});
				return results;
			}
			return status.data;
		}
		return [];
	};

	i.redirect = function (title, url) {
		top.layui.admin.redirect(title, url);
	};

	function Base64() {

		// private property
		_keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

		// public method for encoding
		this.encode = function (input) {
			var output = "";
			var chr1,
			chr2,
			chr3,
			enc1,
			enc2,
			enc3,
			enc4;
			var i = 0;
			input = _utf8_encode(input);
			while (i < input.length) {
				chr1 = input.charCodeAt(i++);
				chr2 = input.charCodeAt(i++);
				chr3 = input.charCodeAt(i++);
				enc1 = chr1 >> 2;
				enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
				enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
				enc4 = chr3 & 63;
				if (isNaN(chr2)) {
					enc3 = enc4 = 64;
				} else if (isNaN(chr3)) {
					enc4 = 64;
				}
				output = output +
					_keyStr.charAt(enc1) + _keyStr.charAt(enc2) +
					_keyStr.charAt(enc3) + _keyStr.charAt(enc4);
			}
			return output;
		}

		// public method for decoding
		this.decode = function (input) {
			var output = "";
			var chr1,
			chr2,
			chr3;
			var enc1,
			enc2,
			enc3,
			enc4;
			var i = 0;
			input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
			while (i < input.length) {
				enc1 = _keyStr.indexOf(input.charAt(i++));
				enc2 = _keyStr.indexOf(input.charAt(i++));
				enc3 = _keyStr.indexOf(input.charAt(i++));
				enc4 = _keyStr.indexOf(input.charAt(i++));
				chr1 = (enc1 << 2) | (enc2 >> 4);
				chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
				chr3 = ((enc3 & 3) << 6) | enc4;
				output = output + String.fromCharCode(chr1);
				if (enc3 != 64) {
					output = output + String.fromCharCode(chr2);
				}
				if (enc4 != 64) {
					output = output + String.fromCharCode(chr3);
				}
			}
			output = _utf8_decode(output);
			return output;
		}

		// private method for UTF-8 encoding
		_utf8_encode = function (string) {
			string = string.replace(/\r\n/g, "\n");
			var utftext = "";
			for (var n = 0; n < string.length; n++) {
				var c = string.charCodeAt(n);
				if (c < 128) {
					utftext += String.fromCharCode(c);
				} else if ((c > 127) && (c < 2048)) {
					utftext += String.fromCharCode((c >> 6) | 192);
					utftext += String.fromCharCode((c & 63) | 128);
				} else {
					utftext += String.fromCharCode((c >> 12) | 224);
					utftext += String.fromCharCode(((c >> 6) & 63) | 128);
					utftext += String.fromCharCode((c & 63) | 128);
				}

			}
			return utftext;
		}

		// private method for UTF-8 decoding
		_utf8_decode = function (utftext) {
			var string = "";
			var i = 0;
			var c = c1 = c2 = 0;
			while (i < utftext.length) {
				c = utftext.charCodeAt(i);
				if (c < 128) {
					string += String.fromCharCode(c);
					i++;
				} else if ((c > 191) && (c < 224)) {
					c2 = utftext.charCodeAt(i + 1);
					string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
					i += 2;
				} else {
					c2 = utftext.charCodeAt(i + 1);
					c3 = utftext.charCodeAt(i + 2);
					string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
					i += 3;
				}
			}
			return string;
		}
	}

	e("helper", i)
});
