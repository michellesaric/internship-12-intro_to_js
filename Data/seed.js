const programmingLanguages = [
  {
    id: 1,
    name: "C",
  },
  {
    id: 2,
    name: "C++",
  },
  {
    id: 3,
    name: "C#",
  },
  {
    id: 4,
    name: "JavaScript",
  },
  {
    id: 5,
    name: "Python",
  },
  {
    id: 6,
    name: "SQL",
  },
];

const companies = [
  {
    id: 1,
    fullName: "Aysnc Labs",
    employees: [1],
  },
  {
    id: 2,
    fullName: "GetByBus",
    employees: [2],
  },
  {
    id: 3,
    fullName: "Evolutio",
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
