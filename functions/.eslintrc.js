module.exports = {
  root: true,
  env: {
    es6: true,
    node: true
  },
  plugins: ['@typescript-eslint', 'import', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
    'google'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
    createDefaultProgram: true
  },
  ignorePatterns: [
    '/lib/**/*', // Ignore built files.
    '.eslintrc.js'
  ],
  overrides: [
    {
      files: ['*.ts', '*.js'],
      extends: ['plugin:@typescript-eslint/recommended'],

      parserOptions: {
        project: ['./tsconfig.json'] // Specify it only for TypeScript files
      },
      rules: {
        'max-lines': ['error', { max: 200, skipComments: true, skipBlankLines: true }],
      }
    }
  ],
  rules: {
    /* Prettier */
    'prettier/prettier': 'error',

    /* General */
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'off',
    'no-use-before-define': 'off',
    'no-unused-vars': 'off',
    'require-jsdoc': 'off',
    'prefer-template': 'error',
    'default-param-last': 'warn',
    'class-methods-use-this': [
      'off',
      {
        exceptMethods: [
          'render',
          'getInitialState',
          'getDefaultProps',
          'getChildContext',
          'shouldComponentUpdate'
        ]
      }
    ],
    'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 1 }],
    'object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],
    complexity: ['error', { max: 9 }],
    'no-implicit-coercion': ['error', { allow: ['!!'] }],
    'max-params': ['error', 10],
    'no-console': ['error', { allow: ['error'] }],
    'no-magic-numbers': ['warn', { ignore: [1, 0, -1] }],
    'no-irregular-whitespace': ['error', { skipTemplates: true }],
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'always', prev: '*', next: 'export' }
    ],

    /* Import */
    'sort-imports': 'off',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', ['index', 'sibling'], ['parent', 'internal'], 'object'],
        'newlines-between': 'always-and-inside-groups',
        pathGroups: [
          {
            pattern: 'react+(|-dom)',
            group: 'external',
            position: 'before'
          }
        ],
        pathGroupsExcludedImportTypes: ['react+(|-dom)'],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true
        }
      }
    ],

    /* Typescript */
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-use-before-define': 'error',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '_' }],
    '@typescript-eslint/consistent-type-imports': 'error',

    /* Custom */
    quotes: ['error', 'single'],
    'import/no-unresolved': 'warn',
    'object-curly-spacing': 'off',
    semi: 'off',
    'comma-dangle': 'off'
  }
}
