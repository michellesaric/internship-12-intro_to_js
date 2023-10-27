const actionsWithCompanies = () => {
  const companyOptions = [
    "1 - Insert a new company",
    "2 - Show list of all companies",
    "3 - Update a certain company",
    "4 - Delete a certain company",
    "5 - Go back to main menu",
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
