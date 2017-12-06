package com.catalogmanagement.repository;

import com.catalogmanagement.model.EmployeeEntity;
import org.springframework.data.repository.CrudRepository;

public interface IEmployeeRepository extends CrudRepository<EmployeeEntity, Long> {
}
