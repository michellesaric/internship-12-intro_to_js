const actionsWithDevelo = () => {
  let isGoingAgain = true;

  while (isGoingAgain) {
    const choice = prompt(
      "~~~~~~ACTIONS WITH PROGRAMMING LANGUAGES~~~~~~\n\n\n" +
        "Choose what action you would like to make:\n\n" +
        "1 - (CREATE)Insert a new programming language\n" +
        "2 - (READ)Show list of all programming languages\n" +
        "3 - (UPDATE)Update a certain programming language\n" +
        "4 - (DELETE)Delete a certain programming language\n" +
        "5 - Go back to main menu"
    );

    if (!isNaN(choice) && parseInt(choice) >= 1 && parseInt(choice) <= 6) {
      isGoingAgain = false;
      switch (parseInt(choice)) {
        case 1:
          createNewProgrammingLanguage();
          break;
        case 2:
          readAllProgrammingLanguages();
          break;
        case 3:
          updateAProgrammingLanguage();
          break;
        case 4:
          deleteAProgrammingLanguage();
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
