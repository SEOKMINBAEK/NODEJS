const express = require('express');

const router = express.Router();

// GET /next 라우터
router.get('/', (req, res, next) => {
  next('route');
}, (req, res, next) => {
  console.log('실행되지 않습니다.');
  next();
}, (req, res, next) => {
  console.log('실행되지 않습니다.');
  next();
});

router.get('/', (req, res, next) => {
  console.log('실행됩니다.');
  res.send('Hello, next');
});

module.exports = router;