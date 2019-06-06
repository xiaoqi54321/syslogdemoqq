<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>互联网暴露面资产闭环管理系统</title>
<meta name="renderer" content="webkit">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=0">
<link rel="stylesheet" href="../../layuiadmin/style/assets.css">
<script id="_layui_admin_public" src="../../layuiadmin/public.js" data-base-url="../../layuiadmin" data-module="workbench.index"></script>
</head>

<body>
    <div class="layui-fluid">
        <div class="layui-row layui-col-space15 div-targets">
            <div class=" layui-col-md5">
                <div class="layui-row layui-col-space10">
                    <div class="layui-col-xs12 layui-col-sm6">
                        <div class="small-box btn-primary">
                            <div class="icon zichan"></div>
                            <div class="inner">
                                <h3 class="cnt">0</h3>
                                <p>资产总数</p>
                            </div>
                            <div class="small-box-footer"></div>
                        </div>
                    </div>
                    <div class="layui-col-xs12 layui-col-sm6">
                        <div class="small-box bg-red">
                            <div class="inner">
                                <h3 class="add">0</h3>
                                <p>资产新增</p>
                            </div>
                            <div class="icon xinzeng"></div>
                            <div href="#" class="small-box-footer"></div>
                        </div>
                    </div>
                    <div class="layui-col-xs12 layui-col-sm6">
                        <div class="small-box bg-aqua  ">
                            <div class="inner">
                                <h3 class="update">0</h3>
                                <p>资产变更</p>
                            </div>
                            <div class="icon biangeng"></div>
                            <div href="#" class="small-box-footer"></div>
                        </div>
                    </div>
                    <div class="layui-col-xs12 layui-col-sm6">
                        <div class="small-box bg-yellow">
                            <div class="inner">
                                <h3 class="repair">0</h3>
                                <p>漏洞处置</p>
                            </div>
                            <div class="icon wenti"></div>
                            <div href="#" class="small-box-footer"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="layui-col-md7 div-targets-echarts">
                <div class="echarts-box bg-blue2 div-echarts-credential"></div>
            </div>
            <div class="layui-col-md1 div-targets-todo" style="display:none;">
                <div class="layui-row layui-col-space10">
                    <div class=" layui-col-sm12">
                        <div class="small-box bg-green redirect" data-event="audit" style="cursor: pointer;">
                            <div class="operinner">
                                <h3 class="audit">0</h3>
                                <p>待稽核资产</p>
                            </div>
                            <div href="#" class="small-box-footer"></div>
                        </div>
                    </div>
                    <div class=" layui-col-sm12">
                        <div class="small-box bg-green redirect" data-event="repair" style="cursor: pointer;">
                            <div class="operinner">
                                <h3 class="risk">0</h3>
                                <p>风险资产</p>
                            </div>
                            <div href="#" class="small-box-footer"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class=" layui-col-md12">
                <div class="layui-card">
                    <div class="layui-tab layui-tab-brief">
                        <ul class="layui-tab-title">
                            <li class="layui-this">待完成</li>
                            <li>已完成</li>
                        </ul>
                        <div class="layui-tab-content">
                            <div class="layui-tab-item layui-show">
								<div style="margin-bottom: 10px;">
									<div class="layui-inline div-credential-toolbar">
										<button class="layui-btn" data-event="search" data-historic="false">查询</button>
									</div>
								</div>
                                <table class="layui-hide" id="id-table-credential-undo" lay-filter="filter-table-credential"></table>
                            </div>
                            <div class="layui-tab-item">
								<div style="margin-bottom: 10px;">
									<div class="layui-inline div-credential-toolbar">
										<button class="layui-btn" data-event="search" data-historic="true">查询</button>
									</div>
								</div>
                                <table class="layui-hide" id="id-table-credential-done" lay-filter="filter-table-credential"></table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
<script type="text/html" id="id-table-credential-tools-undo">
	<a class="layui-btn layui-btn-xs" lay-event="handle">处理</a>
</script>
<script type="text/html" id="id-table-credential-tools-done">
	<a class="layui-btn layui-btn-xs" lay-event="view">查看</a>
</script>
</html>