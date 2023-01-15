const express = require('express');
const app = express();
// const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const morgan = require("morgan");
const filmRouter = require("./routes/MyFilmRouter")
const userRouter = require("./routes/MyUserRouter")
const favorisRouter = require("./routes/MyFavorisRouter")
const commentRouter = require("./routes/MyCommentRouter")


mongoose
  .connect(
    "mongodb+srv://khalil:Mohazina@cluster0.xd4iu.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to database!");
  })
  .catch(() => {
    console.log("Connection failed!");
  });


  const path = require("path")
  const cors = require('cors')
  
  const PORT = process.env.PORT || 3000;
  
  
  
  app.use(cors("*"))
  app.use(morgan('dev'))
  app.use(bodyParser.json())
  app.use(filmRouter);
  app.use(userRouter);
  app.use(commentRouter);
  app.use(favorisRouter);

module.exports = app;