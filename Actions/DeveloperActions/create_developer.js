function createNewDeveloper(developers, companies, programingLanguages) {
    let lastDeveloper = developers.pop();
    let newId = lastDeveloper.id + 1;

    let newName = prompt("Enter a new name for the employee");

    let workingStatusNumber = prompt("Enter the working status by entering:\n1 - unemployed \n2 - employed \n3 - freelancing");
    switch(workingStatusNumber) {
        case '1':
            let newWorkingStatus = workingStatusEnum.unemployed;
            break;
        case '2':
            newWorkingStatus = workingStatusEnum.employed;
            break;
        case '3':
            newWorkingStatus = workingStatusEnum.freelancing;
            break;
        default:
            alert("You didn't type in the correct number");
            return;
    }
    if(workingStatusNumber == 2) {
        readCompanies(companies);
        let newCompanyId = prompt("Enter the new company id");
        if(!companies.find((company) => company.id === newCompanyId)) {
            alert("The id you typed in doesn't exist");
            return;
        }
    } else {
        let newCompanyId = null;
    }

    let typeOfDeveloperNumber = prompt("Enter the type of developer by entering:\n1 - frontend \n2 - backend \n3 - fullstack");
    switch(typeOfDeveloperNumber) {
        case '1':
            let newTypeOfDeveloper = typeOfDeveloperEnum.frontend;
            break;
        case '2':
            newTypeOfDeveloper = typeOfDeveloperEnum.backend;
            break;
        case '3':
            newTypeOfDeveloper = typeOfDeveloperEnum.fullstack;
            break;
        default:
            alert("You didn't type in the correct number");
            return;
    }

    let numberOfProgrammingLanguages = prompt("Enter how many programming languages does the developer know");
    if(checkingForANumber(numberOfProgramingLanguages) === null) {
        return;
    }

    let programingLanguagesArray = [];

    for(let iteration = 0; iteration < numberOfProgrammingLanguages; iteration++) {
        readProgrammingLanguages(programingLanguages);
        let id = prompt("Choose the id of the language");
        if(checkingForANumber(id) === null) 
            return;
        programingLanguagesArray.push(programingLanguages.find((pL) => pL.id === id));
    }

    let newDeveloperObject = {
        id: newId,
        fullName: newName,
        workingStatus: newWorkingStatus,
        typeOfDeveloper: newTypeOfDeveloper,
        knownProgramingLanguages: programingLanguagesArray
    }

    developers.push(lastDeveloper);
    developers.push(newDeveloperObject);
}