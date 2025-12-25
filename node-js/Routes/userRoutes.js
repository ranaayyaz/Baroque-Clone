const express = require("express");

const router = express.Router();

const userController = require("../Controllers/userController");

// Route for user login
router.post("/signup", userController.register);

// Route for user Authentication
router.post("/login", userController.authenticate);

module.exports = router;
