module.exports = {
  testEnvironment: "node",
  roots: ["<rootDir>/src"],
  collectCoverageFrom: [
    "src/**/*.{js,jsx}",
    "!src/**/*.test.{js,jsx}",
    "!src/__tests__/**/*.{js,jsx}",
    "!dist/**",
    "!**/node_modules/**",
  ],
  testMatch: ["<rootDir>/src/__tests__/**/*.test.js"],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  coverageReporters: ["text", "text-summary", "lcov", "html"],
  coverageDirectory: "coverage",
  clearMocks: true,
  resetMocks: true,
  restoreMocks: true,
  verbose: true,
  moduleFileExtensions: ["js", "json", "jsx", "node"],
};
