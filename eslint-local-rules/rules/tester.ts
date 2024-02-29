import { TSESLint } from '@typescript-eslint/utils';

export const tester = new TSESLint.RuleTester({
  parser: require.resolve('@typescript-eslint/parser'),
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module'
  }
});
