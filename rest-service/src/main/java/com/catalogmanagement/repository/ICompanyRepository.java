package com.catalogmanagement.repository;

import com.catalogmanagement.model.CompanyEntity;
import org.springframework.data.repository.CrudRepository;

public interface ICompanyRepository extends CrudRepository<CompanyEntity, Long> {
    CompanyEntity findByName(String name);
}
