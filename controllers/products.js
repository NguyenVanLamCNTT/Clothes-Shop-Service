const { Products, Images, ProductSize } = require('../models');

const createProduct = async(req, res) => {
    try {
        const { name, price, description, category_id, branding_id, color, discount } = req.body;
        const product = await Products.create({
            name: name,
            price: price,
            description: description,
            category_id: category_id,
            branding_id: branding_id,
            color: color,
            discount: discount || 0
        });
        if (!product) throw Error("Error!");
        return res.status(200).json({ success: true });
    } catch (err) {
        return res.status(400).json(err.toString());
    }
}
const getProducts = async(req, res) => {
    try {
        const options = {
            include: [{
                model: Images,
                as: 'images',
                where: { type: ['Main', 'People'] }
            }],
            attributes: ['id', 'name', 'price', 'status', 'discount']
        }
        const products = await Products.findAll(options);
        return res.status(200).json(products);
    } catch (err) {
        return res.status(400).json(err.toString());
    }
}
const getProductById = async(req, res) => {
    try {
        const { product_id } = req.params;
        const options = {
            include: [{
                model: Images,
                as: "images",
                where: { type: ['Main', 'People'] }
            }, {
                model: ProductSize,
                as: 'product_size',
            }],
            where: { id: product_id }
        }
        const products = await Products.findOne(options);
        return res.status(200).json(products);
    } catch (err) {
        return res.status(400).json(err);
    }
}
const getProductByCategory = async(req, res) => {
    try {
        const { category_id } = req.params;
        const options = {
            include: [{
                model: Images,
                as: "images",
                where: { type: ['Main', 'People'] }
            }],
            attributes: ['id', 'name', 'price', 'status', 'discount'],
            where: { categories_id: category_id }
        }
        const products = await Products.findAll(options);
        return res.status(200).json(products);
    } catch (err) {
        return res.status(400).json(err);
    }
}
const getProductByBranding = async(req, res) => {
    try {
        const { branding_id } = req.params;
        const options = {
            include: [{
                model: Images,
                as: "images",
                where: { type: ['Main', 'People'] }
            }],
            attributes: ['id', 'name', 'price', 'status', 'discount'],
            where: { branding_id: branding_id }
        }
        const products = await Products.findAll(options);
        return res.status(200).json(products);
    } catch (err) {
        return res.status(400).json(err);
    }
}
const deleteProducts = async(req, res) => {
    try {
        const { list_product_id } = req.body;
        for (let product_id of list_product_id) {
            await deleteProduct(product_id);
        }
        return res.status(200).json({ success: true });
    } catch (err) {
        return res.status(400).json(err);
    }
}
const deleteProduct = async(product_id) => {
    // const product = await Products.findByPk(product_id);
    // if (product){
    //     await Images.destroy({
    //         where: {product_id: product_id}
    //     });
    //     await Products.destroy({
    //         where: {id: product_id}
    //     })
    // }
}
module.exports = {
    createProduct,
    getProducts,
    getProductById,
    getProductByCategory,
    getProductByBranding,
    deleteProducts,
    deleteProduct
}