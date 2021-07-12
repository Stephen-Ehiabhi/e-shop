const router = require("express").Router();

router.get("/products/:id", (req, res) => {
  try {
  } catch (error) {
    console.log(error);
  }
});

router.get("/products", (req, res) => {
  try {
    console.log("products page");
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
