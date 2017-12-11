package com.catalogmanagement;

import com.catalogmanagement.model.CompanyEntity;
import com.catalogmanagement.model.EmployeeEntity;
import com.catalogmanagement.repository.ICompanyRepository;
import com.catalogmanagement.repository.IEmployeeRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.Contact;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

import static springfox.documentation.builders.PathSelectors.any;

@SpringBootApplication
@EnableSwagger2
public class CatalogManagementApplication {
    public static void main(String[] args) {
        SpringApplication.run(CatalogManagementApplication.class, args);
    }

    @Bean
    public Docket api() {
        return new Docket(DocumentationType.SWAGGER_2).groupName("Shop").select()
                .apis(RequestHandlerSelectors.basePackage("com.catalogmanagement"))
                .paths(any()).build().apiInfo(new ApiInfo("Shop Services",
                        "Shop Services", "1.0.0", null,
                        new Contact("Catalog Magement", null, null), null, null));

    }

    @Bean
    public CommandLineRunner databaseSetup(ICompanyRepository companyRepository, IEmployeeRepository employeeRepository) {
        return args -> {
            CompanyEntity company1 = new CompanyEntity("Fortech");
            CompanyEntity company2 = new CompanyEntity("Endava");
            CompanyEntity company3 = new CompanyEntity("Pitech+");
            CompanyEntity company4 = new CompanyEntity("3PillarGlob");
            CompanyEntity company5 = new CompanyEntity("Scitec");

            companyRepository.save(company1);
            companyRepository.save(company2);
            companyRepository.save(company3);
            companyRepository.save(company4);


            employeeRepository.save(new EmployeeEntity("Mircea", "Pop", company1));
            employeeRepository.save(new EmployeeEntity("Suciu", "Andrei", company5));
            employeeRepository.save(new EmployeeEntity("Let", "Bogdan", company3));
            employeeRepository.save(new EmployeeEntity("Biro", "Attila", company1));
            employeeRepository.save(new EmployeeEntity("Veres", "Pishta", company2));
            employeeRepository.save(new EmployeeEntity("Sebastian", "Contras", company3));
            employeeRepository.save(new EmployeeEntity("Petru", "Avram", company4));
            employeeRepository.save(new EmployeeEntity("Dan", "Andrei", company5));

        };
    }

}
