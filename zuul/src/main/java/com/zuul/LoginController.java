package com.zuul;

import org.apache.tomcat.jdbc.pool.DataSource;
import org.springframework.context.annotation.Bean;
import org.springframework.http.MediaType;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.print.attribute.standard.Media;
import java.util.Collection;

@RestController
@CrossOrigin
@RequestMapping("/login")
public class LoginController {

    @PostMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public Collection test() {
        return SecurityContextHolder
                .getContext().getAuthentication().getAuthorities();
    }

    @Bean
    public DataSource dataSource() {
        DataSource ds = new DataSource();
        ds.setDriverClassName("org.postgresql.Driver");
        ds.setUrl("jdbc:postgresql://localhost:5432/postgres");
        ds.setUsername("postgres");
        ds.setPassword("testpassword");

        return ds;
    }

}
