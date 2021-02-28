function createNewProgramingLanguage(programingLanguages) {
    let lastProgramingLangauge = programingLanguages.pop();
    let newProgramingLanguageId = lastProgramingLangauge.id + 1;

    let newProgramingLanguage = prompt("Enter the name of the programing language");
    
    let programingLanguageObject = {
        id: newProgramingLanguageId,
        name: newProgramingLanguage
    }

    programingLanguages.push(lastProgramingLangauge);
    programingLanguages.push(programingLanguageObject);
}