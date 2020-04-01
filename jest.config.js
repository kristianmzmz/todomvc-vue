module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/no-babel',
  "collectCoverage": true,
  "collectCoverageFrom": ["**/*.{js,vue}", "!**/node_modules/**"],
  "coverageReporters": ["html", "text-summary"]
}
