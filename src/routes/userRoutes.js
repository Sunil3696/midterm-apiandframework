const express = require("express");
const router = express.Router();
const { getAllUser } = require("../controller/userController");

router.get('/users',getAllUser);

module.exports = router; //exporting router
