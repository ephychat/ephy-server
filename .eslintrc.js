module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true,
    browser: true,
  },
  extends: [
    'airbnb-base',
    'eslint:recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    'indent': [
      'error',
      2
    ],
    'max-lines-per-function': [
      'error', 
      {
        'max': 20,
        'skipBlankLines': true,
        'skipComments': true
      },
    ],
    "yoda": [
      "error",
    ],
    "no-shadow": [
      "error"
    ],
    "no-console":[
      "off"
    ]
  },
};
