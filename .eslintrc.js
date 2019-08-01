module.exports = {
  extends: 'eslint-config-divisio',
  env: {
    browser: true
  },
  rules: {
    'no-unused-expressions': ['error', { 'allowShortCircuit': true }],
    'define-flow-type': true,
    'react/no-array-index-key': false
  }
}
