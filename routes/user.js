const express = require("express");
const wrapAsync = require("../utils/wrapAsync");
const router = express.Router({ mergeParams: true });
const passport = require("passport");
const User = require("../models/user");
const { saveRedirectUrl } = require("../middleware");

const userController= require ("../controllers/users");



// Signup
router.route("/signup")
.get(userController.renderSignupForm)
.post(wrapAsync(userController.signup));



//Login
router.route("/login")
.get(userController.renderLoginForm)
.post(
saveRedirectUrl ,
  passport.authenticate("local", {
    failureRedirect: "/login",
    failureFlash: true,
  }), userController.login );


//Logout
router.get("/logout", userController.logout);


module.exports = router;
