require('dotenv').config();

const PaintingModel = require('../models/painting.model');
const { connectDB } = require('./config');

const paintingsArray = [
  {
    img: '/images/img1.png',
    title: 'Рождение Венеры',
    description: 'Сандро Боттичелли, 1501 г',
    price: 1000000,
  },
  {
    img: '/images/img2.png',
    price: 500000,

  },
  {
    img: '/images/img3.png',
    price: 8000000,

  },
  {
    img: '/images/img4.png',
    price: 10000000,
  },
  {
    img: '/images/img5проданная.png',
    sold: true,
    price: 4000000,

  },
  {
    img: '/images/img6.png',
    price: 7000000,

  },
  {
    img: '/images/img7.png',
    price: 600000,

  },
  {
    img: '/images/img8.png',
    price: 800000,

  },
  {
    img: '/images/img9.png',
    title: 'Страшный суд. Фрагмент',
    description: 'Джотто ди Бондоне, 1306 г',
    sold: true,
    price: 7000000,

  },
  {
    img: '/images/img10.png',
    price: 8000000,

  },
  {
    img: '/images/img11.png',
    price: 45000000,

  },
  {
    img: '/images/img12.png',
    price: 9000000,

  },
  {
    img: '/images/img13проданная.png',
    sold: true,
    price: 4500000,

  },
];
const seed = async () => {
  connectDB();
  await PaintingModel.insertMany(paintingsArray);
};
seed();
