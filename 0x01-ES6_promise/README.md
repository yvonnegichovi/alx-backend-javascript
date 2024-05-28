# 0x01. ES6 Promises

## Introduction
This project focuses on mastering ES6 Promises in JavaScript. By completing the tasks outlined below, you'll deepen your understanding of Promises, asynchronous programming, and error handling.

## Project Details
- **Start Date:** May 28, 2024 6:00 AM
- **End Date:** May 30, 2024 6:00 AM
- **Checker Release:** May 28, 2024 6:00 PM
- **Auto Review Deadline:** Project deadline

## Learning Objectives
By the end of this project, you should be able to explain the following concepts without assistance:
- Promises: How they work, their significance, and their usage.
- Methods like `then`, `resolve`, `catch`, and `every` of the Promise object.
- Error handling using `throw`/`try`.
- Usage of the `await` operator.
- Implementing and utilizing async functions.

## Requirements
- Operating Environment: Ubuntu 18.04 LTS with NodeJS 12.11.x
- Editors: vi, vim, emacs, Visual Studio Code
- File Extension: `.js`
- Testing: Jest (using `npm run test`)
- Code Verification: ESLint
- All functions must be exported

## Setup
1. Install NodeJS 12.11.x by running the following commands:
```bash
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
nodejs -v # Should output v12.11.1
npm -v # Should output 6.11.3
Install Jest, Babel, and ESLint by navigating to your project directory and running npm install.
Configuration Files
Ensure the following files are added to your project directory:

package.json
babel.config.js
utils.js (for tasks requiring uploadPhoto and createUser)
.eslintrc.js
Run npm install to install dependencies defined in package.json.

Task Descriptions
0. Keep every promise you make and only make promises you can keep
Implement a function getResponseFromAPI returning a Promise.
1. Don't make a promise...if you know you can't keep it
Create a Promise based on a boolean parameter.
2. Catch me if you can!
Handle Promise resolution and rejection, logging appropriate messages.
3. Handle multiple successful promises
Resolve multiple promises and handle errors.
4. Simple promise
Implement a simple Promise returning function.
5. Reject the promises
Create a Promise rejecting function.
6. Handle multiple promises
Handle multiple promises and return results as specified.
7. Load balancer
Implement a function returning the result of the first resolved Promise.
8. Throw error / try catch
Create a function for division, handling errors gracefully.
9. Throw an error
Implement a function that captures errors thrown by another function.
Repositories
GitHub: alx-backend-javascript
Directory: 0x01-ES6_promise
