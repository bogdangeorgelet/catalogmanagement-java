package com.catalogmanagement.api;

import com.catalogmanagement.model.CompanyEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("company")
@CrossOrigin
public interface ICompanyEndpoint {

    @RequestMapping(value = "/list", method = RequestMethod.GET)
    List<CompanyEntity> getAllCompanies();

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    CompanyEntity getCompany(@PathVariable long id);

    @RequestMapping(value = "/{id}", method = RequestMethod.PUT)
    void updateCompany(@PathVariable long id, @RequestBody CompanyEntity updatedCompany);

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    void deleteCompany(@PathVariable long id);

    @RequestMapping(value = "/add", method = RequestMethod.POST)
    void addCompany(@RequestBody CompanyEntity newCompany);
}
