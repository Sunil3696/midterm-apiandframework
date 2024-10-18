const User = require('../models/userModel');
const fs = require('fs');

// const testfunc = async (req, res) => {
//     res.send("you are workig fine")
// }

const importUser = async (req, res) => {
res.send("import")
}

module.exports = { importUser };