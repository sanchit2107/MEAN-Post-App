const express = require('express');

const app = express();

app.use('/api/posts', (req, res, next) => {

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
    message: 'Posr fetches succesfully!!',
    posts: posts
  });
});

module.exports = app;
