const User = require ("../models/user.js");

// Signup
module.exports.renderSignupForm= (req, res) => {
  res.render("users/signup.ejs");
};

module.exports.signup =  async (req, res) => {
    try {
      let { username, email, password } = req.body;
      const newUser = new User({ username, email });
      const registeredUser = await User.register(newUser, password);
      console.log(registeredUser);
      req.login(registeredUser, (err) =>{
        if (err) {
          return next(err);
        }
        req.flash("success", "Welcome to Travaura!");
        const redirectUrl = res.locals.redirectUrl || "/listings"; // ✅ fallback added
      res.redirect(redirectUrl);
      });
 
    } catch (e) {
      req.flash("error", e.message);
      res.redirect("/signup");
    }
  };

//Login
module.exports.renderLoginForm = (req, res) => {
  res.render("users/login.ejs");
};

module.exports.login= async (req, res) => {
    req.flash("success", "Welcome to Travaura. You are logged in");
    let redirectUrl = res.locals.redirectUrl || "/listings";
    res.redirect(redirectUrl);
    //The page they originally tried to visit before logging in, or A default page (listings) if no previous URL was stored(since if we directly log in from listings it will have no stored url from middleware so give cannot get / => hence use || listings).
    
};

//logout

module.exports.logout= (req, res) =>{
    req.logout((err)=>{
     if(err){
        next();
     }
     req.flash ("success", "You are logged out");
     res.redirect("/listings");
    });
}