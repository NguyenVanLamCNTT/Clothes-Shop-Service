const auth = require('./auth');
const categories = require('./categories')
const branding = require('./branding')
module.exports = {
    ...auth,
    ...categories,
    ...branding
}
