const express = require('express');
const router = express.Router();

const {getProducts, createProduct, updateProduct, deleteProduct} = require('../controllers/productController')

router.get("/products",getProducts)
router.post("/createProduct",createProduct);
router.put("/updateProduct/:id",updateProduct)
router.delete("/delete/:id",deleteProduct);
module.exports = router;


