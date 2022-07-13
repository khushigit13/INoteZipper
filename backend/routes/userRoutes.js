const express = require("express");
const {
  registerUser,
  authUser,
  updateUserProfile,
} = require("../controller/userControllers");
const { protect } = require("../middlewares/authMiddlewares");
const userrouter = express.Router();

userrouter.route("/").post(registerUser);
userrouter.route("/login").post(authUser);
userrouter.route("/profile").post(protect, updateUserProfile);
module.exports = { userrouter };
