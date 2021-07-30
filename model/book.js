import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxlength: 32
    },
    description: {
        type: String,
        required: true,
        maxlength: 2000
    },
    image: {
        type: String
    },
    author: {
        type: String
    },
    // category: {

    // }
}, { timestamps: true })
module.exports = mongoose.model("Book", bookSchema)