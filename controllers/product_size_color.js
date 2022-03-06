const {ProductSizeColor} = require('../models');

const createProductSizeColor = async (req, res) => {
    try {
        const {product_color_id, size_id, quantity} = req.body;
        const productColorSize = await ProductSizeColor.findOne({where: {product_color_id: product_color_id,size_id: size_id}});
        if (productColorSize){
            return res.status(400).json({success: false, message: 'products_size_color exists!'});
        }
        await ProductSizeColor.create({
            product_color_id: product_color_id,
            size_id: size_id,
            quantity: quantity
        });
        return res.status(200).json({success: true});
    }catch (err) {
        return res.status(400).json(err);
    }
}
module.exports = {
    createProductSizeColor
}
