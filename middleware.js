const Listing = require("./models/listing");
const Review = require("./models/review");
const ExpressError = require("./utils/ExpressError");
const { listingSchema, reviewSchema } = require("./schema");



//Logged in for updation
module.exports.isLoggedIn = (req, res, next)=>{
    if(!req.isAuthenticated()){
    req.session.redirectUrl = req.originalUrl;// redirect after login to where we want to be at first place
    req.flash("error","You must be logged in to create a new listing");
    return res.redirect("/login");
  }
  next();
};

//As passport will clear out the redirectUrl value in app.js after login , so we need to ensure it by saving into locals as middleware

module.exports.saveRedirectUrl = (req, res, next)=>{
  if(req.session.redirectUrl){
    res.locals.redirectUrl = req.session.redirectUrl;
  }
  next();
};

//Validation for listing
module.exports.validateListing = (req, res, next) => {
  let { error } = listingSchema.validate(req.body);
  if (error) {
    let errMsg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(400, errMsg);
  } else {
    next();
  }
};

//Validation for reviews

module.exports.validateReview= (req,res,next)=>{
   let { error }= reviewSchema.validate(req.body);
    if(error){
      let errMsg = error.details.map((el) => el.message).join(",");
      throw new ExpressError(400,errMsg);
    }else{
      next();
    }
};



//Authorization for delete and edit by current User

module.exports.isOwner =async(req, res, next)=>{
  const { id } = req.params;
    const listing = await Listing.findById(id);

    if (!listing.owner.equals(req.user._id)) {
      req.flash("error", "You are not the owner of this listing!");
      return res.redirect(`/listings/${id}`);
    }
    next();
};


//Authorization for reviews
module.exports.isAuthor =async(req, res, next)=>{
  const { id, reviewId } = req.params;
    const review = await Review.findById(reviewId);

    if (!review.author.equals(res.locals.currentUser._id)) {
      req.flash("error", "You are not the author of this review!");
      return res.redirect(`/listings/${id}`);
    }
    next();
};