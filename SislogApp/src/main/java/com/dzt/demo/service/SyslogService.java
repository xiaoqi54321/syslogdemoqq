package com.dzt.demo.service;


import java.util.List;
import java.util.Map;

public interface SyslogService {

    List<Map<String, Object>> queryData() throws Exception;

    Map<String, Object> list(Map paginator) throws Exception;

    Map<String, Object> deriveControl(Map<String, Object> parameterMap) throws Exception;
}
