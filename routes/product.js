import express from 'express';
import {create, list, read, productByID} from '../controller/product'

const router = express.Router();

router.post('/product/create', create);
router.get('/product', list);
router.get('/product/:productId', read);
router.param('productId', productByID);

module.exports = router;