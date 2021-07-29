/* eslint-disable object-curly-newline */
const router = require('express').Router();
const PaintingModel = require('../models/painting.model');

router.get('/all', async (req, res) => {
  try {
    const allPaintings = await PaintingModel.find();
    res.json(allPaintings);
  } catch (e) {
    console.error(e);
  }
});

module.exports = router;
