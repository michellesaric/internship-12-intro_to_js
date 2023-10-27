const workingStatusPromptMessage =
  "Choose the type you want to filter by:\n\n" +
  "1 - Unemployeed\n" +
  "2 - Freelancer\n" +
  "3 - Employeed\n" +
  "4 - Go back to main menu";

const workingStatusFilterAlert = (filteredDevelopers, status) => {
  if (filteredDevelopers.length > 0) {
    alert(
      `Developers with working status '${status}':\n\n${filteredDevelopers
        .map((developer) => developer.fullName)
        .join("\n")}`
    );
  } else {
    alert(`No developers with working status '${status}' found.`);
  }
};
