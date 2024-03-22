

const mongoose = require('mongoose');

const scanschema = new mongoose.Schema(
  {
    sid: {
      type: String,
      required: true,
      unique: true,
    },
    sname: {
      type: String,
      required: true,
    },
    currentbookings:[],
    sdescription: {
      type: String,
      required: true,
    },
    stype: {
      type: String,
      required: true,
    },
    samount: {
      type: Number, 
      required: true,
    },
    scanImageURL: {
      data: {
        type: Buffer,
        required: true,
      },
      contentType: {
        type: String,
        required: true,
      },    
    },
    scanviewUrl: {
      data: {
        type: Buffer,
        required: true,
      },
      contentType: {
        type: String,
        required: true,
      },
    },
    display: {
      type: Boolean,
      default: true,
    },

  },
  {
    timestamps: true,
  }
);

const scanModel = mongoose.model('scans', scanschema);

module.exports = scanModel;