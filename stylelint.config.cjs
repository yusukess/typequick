module.exports = {
  extends: ['stylelint-config-recommended-scss', 'stylelint-config-recess-order'],
  plugins: ['stylelint-scss'],
  rules: {
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global'],
      },
    ],
  },
};
