module.exports = {
  "env": {
    "browser": true,
    "es2021": true,
    "node": true
  },
  "extends": ["eslint:recommended"],
  "overrides": [
  ],
  // for parsing TypeScript
  "parser": "@typescript-eslint/parser",
  "plugins": ["eslint-plugin-local-rules"],
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "rules": {
    "local-rules/disallow-undefined-keyword": "error"
  },
  "ignorePatterns": ['eslint-local-rules/*']
}
