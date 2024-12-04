const Product = require("../models/productModel.js");

const createProduct = async (req, res) => {
  const { name, description, price, category } = req.body;

  if (!name || !description || !price || !category) {
    res.status(400).json({
      success: false,
      message: "Please fills all the field",
    });
  }

  const newProduct = new Product({ name, description, price, category });
  await newProduct.save();

  res.status(200).json({
    success: true,
    newProduct,
    message: "product created Successfully",
  });
};

const getProducts = async (req, res) => {
  try {
    const allProducts = await Product.find();
    if (allProducts.length == 0) {
      res.status(404).json({
        message: "there is no product",
      });
    }
    res.status(200).json({
      success: true,
      products: allProducts,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "Interval server error",
    });
  }
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, description, price, category } = req.body;

  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      { name, description, price, category },
      { new: true }
    );

    return res.status(200).json({
      message: "Updated Suceesfully",
      product: updatedProduct,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "Interval server error",
    });
  }
};

const deleteProduct = async (req,res) =>{
    const {id} = req.params;
    const deletedProduct = await Product.findByIdAndDelete(id);

    if(!deletedProduct){
        return res.status(404).json({
            success:"false",
            message:"kuch nahi mila"
        })
    }

    return res.status(200).json({
        message:"deleted Succefully",

    })



}

module.exports = { getProducts, createProduct ,updateProduct,deleteProduct};
