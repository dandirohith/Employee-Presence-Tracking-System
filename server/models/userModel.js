const mongoose = require("mongoose");

const sessionSchema = mongoose.Schema({
  loginTime: {
    type: Date,
    required: true,
  },
  logoutTime: {
    type: Date,
  },
});

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a name"],
    },
    email: {
      type: String,
      required: [true, "Please add an email"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please add a password"],
    },
    sessions: [sessionSchema], // Array to store multiple login/logout sessions
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("data-user", userSchema);
