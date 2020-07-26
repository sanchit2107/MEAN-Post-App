const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Post = require('./models/post');

const app = express();

mongoose.set('useUnifiedTopology', true);
mongoose.connect("mongodb+srv://sam1:6W9UHbmoSBHHC3UA@cluster0.6dcol.mongodb.net/post-app?retryWrites=true&w=majority",
  { useNewUrlParser: true })
  .then(() => {
    console.log('Connected to Database!!');
  })
  .catch(() => {
    console.log('Connection failed!!');
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS");
  next();
});

app.post('/api/posts', (req, res, next) => {
  const post = Post({
    title: req.body.title,
    content: req.body.content
  });
  post.save();
  res.status(201).json({
    message: 'Post added sucess!!'
  });
});

app.get('/api/posts', (req, res, next) => {

  Post.find()
    .then(documents => {
      res.status(200).json({
        message: 'Post fetches succesfully!!',
        posts: documents
      });
  });
});


app.delete('/api/posts/:id', (req, res, next) => {

  Post.deleteOne({ _id: req.params.id}).then(result => {
    console.log(result);
    res.status(200).json({ message: "Post Deleted!!" });
  });
});

module.exports = app;
