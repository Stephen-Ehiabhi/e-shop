const router = require("express").Router();

router.get("/users/:id", (req, res) => {
  try {
  } catch (error) {
    console.log(error);
  }
});

router.get("/users", (req, res) => {
  try {
    console.log("users page");
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
