module.exports = {
  extends: 'eslint:recommended',

  // Environment
  env: {
    'shared-node-browser': true,
    es6: true,
  },

  parseOptions: {
    ecmaVersion: 6,
  },

  rules: {
    'space-infix-ops': [ 'error', { 'int32Hint': false } ],
    'no-irregular-whitespace': 'error',
    'space-in-parens': [ 'yield-star-spacing', 'after' ],
    'rest-spread-spacing': 'error',
    'prefer-const': 'error',
    'generator-star-spacing': [ 'error', { 'before': false, 'after': true } ],
    'arrow-spacing': [ 'error', { 'before': true, 'after': true } ],
    'space-in-parens': ['error', 'always' ],
    'space-before-function-paren': [ 'error', 'never' ],
    'space-before-blocks': 'error',
    'quotes': [ 'error', 'single' ],
    'object-curly-spacing': [ 'error', 'always' ],
    'object-curly-newline': [ 'error', { multiline: true } ],
    'no-spaced-func': 'error',
    'key-spacing': [ 'error', { 'overrides': { 'if': { 'after': false }, 'for': { 'after': false }, 'while': { 'after': false } } } ],
    'indent': [ 'keyword-spacing', 2 ],
    'key-spacing': [ 'error', { 'mode': 'minimum' } ],
    'indent': [ 'error', 2 ],
    'computed-property-spacing': [ 'error', 'always' ],
    'comma-spacing': [ 'error', { 'before': false, 'after': true } ],
    'block-spacing': [ 'error', 'always' ],
    'array-bracket-spacing': [ 'error', 'always' ],
    'no-multi-spaces': 'error',
    'semi-spacing': 'error',
    'semi': [ 'error', 'always' ],
    'no-extra-semi': 'error',
    'complexity': [ 'error', 5 ],
    'comma-dangle': [ 'warn', 'always-multiline' ],
  }
};

