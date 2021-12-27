// https://eslint.org/docs/user-guide/configuring

module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true
  },

  globals: {
    page: 'readonly',
    lightGallery: 'readonly'
  }
}
