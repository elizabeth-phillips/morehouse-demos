## Getting started

0. Make sure you have `npm` on your computer: https://www.npmjs.com/get-npm
1. On the command line, navigate to the root directory of your package.
2. Create a `package.json` with: `npm init -y`
3. Install `jest` as a dev dependency with: `npm install -D jest`

## Jest Methods

* `describe` not only verifies the tested code, but also documents its intended behavior. Each `describe` block specifies a larger component or function and contains a set of specifications.
* sub-`describe` defines a set of tests that test related functionality under one state. There is no functional difference between a `describe` and a sub-describe. However, there is a contextual difference:
* `it` defines the specifications. Each `it` block functions as a test and is evaluated in its own environment.
* `assert` is a NodeJS library that can work with either Mocha or Jest
* `expect` is a method that can be used with Jest. [Here is a list of Expect Options](https://jestjs.io/docs/en/expect)
* `beforeEach` https://jestjs.io/docs/en/setup-teardown
