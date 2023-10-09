const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowerasse: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category',
    },
    brand: {
      type: String,
      enum: ['Apple', 'Samsung', 'Lenovo'],
    },
    quantity: Number,
    images: {
      type: Array,
    },
    color: {
      type: String,
      enum: ['Black', 'Brown', 'Red'],
    },
    quantity: Number,
    sold: {
      type: Number,
      default: 0,
    },
    ratings: [
      {
        star: Number,
        postedby: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User',
        },
      },
    ],
  },
  {
    timestamps: true,
  },
);

//Export the model
module.exports = mongoose.model('Product', productSchema);
