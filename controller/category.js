import Category from '../model/category';

//create cate
export const create = (req, res) => {
    const category = new Category(req.body);
    category.save((err, cate) => {
        if(err){
            res.status(400).json({
                error: 'Khong them duoc category'
            })
        }
        res.json(cate);
    })
}


//list cate
export const list = (req, res) => {
    Category.find((err, cate) => {
        if(err){
            error: 'Khong tim thay danh muc sp'
        }
        res.json(cate)
    })
}

//read cate
export const cateByID = (req, res, next, id) => {
    Category.findById(id).exec((err, cate) => {
        if(err || !cate){
            res.status(400).json({
                error: 'Khong tim thay danh muc byID'
            })
        }
        req.cate = cate;
        next();
    })
}

export const read = (req, res) => {
    return res.json(req.cate);
}

//Update cate
export const update = (req, res) =>{
    Category.findOneAndUpdate(
        { _id :  req.cate._id },
        { $set : req.body },
        { new : true }, (err, cate) => {
            if(err){
                res.status(400).json({
                    error: 'khong sua dc cate'
                })
            }
            res.json(cate);
        }
    )
}

//delete cate
export const remove = (req, res) => {
    let cate = req.cate;
    cate.remove((err, deleteCate) => {
        if(err){
            res.status(400).json({
                error: 'khong xoa dc cate'
            })
        }
        res.json({
            deleteCate,
            message: 'xoa thanh cong'
        })
    })
}