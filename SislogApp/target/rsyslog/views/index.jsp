<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>
<%
    String path = request.getContextPath();
    String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<head>
<meta name="generator" content="HTML Tidy for HTML5 (experimental) for Windows https://github.com/w3c/tidy-html5/tree/c63cc39" />
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>CMDI</title>
<meta name="renderer" content="webkit">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=0">
  <link rel="stylesheet" href="<%=basePath%>layuiadmin/static/css/query.css">
  <script id="_layui_admin_public" src="<%=basePath%>layuiadmin/public.js" data-base-url="<%=basePath%>layuiadmin"></script>
</head>
<body class="layui-layout-body">

  <div id="LAY_app">
    <div class="layui-layout layui-layout-admin">

      <div class="layui-tab" lay-allowClose="true"  lay-filter="test1">
        <ul class="layui-tab-title">
          <li class="layui-this "  lay-id="222">sys查询&nbsp&nbsp<i style="color: #00a65a" class="layui-icon sysSelectAdd">&#xe608;</i>


          </li>
          <li class="" lay-id="333" >监控&nbsp&nbsp<i  style="color: #00a65a" class="layui-icon sysControllAdd">&#xe608;</i>


            </button>


          </li>


        </ul>

        <div class="layui-tab-content" style="height: 90%">
          <div class="layui-tab-item layui-show">
            <iframe src="<%=basePath%>views/derive.jsp" id="" frameborder="0" style="height: 90%;margin-top: 52px" class="layadmin-iframe"></iframe>
          </div>
          <div class="layui-tab-item">
            <iframe src="<%=basePath%>views/control.jsp"  frameborder="0" style="height: 90%;margin-top: 52px" class="layadmin-iframe"></iframe>
          </div>


        </div>



      </div>
    </div>
  </div>
    <script src="<%=basePath%>layuiadmin/static/js/views.index.js"></script>
</body>
</html>