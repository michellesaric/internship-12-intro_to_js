const developerTypePromptMessage =
  "Choose the type you want to filter by:\n\n" +
  "1 - Frontend\n" +
  "2 - Backend\n" +
  "3 - Fullstack\n" +
  "4 - Go back to main menu";

const developerTypeFilterAlert = (filteredDevelopers, type) => {
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
