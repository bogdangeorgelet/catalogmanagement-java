package com.catalogmanagement.service;

import com.catalogmanagement.model.CompanyEntity;
import com.catalogmanagement.repository.ICompanyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@Service
public class CompanyService {

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
