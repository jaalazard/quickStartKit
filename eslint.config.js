import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import prettierConfig from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';

export default [
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'], ignores: ['node_modules', 'dist', 'build'] },
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  prettierConfig,
  {
    plugins: { prettier: prettierPlugin },
    rules: {
      'prettier/prettier': 'error',
      'react/react-in-jsx-scope': 'off',
      'react/no-unescaped-entities': 'off',
      eqeqeq: 'error',
      '@typescript-eslint/no-explicit-any': 'warn',
      'no-var': 'error',
      'prefer-const': 'error',
    },
    settings: {
      react: {
        version: '18.3.1',
      },
    },
  },
  prettierConfig,
];
