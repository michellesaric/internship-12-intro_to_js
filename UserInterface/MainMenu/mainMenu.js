const mainMenu = () => {
  const mainOptions = [
    "1 - Actions with Developers",
    "2 - Actions with Companies",
    "3 - Actions with Programming Languages",
    "4 - Filter for developers by type",
    "5 - Filter for developers by programming languages",
    "6 - Filter for developers by working status",
    "7 - Exit",
  ];

  const mainActions = [
    actionsWithDevelopers,
    actionsWithCompanies,
    actionsWithProgrammingLanguages,
    filterDevelopersByType,
    filterDevelopersByProgrammingLanguages,
    filterDevelopersByWorkingStatus,
    () => alert("Goodbye!"),
  ];

  displayMenu("~~~~~~MAIN MENU~~~~~~", mainOptions, mainActions);
};
