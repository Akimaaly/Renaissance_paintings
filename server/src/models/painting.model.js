const { Schema, model } = require('mongoose');

const paintingSchema = Schema({
  title: String,
  description: String,
  price: Number,
  sold: Boolean,
  img: String,
});

const PaintingModel = model('Painting', paintingSchema);

module.exports = PaintingModel;
