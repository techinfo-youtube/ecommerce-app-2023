import categoryModel from "../models/categoryModel";

export const createCategoryController = async (req, res) => {
    try {
        const [name] = req.body
        if(!name) {
            return res.status(401).send({message: 'Name is required'});
        }
        const existingCategory = await categoryModel.findOne({name})

        if(existingCategory) {
            return 
        }
        
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            error,
            message: 'Error in Category'
        })
    }
}