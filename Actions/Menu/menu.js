
do {
    let menu = 0;
    do {
        menu = prompt("1 - Developer actions\n2 - Company actions\n3 - Programing language actions");
    } while(checkingForANumber(menu) === null);

let option = 0;

if(menu == 1) {
    option = prompt("1 - add a developer\n2 - print all developers\n3 - update developer\n4 - delete developer");
    switch(option) {
        case '1':
            createNewDeveloper(developers, companies, programingLanguages);
            break;
        case '2':
            readDevelopers(developers);
            break;
        case '3':
            updateDeveloper(developers);
            break;
        case '4':
            deleteDeveloper(developers);
            break;
        default:
            alert("You typed in the wrong number");
            break;
    }
} else if(menu == 2) {
    option = prompt("1 - add a company\n2 - print all companies\n3 - update company\n4 - delete company");
    switch(option) {
        case '1':
            createNewCompany(companies);
            break;
        case '2':
            readCompanies(companies);
            break;
        case '3':
            updateCompany(companies);
            break;
        case '4':
            deleteCompanies(companies);
            break;
        default:
            alert("You typed in the wrong number");
            break;
    }
} else if(menu == 3) {
    option = prompt("1 - add a programing language\n2 - print all programing languages\n3 - update programing language\n4 - delete programing language");
    switch(option) {
        case '1':
            createNewProgramingLanguage(programingLanguages);
            break;
        case '2':
            readProgramingLanguages(programingLanguages);
            break;
        case '3':
            updateProgramingLanguage(programingLanguages);
            break;
        case '4':
            deleteProgramingLanguage(programingLanguages);
        default:
            alert("You typed in the wrong number");
            break;
    }
} else {
    alert("You typed in the wrong number");
}

}while(confirm("Do you want to go again?"));