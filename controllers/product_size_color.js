const {ProductSizeColor} = require('../models');

const createProductSizeColor = async (req, res) => {
    try {
        const {product_color_id, size_id, quantity} = req.body;
        const productColorSize = await ProductSizeColor.findAll({where: {product_color_id: product_color_id,size_id: size_id}});
        if (Object.keys(productColorSize).length !==0){
            return res.status(400).json({success: false, message: 'products_size_color exists!'});
        }
        await ProductSizeColor.create({
            product_color_id: product_color_id,
            size_id: size_id,
            quantity: quantity
        });
        return res.status(200).json({success: true});
    }catch (err) {
        return res.status(400).json(err.toString());
    }
}
module.exports = {
    createProductSizeColor
}
