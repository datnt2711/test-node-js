import Book from '../model/book';


//create
export const create = (req, res) => {
    const book = new Book(req.body);
    book.save((err, result) => {
        if(err){
            res.status(400).json({
                error: 'Khong them duoc sp'
            })
        }
        res.json(result);
    })
}


//hien thi sp (list)
export const list = (req,res) => {
    Book.find((err, books) => {
        if(err){
            error: 'Khong tim thay sp'
        }
        res.json(books)
    })
}


//chi tiet sp (read)
export const productByID = (req,res, next, id) => {
    Book.findById(id).exec((err, books) => {
        if(err || !books){
            res.status(400).json({
                error: 'Khong tim thay sp bang id'
            })
        }
        req.books = books;
        next();
    })
}
export const read = (req, res) => {
    return res.json(req.books)
}