import globals from 'globals';
import prettierPlugin from 'eslint-plugin-prettier/recommended';

export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
      },
      ecmaVersion: 13,
      sourceType: 'module',
    },
  },
  prettierPlugin,
];
