function updateCompany(companies) {
    readCompanies(companies);
        
    let id = prompt("Choose id of the company you want to edit");

    let option = prompt("Choose what you want to edit: 1 - name\n2 - employees");
    if(checkingForANumber(option)) {
        return;
    }

    switch(option) {
        case '1':
            let newCompanyName = prompt("Enter the new name:");
            companies[id-1] = newCompanyName;
            break;
        case '2':
            

            
    }
}