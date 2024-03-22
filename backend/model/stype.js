const mongoose = require('mongoose');

const stypeSchema = new mongoose.Schema({
  stype: {
    type: String,
    required: true,
    unique: true,
  },
  display: {
    type: Boolean,
    default: true,
  },
});

const Stype = mongoose.model('Stype', stypeSchema);

module.exports = Stype;
