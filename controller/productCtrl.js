const Product = require('../models/productModel');
const asyncHandler = require('express-async-handler');
const slugify = require('slugify');

const createProduct = asyncHandler(async (req, res) => {
  try {
    if (req.body.title) {
      req.body.slug = slugify(req.body.title);
    }
    const newProduct = await Product.create(req.body);
    res.json({
      newProduct: newProduct,
      message: 'Product Created Successfully',
    });
  } catch (error) {
    throw new Error(error);
  }
});

const getAProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const findProduct = await Product.findById(id);
    res.json(findProduct);
  } catch (error) {
    throw new Error(error);
  }
});
const getAllProduct = asyncHandler(async (req, res) => {
  try {
    const findAllProduct = await Product.find();
    res.json(findAllProduct);
  } catch (error) {
    throw new Error(error);
  }
});
const deleteAProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const deleteProduct = await Product.findByIdAndDelete(id);
    res.json({
      deleteProduct: deleteProduct,
      message: 'Product Deleted Successfully',
    });
  } catch (error) {
    throw new Error(error);
  }
});
const updateAProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    if (req.body.title) {
      req.body.slug = slugify(req.body.title);
    }
    const updateAProduct = await Product.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json({
      updateAProduct: updateAProduct,
      message: 'Product Updated Successfully',
    });
  } catch (error) {
    throw new Error(error);
  }
});
module.exports = {
  createProduct,
  getAProduct,
  getAllProduct,
  deleteAProduct,
  updateAProduct,
};
