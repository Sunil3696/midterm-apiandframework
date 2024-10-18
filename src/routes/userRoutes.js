const express = require("express");
const router = express.Router();
const { getAllUsers , getUserById, getUserByLocation} = require("../controller/userController");

router.get('/users',getAllUsers);
router.get('/users/:id', getUserById);
router.get('/users/location/:location', getUserByLocation);

module.exports = router; //exporting router
