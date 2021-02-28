function deleteProgrammingLanguages (programingLanguages) {
    readProgrammingLanguages(programingLanguages);
    
    let idToDelete = prompt("Type in the id of the programing language you would like to delete");
    if(!programingLanguages.find((programingLanguage) => programingLanguage.id === idToDelete)) {
        alert("The id you typed in doesn't exist");
        return;
    }
    if(confirm("Are you sure you would like to delete this programming langauge?")) {
        companies.splice(idToDelete-1, 1);
    }
}