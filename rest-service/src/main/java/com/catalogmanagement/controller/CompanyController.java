package com.catalogmanagement.controller;

import com.catalogmanagement.api.ICompanyEndpoint;
import com.catalogmanagement.model.CompanyEntity;
import com.catalogmanagement.repository.ICompanyRepository;
import com.catalogmanagement.service.CompanyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CompanyController implements ICompanyEndpoint {

    private CompanyService companyService;

    @Autowired
    public CompanyController(CompanyService companyService) {
        this.companyService = companyService;
    }

    public List<CompanyEntity> getAllCompanies() {
        return companyService.getAllCompanies();
    }

    public CompanyEntity getCompany(@PathVariable long id) {
        return companyService.getCompany(id);
    }

    public void updateCompany(@PathVariable long id,
                              @RequestBody CompanyEntity updatedCompany) {
        companyService.updateCompany(id, updatedCompany);
    }

    public void deleteCompany(@PathVariable long id) {
        companyService.deleteCompany(id);
    }

    public void addCompany(@RequestBody CompanyEntity newCompany) {
        companyService.addCompany(newCompany);
    }
}
