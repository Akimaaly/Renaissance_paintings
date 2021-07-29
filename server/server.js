require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const piantingRouter = require('./src/routes/painting.router');
const { connectDB } = require('./src/db/config');

const { PORT } = process.env;
const app = express();

connectDB();

app.use(express.static(path.join(process.env.PWD, 'public')));
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

app.use('/paintings', piantingRouter);

app.listen(PORT, () => {
  console.log('Server started on port', PORT);
});
