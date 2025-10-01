require('dotenv').config();
const mongoose = require('mongoose');

// Hotel Schema (simplified for script)
const hotelSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  name: { type: String, required: true },
  city: { type: String, required: true },
  country: { type: String, required: true },
  description: { type: String, required: true },
  type: { type: String, required: true },
  adultCount: { type: Number, required: true },
  childCount: { type: Number, required: true },
  facilities: [{ type: String, required: true }],
  pricePerNight: { type: Number, required: true },
  starRating: { type: Number, required: true, min: 1, max: 5 },
  imageUrls: [{ type: String, required: true }],
  lastUpdated: { type: Date, required: true },
  bookings: [],
});

const Hotel = mongoose.model('Hotel', hotelSchema);

// Sample hotel data
const sampleHotels = [
  {
    userId: "sample_user_id_1", // You can update this with actual user IDs
    name: "Ocean View Resort & Spa",
    city: "Miami",
    country: "United States",
    description: "Experience luxury at its finest with breathtaking ocean views, world-class spa services, and elegant accommodations. Located on the pristine beaches of Miami, our resort offers the perfect blend of relaxation and sophistication. Enjoy gourmet dining, state-of-the-art fitness facilities, and exceptional service that will make your stay unforgettable.",
    type: "Resort",
    adultCount: 4,
    childCount: 2,
    facilities: ["Free WiFi", "Parking", "Airport Shuttle", "Family Rooms", "Non-Smoking Rooms", "Outdoor Pool", "Spa", "Fitness Center", "Restaurant", "Room Service"],
    pricePerNight: 299,
    starRating: 5,
    imageUrls: [
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800",
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800"
    ],
    lastUpdated: new Date(),
  },
  {
    userId: "sample_user_id_1",
    name: "Mountain Lodge Retreat",
    city: "Aspen",
    country: "United States",
    description: "Nestled in the heart of the Rocky Mountains, our cozy lodge offers stunning mountain views and access to world-class skiing and hiking trails. Perfect for adventure seekers and those looking to unwind in nature's embrace. Features rustic elegance with modern amenities.",
    type: "Lodge",
    adultCount: 6,
    childCount: 4,
    facilities: ["Free WiFi", "Parking", "Family Rooms", "Non-Smoking Rooms", "Fitness Center", "Ski Storage", "Hot Tub", "Restaurant", "Bar"],
    pricePerNight: 189,
    starRating: 4,
    imageUrls: [
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800",
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=800",
      "https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?w=800"
    ],
    lastUpdated: new Date(),
  },
  {
    userId: "sample_user_id_1",
    name: "Urban Boutique Hotel",
    city: "New York",
    country: "United States",
    description: "A sophisticated boutique hotel in the heart of Manhattan, offering modern luxury and personalized service. Walking distance to Broadway theaters, world-class shopping, and iconic landmarks. Each room is uniquely designed with contemporary art and premium amenities.",
    type: "Boutique",
    adultCount: 2,
    childCount: 1,
    facilities: ["Free WiFi", "Fitness Center", "Restaurant", "Bar", "Room Service", "Concierge", "Business Center", "Laundry Service"],
    pricePerNight: 349,
    starRating: 4,
    imageUrls: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800",
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800"
    ],
    lastUpdated: new Date(),
  },
  {
    userId: "sample_user_id_1",
    name: "Tropical Paradise Beach Resort",
    city: "Cancun",
    country: "Mexico",
    description: "All-inclusive beachfront resort featuring pristine white sand beaches, crystal-clear waters, and endless activities. Enjoy multiple restaurants, bars, water sports, and entertainment programs. Perfect for families and couples seeking a tropical getaway.",
    type: "All Inclusive",
    adultCount: 8,
    childCount: 6,
    facilities: ["Free WiFi", "Parking", "Airport Shuttle", "Family Rooms", "Non-Smoking Rooms", "Outdoor Pool", "Private Beach", "Spa", "Fitness Center", "Restaurant", "Bar", "Water Sports", "Kids Club"],
    pricePerNight: 459,
    starRating: 5,
    imageUrls: [
      "https://images.unsplash.com/photo-1520637836862-4d197d17c15a?w=800",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800",
      "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=800"
    ],
    lastUpdated: new Date(),
  },
  {
    userId: "sample_user_id_1",
    name: "Historic City Center Hotel",
    city: "Prague",
    country: "Czech Republic",
    description: "A charming hotel located in the historic center of Prague, housed in a beautifully restored 14th-century building. Experience old-world elegance with modern comforts while exploring the magical streets of this UNESCO World Heritage city.",
    type: "Historic",
    adultCount: 3,
    childCount: 2,
    facilities: ["Free WiFi", "Restaurant", "Bar", "Room Service", "Concierge", "Laundry Service", "Historic Architecture", "City Tours"],
    pricePerNight: 129,
    starRating: 4,
    imageUrls: [
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800",
      "https://images.unsplash.com/photo-1586611292717-f828b167408c?w=800"
    ],
    lastUpdated: new Date(),
  },
  {
    userId: "sample_user_id_1",
    name: "Desert Oasis Luxury Resort",
    city: "Dubai",
    country: "United Arab Emirates",
    description: "Experience ultimate luxury in the heart of the desert with our palatial resort featuring world-class amenities, private pools, and exceptional Middle Eastern hospitality. Enjoy camel riding, desert safaris, and traditional cuisine under the stars.",
    type: "Luxury",
    adultCount: 4,
    childCount: 3,
    facilities: ["Free WiFi", "Parking", "Airport Shuttle", "Family Rooms", "Non-Smoking Rooms", "Outdoor Pool", "Private Pool", "Spa", "Fitness Center", "Restaurant", "Bar", "Room Service", "Desert Safari", "Camel Riding"],
    pricePerNight: 599,
    starRating: 5,
    imageUrls: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800",
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800",
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800"
    ],
    lastUpdated: new Date(),
  },
  {
    userId: "sample_user_id_1",
    name: "Countryside Bed & Breakfast",
    city: "Tuscany",
    country: "Italy",
    description: "A charming family-run bed & breakfast set among rolling hills and vineyards of Tuscany. Enjoy homemade Italian breakfast, wine tastings, and the warm hospitality of our hosts. Perfect for a romantic getaway or peaceful retreat.",
    type: "Bed & Breakfast",
    adultCount: 2,
    childCount: 1,
    facilities: ["Free WiFi", "Parking", "Family Rooms", "Non-Smoking Rooms", "Garden", "Wine Tasting", "Bicycle Rental", "Breakfast Included", "Pet Friendly"],
    pricePerNight: 89,
    starRating: 3,
    imageUrls: [
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800",
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=800",
      "https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?w=800"
    ],
    lastUpdated: new Date(),
  },
  {
    userId: "sample_user_id_1",
    name: "Lakeside Resort & Casino",
    city: "Lake Tahoe",
    country: "United States",
    description: "Spectacular lakeside resort combining natural beauty with exciting entertainment. Features a full-service casino, multiple dining options, and endless outdoor activities. Wake up to stunning lake views and enjoy year-round recreation.",
    type: "Resort",
    adultCount: 6,
    childCount: 4,
    facilities: ["Free WiFi", "Parking", "Airport Shuttle", "Family Rooms", "Non-Smoking Rooms", "Outdoor Pool", "Private Beach", "Spa", "Fitness Center", "Restaurant", "Bar", "Casino", "Water Sports", "Ski Access"],
    pricePerNight: 249,
    starRating: 4,
    imageUrls: [
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800",
      "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=800",
      "https://images.unsplash.com/photo-1520637836862-4d197d17c15a?w=800"
    ],
    lastUpdated: new Date(),
  }
];

async function populateHotels() {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_CONNECTION_STRING);
    console.log('Connected to MongoDB');

    // Clear existing hotels (optional - remove this line if you want to keep existing data)
    await Hotel.deleteMany({});
    console.log('Cleared existing hotels');

    // Insert sample hotels
    const result = await Hotel.insertMany(sampleHotels);
    console.log(`Successfully added ${result.length} hotels to the database`);

    // Print added hotels
    result.forEach((hotel, index) => {
      console.log(`${index + 1}. ${hotel.name} - ${hotel.city}, ${hotel.country} - $${hotel.pricePerNight}/night`);
    });

  } catch (error) {
    console.error('Error populating hotels:', error);
  } finally {
    await mongoose.connection.close();
    console.log('Database connection closed');
  }
}

// Run the script
populateHotels();