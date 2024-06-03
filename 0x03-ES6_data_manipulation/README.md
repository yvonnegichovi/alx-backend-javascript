# 0x03. ES6 data manipulation

## Description
This project focuses on ES6 data manipulation techniques in JavaScript, covering concepts such as arrays, typed arrays, and various data structures like Set, Map, and WeakMap. The project includes tasks aimed at practicing the usage of map, filter, and reduce functions on arrays, as well as implementing functions to work with different data structures.

## Learning Objectives
By the end of this project, participants are expected to understand and be able to explain:
- How to use map, filter, and reduce on arrays
- Typed arrays in JavaScript
- The Set, Map, and WeakMap data structures and their usage

## Requirements
- All files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x
- Allowed editors: vi, vim, emacs, Visual Studio Code
- All files should end with a new line
- Your code should use the `.js` extension
- Code will be tested using Jest and verified against lint using ESLint
- Functions must be exported

## Setup
1. Install NodeJS 12.11.x
```bash
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
nodejs -v
npm -v
Install Jest, Babel, and ESLint
bash
Copy code
npm install
Configuration files:
package.json
babel.config.js
.eslintrc.js
Tasks
0. Basic list of objects
Create a function named getListStudents that returns an array of objects with attributes id (Number), firstName (String), and location (String).

1. More mapping
Create a function named getListStudentIds that returns an array of ids from a list of objects.

2. Filter
Create a function getStudentsByLocation that returns an array of objects located in a specific city.

3. Reduce
Create a function getStudentIdsSum that returns the sum of all student ids.

4. Combine
Create a function updateStudentGradeByCity that returns an array of students for a specific city with their new grade.

5. Typed Arrays
Create a function createInt8TypedArray that returns a new ArrayBuffer with an Int8 value at a specific position.

6. Set data structure
Create a function setFromArray that returns a Set from an array.

7. More set data structure
Create a function hasValuesFromArray that returns a boolean if all the elements in the array exist within the set.

8. Clean set
Create a function cleanSet that returns a string of all the set values that start with a specific string.

9. Map data structure
Create a function groceriesList that returns a map of groceries with items and quantities.

10. More map data structure
Create a function updateUniqueItems that updates quantities in a map for items with initial quantity at 1.

Repository
GitHub repository: alx-backend-javascript
Directory: 0x03-ES6_data_manipulation
