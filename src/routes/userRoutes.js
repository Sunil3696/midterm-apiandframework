const express = require("express");
const router = express.Router();
const { getAllUsers } = require("../controller/userController");

router.get('/users',getAllUsers);

module.exports = router; //exporting router
