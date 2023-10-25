## Introduction to JavaScript

The goal of the homework is to make a search engine for developers and companies.

For your data, use **anonymous objects** that can be stored in an array in some varibale. Saved data must always be **alphabetically arranged** depending on the name(search the **sort** method). Ids must be automatically generated(**auto-increment**). For all developer names, regardless of user input, format the first letter of each word in uppercase, and the rest in lowercase, and delete all spaces at the beginning and end, and there are no multiple spaces in between.
For example: " aNtHoNy SmItH " -> "Anthony Smith"

**Developer** has the following data:

- Id
- Full name
- Working status(unemployed, freelancer, working in a company)
- Name of the company(if they are working in a company)
- Type of developer(frontend, backend, fullstack)
- Programming languages they know

**Company** has the following data:

- Id
- Full name
- Employees

**Programming language** has the following data:

- Id
- Name

**CRUD** - Create, Read, Update, Delete
The user is obliged to confirm the selection for each deletion.
The following **functionalities** need to be implemented:

- CRUD for developers
- CRUD for programming languages
- CRUD for companies
- Filters for developers:
  - By type
  - By programming languages
  - By working status

Data has to be **synced**, for example, if a programming language gets deleted, he shoudn't be shown on developers that know the language.

**Note**: Updating the programming language is not reflected on the same programming language that is on the developer (ie, the data about the programming language remains the same as it was at the time of adding the language to the developer). The relationship between companies and developers is the opposite, i.e. changes in the developer are reflected in changes in the company's employees.

**User interface**:

- For all **inputs** use **prompt** or **confirm**
- For all **outputs** use **alert**
- HTML is only used for connecting script tags
