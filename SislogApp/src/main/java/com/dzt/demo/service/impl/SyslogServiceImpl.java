package com.dzt.demo.service.impl;

import com.dzt.demo.dao.SyslogDao;
import com.dzt.demo.service.SyslogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.util.*;

@Service
public class SyslogServiceImpl implements SyslogService {

    private  static  Map<String, Object> jiluIp = new HashMap<>();
    @Autowired
    private SyslogDao syslogDao;

    @Override
    public List<Map<String, Object>> queryData() {
        List<Map<String, Object>> list= syslogDao.queryData();
        return list;
    }

    @Override
    public Map<String, Object> list(Map paginator) throws Exception {
        Map<String, Object> resultList =new HashMap<String, Object>();
        Map<String, Object> map =new HashMap<String, Object>();
        int total= syslogDao.countSyslogList(paginator);
        int startindex=(Integer.valueOf(paginator.get("paginator.page").toString())-1)*Integer.valueOf(paginator.get("paginator.limit").toString());
        int sumPages=total/Integer.valueOf(paginator.get("paginator.limit").toString());

        paginator.put("startIndex",startindex);
        paginator.put("limit",Integer.valueOf(paginator.get("paginator.limit").toString()));

        List<Map<String,Object>> syslogList= syslogDao.list(paginator);

        Map<String,Object> countMap= syslogDao.countDataBySearch(paginator);
        map.put("sumdata",countMap.get("sumdata").toString()); //监控到的记录数量
        map.put("countUser",countMap.get("countUser").toString());//监控到的用户数量
        map.put("countIp",countMap.get("countIp").toString());//监控到的ip数量
        map.put("syslogList",syslogList);
        resultList.put("data",map);
        resultList.put("total",total);
        resultList.put("code",0);
        resultList.put("msg","");
        return resultList;


    }

    @Override
    public Map<String, Object> deriveControl(Map<String, Object> paginator) throws Exception {
        if(paginator.get("intranetIp").toString().length()<1 && paginator.get("intranetPort").toString().length()<1){
            Map<String, Object> stringObjectHashMap = new HashMap<>();
            return stringObjectHashMap;
        }

        Map<String, Object> resultList =new HashMap<String, Object>(); //用来存放结果的map集合
        String intranetIpc = paginator.get("intranetIp").toString();
        String intranetPortc = paginator.get("intranetPort").toString();
        Map<String, Object> map2 =new HashMap<String, Object>(); //用来存放结果的map集合

        //定义当前时间
        String format = null;
        Date date = new Date();
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        format = sdf.format(date);
        if(paginator.get("intranetIp")!=null) {
            if (jiluIp.get(intranetIpc) == null) {
                jiluIp.put(intranetIpc, format); //将时间加入ip记录集合
            }
            paginator.put("ReceivedAt",jiluIp.get(intranetIpc).toString());
        }
        int total= syslogDao.countControl(paginator);
        int startindex=(Integer.valueOf(paginator.get("paginator.page").toString())-1)*Integer.valueOf(paginator.get("paginator.limit").toString());
        int sumPages=total/Integer.valueOf(paginator.get("paginator.limit").toString());

        paginator.put("startIndex",startindex);
        paginator.put("limit",Integer.valueOf(paginator.get("paginator.limit").toString()));

        List<Map<String,Object>> syslogList= syslogDao.deriveControl(paginator);

        if(paginator.get("intranetIp")!=null){
            //统计数据
            String startStatus = paginator.get("startStatus").toString();
            Map<String, Object> map = new HashMap<>();

            map.put("intranetIp",intranetIpc);
            map.put("intranetPort",intranetPortc);

            if(!startStatus.equals("stopControl") && startStatus!="" ){//监控开始
                if(jiluIp.get(intranetIpc)==null ||jiluIp.get(intranetIpc)==""){
                    jiluIp.put(intranetIpc,format);
                }
            }
            map.put("ReceivedAt",jiluIp.get(intranetIpc).toString());
            Map<String, Object> countMap = syslogDao.countData(map);
            if(startStatus.equals("stopControl")){//监控结束
                jiluIp.remove(intranetIpc);
            }

            map2.put("sumdata",countMap.get("sumdata")==null ? "0":countMap.get("sumdata").toString()); //监控到的记录数量
            map2.put("countUser",countMap.get("countUser")==null ? "0":countMap.get("countUser").toString());//监控到的用户数量
            map2.put("countIp",countMap.get("countIp")==null ? "0":countMap.get("countIp").toString());//监控到的ip数量
        }

        map2.put("syslogList",syslogList);
        resultList.put("data",map2);
        resultList.put("total",total);
        resultList.put("code",0);
        resultList.put("msg","");
        return resultList;
    }


}
