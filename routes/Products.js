const router = require("express").Router();
const mongoose = require("mongoose");
const Product = require("../models/product");

const Products = require("../models/product");

router.get("/products/:id", (req, res) => {
  try {
    const singleProduct = await Products.findOne({});
    res.json({ success: singleProduct });
    console.log(singleProduct);
  } catch (error) {
    console.log(error);
  }
});

router.get("/products", async (req, res) => {
  try {
    const products = await Products.find({});
    res.json({ success: products });
    console.log(products);
  } catch (error) {
    console.log(error);
  }
});

router.post("/product", async (req, res) => {
  try {
    const product = new Product({
      name: req.body.name,
      price: req.body.price,
      image: req.body.image,
      brand: req.body.brand,
      category: req.body.category,
      countInStock: req.body.countInStock,
      description: req.body.description,
      rating: req.body.rating,
      numReviews: req.body.numReviews,
    });

    const newProduct = await product.save();
    if (newProduct) {
      console.log(newProduct);
      return res
        .status(201)
        .json({ message: "New product Created", data: newProduct });
    }
    return res.status(500).json({ message: "Error in creating new product", data: `${error}` });
  } catch (error) {
    res.status(404).json({ message: `Error ${error}` });
  }
});

module.exports = router;
