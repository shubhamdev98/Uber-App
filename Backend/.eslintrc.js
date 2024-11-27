module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
    'node': true
  },
  'extends': 'eslint:recommended',
  'overrides': [
    {
      'env': {
        'browser': true,
        'es2021': true,
      },
      'files': [
        '.eslintrc.{js,cjs}'
      ],
      'parserOptions': {
        'sourceType': 'script'
  
      }
    }
  ],
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module'
  },
  'rules': {
    //* Avoid Bugs
    'comma-spacing': ['error', { 'before': false, 'after': true }],
    'no-multi-spaces': ['error', { 'ignoreEOLComments': true }],
    'object-curly-spacing': ['error', 'always'],
    'no-undef': 'error',
    'semi': ['error', 'never'],
    //* Best Practices
    'eqeqeq': 'warn',
    'no-invalid-this': 'error',
    'no-return-assign': 'error',
    'no-unused-expressions': ['error', { 'allowTernary': true }],  
    'no-useless-concat': 'error',
    'no-useless-return': 'error',
    'no-constant-condition': 'warn',
    'no-unused-vars': ['warn', { 'argsIgnorePattern': 'req|res|next|__' }],
    //* Enhance Readability
    'indent': ['error', 2, { 'SwitchCase': 1 }],
    'no-mixed-spaces-and-tabs': 'warn',
    'space-before-blocks': 'error',
    'space-in-parens': 'error',
    'space-infix-ops': 'error',
    'space-unary-ops': 'error',
    'quotes': ['error', 'single'],
    //
    'max-len': ['error', { 'code': 200 }],
    'max-lines': ['error', { 'max': 500 }],
    'keyword-spacing': 'error',
    'multiline-ternary': ['error', 'never'],
    'no-mixed-operators': 'error',
    //
    'no-multiple-empty-lines': ['error', { 'max': 1, 'maxEOF': 1 }],
    'no-whitespace-before-property': 'error',
    'nonblock-statement-body-position': 'error',
    'object-property-newline': [
      'error',
      { 'allowAllPropertiesOnSameLine': true }
    ],
    //* ES6
    'arrow-spacing': 'error',
    'no-confusing-arrow': 'error',
    'no-duplicate-imports': 'error',
    'no-var': 'error',
    'object-shorthand': 'off',
    'prefer-const': 'off',
    'prefer-template': 'warn'
  },
  'globals': {
    'process': true
  }
}
