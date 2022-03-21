const {Categories, Products} = require('../models');

const createCategory = async (req, res) => {
    try {
        const user = req.user;
        if (user.role === 'ADMIN') {
            const {name} = req.body;
            const categories = await Categories.findAll();
            if (categories){
                const category = await Categories.findOne({where: {name: name}});
                if (category) {
                    return res.status(400).json({success: false, message: 'categories exist'})
                }
                await Categories.create({
                    name: name,
                    count: 0
                });
                return res.status(200).json({success: true});
            }
            await Categories.create({
                name: name,
                count: 0
            });
            return res.status(200).json({success: true});
        }else {
            return res.status(400).json({success: false, message: 'You do not have access'});
        }
    }catch (err) {
        return res.status(400).json(err);
    }
}

const getCategories = async (req, res) => {
    try {
        const categories = await Categories.findAll();
         return res.status(200).json(categories);
    }catch (err) {
        return res.status(400).json(err);
    }
}
const updateCategory = async (req, res) => {
    try {
        const {id,name} =req.body;
        const user = req.user;
        if (user.role === 'ADMIN'){
            await Categories.update({
                name: name
            }, {where: {id: id}});
            return res.status(200).json({success: true});
        }else {
            return res.status(400).json({success: false, message: 'You do not have access'});
        }
    }catch (err) {
        return  res.status(400).json(err);
    }
}
const deleteCategory = async (req, res) => {
    // try {
    //     const id = req.params;
    //     const user = req.user;
    //     if (user.role === 'ADMIN') {
    //         await Products.destroy({where: {categories_id: id}})
    //         await Categories.destroy({where: {id: id}});
    //         return res.status(200).json({success: true});
    //     }else {
    //         return res.status(400).json({success: false, message: 'You do not have access'});
    //     }
    // }catch (err) {
    //     return res.status(400).json(err);
    // }
}
module.exports = {
    createCategory,
    getCategories,
    updateCategory,
    deleteCategory
}
