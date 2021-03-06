const {Images} = require('../models');

const cloudinary = require('../utils/clouddinary');

const createImages = async (files,product_id) => {
    for (const file of files){
        const result = await cloudinary.uploader.upload(file.path);
        if (file.fieldname === 'image_main') {
            await Images.create({
                url: result.secure_url,
                cloudinary_id: result.public_id,
                type: 'Main',
                product_id: product_id
            })
        }
        else if (file.fieldname === 'image_people'){
            await Images.create({
                url: result.secure_url,
                cloudinary_id: result.public_id,
                type: 'People',
                product_id: product_id
            })
        }
        else {
                await Images.create({
                    url: result.secure_url,
                    cloudinary_id: result.public_id,
                    type: 'Secondary',
                    product_id: product_id
                })
            }
        }
}
const createImageOfProduct = async (req, res) => {
    try {
        const user = req.user;
        const files = req.files;
        if (user.role !== "ADMIN"){
            return res.status(400).json({success: false, message: 'You do not have access'});
        }
        const {product_id} = req.body;
        await createImages(files, product_id);
        return res.status(200).json({success: true});
    }catch (err){
        return res.status(400).json(err);
    }
}
const deleteImage = async (req, res) => {
    try {
        const {list_image_id} = req.body;
        for (let image_id of list_image_id){
            const image = await Images.findByPk(image_id);
            await cloudinary.uploader.destroy(image.cloudinary_id);
            await Images.destroy({where: {id: image_id}});
        }
        return res.status(200).json({success: true});
    }catch (err) {
        return res.status(400).json(err);
    }
}
module.exports = {
    createImages,
    deleteImage,
    createImageOfProduct
}
