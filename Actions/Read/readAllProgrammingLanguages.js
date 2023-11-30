const readAllProgrammingLanguages = () => {
  alert(
    `Here is a list of all programming languages':\n\n${programmingLanguages
      .map((language, index) => `${index + 1} - ${language.name}`)
      .join("\n")}`
  );

  actionsWithProgrammingLanguages();
  return;
};
