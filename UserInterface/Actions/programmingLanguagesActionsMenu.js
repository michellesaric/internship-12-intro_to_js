const actionsWithProgrammingLanguages = () => {
  const programmingLanguageOptions = [
    "Insert a new programming language",
    "Show list of all programming languages",
    "Update a certain programming language",
    "Delete a certain programming language",
    "Go back to main menu",
  ];

  const programmingLanguageActions = [
    createNewProgrammingLanguage,
    readAllProgrammingLanguages,
    updateAProgrammingLanguage,
    deleteAProgrammingLanguage,
    mainMenu,
  ];

  displayMenu(
    "~~~~~~ACTIONS WITH PROGRAMMING LANGUAGES~~~~~~",
    programmingLanguageOptions,
    programmingLanguageActions
  );
};
