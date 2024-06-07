const express = require('express');
const morgan = require('morgan');

const path = require('path');
const PORT = process.env.PORT || 8080;
const app = express();
const mongoose = require('mongoose');
const cors = require("cors");

console.log(PORT);
mongoose.connect('mongodb+srv://bogdan9110:dj3Q2QhxKhCaH3kZ@cluster0.jzsvjb6.mongodb.net/?retryWrites=true&w=majority');

const { authMiddleware } = require('./middleware/authMiddleware.js');

const { usersRouter } = require('./routers/userRouter.js');
const { authRouter } = require('./routers/authRouter');
const { articleRouter } = require('./routers/articleRouter');

const corsOptions = {
  origin: '*',
  credentials: true
};
app.use(cors(corsOptions));
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT,PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Authorization');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  next();
});

app.use(express.json());
app.use(morgan('tiny'));

app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
console.log(path);
app.use('/api/users/me', authMiddleware, usersRouter);
app.use('/api/auth', authRouter);

app.use('/api/article', articleRouter);
// app.use('/api/article', authMiddleware, articleRouter);

const start = async () => {
  try {
    app.listen(PORT);
  } catch (err) {
    console.error(`Error on server startup: ${err.message}`);
  }
};

start();

// ERROR HANDLER
app.use(errorHandler);

function errorHandler(err, req, res, next) {
  res.status(500).send({ message: err.message });
}
