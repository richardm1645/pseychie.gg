const express = require('express');
const { connect } = require('../src/db');
const cors = require('cors');
const app = express();

app.use(cors())

// Define an API endpoint
app.get('/api/data', async (req, res) => {

  try {
    // Connect to the MongoDB database
    const db = await connect();

    // Perform a query (example)
    const collection = db.collection('gear');
    const result = await collection.find({}).toArray();

    // Send the query result as a response
    res.json(result);
  } catch (error) {
    console.error('Error performing query:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Start the API server
app.listen(5000, () => {
  console.log('API server listening on port 5000');
});

