const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    user_id: {
      type: String,
      required: true,
    },
    surname: {
      type: String,
      required: true,
    },
    othernames: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
    required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
      enum: ["admin", "user"],
    },
    gender: {
        type: String,
        required: true,
        enum: ["male", "female"],
      },
      address: {
        type: String,
        required: true,

      },
      city: {
      type: String,
      required: true,
    },
    country: {
        type: String,
        required: true,
      },
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

const User = mongoose.model("users", userSchema);

module.exports = User;
