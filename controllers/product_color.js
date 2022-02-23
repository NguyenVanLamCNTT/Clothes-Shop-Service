const {ProductColor,Images} = require('../models');
const {createImages} = require('./image')
const createProductColor = async (req, res) => {
    try {
        const user = req.user;
        const files = req.files;
        if (user.role !== "ADMIN"){
            return res.status(400).json({success: false,message: "You do not have access"});
        }
        const {product_id, color_id} = req.body;
        const productColor = await ProductColor.create({
            product_id: Number(product_id),
            color_id: Number(color_id)
        });
        await createImages(files,productColor.id);
        return res.status(200).json({success: true})
    }catch (err) {
        return res.status(400).json(err.toString())
    }
}

const getProductColor = async (req,res) =>{
    try {
        const options = {
            include: [{
                model: Images,
                as:'images'
            }]
        }
        const productColor = await ProductColor.findAll(options);
        res.status(200).json(productColor);
    }catch (err) {
        res.status(400).json(err);
    }
}
module.exports = {
    createProductColor,
    getProductColor
}
