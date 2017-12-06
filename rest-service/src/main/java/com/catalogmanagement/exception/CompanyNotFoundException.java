package com.catalogmanagement.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class CompanyNotFoundException extends RuntimeException{
    public CompanyNotFoundException(String companyName) {
        super("Could not find company with name: " + companyName);
    }

}
