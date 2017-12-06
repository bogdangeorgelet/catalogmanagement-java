package com.catalogmanagement.controller;

import com.catalogmanagement.api.ICompanyEndpoint;
import com.catalogmanagement.model.CompanyEntity;
import com.catalogmanagement.repository.ICompanyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CompanyController implements ICompanyEndpoint {

    @Autowired
    ICompanyRepository companyRepository;

    public List<CompanyEntity> getAllCompanies() {
        return (List<CompanyEntity>) companyRepository.findAll();
    }

    public CompanyEntity getCompany(@PathVariable long id) {
        return companyRepository.findOne(id);
    }

    public void updateCompany(@PathVariable long id,
                              @RequestBody CompanyEntity updatedCompany) {
        CompanyEntity company = companyRepository.findOne(id);
        company.setName(updatedCompany.getName());
        companyRepository.save(company);
    }

    public void deleteCompany(@PathVariable long id) {
        companyRepository.delete(id);
    }

    public void addCompany(@RequestBody CompanyEntity newCompany) {
        CompanyEntity company = new CompanyEntity(newCompany.getName());
        companyRepository.save(company);
    }
}
