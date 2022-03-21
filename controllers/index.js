const auth = require('./auth');
const categories = require('./categories')
const branding = require('./branding')
const image = require('./image')
const product = require('./products')
const size = require('./size');
const productSize = require('./product_size');
module.exports = {
    ...auth,
    ...categories,
    ...branding,
    ...image,
    ...product,
    ...size,
    ...productSize
}
