//Convert image to base64
function encodeImageToBase64(imagePath) {
  const fs = require('fs');
  const path = require('path');

  // Read the image file as a buffer
  const imageBuffer = fs.readFileSync(imagePath);

  // Convert the buffer to Base64 encoded string
  const base64Image = imageBuffer.toString('base64');

  return base64Image;
}


app.post('/store-icon', (req, res) => {
  const { iconPath } = req.body; // Assuming you receive the icon path in the request body

  // Encode the image to Base64
  const base64Icon = encodeImageToBase64(iconPath);

  // Convert the Base64 icon data to binary format
  const binaryData = Buffer.from(base64Icon, 'base64');

  // Create a Binary object with subtype 0 (Generic)
  const binData = new Binary(binaryData, 0);

  // Insert the document with the binary icon data
  collection.insertOne({ icon: binData }, (err, result) => {
    if (err) {
      console.error('Error inserting document:', err);
      res.sendStatus(500);
      return;
    }
    res.sendStatus(200);
  });
});
