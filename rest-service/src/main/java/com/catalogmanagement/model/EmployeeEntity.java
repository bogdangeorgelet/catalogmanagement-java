package com.catalogmanagement.model;

import javax.persistence.*;

@Entity
@Table(name = "employee")
public class EmployeeEntity {

    // @TODO adaugat clasa, diriginte

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String firstName;
    private String lastName;
    @OneToOne
    @JoinColumn(name = "company_id")
    private CompanyEntity companyEntity;

    protected EmployeeEntity() {
    }

    public EmployeeEntity(String firstName, String lastName, CompanyEntity companyEntity) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.companyEntity = companyEntity;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public CompanyEntity getCompanyEntity() {
        return companyEntity;
    }

    public void setCompanyEntity(CompanyEntity companyEntity) {
        this.companyEntity = companyEntity;
    }

    @Override
    public String toString() {
        return "EmployeeEntity{" +
                "id=" + id +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", companyEntity=" + companyEntity +
                '}';
    }
}