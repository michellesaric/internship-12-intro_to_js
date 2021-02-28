function updateDeveloper (employees) {
    readEmployees(employees);

    let newId = prompt("Enter id of developer:");
    if(!employees.find((employee) => employee.id === newId)) {
        alert("You typed in an id that doesn't exist");
    }

    let option = prompt("Enter what you would like to change:\n1 - Full name\n2 - Working status\n3 - CompanyName(if needed)\n4 - Type of developer\n5 - ")
    
}