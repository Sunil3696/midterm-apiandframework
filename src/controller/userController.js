const User = require("../models/userModel");
const fs = require("fs");
const path = require("path");
// const testfunc = async (req, res) => {
//     res.send("you are workig fine")
// }

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

const getUserById = async (req, res) => {
  // res.send("I am get user by id")
  const userID = req.params.id;
  try {
    const user = await User.findById(userID);
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
try{
    const users = await User.find({'userData.location': req.params.location })
    if( users.length > 0 ){
        res.status(200).json(users);
    }else {
        res.status(404).json({message:"no user found with given location"})
    }
}
catch(error){

}
};

module.exports = { getAllUsers, getUserById, getUserByLocation };
