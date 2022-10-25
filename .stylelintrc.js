module.exports = {
  extends: ['stylelint-config-standard-scss', 'stylelint-config-recess-order'],
  rules: {
    // Class selectors use lowerCamelCase instead of kebab-case
    'selector-class-pattern': '^[a-z][a-zA-Z0-9]+$',
  },
}
