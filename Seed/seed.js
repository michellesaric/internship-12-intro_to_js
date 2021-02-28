const workingStatusEnum = Object.freeze(
    {
        unemployed: "unemployed",
        employed: "employed",
        freelancing: "freelancing"
    }
)

const typeOfDeveloperEnum = Object.freeze(
    {
        frontend: "frontend",
        backend: "backend",
        fullstack:"fullstack"
    }
)

var programingLanguages = [
    {
        id: 1,
        name: "Python"
    },
    {
        id: 2,
        name: "C"
    },
    {
        id: 3,
        name: "C++"
    },
    {
        id: 4,
        name: "C#"
    },
    {
        id: 5,
        name: "HTML"
    },
    {
        id: 6,
        name: "CSS"
    },
    {
        id: 7,
        name: "JavaScript"
    },
    {
        id: 8,
        name: "PostgreSQL"
    }
]


var developers = [
    {
        id: 1,
        fullName: "Ante Antić",
        workingStatus: workingStatusEnum.freelancing,
        companyId: null,
        typeOfDeveloper: typeOfDeveloperEnum.backend,
        knownProgramingLanguages: [programingLanguages.find((pL) => pL.name === "C"), programingLanguages.find((pL) => pL.name === "C++") ]
    },
    {
        id: 2,
        fullName: "Mate Matić",
        workingStatus: workingStatusEnum.employed,
        companyId: 1,
        typeOfDeveloper: typeOfDeveloperEnum.fullstack,
        knownProgramingLanguages: [programingLanguages.find((pL) => pL.name === "HTML"), programingLanguages.find((pL) => pL.name === "CSS") ]
    },
    {
        id: 3,
        fullName: "Ivan Ivić",
        workingStatus: workingStatusEnum.unemployed,
        companyId: null,
        typeOfDeveloper: typeOfDeveloperEnum.frontend,
        knownProgramingLanguages: [programingLanguages.find((pL) => pL.name === "HTML"), programingLanguages.find((pL) => pL.name === "CSS"), programingLanguages.find((pL) => pL.name === "JavaScript")]
    },
    {
        id: 4,
        fullName: "Ana Anić",
        workingStatus: workingStatusEnum.employed,
        companyId:2,
        typeOfDeveloper: typeOfDeveloperEnum.backend,
        knownProgramingLanguages: [programingLanguages.find((pL) => pL.name === "C"), programingLanguages.find((pL) => pL.name === "C++"), programingLanguages.find((pL) => pL.name === "Python") ]
    },
    {
        id: 5,
        fullName: "Ivona Ivić",
        workingStatus: workingStatusEnum.employed,
        companyId: 3,
        typeOfDeveloper: typeOfDeveloperEnum.fullstack,
        knownProgramingLanguages: [programingLanguages]
    }
]

var companies = [
    {
        id: 1,
        name: "Company A",
        workingEmployees: [developers.find((developer) => developer.id === 2)]
    },
    {
        id: 2,
        name: "Company B",
        workingEmployees: [developers.find((developer) => developer.id === 4)]
    },
    {
        id: 1,
        name: "Company C",
        workingEmployees: [developers.find((developer) => developer.id === 5)]
    }
]