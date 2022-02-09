const db = require('./db')
const container = require('./container')
const auth = require('./auth')
const cloudinary = require('./clouddinary')
module.exports = {
    ...db,
    ...container,
    ...auth,
    ...cloudinary
}
