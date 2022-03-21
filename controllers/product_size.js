const {ProductSize} = require('../models');

const createSizeOfProduct = async (req, res) => {
    try {
        const user = req.user;
        if (user.role !== "ADMIN"){
            return res.status(400).json({success: false,message: "You do not have access"});
        }
        const {product_id, size_id, quantity} = req.body;
        const productSize = await ProductSize.findOne({where: {product_id: product_id, size_id: size_id}});
        if (productSize){
            return res.status(400).json({success: false, message: 'size of this product exists!'});
        }
        await ProductSize.create({
            product_id: product_id,
            size_id: size_id,
            quantity: quantity
        });
        return res.status(200).json({success: true});
    }catch (err) {
        return res.status(400).json(err.toString());
    }
}
module.exports = {
    createSizeOfProduct
}
