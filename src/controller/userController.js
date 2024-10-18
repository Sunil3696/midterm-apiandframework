const User = require('../models/userModel');
const fs = require('fs');

const testfunc = async (req, res) => {
    res.send("you are workig fine")
}

module.exports = { testfunc };