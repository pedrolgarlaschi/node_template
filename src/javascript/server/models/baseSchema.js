var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ReviewSchema = require(__dirname + '/reviewSchema.js');
var LocationSchema = require(__dirname + '/reviewSchema.js');

var bookSchema = new Schema({
  name: String,
  date: Date,
  description:String,
  location:{
        type: [Number],  // [<longitude>, <latitude>]
        index: '2d'      // create the geospatial index
   },
  available: Boolean,
  bookId: String,
  reviews:[{type:mongoose.Schema.Types.ObjectId  , ref:'Review'}],
  locations:[{type:mongoose.Schema.Types.ObjectId  , ref:'Location'}]
});

var BookSchema = mongoose.model('Book', bookSchema);
module.exports = BookSchema;