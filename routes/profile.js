const express = require("express");
const router = express.Router();
const {body} = require("express-validator");

const profileController = require("../controllers/profile");
const isAuth = require("../middleware/isAuth")

router.get("/viewprofile",isAuth, profileController.profile);

router.post("/buy",isAuth,profileController.buy);

module.exports=router; 