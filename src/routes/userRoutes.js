const express = require("express");
const router = express.Router();
const {importUser} = require("../controller/userController")

router.post("/import-users",importUser );


module.exports = router; //exporting router