const filterDevelopersByType = () => {
  let type = "";

  const input = prompt(
    "Choose the type you want to filter by:\n\n" +
      "1 - Unemployeed\n" +
      "2 - Freelancer\n" +
      "3 - Employeed\n" +
      "4 - Go back to main menu",
    1
  );

  if (!isNaN(input) && parseInt(input) >= 1 && parseInt(input) <= 3) {
    type = Object.values(developerType)[input];
  } else if (!isNaN(input) && parseInt(input) === 4) {
    mainMenu();
  } else {
    alert("Your input was invalid, try again");
    filterDevelopersByType();
  }

  const filteredDevelopers = developers.filter(
    (developer) => developer.developerType === type
  );

  if (filteredDevelopers.length > 0) {
    alert(
      `Developers with type '${type}':\n\n${filteredDevelopers
        .map((developer) => developer.fullName)
        .join("\n")}`
    );
  } else {
    alert(`No developers with type '${type}' found.`);
  }
};
