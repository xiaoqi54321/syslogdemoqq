package com.dzt.demo.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@Configuration
@EnableWebSecurity  //启动springSecurity的过滤器链
public class SecurityConfig extends WebSecurityConfigurerAdapter {
    //该方法作用代替之前配置: <security:authentication-manager>
    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception{
        //auth.inMemoryAuthentication().withUser("hongdong").password("hong").roles("ADMIN").authorities("PRODUCT_ADD");
        auth.inMemoryAuthentication().passwordEncoder(new MyPasswordEncoder()).withUser("admin").password("hongdong123!@#").roles("ADMIN").authorities("PRODUCT_ADD");

    }

    //该方法的作用就是代替之前的配置 : <security:http>
    @Override
    protected void configure(HttpSecurity http) throws Exception{
        http.authorizeRequests()
            .antMatchers("/**")
            .fullyAuthenticated().and().httpBasic().and().headers().frameOptions().disable();
            http.csrf().disable();//关闭默认的csrf认证
    }

}
