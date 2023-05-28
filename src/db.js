const { MongoClient } = require('mongodb');

// MongoDB connection URL
const url = 'mongodb+srv://richard:richard1sepic@cluster0.kmj9eyi.mongodb.net/?retryWrites=true&w=majority';

// Database name
const dbName = 'database';

// Create a MongoDB client
const client = new MongoClient(url, { useUnifiedTopology: true });

// Function to connect to the database
async function connect() {
  try {
    // Connect to MongoDB
    await client.connect();

    console.log('Connected to MongoDB');

    // Return the database instance
    return client.db(dbName);
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error;
  }
}

module.exports = { connect };
