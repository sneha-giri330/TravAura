const Listing = require('../models/listing');

//Index Route
module.exports.index = async (req, res) => {
  const allListings = await Listing.find({});
  res.render("listings/index.ejs", { allListings });
};

//New Route
module.exports.renderNewForm= (req, res) => {
  res.render("listings/new.ejs");
}

//Show Route
module.exports.showListing = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id)
      .populate({ path: "reviews", populate: { path: "author" } })
      .populate("owner");
      // Replace 'reviews' and 'owner' ObjectIds with actual info from their collections ex- not obj id-123456 but ratings=5 and comment =something
      if (!listing) {
        req.flash("error", "Listing you requested for does not exist!");
        return res.redirect("/listings");
      }
     
    res.render("listings/show.ejs", { listing });
}


//Create Route
  module.exports.createListing =async (req, res, next) => {
      let url = req.file.path;
      let filename= req.file.filename;

      const newListing = new Listing(req.body.listing);
      newListing.owner = req.user._id;
      newListing.image = { url, filename };
      await newListing.save();
      req.flash("success", "New Listing Added!");
      res.redirect("/listings");
    }


//Edit render Route
module.exports.renderEditForm =async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    if (!listing) {
      req.flash("error", "Listing you requested for does not exist!");
      return res.redirect("/listings");
    }
    let originalImageURL= listing.image.url;
    originalImageURL= originalImageURL.replace("/upload", "/upload/h_250,w_250");
    res.render("listings/edit.ejs", { listing , originalImageURL });
  };


//Update Route
module.exports.updateListing= async (req, res) => {
    if (!req.body.listing) {
      throw new ExpressError(400, "Please provide a listing");
    }
    const { id } = req.params;
    let listing= await Listing.findByIdAndUpdate(id, { ...req.body.listing });
    
    if(req.file){
    let url = req.file.path;
    let filename= req.file.filename;
    listing.image = { url, filename }
    await listing.save();
    }

    req.flash("success", "Listing Updated!");
    res.redirect(`/listings/${id}`);
  };

  //Category route
    module.exports.filterByCategory = async (req, res) => {
      const { category } = req.params;
      const allListings = await Listing.find({ category });
      res.render("listings/index", { allListings, category });
    };


//Search
  module.exports.searchListings = async (req, res) => {
  const { q } = req.query;

  const listings = await Listing.find({
    $or: [
      { title: { $regex: q, $options: "i" } },
      { description: { $regex: q, $options: "i" } },
      { location: { $regex: q, $options: "i" } },
      { country: { $regex: q, $options: "i" } }
    ]
  });

  res.render("listings/index", { allListings: listings, category: `Search: ${q}` });
};


//Delete route
  module.exports.deleteListing = async (req, res) => {
    let { id } = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    req.flash("success", "Listing Deleted!");
    res.redirect("/listings");
  }





