import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import productRoutes from './routes/product'
import categoryRoutes from './routes/category'
const app = express();
dotenv.config()

//db connection
mongoose.connect(
    process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}).then(() => console.log('DB Connected'))

mongoose.connection.on('error', err => {
    console.log(`DB connection error: ${err.message}`)
});

// Middleware
app.use(express.json());
app.use('/api', productRoutes)
app.use('/api', categoryRoutes)


const port = process.env.PORT || 8000
app.listen(port, () => {
    console.log(`Server is runing on port : ${port}`);
})