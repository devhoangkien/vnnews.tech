const themeReco = require('./themeReco.js')
const nav = require('../nav/')
const sidebar = require('../sidebar/')

module.exports = Object.assign({}, themeReco, {
  nav,
  sidebar,
  // logo: '/head.png',
  // search settings
  search: true,
  searchMaxSuggestions: 10,
  // Automatic side navigation
  sidebar: 'auto',
})