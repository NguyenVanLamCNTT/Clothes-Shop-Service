const auth = require('./auth');
const categories = require('./categories')
const branding = require('./branding')
const image = require('./image')
const product = require('./products')
const productColor = require('./product_color');
const color = require('./color');
module.exports = {
    ...auth,
    ...categories,
    ...branding,
    ...image,
    ...product,
    ...productColor,
    ...color
}
