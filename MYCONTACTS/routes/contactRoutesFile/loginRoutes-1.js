const express = require("express");
const router = express.Router();
const { getLogin } = require("../controller/loginController-1");

router.route("/").get(getLogin);

module.exports = router;