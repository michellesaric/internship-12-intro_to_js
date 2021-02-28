function deleteDeveloper (developers) {
    readDevelopers(developers);

    let idToDelete = prompt("Type in the id of the employee you would like to delete");
    if(!(developers.includes((developer) => developer.id == idToDelete))) {
        alert("The id you typed in doesn't exist");
        return;
    }
    if(confirm("Are you sure you would like to delete this employee?")) {
        developers.splice(idToDelete-1, 1);
    }

    for(let iteration = idToDelete; iteration <= employees.length; iteration++) {
        developers[iteration].id -= 1;
    }
}