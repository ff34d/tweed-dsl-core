/** @type {import("jest").Config} */
export default {
   preset: "ts-jest",
   collectCoverage: true,
   coverageDirectory: "coverage",
   coverageProvider: "v8",
   testEnvironment: "node"
}
