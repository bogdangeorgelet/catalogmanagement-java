package com.catalogmanagement.controller;

import com.catalogmanagement.api.IEmployeeEndpoint;
import com.catalogmanagement.exception.CompanyNotFoundException;
import com.catalogmanagement.model.CompanyEntity;
import com.catalogmanagement.model.EmployeeEntity;
import com.catalogmanagement.repository.ICompanyRepository;
import com.catalogmanagement.repository.IEmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class EmployeeController implements IEmployeeEndpoint{

    @Autowired
    IEmployeeRepository employeeRepository;

    @Autowired
    ICompanyRepository companyRepository;


    public List<EmployeeEntity> getAllEmployees() {
        return (List<EmployeeEntity>) employeeRepository.findAll();
    }

    public EmployeeEntity getEmployee(@PathVariable long id) {
        return employeeRepository.findOne(id);
    }

    public void updateEmployee(@PathVariable long id,
                               @RequestBody EmployeeEntity updatedEmployee) {
        EmployeeEntity employeeEntity = employeeRepository.findOne(id);
        employeeEntity.setFirstName(updatedEmployee.getFirstName());
        employeeEntity.setLastName(updatedEmployee.getLastName());
        employeeEntity.setCompanyEntity(updatedEmployee.getCompanyEntity());
        employeeRepository.save(employeeEntity);
    }

    public void deleteEmployee(@PathVariable long id) {
        employeeRepository.delete(id);
    }

    public void addEmployee(@RequestBody EmployeeEntity newEmployee) {
        CompanyEntity companyEntity = companyRepository.findByName(newEmployee.getCompanyEntity().getName());
        if (companyEntity == null)
            throw new CompanyNotFoundException(newEmployee.getCompanyEntity().getName());
        EmployeeEntity employee = new EmployeeEntity(newEmployee.getFirstName(),
                newEmployee.getLastName(), companyEntity);
        employeeRepository.save(employee);
    }
}
