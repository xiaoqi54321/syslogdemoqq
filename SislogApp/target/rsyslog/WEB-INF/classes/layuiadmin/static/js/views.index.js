layui.use(['index', 'helper', 'element','jquery'], function () {
	const $ = layui.$;
	const element = layui.element;
	const helper = layui.helper;
    var localObj = window.location;

    var contextPath = localObj.pathname.split("/")[1];

    var basePath = localObj.protocol+"//"+localObj.host+"/"+contextPath;

    var server_context=basePath;
	$(".sysSelectAdd").click(function(){
        var ss =new Date().getTime();
        var url=server_context+'/views/derive.jsp'
		element.tabAdd('test1', {
			title: '查询sys' //用于演示
			, content:
				'<iframe data-frameid="' + ss + '" frameborder="0"  style="height: 90%;margin-top: 52px"  class="layadmin-iframe" name="content" src="' + url + '"></iframe>'

			, id: ss //实际使用一般是规定好的id，这里以时间戳模拟下
		})

	});


	$(".sysControllAdd").click(function(){
		var ss =new Date().getTime();
		var url=server_context+'/views/control.jsp'
		element.tabAdd('test1', {
			title: '监控sys' //用于演示
			, content:
				'<iframe data-frameid="' + ss + '" frameborder="0"  style="height: 90%;margin-top: 52px"  class="layadmin-iframe" name="content" src="' + url + '"></iframe>'

			, id: ss //实际使用一般是规定好的id，这里以时间戳模拟下
		})

	});

	/*const iframe = document.createElement("iframe");

	$(iframe).attr('frameborder', 0).attr('src', './views/derive.jsp').addClass('layadmin-iframe');

	if (iframe.attachEvent) {
		iframe.attachEvent("onload", function () {
			$('div.lay-tab-div-home div.lay-tab-div-mask').css('display', 'none');
		});
	} else {
		iframe.onload = function () {
			$('div.lay-tab-div-home div.lay-tab-div-mask').css('display', 'none');
		};
	}
	$('#LAY_app_body div.lay-tab-div-home').append(iframe);*/



	$('dd.logout').click(function () {
		const helper = layui.helper;
		helper.ajax('./j_spring_security_logout', {}, function (response) {
			window.location = './login.jsp';
		});
	});





});
