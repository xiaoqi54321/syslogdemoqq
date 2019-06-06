/** layuiAdmin.std-v1.2.1 LPPL License By http://www.layui.com/admin/ */
;
layui.extend({
	setter: "config",
	admin: "lib/admin",
	view: "lib/view"
}).define(["setter", "admin"], function (a) {
	var e = layui.setter,
	i = layui.element,
	n = layui.admin,
	t = n.tabsPage,
	d = layui.view,
	l = function (a, d) {
		var l,
		serial = new Date().getTime(),
		tab,
		iframe,
		b = r("#LAY_app_tabsheader>li"),
		y = a.replace(/(^http(s*):)|(\?[\s\S]*$)/g, "");
		if (b.each(function (e) {
				var i = r(this),
				n = i.attr("lay-id");
				n === a && (l = !0, t.index = e)
			}), d = d || "新标签页", e.pageTabs)
			l || (tab = ['<div class="layadmin-tabsbody-item layui-show">', '<div class="lay-tab-div-' + serial + '" style="height: 100%;display:flex !important;justify-content: center;text-align: center;align-items: center;"><div class="lay-tab-div-mask" style="display: inline-block; width: 200px;height: 100px;"><i class="layui-icon layui-icon-loading layui-icon layui-anim layui-anim-rotate layui-anim-loop" style="font-size:46px;"></i><div class="doc-icon-fontclass">正在加载页面，请稍候 。</div></div></div>', "</div>"].join(""), iframe = document.createElement("iframe"), r(iframe).attr('frameborder', 0).addClass('layadmin-iframe'), iframe.src = a, callback_onload = function () {
				if (iframe.attachEvent) {
					iframe.attachEvent("onload", function () {
						r('div.lay-tab-div-' + serial + ' div.lay-tab-div-mask').css('display', 'none');
					});
				} else {
					iframe.onload = function () {
						r('div.lay-tab-div-' + serial + ' div.lay-tab-div-mask').css('display', 'none');
					};
				}
			}, callback_onload(), r(s).append(tab), r('div.lay-tab-div-' + serial).append(iframe), t.index = b.length, i.tabAdd(o, {
					title: "<span>" + d + "</span>",
					id: a,
					attr: y
				}));
		else {
			var u = n.tabsBody(n.tabsPage.index).find(".layadmin-iframe");
			u[0].contentWindow.location.href = a
		}
		i.tabChange(o, a),
		n.tabsBodyChange(t.index, {
			url: a,
			text: d
		})
	},
	s = "#LAY_app_body",
	o = "layadmin-layout-tabs",
	r = layui.$;
	r(window);
	n.screen() < 2 && n.sideFlexible(),
	layui.config({
		base: e.base + "modules/"
	}),
	layui.each(e.extend, function (a, i) {
		var n = {};
		n[i] = "{/}" + e.base + "lib/extend/" + i,
		layui.extend(n)
	}),
	d().autoRender(),
	layui.use("common"),
	a("index", {
		openTabsPage: l
	})
});
