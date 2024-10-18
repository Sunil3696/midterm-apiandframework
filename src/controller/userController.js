/**
 * File: userController.js
 * Author: Sunil Balami
 * StudentID: 200578456
 * Date: 2024-10-18'
 * Desc: This is a controller page and it will have the function that is directly related to the handle user related opration like
 * fetching, deleting, creating, manipulating documents on the mongodb.
 */

const User = require("../models/userModel");
const fs = require("fs");
const path = require("path");
// const testfunc = async (req, res) => {
//     res.send("you are workig fine")
// }

/**
 * Desc: getAllUsers from the mongodb database
 *Parameter:
 *   req : what user sends (currently nothing)
 *   res : the all user object if exists
 */
const getAllUsers = async (req, res) => {
  //   res.send("getall")
  try {
    const users = await User.find();

    if (users) {
      res.status(200).send(users);
    } else {
      res.status(404).json({ error: "No data found" });
    }
  } catch (error) {
    console.log("error:", error);
    res
      .status(500)
      .json({ message: "error orccured while getting users", error });
  }
};


/**
 * Desc: getUserById function fetch and return user details based on the userid
 *Parameter:
 *   req : JSON body of Recipe data like recipeName, cookingTime etc
 *   res : The whole object that is created or the error body.
 */
const getUserById = async (req, res) => {
  // res.send("I am get user by id")
  const userID = req.params.id;
  try {
    const user = await User.find({ userId: userID });
    if (!user) {
      return res.status(404).send("User not found with given ID");
    } else {
      res.status(200).json(user);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Error retrieving the user");
  }
};

const getUserByLocation = async (req, res) => {
//   res.send("i am getuser by location");

//making the search case insensitive
const locationRegex = new RegExp(req.params.location, 'i');
console.log(locationRegex)
try{
    const users = await User.find({'userData.location': locationRegex })
    if( users.length > 0 ){
        res.status(200).json(users);
    }else {
        res.status(404).json({message:"no user found with given location"})
    }
}
catch(error){
    console.log("error", error);
    res.status(500).send("Failed to fetch users by location");

}
};

module.exports = { getAllUsers, getUserById, getUserByLocation };
