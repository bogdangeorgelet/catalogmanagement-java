package com.catalogmanagement.controller;

import com.catalogmanagement.api.IEmployeeEndpoint;
import com.catalogmanagement.exception.CompanyNotFoundException;
import com.catalogmanagement.model.CompanyEntity;
import com.catalogmanagement.model.EmployeeEntity;
import com.catalogmanagement.repository.ICompanyRepository;
import com.catalogmanagement.repository.IEmployeeRepository;
import com.catalogmanagement.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class EmployeeController implements IEmployeeEndpoint{

    private EmployeeService employeeService;

    @Autowired
    public EmployeeController(EmployeeService employeeService) {
        this.employeeService = employeeService;
    }

    public List<EmployeeEntity> getAllEmployees() {
        return employeeService.getAllEmployees();
    }

    public EmployeeEntity getEmployee(@PathVariable long id) {
        return employeeService.getEmployee(id);
    }

    public void updateEmployee(@PathVariable long id,
                               @RequestBody EmployeeEntity updatedEmployee) {
        employeeService.updateEmployee(id, updatedEmployee);
    }

    public void deleteEmployee(@PathVariable long id)
    {
        employeeService.deleteEmployee(id);
    }

    public void addEmployee(@RequestBody EmployeeEntity newEmployee) {
        employeeService.addEmployee(newEmployee);
    }
}
