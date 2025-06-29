const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");
const ExpressError = require("../utils/ExpressError");
const Listing = require("../models/listing");
const { isLoggedIn, isOwner, validateListing } = require("../middleware");
const multer  = require('multer')
const { storage } = require('../cloudConfig');
const upload = multer({ storage })
const listingsController = require("../controllers/listings");



const listingController = require("../controllers/listings");

router.route("/")
  .get(wrapAsync(listingController.index))
  .post(
    isLoggedIn,
    upload.single('listing[image]'),
    validateListing,
    wrapAsync(listingController.createListing)
  );


//New Route
router.get("/new", isLoggedIn, (listingController.renderNewForm));


//Category
router.get("/category/:category", wrapAsync(listingController.filterByCategory));

//Search
router.get("/search", listingsController.searchListings);


router.route("/:id")
  .get(wrapAsync(listingController.showListing))
  .put(  //update route
    isLoggedIn,
    isOwner,
    upload.single('listing[image]'),
    validateListing,
    wrapAsync(listingController.updateListing)
  )
  .delete(
    isLoggedIn, // Only logged in users can delete listings
    isOwner, //check if the user is the owner of the listing
    wrapAsync(listingController.deleteListing)
  );


//Edit Route
router.get("/:id/edit", isLoggedIn, isOwner, wrapAsync(listingController.renderEditForm)
);

module.exports = router;
