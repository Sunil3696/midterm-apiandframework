/**
 * File: userModel.js
 * Author: Sunil Balami
 * StudentID: 200578456
 * Date: 2024-10-18
 * Description: This defines the Schema for user using mongoose and export it.
 */

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  userId: { type: Number },
  userData: {
    name: { type: String },
    age: { type: Number },
    location: { type: String },
    email: { type: String },
  },
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
