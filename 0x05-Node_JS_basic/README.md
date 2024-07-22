```markdown
# 0x05. NodeJS Basics

## Description
This project introduces the basics of NodeJS, covering fundamental concepts such as running JavaScript using NodeJS, utilizing NodeJS modules, reading files, handling process arguments and environment variables, and creating HTTP servers using both NodeJS and ExpressJS. The project aims to provide a comprehensive understanding of these concepts through practical tasks and exercises.

## Learning Objectives
By the end of this project, you should be able to:
- Run JavaScript using NodeJS.
- Use NodeJS modules.
- Use specific NodeJS modules to read files.
- Use process to access command line arguments and the environment.
- Create a small HTTP server using NodeJS.
- Create a small HTTP server using ExpressJS.
- Create advanced routes with ExpressJS.
- Use ES6 with NodeJS using Babel-node.
- Use Nodemon to develop faster.

## Resources
Read or watch:
- [Node JS getting started](https://nodejs.dev/learn)
- [Process API doc](https://nodejs.org/dist/latest-v14.x/docs/api/process.html)
- [Child process](https://nodejs.org/dist/latest-v14.x/docs/api/child_process.html)
- [Express getting started](https://expressjs.com/en/starter/installing.html)
- [Mocha documentation](https://mochajs.org/)
- [Nodemon documentation](https://nodemon.io/)

## Requirements
- Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`
- All your files will be interpreted/compiled on Ubuntu 18.04 LTS using node (version 12.x.x)
- All your files should end with a new line
- A `README.md` file, at the root of the folder of the project, is mandatory
- Your code should use the `js` extension
- Your code will be tested using Jest and the command `npm run test`
- Your code will be verified against lint using ESLint
- Your code needs to pass all the tests and lint. You can verify the entire project running `npm run full-test`
- All of your functions/classes must be exported by using this format: `module.exports = myFunction;`

## Provided Files
- `database.csv`
```
firstname,lastname,age,field
Johann,Kerbrou,30,CS
Guillaume,Salou,30,SWE
Arielle,Salou,20,CS
Jonathan,Benou,30,CS
Emmanuel,Turlou,40,CS
Guillaume,Plessous,35,CS
Joseph,Crisou,34,SWE
Paul,Schneider,60,SWE
Tommy,Schoul,32,SWE
Katie,Shirou,21,CS
```

- `package.json`
- `babel.config.js`
- `.eslintrc.js`

## Tasks

### 0. Executing basic JavaScript with NodeJS
- **File:** `0-console.js`
- **Description:** Create a function named `displayMessage` that prints a string argument to STDOUT.

### 1. Using Process stdin
- **File:** `1-stdin.js`
- **Description:** Create a program that interacts with the user via the command line, asking for their name and displaying it back.

### 2. Reading a file synchronously with NodeJS
- **File:** `2-read_file.js`
- **Description:** Create a function named `countStudents` that reads a database file synchronously and logs the number of students in each field.

### 3. Reading a file asynchronously with NodeJS
- **File:** `3-read_file_async.js`
- **Description:** Create a function named `countStudents` that reads a database file asynchronously and logs the number of students in each field. The function should return a Promise.

### 4. Create a small HTTP server using Node's HTTP module
- **File:** `4-http.js`
- **Description:** Create a small HTTP server that listens on port 1245 and returns "Hello Holberton School!" for any endpoint.

### 5. Create a more complex HTTP server using Node's HTTP module
- **File:** `5-http.js`
- **Description:** Create a small HTTP server that handles different URL paths and displays student data from the database.

### 6. Create a small HTTP server using Express
- **File:** `6-http_express.js`
- **Description:** Create a small HTTP server using Express that listens on port 1245 and returns "Hello Holberton School!" for the root endpoint.

### 7. Create a more complex HTTP server using Express
- **File:** `7-http_express.js`
- **Description:** Create a small HTTP server using Express that handles different URL paths and displays student data from the database.

### 8. Organize a complex HTTP server using Express
- **Files:** `full_server/utils.js`, `full_server/controllers/AppController.js`, `full_server/controllers/StudentsController.js`, `full_server/routes/index.js`, `full_server/server.js`
- **Description:** Create a fully organized Express server with separate controllers and routes, utilizing Babel to support ES6 features.

## Getting Started
1. Clone the repository.
2. Navigate to the project directory.
3. Install the dependencies using `npm install`.
4. Run the desired task using `node <file_name.js>`.

## Running Tests
- To run the tests, use the command: `npm run test`
- To verify the entire project (tests and lint), use the command: `npm run full-test`

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```
