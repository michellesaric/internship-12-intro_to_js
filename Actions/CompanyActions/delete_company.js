function deleteCompanies (companies) {
    readCompanies(companies);
    
    let idToDelete = prompt("Type in the id of the company you would like to delete");
    if(!companies.find((company) => company.id === idToDelete)) {
        alert("The id you typed in doesn't exist");
        return;
    }
    if(confirm("Are you sure you would like to delete this company?")) {
        companies.splice(idToDelete-1, 1);
    }
}