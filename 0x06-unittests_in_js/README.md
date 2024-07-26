# 0x06. Unittests in JS

## UnitTests

**Back-end | JavaScript | ES6 | NodeJS | ExpressJS | Mocha**

### Project Details

- **Weight**: 1
- **Ongoing second chance project**: started Jul 24, 2024 6:00 AM, must end by Jul 27, 2024 6:00 AM
- **Auto review**: will be launched at the deadline

### Resources

Read or watch:
- [Mocha documentation](https://mochajs.org/)
- [Chai](https://www.chaijs.com/)
- [Sinon](https://sinonjs.org/)
- [Express](https://expressjs.com/)
- [Request](https://github.com/request/request)
- [How to Test NodeJS Apps using Mocha, Chai and SinonJS](https://www.digitalocean.com/community/tutorials/how-to-test-node-js-apps-using-mocha-chai-and-sinonjs)

### Learning Objectives

At the end of this project, you should be able to explain to anyone, without the help of Google:
- How to use Mocha to write a test suite
- How to use different assertion libraries (Node or Chai)
- How to present long test suites
- When and how to use spies
- When and how to use stubs
- What are hooks and when to use them
- Unit testing with async functions
- How to write integration tests with a small node server

### Requirements

- All of your code will be executed on Ubuntu 18.04 using Node 12.x.x
- Allowed editors: vi, vim, emacs, Visual Studio Code
- All your files should end with a new line
- A `README.md` file, at the root of the folder of the project, is mandatory
- Your code should use the `.js` extension
- When running every test with `npm run test *.test.js`, everything should pass correctly without any warning or error

### Tasks

#### 0. Basic test with Mocha and Node assertion library

- Install Mocha using npm.
- Set up scripts in your `package.json` to quickly run Mocha using `npm test`.
- Use `assert` to create test cases.
- Create a new file `0-calcul.js` with a function `calculateNumber` that accepts two arguments, rounds them, and returns their sum.
- Create test cases in `0-calcul.test.js`.

Expected output:
```javascript
const calculateNumber = require("./0-calcul.js");
calculateNumber(1, 3); // 4
calculateNumber(1, 3.7); // 5
calculateNumber(1.2, 3.7); // 5
calculateNumber(1.5, 3.7); // 6
```

Repo:
- **GitHub repository**: `alx-backend-javascript`
- **Directory**: `0x06-unittests_in_js`
- **Files**: `package.json`, `0-calcul.js`, `0-calcul.test.js`

#### 1. Combining descriptions

- Upgrade the function from `0-calcul.js` to `1-calcul.js` by adding a new argument `type` (SUM, SUBTRACT, DIVIDE).
- Update the function to perform operations based on `type`.
- Create test cases in `1-calcul.test.js`.

Expected output:
```javascript
const calculateNumber = require("./1-calcul.js");
calculateNumber('SUM', 1.4, 4.5); // 6
calculateNumber('SUBTRACT', 1.4, 4.5); // -4
calculateNumber('DIVIDE', 1.4, 4.5); // 0.2
calculateNumber('DIVIDE', 1.4, 0); // 'Error'
```

Repo:
- **GitHub repository**: `alx-backend-javascript`
- **Directory**: `0x06-unittests_in_js`
- **Files**: `1-calcul.js`, `1-calcul.test.js`

#### 2. Basic test using Chai assertion library

- Copy `1-calcul.js` to `2-calcul_chai.js` and `1-calcul.test.js` to `2-calcul_chai.test.js`.
- Rewrite the test suite using Chai's `expect`.

Repo:
- **GitHub repository**: `alx-backend-javascript`
- **Directory**: `0x06-unittests_in_js`
- **Files**: `2-calcul_chai.js`, `2-calcul_chai.test.js`

#### 3. Spies

- Create a new module `utils.js` with a `calculateNumber` function.
- Create `3-payment.js` with a function `sendPaymentRequestToApi` that calls `Utils.calculateNumber` and logs the result.
- Use `sinon.spy` to test the function in `3-payment.test.js`.

Repo:
- **GitHub repository**: `alx-backend-javascript`
- **Directory**: `0x06-unittests_in_js`
- **Files**: `utils.js`, `3-payment.js`, `3-payment.test.js`

#### 4. Stubs

- Copy `3-payment.js` to `4-payment.js` and `3-payment.test.js` to `4-payment.test.js`.
- Stub `Utils.calculateNumber` to return 10 and verify the behavior.

Repo:
- **GitHub repository**: `alx-backend-javascript`
- **Directory**: `0x06-unittests_in_js`
- **Files**: `4-payment.js`, `4-payment.test.js`

#### 5. Hooks

- Copy `4-payment.js` to `5-payment.js`.
- Create `5-payment.test.js` with two tests using `beforeEach` and `afterEach` hooks.

Repo:
- **GitHub repository**: `alx-backend-javascript`
- **Directory**: `0x06-unittests_in_js`
- **Files**: `5-payment.js`, `5-payment.test.js`

#### 6. Async tests with done

- Create `6-payment_token.js` with an async function `getPaymentTokenFromAPI`.
- Write tests for this function in `6-payment_token.test.js`.

Repo:
- **GitHub repository**: `alx-backend-javascript`
- **Directory**: `0x06-unittests_in_js`
- **Files**: `6-payment_token.js`, `6-payment_token.test.js`

#### 7. Skip

- Use `7-skip.test.js` to demonstrate skipping a test without removing or fixing it.

Repo:
- **GitHub repository**: `alx-backend-javascript`
- **Directory**: `0x06-unittests_in_js`
- **File**: `7-skip.test.js`

#### 8. Basic Integration testing

- In a folder `8-api`, create a basic Express server and write integration tests.

Repo:
- **GitHub repository**: `alx-backend-javascript`
- **Directory**: `0x06-unittests_in_js`
- **Files**: `8-api/package.json`, `8-api/api.js`, `8-api/api.test.js`

#### 9. Regex integration testing

- Modify the `8-api` project to add an endpoint `/cart/:id` with validation and write tests for it.

Repo:
- **GitHub repository**: `alx-backend-javascript`
- **Directory**: `0x06-unittests_in_js`
- **Files**: `9-api/package.json`, `9-api/api.js`, `9-api/api.test.js`

### Project Structure

```bash
.
├── 0-calcul.js
├── 0-calcul.test.js
├── 1-calcul.js
├── 1-calcul.test.js
├── 2-calcul_chai.js
├── 2-calcul_chai.test.js
├── 3-payment.js
├── 3-payment.test.js
├── 4-payment.js
├── 4-payment.test.js
├── 5-payment.js
├── 5-payment.test.js
├── 6-payment_token.js
├── 6-payment_token.test.js
├── 7-skip.test.js
├── 8-api
│   ├── package.json
│   ├── api.js
│   ├── api.test.js
├── 9-api
│   ├── package.json
│   ├── api.js
│   ├── api.test.js
└── README.md
```

### How to Run Tests

Install dependencies:
```bash
npm install
```

Run tests:
```bash
npm test
```

Each test file can be run individually:
```bash
npm test 0-calcul.test.js
npm test 1-calcul.test.js
# ... and so on
```
