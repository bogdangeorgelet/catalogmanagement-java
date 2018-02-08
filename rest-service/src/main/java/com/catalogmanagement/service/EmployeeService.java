package com.catalogmanagement.service;

import com.catalogmanagement.exception.CompanyNotFoundException;
import com.catalogmanagement.model.CompanyEntity;
import com.catalogmanagement.model.EmployeeEntity;
import com.catalogmanagement.repository.ICompanyRepository;
import com.catalogmanagement.repository.IEmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@Service
public class EmployeeService {

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
        employeeEntity.setAge(updatedEmployee.getAge());
        employeeEntity.setYears(updatedEmployee.getYears());
        employeeEntity.setDepartment(updatedEmployee.getDepartment());
        employeeEntity.setUsedTechnology(updatedEmployee.getUsedTechnology());
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
                newEmployee.getLastName(), newEmployee.getAge(), newEmployee.getYears(), newEmployee.getDepartment(), newEmployee.getUsedTechnology(),companyEntity);
        employeeRepository.save(employee);
    }

}
