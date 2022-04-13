const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.render('index', { page: 'Home' });
});

router.get('/about', (req, res, next) => {
  res.render('index', { page: 'About' });
});

router.get('/contact-me', (req, res, next) => {
  res.render('index', { page: 'Contact Me' });
});

router.get('/test', (req, res, next) => {
  res.render('test', { page2: 'Test 2' });
});

module.exports = router;
