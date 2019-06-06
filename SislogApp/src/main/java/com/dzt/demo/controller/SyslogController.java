package com.dzt.demo.controller;

import com.dzt.demo.config.CommonUtils;
import com.dzt.demo.service.SyslogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
@RequestMapping(value ="/view" )
public class SyslogController {


    @Autowired
    private SyslogService syslogService;

    @RequestMapping("/hello")
    @ResponseBody
    public List<Map<String,Object>> hello() throws Exception {
       List<Map<String,Object>> list= syslogService.queryData();
        return  list;
    }

    @RequestMapping("/add")
    public String add(){
        return "/add";
    }
    @RequestMapping("/update")
    public String update(){
        return "/update";
    }

    @RequestMapping("/delete")
    public String delete(){
        return "/delete";
    }

    @RequestMapping("/list")
    public String list(){
        return "/list";
    }


    @RequestMapping(value = "/derive")
    public String derive(){

        return "/views/derive";
    }

   @RequestMapping(value = "/deriveList")
   @ResponseBody
    public Map deriveList(HttpServletRequest request) throws Exception {
       Map<String, Object> parameterMap = CommonUtils.getParameterMap(request);

       Map<String, Object> deriveList = syslogService.list(parameterMap);
        return deriveList;
    }

    @RequestMapping(value = "/deriveControl")
    @ResponseBody
    public Map deriveControl(HttpServletRequest request) throws Exception {
        Map<String, Object> parameterMap = CommonUtils.getParameterMap(request);

        Map<String, Object> deriveList = syslogService.deriveControl(parameterMap);
        return deriveList;
    }

}
