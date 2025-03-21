/** @type {import('stylelint').Config} */
export default {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-standard-scss',
    'stylelint-config-idiomatic-order'
  ],
  plugins: [
    'stylelint-order'
  ],
  rules: {}
};
