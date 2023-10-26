const actionsWithDevelopers = () => {
  const developerOptions = [
    "Create a new developer",
    "Show list of all developers",
    "Update a certain developer",
    "Delete a certain developer",
    "Go back to main menu",
  ];

  const developerActions = [
    createNewDeveloper,
    readAllDevelopers,
    updateADeveloper,
    deleteADeveloper,
    mainMenu,
  ];

  displayMenu(
    "~~~~~~ACTIONS WITH DEVELOPERS~~~~~~",
    developerOptions,
    developerActions
  );
};
