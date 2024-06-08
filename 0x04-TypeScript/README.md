# 0x04. TypeScript

## JavaScript and TypeScript Project

## Resources
- [TypeScript in 5 minutes](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)
- [TypeScript documentation](https://www.typescriptlang.org/docs/)

## Learning Objectives
By the end of this project, you should be able to explain the following without using Google:
- Basic types in TypeScript
- Interfaces, Classes, and functions
- How to work with the DOM and TypeScript
- Generic types
- How to use namespaces
- How to merge declarations
- How to use an ambient Namespace to import an external library
- Basic nominal typing with TypeScript

## Requirements
- Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`
- All your files should end with a new line
- All your files will be transpiled on Ubuntu 18.04
- Your TypeScript scripts will be checked with `jest` (version 24.9.*)
- A `README.md` file at the root of the project folder is mandatory
- Your code should use the `.ts` extension when possible
- The TypeScript compiler should not show any warnings or errors when compiling your code

## Configuration Files
Use the following files for configuration:
- `package.json`
- `.eslintrc.js`
- `tsconfig.json`
- `webpack.config.js`

## Tasks

### 0. Creating an interface for a student
**Directory:** `task_0`  
**Files:** `task_0/js/main.ts`, `task_0/package.json`, `task_0/.eslintrc.js`, `task_0/tsconfig.json`, `task_0/webpack.config.js`

**Instructions:**
- Create an interface named `Student` with the following elements: `firstName` (string), `lastName` (string), `age` (number), `location` (string)
- Create two students and an array named `studentsList` containing these students
- Using Vanilla JavaScript, render a table and append a new row for each student in the array. Each row should contain the `firstName` and `location`

### 1. Let's build a Teacher interface
**Directory:** `task_1`  
**Files:** `task_1/js/main.ts`, `task_1/webpack.config.js`, `task_1/tsconfig.json`, `task_1/package.json`

**Instructions:**
- Create an interface named `Teacher` with the following elements:
  - `firstName` (string) and `lastName` (string), which should only be modifiable when a Teacher is first initialized
  - `fullTimeEmployee` (boolean) which should always be defined
  - `yearsOfExperience` (number) which is optional
  - `location` (string) which should always be defined
  - Ability to add any attribute to the object like `contract` (boolean) without specifying the name of the attribute

### 2. Extending the Teacher class
**Directory:** `task_1`  
**Files:** `task_1/js/main.ts`

**Instructions:**
- Write an interface named `Directors` that extends `Teacher`. It requires an attribute named `numberOfReports` (number).

### 3. Printing teachers
**Directory:** `task_1`  
**Files:** `task_1/js/main.ts`

**Instructions:**
- Write a function `printTeacher` that:
  - Accepts two arguments: `firstName` and `lastName`
  - Returns the first letter of the `firstName` and the full `lastName`
  - Create an interface for the function named `printTeacherFunction`

### 4. Writing a class
**Directory:** `task_1`  
**Files:** `task_1/js/main.ts`

**Instructions:**
- Write a class named `StudentClass`:
  - The constructor accepts `firstName` (string) and `lastName` (string) arguments
  - The class has a method named `workOnHomework` that returns the string `Currently working`
  - The class has a method named `displayName` that returns the `firstName`
  - The constructor and class should be described through an interface

### 5. Advanced types Part 1
**Directory:** `task_2`  
**Files:** `task_2/js/main.ts`, `task_2/webpack.config.js`, `task_2/tsconfig.json`, `task_2/package.json`

**Instructions:**
- Create interfaces `DirectorInterface` and `TeacherInterface` with the required methods
- Create classes `Director` and `Teacher` that implement their respective interfaces
- Create a function `createEmployee` that returns either a `Director` or `Teacher` instance based on the provided salary

### 6. Creating functions specific to employees
**Directory:** `task_2`  
**Files:** `task_2/js/main.ts`

**Instructions:**
- Write a function `isDirector` that accepts an employee and returns a boolean indicating if the employee is a director
- Write a function `executeWork` that accepts an employee and calls the appropriate method based on whether the employee is a `Director` or `Teacher`

### 7. String literal types
**Directory:** `task_2`  
**Files:** `task_2/js/main.ts`

**Instructions:**
- Write a string literal type named `Subjects` allowing values `Math` or `History`
- Write a function `teachClass` that takes `todayClass` as an argument and returns the appropriate string based on the class

### 8. Ambient Namespaces
**Directory:** `task_3`  
**Files:** `task_3/js/main.ts`, `task_3/js/interface.ts`, `task_3/js/crud.d.ts`

**Instructions:**
- Create a type `RowID` and an interface `RowElement`
- Create an ambient declaration file for the `crud.js` library
- Use the ambient declarations in `main.ts` to perform CRUD operations

### 9. Namespace & Declaration merging
**Directory:** `task_4`  
**Files:** `task_4/package.json`, `task_4/tsconfig.json`, `task_4/js/subjects/Cpp.ts`, `task_4/js/subjects/Java.ts`, `task_4/js/subjects/React.ts`, `task_4/js/subjects/Subject.ts`, `task_4/js/subjects/Teacher.ts`

**Instructions:**
- Use declaration merging to add new attributes to the `Teacher` interface
- Create classes for each subject with methods for requirements and available teachers

### 10. Update task_4/js/main.ts
**Directory:** `task_4`  
**Files:** `task_4/js/main.ts`

**Instructions:**
- Create and export constants for `Cpp`, `Java`, and `React` subjects
- Create and export a `Teacher` object `cTeacher` with `experienceTeachingC = 10`
- Log to the console and call the methods for each subject with `cTeacher` as the teacher

### 11. Brand convention & Nominal typing
**Directory:** `task_5`  
**Files:** `task_5/js/main.ts`, `task_5/package.json`, `task_5/webpack.config.js`, `task_5/tsconfig.json`

**Instructions:**
- Create interfaces `MajorCredits` and `MinorCredits` with a `credits` number and a brand property
- Create functions `sumMajorCredits` and `sumMinorCredits` to sum the credits of two subjects

---

## Repository Structure
alx-backend-javascript/
├── 0x04-TypeScript/
│ ├── task_0/
│ │ ├── js/
│ │ │ └── main.ts
│ │ ├── package.json
│ │ ├── .eslintrc.js
│ │ ├── tsconfig.json
│ │ └── webpack.config.js
│ ├── task_1/
│ │ ├── js/
│ │ │ └── main.ts
│ │ ├── package.json
│ │ ├── tsconfig.json
│ │ └── webpack.config.js
│ ├── task_2/
│ │ ├── js/
│ │ │ └── main.ts
│ │ ├── package.json
│ │ ├── tsconfig.json
│ │ └── webpack.config.js
│ ├── task_3/
│ │ ├── js/
│ │ │ └── main.ts
│ │ │ └── interface.ts
│ │ │ └── crud.d.ts
│ │ ├── package.json
│ │ ├── tsconfig.json
│ │ └── webpack.config.js
│ ├── task_4/
│ │ ├── js/
│ │ │ └── subjects/
│ │ │ └── Cpp.ts
│ │ │ └── Java.ts
│ │ │ └── React.ts
│ │ │
