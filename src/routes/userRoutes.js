const express = require("express");
const router = express.Router();
const {testfunc} = require("../controller/userController")

router.post("/check", testfunc);


module.exports = router; //exporting router