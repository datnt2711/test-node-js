import express from 'express';
import {create, list, read, cateByID, update, remove} from '../controller/category'

const router = express.Router();

router.post('/category/create', create)
router.get('/category', list);
router.param("categoryID", cateByID);
router.get('/category/:categoryID', read);
router.put('/category/:categoryID', update);
router.delete('/category/:categoryID', remove);

module.exports = router;