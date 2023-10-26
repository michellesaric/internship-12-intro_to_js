const mainMenu = () => {
  let isGoingAgain = true;

  while (isGoingAgain) {
    const choice = prompt(
      "~~~~~~~~~~MAIN MENU~~~~~~~~~~\n\n" +
        "Please select the number for the following actions:\n\n" +
        "1 - Actions with Developers\n" +
        "2 - Actions with Companies\n" +
        "3 - Actions with Programming languages\n" +
        "4 - Filter for developers by type\n" +
        "5 - Filter for developers by programming languages\n" +
        "6 - Filter for developers by working status"
    );

    if (!isNaN(choice) && parseInt(choice) >= 1 && parseInt(choice) <= 6) {
      isGoingAgain = false;
      switch (parseInt(choice)) {
        case 1:
          actionsWithDevelopers();
          break;
        case 2:
          actionsWithCompanies();
          break;
        case 3:
          actionsWithProgrammingLanguages();
          break;
        case 4:
          filterDevelopersByType();
          break;
        case 5:
          filterDevelopersByProgrammingLanguages();
          break;
        case 6:
          filterDevelopersByWorkingStatus();
          break;
        default:
          alert("Your input was invalid, please try again");
          isGoingAgain = true;
          break;
      }
    } else {
      alert("Your input was invalid, please try again");
    }
  }
};

mainMenu();
