package com.catalogmanagement.api;

import com.catalogmanagement.model.EmployeeEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("employee")
@CrossOrigin
public interface IEmployeeEndpoint {

    @RequestMapping(value = "/list", method = RequestMethod.GET)
    List<EmployeeEntity> getAllEmployees();

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    EmployeeEntity getEmployee(@PathVariable long id);

    @RequestMapping(value = "/{id}", method = RequestMethod.PUT)
    void updateEmployee(@PathVariable long id,
                        @RequestBody EmployeeEntity updatedEmployee);

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    void deleteEmployee(@PathVariable long id);

    @RequestMapping(value = "/add", method = RequestMethod.POST)
    void addEmployee(@RequestBody EmployeeEntity newEmployee);
}
