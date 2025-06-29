const sampleListings = [
  {
    "title": "Cozy Beachfront Cottage",
    "description": "Sample description for Cozy Beachfront Cottage.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b"
    },
    "price": 1000,
    location: "Malibu",
    country: "United States",
    "category": "amazing-pools"
  },
  {
    "title": "Modern Loft in Downtown",
    "description": "Sample description for Modern Loft in Downtown.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1501785888041-af3ef285b470"
    },
    "price": 1100,
    location: "Malibu",
    country: "United States",
    "category": "iconic-cities"
  },
  {
    "title": "Mountain Retreat",
    "description": "Sample description for Mountain Retreat.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1571896349842-33c89424de2d"
    },
    "price": 1200,
    location: "Malibu",
    country: "United States",
    "category": "mountains"
  },
  {
    "title": "Historic Villa in Tuscany",
    "description": "Sample description for Historic Villa in Tuscany.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1566073771259-6a8506099945"
    },
    "price": 1300,
    location: "Aspen",
    country: "United States",
    "category": "castles"
  },
  {
    "title": "Secluded Treehouse Getaway",
    "description": "Sample description for Secluded Treehouse Getaway.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4"
    },
    "price": 1400,
    location: "Florence",
    country: "Italy",
    "category": "farms"
  },
  {
    "title": "Beachfront Paradise",
    "description": "Sample description for Beachfront Paradise.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9"
    },
    "price": 1500,
    location: "Portland",
    country: "United States",
    "category": "amazing-pools"
  },
  {
    "title": "Rustic Cabin by the Lake",
    "description": "Sample description for Rustic Cabin by the Lake.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b"
    },
    "price": 1600,
    location: "Cancun",
    country: "Mexico",
    "category": "camping"
  },
  {
    "title": "Luxury Penthouse with City Views",
    "description": "Sample description for Luxury Penthouse with City Views.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd"
    },
    "price": 1700,
    location: "Lake Tahoe",
    country: "United States",
    "category": "iconic-cities"
  },
  {
    "title": "Ski-In/Ski-Out Chalet",
    "description": "Sample description for Ski-In/Ski-Out Chalet.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1502784444187-359ac186c5bb"
    },
    "price": 1800,
    location: "Los Angeles",
    country: "United States",
    "category": "arctic-pools"
  },
  {
    "title": "Safari Lodge in the Serengeti",
    "description": "Sample description for Safari Lodge in the Serengeti.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1493246507139-91e8fad9978e"
    },
    "price": 1900,
    location: "Serengeti National Park",
    country: "Tanzania",
    "category": "trending"
  },
  {
    "title": "Historic Canal House",
    "description": "Sample description for Historic Canal House.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4"
    },
    "price": 2000,
    location: "Amsterdam",
    country: "Netherlands",
    "category": "iconic-cities"
  },
  {
    "title": "Private Island Retreat",
    "description": "Sample description for Private Island Retreat.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1618140052121-39fc6db33972"
    },
    "price": 2100,
    location: "Fiji",
    country: "Fiji",
    "category": "trending"
  },
  {
    "title": "Charming Cottage in the Cotswolds",
    "description": "Sample description for Charming Cottage in the Cotswolds.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1602088113235-229c19758e9f"
    },
    "price": 2200,
    location: "Cotswolds",
    country: "United Kingdom",
    "category": "rooms"
  },
  {
    "title": "Historic Brownstone in Boston",
    "description": "Sample description for Historic Brownstone in Boston.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1533619239233-6280475a633a"
    },
    "price": 2300,
    location: "Boston",
    country: "United States",
    "category": "iconic-cities"
  },
  {
    "title": "Beachfront Bungalow in Bali",
    "description": "Sample description for Beachfront Bungalow in Bali.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1602391833977-358a52198938"
    },
    "price": 2400,
    location: "Bali",
    country: "Indonesia",
    "category": "amazing-pools"
  },
  {
    "title": "Mountain View Cabin in Banff",
    "description": "Sample description for Mountain View Cabin in Banff.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb"
    },
    "price": 2500,
    location: "Banff",
    country: "Canada",
    "category": "mountains"
  },
  {
    "title": "Art Deco Apartment in Miami",
    "description": "Sample description for Art Deco Apartment in Miami.",
    "image": {
      "filename": "listingimage",
      "url": "https://plus.unsplash.com/premium_photo-1670963964797-942df1804579"
    },
    "price": 2600,
    location: "Miami",
    country: "United States",
    "category": "iconic-cities"
  },
  {
    "title": "Tropical Villa in Phuket",
    "description": "Sample description for Tropical Villa in Phuket.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1470165301023-58dab8118cc9"
    },
    "price": 2700,
    location: "Phuket",
    country: "Thailand",
    "category": "amazing-pools"
  },
  {
    "title": "Historic Castle in Scotland",
    "description": "Sample description for Historic Castle in Scotland.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1585543805890-6051f7829f98"
    },
    "price": 2800,
    location: "Scottish Highlands",
    country: "United Kingdom",
    "category": "castles"
  },
  {
    "title": "Desert Oasis in Dubai",
    "description": "Sample description for Desert Oasis in Dubai.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1518684079-3c830dcef090"
    },
    "price": 2900,
    location: "Dubai",
    country: "United Arab Emirates",
    "category": "trending"
  },
  {
    "title": "Rustic Log Cabin in Montana",
    "description": "Sample description for Rustic Log Cabin in Montana.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1586375300773-8384e3e4916f"
    },
    "price": 3000,
    location: "Montana",
    country: "United States",
    "category": "camping"
  },
  {
    "title": "Beachfront Villa in Greece",
    "description": "Sample description for Beachfront Villa in Greece.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f"
    },
    "price": 3100,
    location: "Mykonos",
    country: "Greece",
    "category": "amazing-pools"
  },
  {
    "title": "Eco-Friendly Treehouse Retreat",
    "description": "Sample description for Eco-Friendly Treehouse Retreat.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7"
    },
    "price": 3200,
    location: "Costa Rica",
    country: "Costa Rica",
    "category": "farms"
  },
  {
    "title": "Historic Cottage in Charleston",
    "description": "Sample description for Historic Cottage in Charleston.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904"
    },
    "price": 3300,
    location: "Charleston",
    country: "United States",
    "category": "rooms"
  },
  {
    "title": "Modern Apartment in Tokyo",
    "description": "Sample description for Modern Apartment in Tokyo.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1480796927426-f609979314bd"
    },
    "price": 3400,
    location: "Tokyo",
    country: "Japan",
    "category": "iconic-cities"
  },
  {
    "title": "Lakefront Cabin in New Hampshire",
    "description": "Sample description for Lakefront Cabin in New Hampshire.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce"
    },
    "price": 3500,
    location: "New Hampshire",
    country: "United States",
    "category": "camping"
  },
  {
    "title": "Luxury Villa in the Maldives",
    "description": "Sample description for Luxury Villa in the Maldives.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1439066615861-d1af74d74000"
    },
    "price": 3600,
    location: "Maldives",
    country: "Maldives",
    "category": "amazing-pools"
  },
  {
    "title": "Ski Chalet in Aspen",
    "description": "Sample description for Ski Chalet in Aspen.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1"
    },
    "price": 3700,
    location: "Aspen",
    country: "United States",
    "category": "mountains"
  },
  {
    "title": "Secluded Beach House in Costa Rica",
    "description": "Sample description for Secluded Beach House in Costa Rica.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2"
    },
    "price": 3800,
    location: "Costa Rica",
    country: "Costa Rica",
    "category": "amazing-pools"
  },
  {
    "title": "Kerala – Land of Backwaters and Beauty",
    "description": "Where backwaters weave through stunning landscapes, blending natural beauty with serene waterscapes.",
    "image": {
      "url": "https://res.cloudinary.com/do3vxttuk/image/upload/v1751139882/travaura_dev/om2qfye0ttdxrnei9z3w.jpg",
      "filename": "travaura_dev/om2qfye0ttdxrnei9z3w"
    },
    "price": 29000,
    location: "Kerala",
    country: "India",
    "reviews": [
      {
        "$oid": "68604654fa3364b46c9b5b82"
      }
    ],
    "category": "iconic-cities",
    "owner": {
      "$oid": "68604524fa3364b46c9b5b6f"
    },
}
];

module.exports = { data: sampleListings };
