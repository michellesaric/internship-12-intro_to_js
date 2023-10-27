const programmingLanguagesPromptMessage =
  "Choose one of the programming languages:\n\n" +
  programmingLanguages
    .map((language, index) => `${index + 1} - ${language.name}`)
    .join("\n") +
  `\n${programmingLanguages.length + 1} - Exit the menu`;

const programmingLanguagesFilterAlert = (filteredDevelopers, languageName) => {
  if (filteredDevelopers.length > 0) {
    alert(
      `Developers with programming language '${languageName}':\n\n${filteredDevelopers
        .map((developer) => developer.fullName)
        .join("\n")}`
    );
  } else {
    alert(`No developers with programming language '${languageName}' found.`);
  }
};
