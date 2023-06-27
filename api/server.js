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

// Define route to handle item description API call
app.get('/api/item/:id', async (req, res) => {
  const itemId = req.params.id;

  try {
    const db = await connect();
    const collection = db.collection('gear');
    const result = await collection.findOne({ url: itemId })

    if (result) {
      // Return the item object as a response
      res.json(result);
    } else {
      res.status(404).json({ error: 'Item not found' });
    }

  } catch (error) {
    console.error('Error performing query:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
  
});


// Start the API server
app.listen(5000, () => {
  console.log('API server listening on port 5000');
});

