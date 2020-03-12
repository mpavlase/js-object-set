module.exports = {
  globals: {
    __DEV__: true,
  },
  setupFilesAfterEnv: ["<rootDir>/test/jest/jest.setup.js"],
  // noStackTrace: true,
  // bail: true,
  // cache: false,
  // verbose: true,
  // watch: true,
  collectCoverage: true,
  coverageDirectory: "<rootDir>/test/jest/coverage",
  collectCoverageFrom: [
    "<rootDir>/src/**/*.vue",
    "<rootDir>/src/**/*.js",
    // "<rootDir>/src/**/*.ts", // TODO remove this workaround if TypeScript is used
    "<rootDir>/src/**/*.jsx",
  ],
  coverageThreshold: {
    global: {
      //  branches: 50,
      //  functions: 50,
      //  lines: 50,
      //  statements: 50
    },
  },
  testMatch: [
    "<rootDir>/test/jest/__tests__/**/*.spec.js",
    "<rootDir>/test/jest/__tests__/**/*.test.js",
    "<rootDir>/src/**/__tests__/*_jest.spec.js",
  ],
  moduleFileExtensions: ["vue", "js", "jsx", "json", "ts", "tsx"],
  moduleNameMapper: {
    "^test-utils$": "<rootDir>/node_modules/@vue/test-utils/dist/vue-test-utils.js",
    "^~/(.*)$": "<rootDir>/$1",
    "^src/(.*)$": "<rootDir>/src/$1",
    ".*css$": "<rootDir>/test/jest/utils/stub.css",
  },
  transform: {
    ".*\\.js$": "babel-jest",
    ".+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$": "jest-transform-stub",
  },
  transformIgnorePatterns: ["<rootDir>/node_modules/(?!quasar/lang)"],
  snapshotSerializers: ["<rootDir>/node_modules/jest-serializer-vue"],
}
