const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Post = require('./models/post');

const app = express();

mongoose.set('useUnifiedTopology', true);
mongoose.connect("mongodb+srv://sam1:6W9UHbmoSBHHC3UA@cluster0.6dcol.mongodb.net/test?retryWrites=true&w=majority",
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
  res.setHeader("Access-Control-Allo-Methods", "GET, POST, PATCH, DELETE, OPTIONS");
  next();
});

app.post('/api/posts', (req, res, next) => {
  const post = Post({
    title: req.body.title,
    content: req.body.content
  });
  console.log(post);
  res.status(201).json({
    message: 'Post added sucess!!'
  });
});

app.get('/api/posts', (req, res, next) => {

  const posts =[
    {
      id: 'dmndno3ep2kwl',
      title: 'First Server side post',
      content: 'This is coming from server'
    },
    {
      id: 'nd20w1jw19wj',
      title: 'Second Server side post',
      content: 'This is coming from server'
    }
  ];

  res.status(200).json({
    message: 'Post fetches succesfully!!',
    posts: posts
  });
});

module.exports = app;
