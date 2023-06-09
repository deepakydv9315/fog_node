const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },

  description: {
    type: String,
    required: [true, "Please Enter Product Description"],
  },
  longDescription: {
    type: String,
    required: [true, "Please Enter Product Description"],
  },

  discountedPrice: {
    type: Number,
    maxLength: [8, "Price cannot exceed 8 characters"],
  },
  weightPrice: [],
  ratings: {
    type: Number,
    default: 0,
  },
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  category: {
    type: String,
    required: true,
  },
  Stock: {
    type: String,
    required: [true, "Please Enter product Stock"],
    default: "In Stock",
  },
  numOfReviews: {
    type: Number,
    default: 0,
  },
  // reviews: [
  //   {
  //     user: {
  //       type: mongoose.Schema.ObjectId,
  //       ref: "EcommerceUser",
  //       required: true,
  //     },
  //     name: {
  //       type: String,
  //       required: true,
  //     },
  //     rating: {
  //       type: Number,
  //       required: true,
  //     },
  //     comment: {
  //       type: String,
  //       required: true,
  //     },
  //   },
  // ],
  // user: {
  //   type: mongoose.Schema.ObjectId,
  //   ref: "EcommerceUser",
  //   required: true,
  // },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Product", productSchema);
