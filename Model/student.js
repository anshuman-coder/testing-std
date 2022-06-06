const mongoose = require('mongoose');

const { Schema } = require('mongoose');

const StudentSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true,
  },
  class: {
    type: String,
    required: true
  },
  section: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  UID: {
    type: String,
    required: true,
  }
});


module.exports = mongoose.model("students", StudentSchema);