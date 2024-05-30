# 0x02. ES6 Classes

## Overview
This project focuses on understanding and implementing ES6 classes in JavaScript. You will be learning how to define classes, add methods, use static methods, extend classes, and explore metaprogramming concepts.

## Learning Objectives
By the end of this project, you should be able to explain:
- How to define a Class in JavaScript
- Adding methods to a class
- Purpose and implementation of static methods in a class
- Extending a class from another
- Introduction to metaprogramming and symbols

## Requirements
- All files executed on Ubuntu 18.04 LTS using NodeJS 12.11.x
- Allowed editors: vi, vim, emacs, Visual Studio Code
- All files should end with a new line
- Mandatory README.md file at the root of the project folder
- Code should use the `.js` extension
- Tests should be conducted using Jest and the command `npm run test`
- Code must be verified against lint using ESLint
- Code should pass all tests and lint checks. Run `npm run full-test` to verify the entire project.
- Install NodeJS 12.11.x as described in the Setup section
- Install Jest, Babel, and ESLint in the project directory by running `npm install`

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
Tasks
0. You used to attend a place like this at some point
Implement a class named ClassRoom with a constructor accepting a maxStudentsSize parameter.

1. Let's make some classrooms
Implement a function named initializeRooms that returns an array of 3 ClassRoom objects with specific sizes.

2. A Course, Getters, and Setters
Implement a class named HolbertonCourse with getter and setter methods for attributes.

3. Methods, static methods, computed methods names..... MONEY
Implement a class named Currency with getter and setter methods for attributes and a method displayFullCurrency.

4. Pricing
Implement a class named Pricing with getter and setter methods for attributes, a method displayFullPrice, and a static method convertPrice.

5. A Building
Implement a class named Building as an abstract class with a getter for attribute and a requirement for subclasses to implement a method evacuationWarningMessage.

6. Inheritance
Implement a subclass SkyHighBuilding that extends Building with additional attributes and a method evacuationWarningMessage.

7. Airport
Implement a class named Airport with constructor attributes and a default string description.

8. Primitive - Holberton Class
Implement a class named HolbertonClass with attributes and behavior when cast to a number or a string.

9. Hoisting
Fix the given code by rearranging class definitions and resolving reference errors.

10. Vroom
Implement a class named Car with constructor attributes and a method cloneCar.
