const updateAProgrammingLanguage = () => {
  const languageId = prompt(
    `Here is a list of all programming languages':\n\n${programmingLanguages
      .map((language, index) => `${index + 1} - ${language.name}`)
      .join("\n")}\nChoose the id of the language you want to delete:`
  );

  const max = Math.max(...programmingLanguages.id);

  if (isNaN(languageId) || languageId < 1 || languageId > max) {
    alert("The input you put in is invalid");
    actionsWithProgrammingLanguages();
  }

  const newLanguageName = prompt(
    "Enter a new name for the programming language"
  );

  if (
    !newLanguageName.trim() ||
    programmingLanguages.some(
      (language) =>
        language.name.toLocaleLowerCase() === newLanguageName.toLowerCase()
    )
  ) {
    alert("Your input vas invalid, you will be returned back.");
    actionsWithProgrammingLanguages();
    return;
  }

  programmingLanguages[languageId].name = newLanguageName;
  sortByProgrammingLanguage();

  actionsWithProgrammingLanguages();
  return;
};
