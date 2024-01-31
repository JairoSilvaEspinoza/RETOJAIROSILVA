module.exports = {
  presets: ["ts-jest"],
  verbose: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  testEnvironment: "node",
  testTimeout: 20000,
  transform: {
    "^.+\\.(ts|tsx|js)$": "ts-jest",
  },
};