const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true, dropDubs: true },
  password: { type: String, required: true },
  idAdmin: { type: Boolean, required: true, default: false },
});

const user = mongoose.model("user", userSchema);

module.exports = user;
