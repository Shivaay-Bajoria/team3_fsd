const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
  name: { type: String, required: true },
  rollNumber: { type: String, required: true },
  year: { type: String, required: true },
  degree: { type: String, required: true },
  aboutProject: { type: String },
  hobbies: { type: String }, // Storing as a comma-separated string as per the PDF
  certificate: { type: String },
  internship: { type: String },
  aboutYourAim: { type: String },
  image: { type: String } // This will store the path (e.g., 'uploads/12345-photo.jpg')
});

module.exports = mongoose.model('Member', memberSchema);