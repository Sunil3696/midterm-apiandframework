const User = require("../models/userModel");
const fs = require("fs");
const path = require('path');
// const testfunc = async (req, res) => {
//     res.send("you are workig fine")
// }

const getAllUsers = async (req, res) => {
//   res.send("getall")
try {
    const users = await User.find();

    if(users){
       res.status(200).send(users);
    }else {
        res.status(404).json({error : "No data found"})
    }
}
catch (error) {

}


};

module.exports = { getAllUsers };
