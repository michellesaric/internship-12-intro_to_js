const deleteAProgrammingLanguage = () => {
  const languageId = prompt(
    `Here is a list of all programming languages':\n\n${programmingLanguages
      .map((language, index) => `${index + 1} - ${language.name}`)
      .join("\n")}\nChoose the id of the language you want to delete:`
  );

  if (
    isNaN(languageId) ||
    languageId < 1 ||
    languageId > programmingLanguages.length
  ) {
    alert("The input you put in is invalid");
    actionsWithProgrammingLanguages();
  }

  const deletedLanguageIndex = programmingLanguages.findIndex(
    (programmingLanguage) => programmingLanguage.id == languageId
  );
  programmingLanguages.splice(deletedLanguageIndex, 1);
  alert("Programming language deleted successfully.");

  for (let i = deletedLanguageIndex; i < programmingLanguages.length; i++) {
    programmingLanguages[i].id = i + 1;
  }

  actionsWithProgrammingLanguages();
  return;
};
