const filterDevelopersByType = () => {
  let type;

  const input = prompt(developerTypePromptMessage, 1);

  if (!isNaN(input) && parseInt(input) >= 1 && parseInt(input) <= 3) {
    type = Object.values(developerType)[input - 1];
  } else if (!isNaN(input) && parseInt(input) === 4) {
    mainMenu();
    return;
  } else {
    alert("Your input was invalid, try again");
    filterDevelopersByType();
  }

  const filteredDevelopers = developers.filter(
    (developer) => developer.developerType === type
  );

  developerTypeFilterAlert(filteredDevelopers, type);
  mainMenu();
};
