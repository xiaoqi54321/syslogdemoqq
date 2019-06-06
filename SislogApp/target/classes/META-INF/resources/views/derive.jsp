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
<title>sis数据</title>
<meta name="renderer" content="webkit">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=0">
<link rel="stylesheet" href="<%=basePath%>layuiadmin/static/css/query.css">
<script id="_layui_admin_public" src="<%=basePath%>layuiadmin/public.js" data-base-url="<%=basePath%>layuiadmin" data-module="database.cve"></script>
</head>

<body>
   <div class="layui-fluid">
           <div class="layui-row layui-col-space15">
               <div class="layui-col-md12">
                   <div class="layui-card layui-form div-scanning-list">
                       <div class="layui-card-header">
                           <div class="layui-row">
                               <div class="layui-col-md2 layui-col-xs2">sys库

                               </div>
                               <div class="layui-col-md10 layui-col-space10 layui-col-xs10"style="display: flex; flex-direction:row-reverse;align-items:center;height:52px;">

                                   <button class="layui-btn layui-btn-sm btn-search">搜索</button>

                                   <dl class="select">
                                       <dt><i class="btn-icon layui-icon-search"></i>高级查询</dt>
                                       <dd class="cont layui-form" style="z-index:999;">
                                           <ul style="width:400px;">
                                               <div class="layui-form form-cont">
                                                   <div class="layui-row layui-col-space5">

                                                       <div class="layui-col-md12 mb10">
                                                           <input type="text" name="userName" placeholder="用户名" autocomplete="off" class="layui-input">

                                                       </div>
                                                       <div class="layui-col-md12 mb10">
                                                           <input type="checkbox" checked="checked" value="success" name="result" placeholder="是否成功" lay-skin="switch" autocomplete="off" class="layui-input">
                                                           <span class="layui-form-label" style="width: 120px;">访问是否成功</span>
                                                       </div>

                                                       <div class="layui-col-md12 mb10">

                                                       <input type="text" name="fromIp" placeholder="源IP" autocomplete="off" class="layui-input">

                                                   </div>

                                                       <div class="layui-col-md12 mb10">

                                                           <input type="text" name="FromHost" placeholder="采集设备源" autocomplete="off" class="layui-input">

                                                       </div>
                                                       <div class="layui-col-md6 mb10">
                                                           <input type="text" name="endTime" class="layui-input layui-input-date" autocomplete="off" placeholder="结束时间">
                                                       </div>
                                                       <div class="layui-col-md6 mb10">

                                                           <input type="text" name="startTime" class="layui-input layui-input-date" autocomplete="off" placeholder="开始时间">
                                                       </div>
                                                       <div class="layui-col-md12 mb10 layui-screen" style="text-align: right;">

                                                       </div>
                                                   </div>
                                               </div>
                                           </ul>
                                       </dd>
                                   </dl>


                                  <%-- <div class="layui-input-inline title-input">

                                       <input type="checkbox" checked="checked" value="success" name="result" placeholder="是否成功" lay-skin="switch" autocomplete="off" class="layui-input">
                                   </div>--%>



                                   <div class="layui-input-inline title-input">
                                       <select name="accessingPathWay">
                                           <option value="">访问方式</option>
                                           <option value="L3VPN">L3VPN</option>
                                           <option value="Web">Web</option>
                                           <option value="login">login</option>
                                       </select>
                                   </div>


   								<div class="layui-input-inline title-input">
   									 <input type="text" name="intranetPort" placeholder="目的端口" autocomplete="off" class="layui-input">
   								</div>

                                   <div class="layui-input-inline title-input">
                                       <input type="text" name="intranetIp" placeholder="目的IP" autocomplete="off" class="layui-input">
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

                               </div>
                               <div class="layui-col-md4 "></div>
                           </div>
                       </div>
                       <div class="layui-card-body">
                           <div class="layui-row">
                               <table class="layui-hide" id="id-table-database-cve"></table>
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