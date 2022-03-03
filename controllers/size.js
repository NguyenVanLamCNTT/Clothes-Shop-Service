const {Sizes} = require('../models');

const createSize = async (req, res) => {
    try {
        const {name} = req.body;
        const size = await Sizes.findOne({where: {name: name}});
        if (size){
            return res.status(400).json({success: false, message: 'size exists'})
        }
        await Sizes.create({
            name: name
        });
        return res.status(200).json({success: true});
    }catch (err) {
        return res.status(400).json(err);
    }
}
const getSizes = async (req, res) => {
    try {
        const sizes = await Sizes.findAll();
        return res.status(200).json(sizes);
    }catch (err) {
        return res.status(400).json(err);
    }
}
module.exports = {
    createSize,
    getSizes
}
