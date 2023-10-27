const actionsWithDevelopers = () => {
  const developerOptions = [
    "1 - Create a new developer",
    "2 - Show list of all developers",
    "3 - Update a certain developer",
    "4 - Delete a certain developer",
    "5 - Go back to main menu",
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
