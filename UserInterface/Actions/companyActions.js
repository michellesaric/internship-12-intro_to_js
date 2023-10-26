const actionsWithCompanies = () => {
  let isGoingAgain = true;

  while (isGoingAgain) {
    const choice = prompt(
      "~~~~~~ACTIONS WITH COMPANIES~~~~~~\n\n\n" +
        "Choose what action you would like to make:\n\n" +
        "1 - (CREATE)Insert a new company\n" +
        "2 - (READ)Show list of all companies\n" +
        "3 - (UPDATE)Update a certain company\n" +
        "4 - (DELETE)Delete a certain company\n" +
        "5 - Go back to main menu"
    );

    if (!isNaN(choice) && parseInt(choice) >= 1 && parseInt(choice) <= 6) {
      isGoingAgain = false;
      switch (parseInt(choice)) {
        case 1:
          createNewCompany();
          break;
        case 2:
          readAllCompanies();
          break;
        case 3:
          updateACompany();
          break;
        case 4:
          deleteACompany();
          break;
        case 5:
          mainMenu();
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
