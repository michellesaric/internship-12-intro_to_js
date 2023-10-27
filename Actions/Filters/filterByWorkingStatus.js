const filterDevelopersByWorkingStatus = () => {
  let status;

  const input = prompt(workingStatusPromptMessage, 1);

  if (!isNaN(input) && parseInt(input) >= 1 && parseInt(input) <= 3) {
    status = Object.values(workingStatus)[input - 1];
  } else if (!isNaN(input) && parseInt(input) === 4) {
    mainMenu();
    return;
  } else {
    alert("Your input was invalid, try again");
    filterDevelopersByWorkingStatus();
  }

  const filteredDevelopers = developers.filter(
    (developer) => developer.workingStatus === status
  );

  workingStatusFilterAlert(filteredDevelopers, status);
  mainMenu();
};
