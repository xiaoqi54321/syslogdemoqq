layui.define(function (e) {
	const eventss = {
		search: function () {
			const table = layui.table;
			//执行重载
			table.reload(paramss().tableid,
				{
					page: {
						curr: 1//重新从第 1 页开始

					},
					where: paramss().map
				});
		}
	};

	const paramss = function () {
		let that = {};
		const $ = layui.$;
		const form = $('.layui-card.layui-form.div-scanning-list.fromControl');


		let thisTime=form.find('input[name=thisTime]').val()== ""||form.find('input[name=thisTime]').val()== undefined ? "":form.find('input[name=thisTime]').val()

		that.map = {

			'intranetIp': form.find('input[name=intranetIps]').val(),
			'intranetPort': form.find('input[name=intranetPorts]').val(),
			'startStatus':thisTime
		}

		that.tableid = "id-table-database-control";
		return that;
	}

	function calculateDiffTime(start_time, end_time){
		//var startTime = 0, endTime = 0
		if (start_time < end_time){
			startTime = start_time
			endTime = end_time
		}else{
			startTime = end_time
			endTime = start_time
		}

		var timeDiff = endTime - startTime
		var hour = Math.floor(timeDiff / 3600);
		timeDiff = timeDiff % 3600;
		var minute = Math.floor(timeDiff / 60);
		timeDiff = timeDiff % 60;
		var second = timeDiff;
		//[hour, minute, second]
		return hour+"时"+minute+"分"+second+"秒"
	}
	const initPageRenders = function (requestRender) {

		const $ = layui.$;
		const table = layui.table;
		const laydate = layui.laydate;

		//日期控件
		lay('.layui-input-date').each(function () {
			laydate.render({
				elem: this,
				trigger: 'click',
				type:'datetime'
			});
		});

		//表格
		table.render({
			elem: '#' + paramss().tableid,
			height: 'full-95', //高度填满
			title:'访问日志记录',
			toolbar:true,
			defaultToolbar: ['exports'], //工具栏右侧按钮，默认['filter','exports','print']
			url: '../view/deriveControl', //数据请求URL
			parseData: function(res){ //res 即为原始返回的数据

				$('#countMap').html(res.data.countIp);
				$('#countUser').html(res.data.countUser);
				$('#sumdata').html(res.data.sumdata);

				$(".layui-form.layui-border-box.layui-table-view").css("height","450px");

				$(".layui-table-body.layui-table-main").css("height","450px");
				$(".layui-form.layui-border-box.layui-table-view").css("height","582px");
				$(".layui-table-page1").css("float","right");
				return {

					"code": res.code, //解析接口状态
					"msg": res.msg, //解析提示文本
					"count": res.total, //解析数据长度
					"data": res.data.syslogList //解析数据列表

				};
			},
			cols: [[{
				field: 'ReceivedAt',
				title: '访问时间',
				align: 'center',
				width: 200
			}, {
				field: 'FromHost',
				title: '数据来源',
				align: 'center',
				width: 150  ,
				align: 'left',
			},  {
				field: 'accessingResources',
				title: '访问资源',
				width: 170,
				align: 'center',
			},
				{
					field: 'accessingPathWay',
					title: '访问方式',
					width: 132,
					align: 'center',
				},
				{
					field: 'userName',
					title: '用户',
					width: 180,
					align: 'center',
				},
				{
					field: 'fromIp',
					title: '源IP',
					width: 150,
					align: 'center',
				},
				{
					field: 'action',
					title: 'action',
					width: 100,
					align: 'center',
				},
				{
					field: 'intranetIp',
					title: '目的IP',
					width: 150,
					align: 'center',
				},
				{
					field: 'intranetPort',
					title: '目的端口',
					width: 100,
					align: 'center',
				},
				{
					field: 'result',
					title: '访问状态',
					width: 100,
					align: 'center',
				}

			]],
			limits:[100,200,500,1000,2000],
			limit:100,
			page: true, //开启分页
			where: paramss().map,
			done:function(res, curr, count){
				//如果是异步请求数据方式，res即为你接口返回的信息。
				//如果是直接赋值的方式，res即为：{data: [], count: 99} data为当前页数据、count为数据总长度
			}
		});
		var sts;
		var t1 ;
		$('.layui-btn.btn-search-stop').click(function () {

			var thisTime=new Date().getTime()/1000;;
			var tme =calculateDiffTime(sts,thisTime);

			$("#datatimeRun").html(tme.substring(0,tme.indexOf('.')));
			console.log(sts);
			//去掉定时器的方法
			window.clearTimeout(t1);
			//显示查询按钮

			$(this).hide();
			$(this).prev().show();
			$(this).prev().prev().val("stopControl");
			eventss['search'].call(this);//layui-table-body layui-table-main
			//$(".layui-form layui-border-box layui-table-view").css("",)
		})
		//查询
		$('.layui-btn.btn-search1').click(function () {
			sts=new Date().getTime()/1000;

			$(this).prev().val(sts);
			eventss['search'].call(this);
			let tableRefreshTime=  $("select[name=tableRefresh]").val()==""? "0": $("select[name=tableRefresh]").val();

			if (0!=tableRefreshTime) {
				$(this).hide();
				$(this).next().show();
				$(this).prev().val("");
				//定时执行，tableRefreshTime秒后执行
				t1 = window.setInterval(refreshCount, 1000 * tableRefreshTime);
				function refreshCount() {
					eventss['search'].call(this);
				}
			}else {
                layer.alert("监控条件未填写完整");
             }

			eventss['search'].call(this);

		});
		$(".select").each(function () {
			var s = $(this);
			var z = parseInt(s.css("z-index"));
			var dt = $(this).children("dt");
			var dd = $(this).children("dd");
			var _show = function () {
				dd.slideDown(200);
				dt.addClass("cur");
				s.css("z-index", z + 1);
			}; //展开效果
			var _hide = function () {
				dd.slideUp(200);
				dt.removeClass("cur");
				s.css("z-index", z);
			}; //关闭效果
			dt.click(function () {
				dd.is(":hidden") ? _show() : _hide();
			});
			dd.find("a").click(function () {
				_hide();
			}); //选择效果（如需要传值，可自定义参数，在此处返回对应的“value”值 ）
			dd.find("button.btn-canel").click(function () {
				_hide();
			});
			$("body").click(function (i) {
				!$(i.target).parents(".select").first().is(s) ? _hide() : "";
			});
		})

		requestRender();
	};

	layui.use(['alimx.table', 'laydate','jquery'], function () {
		const $ = layui.$;
		const table = layui.table;
		//页面初始化
		initPageRenders(function () {});
	});
	e("database.control", {})
});
