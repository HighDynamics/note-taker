const router = require('express').Router();
const notes = require('../db/db.json');

router.get('/api/notes', (req, res) => {
  const result = notes;

  res.send(result);
});

module.exports = router;
