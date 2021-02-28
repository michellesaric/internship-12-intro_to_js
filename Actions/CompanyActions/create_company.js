function createNewCompany(employees, companies) {
    let lastCompany = companies.pop();
    let newCompanyId = lastCompany.id + 1;
    
    let newCompanyName = prompt("Enter the company name");

    let companyEmployees = [];

    readEmployees(employees);
    
    let numberOfEmployees = prompt("Enter the number of employees you want to add");
    if(!Number.isNaN(numberOfEmployees)) {
        alert("You didn't type in a number");
        return;
    }

    for(let iteration = 0; iteration < numberOfEmployees; iteration++) {
        let employeeId = prompt("Enter the id of the employee");
        companyEmployees.push(employees.find((employee) => employee.id === employeeId));
        employees[employeeId-1].companyId = newCompanyId;
        employees[employeeId-1].workingStatus = workingStatusEnum.employed;
    }

    let newCompanyObject = {
        id: newCompanyId,
        name: newCompanyName,
        workingEmployees: companyEmployees
    }

    companies.push(lastCompany);
    companies.push(newCompanyObject);
}