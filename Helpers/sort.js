const sortByProgrammingLanguage = () => {
  programmingLanguages.sort((firstLanguage, secondLanguage) =>
    firstLanguage.name.localeCompare(secondLanguage.name)
  );
};

const sortByDevelopersName = () => {
  developers.sort((firstDeveloper, secondDeveloper) =>
    firstDeveloper.fullName.localeCompare(secondDeveloper.fullName)
  );
};

const sortByCompanyName = () => {
  companies.sort((firstCompany, secondCompany) =>
    firstCompany.fullName.localeCompare(secondCompany.fullName)
  );
};
