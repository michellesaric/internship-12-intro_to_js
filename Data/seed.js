const programmingLanguages = [
  {
    id: 1,
    name: "Python",
  },
  {
    id: 2,
    name: "JavaScript",
  },
  {
    id: 3,
    name: "C",
  },
  {
    id: 4,
    name: "C++",
  },
  {
    id: 5,
    name: "C#",
  },
  {
    id: 6,
    name: "SQL",
  },
];

const companies = [
  {
    id: 1,
    fullName: "GetByBus",
    employees: [1],
  },
  {
    id: 2,
    fullName: "Evolutio",
    employees: [2],
  },
  {
    id: 3,
    fullName: "Aysnc Labs",
    employees: [3],
  },
];

const developers = [
  {
    id: 1,
    fullName: "Anthony Smith",
    workingStatus: workingStatus.EMPLOYEED,
    company: 1,
    developerType: developerType.BACKEND,
    programmingLangauges: [1, 3, 5, 6],
  },
  {
    id: 2,
    fullName: "Marie Johnson",
    workingStatus: workingStatus.UNEMPLOYED,
    company: null,
    developerType: developerType.FRONTEND,
    programmingLangauges: [1, 2, 4],
  },
  {
    id: 3,
    fullName: "Mark Gonzalez",
    workingStatus: workingStatus.FREELANCER,
    company: null,
    developerType: developerType.FULLSTACK,
    programmingLangauges: [1, 2, 3, 4, 5, 6],
  },
];
