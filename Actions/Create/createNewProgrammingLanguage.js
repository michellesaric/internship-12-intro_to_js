const createNewProgrammingLanguage = () => {
  const length = programmingLanguages.length;

  const programmingLanguage = prompt(
    "Please enter the name of the new programming language:"
  );
  if (!programmingLanguage.trim()) {
    alert("Your input vas invalid, you will be returned back.");
    actionsWithProgrammingLanguages();
    return;
  }
  const newLanguage = {
    id: programmingLanguages[length - 1].id + 1,
    name: programmingLanguage,
  };

  programmingLanguages.push(newLanguage);
  actionsWithProgrammingLanguages();
  return;
};
