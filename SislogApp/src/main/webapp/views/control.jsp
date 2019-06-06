<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<%
    String path = request.getContextPath();
    String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>IP监控</title>
<meta name="renderer" content="webkit">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=0">
<link rel="stylesheet" href="<%=basePath%>layuiadmin/static/css/query.css">
<script id="_layui_admin_public" src="<%=basePath%>layuiadmin/public.js" data-base-url="<%=basePath%>layuiadmin" data-module="database.control"></script>
</head>

<body>
    <div class="layui-fluid">
        <div class="layui-row layui-col-space15">
            <div class="layui-col-md12">
                <div class="layui-card layui-form div-scanning-list fromControl">
                    <div class="layui-card-header">
                        <div class="layui-row">
                            <div class="layui-col-md2 layui-col-xs3">IP监控</div>
                            <div class="layui-col-md10 layui-col-space10 layui-col-xs9"style="display: flex; flex-direction:row-reverse;align-items:center;height:52px;">

                                <input type="text" value="" name="thisTime" style="display: none">
                                <button id="btn-search1" class="layui-btn layui-btn-sm btn-search1">开始监控</button>
                                <button id="btn-search-stop1" class="layui-btn layui-btn-sm btn-search-stop" style="display:none ">停止监控</button>
                                <div class="layui-input-inline title-input">
                                  <input type="text" name="intranetIps" placeholder="IP" autocomplete="off" class="layui-input">
                                </div>

                                <div class="layui-input-inline title-input">
                                    <input type="text" name="intranetPorts" placeholder="端口" autocomplete="off" class="layui-input">
                                </div>


                                <div class="layui-input-inline title-input">
                                 <select name="tableRefresh">
                                     <option value="">—监控数据刷新时间—</option>
                                     <option value=3>3秒</option>
                                     <option value=5>5秒</option>
                                     <option value=10>10秒</option>
                                 </select>
                                </div>


                            </div>

                        </div>
                        <div class="layui-row">
                            <div class="layui-col-md8 layui-col-space10 layui-col-xs10"style="display: flex; flex-direction:row-reverse;align-items:center;height:52px;">
                                <div class="layui-input-inline title-input">
                                    IP：<span  id="countMap"></span>
                                    条
                                </div>&nbsp&nbsp
                                <div class="layui-input-inline title-input">
                                    用户：<span  id="countUser"></span>
                                    条
                                </div>&nbsp&nbsp
                                <div class="layui-input-inline title-input">
                                    数据：<span  id="sumdata"></span>
                                    条
                                </div>&nbsp&nbsp
                                <div class="layui-input-inline title-input">
                                    运行监控时间：<span  id="datatimeRun"></span>
                                    秒
                                </div>&nbsp&nbsp
                            </div>
                            <div class="layui-col-md4 "></div>
                        </div>
                    </div>
                    <div class="layui-card-body">
                        <div class="layui-row">
                            <table class="layui-hide" id="id-table-database-control"></table>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
<%--layui未提供右靠的分页  --%>
<style>
    .layui-table-page>div {
        float: right;
    }

</style>
</html>