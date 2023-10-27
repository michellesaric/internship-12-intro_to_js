const filterDevelopersByProgrammingLanguages = () => {
  let languageId;
  let languageName;

  const input = prompt(programmingLanguagesPromptMessage, 1);

  if (
    !isNaN(input) &&
    parseInt(input) >= 1 &&
    parseInt(input) <= programmingLanguages.length
  ) {
    languageId = programmingLanguages[input - 1].id;
    languageName = programmingLanguages[input - 1].name;
  } else if (
    !isNaN(input) &&
    parseInt(input) === programmingLanguages.length + 1
  ) {
    mainMenu();
    return;
  } else {
    alert("Your input was invalid, try again");
    filterDevelopersByProgrammingLanguages();
  }

  const filteredDevelopers = developers.filter((developer) =>
    developer.programmingLangauges.includes(languageId)
  );

  programmingLanguagesFilterAlert(filteredDevelopers, languageName);
  mainMenu();
};
