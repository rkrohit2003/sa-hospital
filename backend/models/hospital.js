const mongoose = require("mongoose");

const hospitalSchema = new mongoose.Schema({
  hospitalName: {
    type: String,
    required: true
  },
  emailId: {
    type: String,
    required: true,
    unique: true
  },
  address: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  regNum: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  wardNum: {
    type: Number,
    required: true
  },
  pinCode: {
    type: Number,
    required: true
  },
  regCertificate: {
    type: Buffer,
    // required: true
  },
  status: {
    type: String,
    default: "Active"
  },
  signupDate: {
    type: Date,
    default: Date.now()
  },
  regDate: {
    type: Date,
    default: Date.now()
  },
  password: {
    type: String,
    required: true
  },
  ambNum: {
    type: Number,
    required: true
  },
});

const Hospital = mongoose.model("Hospital", hospitalSchema);
module.exports = Hospital;
