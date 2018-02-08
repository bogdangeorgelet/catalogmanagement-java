package com.catalogmanagement;

import com.catalogmanagement.model.CompanyEntity;
import com.catalogmanagement.model.EmployeeEntity;
import com.catalogmanagement.repository.ICompanyRepository;
import com.catalogmanagement.repository.IEmployeeRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.config.server.EnableConfigServer;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
//@EnableConfigServer
//@EnableDiscoveryClient
public class CatalogManagementApplication {
    public static void main(String[] args) {
        SpringApplication.run(CatalogManagementApplication.class, args);
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
            companyRepository.save(company5);


            employeeRepository.save(new EmployeeEntity("Mircea", "Pop", 45, 5, "Junior", "Java", company1));
            employeeRepository.save(new EmployeeEntity("Suciu", "Andrei", 33, 2, "Middle", "Java", company5));
            employeeRepository.save(new EmployeeEntity("Let", "Bogdan", 27, 3, "Junior", "PHP", company3));
            employeeRepository.save(new EmployeeEntity("Biro", "Attila", 22, 1, "Middle", "Java",company1));
            employeeRepository.save(new EmployeeEntity("Veres", "Pishta", 50, 15, "Senior", "Angular", company2));
            employeeRepository.save(new EmployeeEntity("Sebastian", "Contras",42, 6, "Junior", "C++", company3));
            employeeRepository.save(new EmployeeEntity("Petru", "Avram", 25, 2, "Senior", "PHP", company4));
            employeeRepository.save(new EmployeeEntity("Dan", "Andrei", 22, 1, "Junior", ".NET", company5));
        };
    }
}
