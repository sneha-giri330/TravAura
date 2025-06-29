if(process.env.NODE_ENV !="production"){
    require("dotenv").config();
}
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
// const ExpressError = require("./utils/ExpressError");
const session = require ("express-session");
const MongoStore = require('connect-mongo');

const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user");


const listingRouter= require("./routes/listing");
const reviewRouter= require("./routes/review");
const userRouter= require("./routes/user");

const dbURL= process.env.ATLASDB_URL;

main()
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(dbURL);
}

//Middleware

app.set("view engine", "ejs"); //for ejs
app.set("views", path.join(__dirname, "views")); //for ejs
app.use(express.urlencoded({ extended: true })); //for parsing form data-urlencoded (for forms)
app.use(methodOverride("_method")); //for delete and put requests
app.engine("ejs", ejsMate); //for ejs boilerplate
app.use(express.static(path.join(__dirname, "/public"))); //for static files like css
app.use(express.json()); // For parsing application/json


//MOngo
const store = MongoStore.create({
  mongoUrl : dbURL,
  crypto: {
    secret: process.env.SECRET,
  },
  touchAfter : 24 * 3600,
});

store.on("error", ()=>{
  console.log("Error in Mongo Session", err);
})

const sessionOptions ={
  store,
  secret : process.env.SECRET,
  resave : false,
  saveUninitialized : true,
  cookie : {
    expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly : true,
  },
};


//Session and flash
app.use(session(sessionOptions));
app.use(flash());//must used before routes

//Authentication and authorization
app.use(passport.initialize());
app.use(passport.session());

// use static authenticate method of model in LocalStrategy
passport.use(new LocalStrategy(User.authenticate()));


// use static serialize and deserialize of model for passport session support
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.use((req,res,next)=>{
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  res.locals.currentUser= req.user; // defined locals req.user since req.user cannot be directly accessed in navbar.ejs
  next();
});


// // Root
app.get("/", (req, res) => {
  res.redirect("/listings");
});


//LISTING ROUTE
app.use("/listings", listingRouter);

//REVIEW ROUTE
app.use("/listings/:id/reviews/", reviewRouter);

//User Route
app.use("/", userRouter);



console.log("");

//  //------404 Handler-------
// //NOT WORKING
// app.all("*", (req, res, next) => {
//   try {
//     next(new ExpressError("Page Not Found", 404));
//   } catch (err) {
//     next(err);
//   }
// });



// ------Middleware Error Handler-------
app.use((err, req, res, next) => {
  const { statusCode = 500 } = err;
  if (!err.message) err.message = "Something went wrong.";
  res.status(statusCode).render("error.ejs", { err });
})

// ----------Start Server---------------

app.listen(8080, () => {
  console.log("App Listening On Port http://localhost:8080/listings");
});