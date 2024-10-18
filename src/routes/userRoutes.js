/**
 * File: userRoutes.js
 * Author: Sunil Balami
 * StudentID: 200578456
 * Date: 2024-10-18
 * Description: Routes to handle different request related to user.
 */

const express = require("express");
// Creating a new router instance
const router = express.Router();
const {
  getAllUsers,
  getUserById,
  getUserByLocation,
} = require("../controller/userController");

//all routes goes here
router.get("/users", getAllUsers);
router.get("/users/:id", getUserById);
router.get("/users/location/:location", getUserByLocation);

module.exports = router; //exporting router
