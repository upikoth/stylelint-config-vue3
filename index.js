module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-prettier',
    'stylelint-config-idiomatic-order',
  ],
  overrides: [
    {
      files: ['src/**/*.vue'],
      customSyntax: 'postcss-html',
    },
    {
      files: ['src/**/*.scss'],
      customSyntax: 'postcss-scss',
    },
  ],
  rules: {
    'color-hex-case': 'lower',
    'color-hex-length': 'long',
    indentation: 'tab',
    'string-quotes': 'single',
    'import-notation': 'string',
    'function-no-unknown': [
      true,
      {
        ignoreFunctions: ['v-bind'],
      },
    ],
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['/deep/'],
      },
    ],
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['mixin', 'include'],
      },
    ],
    'declaration-block-no-redundant-longhand-properties': null,
    'declaration-colon-newline-after': null,
    'selector-class-pattern': null,
    'value-keyword-case': null,
    'no-descending-specificity': null,
    'property-no-vendor-prefix': null,
  },
};
