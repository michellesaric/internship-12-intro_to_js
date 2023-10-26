const actionsWithDevelopers = () => {
  let isGoingAgain = true;

  while (isGoingAgain) {
    const choice = prompt(
      "~~~~~~ACTIONS WITH DEVELOPERS~~~~~~\n\n\n" +
        "Choose what action you would like to make:\n\n" +
        "1 - (CREATE)Insert a new developer\n" +
        "2 - (READ)Show list of all developers\n" +
        "3 - (UPDATE)Update a certain developer\n" +
        "4 - (DELETE)Delete a certain developer\n" +
        "5 - Go back to main menu"
    );

    if (!isNaN(choice) && parseInt(choice) >= 1 && parseInt(choice) <= 6) {
      isGoingAgain = false;
      switch (parseInt(choice)) {
        case 1:
          createNewDeveloper();
          break;
        case 2:
          readAllDevelopers();
          break;
        case 3:
          updateADeveloper();
          break;
        case 4:
          deleteADeveloper();
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
