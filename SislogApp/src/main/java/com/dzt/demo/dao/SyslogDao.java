package com.dzt.demo.dao;

import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Map;

@Mapper
public interface SyslogDao {

    List<Map<String, Object>> queryData();



    int countSyslogList(Map paginator) throws Exception;

    List<Map<String,Object>> list(Map paginator) throws Exception;

    List<Map<String, Object>> deriveControl(Map<String, Object> paginator) throws Exception;


    int countControl(Map<String, Object> paginator) throws Exception;

    Map<String, Object> countData(Map<String, Object> map);

    Map<String, Object> countDataBySearch(Map paginator);
}
