layui.use(['index', 'helper', 'element'], function () {
	const $ = layui.$;
	const element = layui.element;
	const helper = layui.helper;

	const iframe = document.createElement("iframe");

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
	$('#LAY_app_body div.lay-tab-div-home').append(iframe);

	const initBaseInfo = function () {
		const $ = layui.$;
		const helper = layui.helper;
		helper.ajax('./common/1/info.html', {}, function (response) {
			const elem = $('div.layui-header');

			elem.find('cite.name').html(response.data.trName);
		});
	};

	const initMenusInfo = function () {
		const $ = layui.$;
		const helper = layui.helper;
		helper.ajax('./common/1/menu.html', {
			params: {
				index: 0
			}
		}, function (response) {
			const menus = response.list;
			const tree = $('ul.layui-nav-tree');
			let li = '',
			parent;
			$.each(menus, function (index, menu) {
				if (menu.level === 1 && index != menus.length - 1 && menu.id == menus[index + 1].parentId) {
					parent = menu.id;
					li += `<li data-name="menu-level-1-${index}" class="layui-nav-item">
						<a href="javascript:;" lay-tips="" lay-direction="2">
							<i class="layui-icon layui-icon-component"></i>
							<cite>${menu.name}</cite>
						</a>
						<dl class="layui-nav-child">`;
				} else if (menu.level == 2 && menu.parentId == parent && menu.url != '') {
					li += `<dd data-name="menu-level-2-${index}">
							<a lay-href=".${menu.url}">${menu.name}</a>
						</dd>`;
					if (index == menus.length - 1 || menu.parentId != menus[index + 1].parentId) {
						li += `</dl>
						</li>`;
					}
				}
			});

			tree.append(li);

			element.render();
		});
	};

	initBaseInfo();

	initMenusInfo();

	$('dd.logout').click(function () {
		const helper = layui.helper;
		helper.ajax('./j_spring_security_logout', {}, function (response) {
			window.location = './login.jsp';
		});
	});

	element.on('deriveSelect', function (data) {
    //  alert(123);
	});



	//sys
   $(".derive").click(function(){
	   const helper = layui.helper;


   		alert()
	   $(this).attr('lay-href','./views/control.jsp');
   		$(this).attr('lay-tips','3213123');
	   //helper.openTabsPage('新增','../views/derive.jsp');
	   // element.tabAdd('demo', {
		//    title: 'sys库0001'
		//    ,content: '../views/derive.jsp' //支持传入html
		//    ,id: '选项卡标题的lay-id属性值'
	   // });

   });

});
