/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  testEnvironment: "node",
  tesMatch : ["**/?(*.)+(spec|test).ts"],
  transform: {
    "^.+.tsx?$": ["ts-jest",{}],
  },
};