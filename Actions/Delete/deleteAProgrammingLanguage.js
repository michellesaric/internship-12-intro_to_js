const deleteAProgrammingLanguage = () => {
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

  const confirmation = confirm(
    `Are you sure you wish to delete ${programmingLanguages[languageId].name}`
  );

  if (confirmation) {
    const deletedLanguageIndex = programmingLanguages.findIndex(
      (programmingLanguage) => programmingLanguage.id == languageId
    );
    programmingLanguages.splice(deletedLanguageIndex, 1);
    alert("Programming language deleted successfully.");

    for (const developer of developers) {
      const languageIndex =
        developer.programmingLanguages.indexOf(languageIdToRemove);

      if (languageIndex !== -1) {
        developer.programmingLanguages.splice(languageIndex, 1);
      }
    }
  } else {
    deleteAProgrammingLanguage();
  }

  actionsWithProgrammingLanguages();
  return;
};
