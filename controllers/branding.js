const {Branding, Products} = require('../models');

const createBranding = async (req, res) => {
    try {
        const user = req.user;
        if (user.role === 'ADMIN'){
            const {name} = req.body;
            const branding = await Branding.findAll();
            if (branding){
                const bran = await Branding.findOne({where: {name: name}});
                if (bran){
                    return res.status(400).json({success: false, message: 'branding exist'})
                }
                await Branding.create({
                    name: name,
                    count: 0
                });
                return res.status(200).json({success: true});
            }
            await Branding.create({
                name: name,
                count: 0
            });
            return res.status(200).json({success: true});
        }
    }catch (err) {
        return res.status(400).json(err);
    }
}
const getBranding = async (req, res) => {
    try {
        const branding = await Branding.findAll();
        return res.status(200).json(branding);
    }catch (err) {
        return res.status(400).json(err);
    }
}
const updateBranding = async (req, res) => {
    try {
        const {id,name} =req.body;
        const user = req.user;
        if (user.role === 'ADMIN'){
            await Branding.update({
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
const deleteBranding = async (req, res) => {
    // try {
    //     const id = req.params;
    //     const user = req.user;
    //     if (user.role === 'ADMIN') {
    //         await Products.destroy({where: {categories_id: id}})
    //         await Branding.destroy({where: {id: id}});
    //         return res.status(200).json({success: true});
    //     }else {
    //         return res.status(400).json({success: false, message: 'You do not have access'});
    //     }
    // }catch (err) {
    //     return res.status(400).json(err);
    // }
}
module.exports = {
    createBranding,
    updateBranding,
    deleteBranding,
    getBranding
}
