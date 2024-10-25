const mongoose = require("mongoose"); // Changed to require

const Schema = mongoose.Schema;

const blogSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

// Exporting the model using module.exports
module.exports = mongoose.model("Blog", blogSchema);
