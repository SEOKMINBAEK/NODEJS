const express = require('express');

const router = express.Router();

// GET /users/:id 라우터
router.get('/:id', (req, res) => {
  console.log(req.params, req.query);
  res.send(`Hello ${req.params.id}`)
});

module.exports = router;