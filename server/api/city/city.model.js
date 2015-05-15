'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CitySchema = new Schema({
  name: String,
  enName: String,
  info: String,
  active: {type: Boolean, default: true}
});

module.exports = mongoose.model('City', CitySchema);
