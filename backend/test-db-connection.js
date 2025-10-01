const mongoose = require('mongoose');
require('dotenv').config();

console.log('Testing MongoDB connection...');
console.log('Connection string:', process.env.MONGODB_CONNECTION_STRING ? 'Found' : 'Missing');

mongoose.connect(process.env.MONGODB_CONNECTION_STRING)
  .then(() => {
    console.log('✅ Successfully connected to MongoDB Atlas!');
    mongoose.connection.close();
  })
  .catch((error) => {
    console.log('❌ Failed to connect to MongoDB Atlas:');
    console.log(error.message);
  });