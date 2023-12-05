const createNewProgrammingLanguage = () => {
  const length = programmingLanguages.length;

  const programmingLanguage = prompt(
    "Please enter the name of the new programming language:"
  );
  if (
    !programmingLanguage.trim() ||
    programmingLanguages.some(
      (language) =>
        language.name.toLocaleLowerCase() === programmingLanguage.toLowerCase()
    )
  ) {
    alert("Your input vas invalid, you will be returned back.");
    actionsWithProgrammingLanguages();
    return;
  }

  const newLanguage = {
    id: Math.max(...programmingLanguages.id),
    name: programmingLanguage,
  };

  programmingLanguages.push(newLanguage);
  sortByProgrammingLanguage();

  actionsWithProgrammingLanguages();
  return;
};
