const actionsWithCompanies = () => {
  const companyOptions = [
    "Insert a new company",
    "Show list of all companies",
    "Update a certain company",
    "Delete a certain company",
    "Go back to main menu",
  ];

  const companyActions = [
    createNewCompany,
    readAllCompanies,
    updateACompany,
    deleteACompany,
    mainMenu,
  ];

  displayMenu(
    "~~~~~~ACTIONS WITH COMPANIES~~~~~~",
    companyOptions,
    companyActions
  );
};
