function readDevelopers(developers) {
    let string = "";

    for(let developer of developers){
        string = `Id: ${developer.id} \nName: ${developer.fullName} \nWorking Status: ${developer.workingStatus} \nCompany id: ${developer.companyId} \n Type of developer: ${developer.typeOfDeveloper} \nPrograming languages:`;
        for(let programingLanguages of developer.knownProgramingLanguages)
          string= string.concat(`${programingLanguages.name} `);  
    
        alert(string);
    }
}

function readCompanies(companies) {
    for(let company of companies)
        string(`Id: ${company.id} \nName: ${company.name} \nEmployees:`);
        for(let employee of company.workingEmployees)
        string = string.concat(`${employee.name} `);  
        
        alert(string);
}

function readProgrammingLanguages(programingLanguages) {
    for(let programingLanguage of programingLanguages)
        alert(`Id: ${programingLanguage.id} \nName: ${programingLanguage.name}`);
}