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
    private long age;
    private long years;
    private String department;
    private String usedTechnology;

    public String getDepartment() {
        return department;
    }

    public void setDepartment(String department) {
        this.department = department;
    }

    public String getUsedTechnology() {
        return usedTechnology;
    }

    public void setUsedTechnology(String usedTechnology) {
        this.usedTechnology = usedTechnology;
    }

    public long getAge() {
        return age;
    }

    public void setAge(long age) {
        this.age = age;
    }

    public long getYears() {
        return years;
    }

    public void setYears(long years) {
        this.years = years;
    }

    @OneToOne
    @JoinColumn(name = "company_id")
    private CompanyEntity companyEntity;

    protected EmployeeEntity() {
    }

    public EmployeeEntity(String firstName, String lastName, long age, long years, String department, String usedTechnology, CompanyEntity companyEntity) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.years = years;
        this.department = department;
        this.usedTechnology = usedTechnology;
        this.companyEntity = companyEntity;
    }

    @Override
    public String toString() {
        return "EmployeeEntity{" +
                "id=" + id +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", age=" + age +
                ", years=" + years +
                ", department='" + department + '\'' +
                ", usedTechnology='" + usedTechnology + '\'' +
                ", companyEntity=" + companyEntity +
                '}';
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

}