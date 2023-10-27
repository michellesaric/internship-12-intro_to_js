const actionsWithProgrammingLanguages = () => {
  const programmingLanguageOptions = [
    "1 - Insert a new programming language",
    "2 - Show list of all programming languages",
    "3 - Update a certain programming language",
    "4 - Delete a certain programming language",
    "5 - Go back to main menu",
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
