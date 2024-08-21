import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';
import airbnb from 'eslint-config-airbnb';
import airbnbHooks from 'eslint-config-airbnb/hooks';
import pluginPrettier from 'eslint-plugin-prettier'; // Prettier ESLint 플러그인을 가져옵니다.

export default [
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    languageOptions: {
      globals: globals.browser,
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser: '@babel/eslint-parser',
      parserOptions: {
        requireConfigFile: false,
        babelOptions: {
          presets: ['@babel/preset-react'],
        },
      },
    },
    plugins: {
      react: pluginReact,
      prettier: pluginPrettier, // Prettier 플러그인을 추가합니다.
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'airbnb',
      'airbnb/hooks',
      'prettier', // Prettier와 충돌하는 규칙을 비활성화합니다.
    ],
    rules: {
      ...pluginJs.configs.recommended.rules,
      ...pluginReact.configs.flat.recommended.rules,
      ...airbnb.rules,
      ...airbnbHooks.rules,
      'prettier/prettier': 'error', // Prettier 규칙을 ESLint 에러로 표시합니다.
    },
  },
];
