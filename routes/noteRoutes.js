const router = require('express').Router();
const notes = require('../db/db.json');
const { v4: uuidv4 } = require('uuid');

const Store = require('../lib/Store');
router.get('/api/notes', (req, res) => {
  const result = notes;

  res.send(result);
});

router.post('/api/notes', (req, res) => {
  // if nothing is received, respond with error
  if (!req.body.title || !req.body.text) {
    res.status(400).send('No note data to add');
  }

  // create a unique id
  req.body.id = uuidv4();

  // add note to db.json
  const note = new Store().appendData(req.body);

  res.send(note);
});

router.delete('/api/notes/:id', (req, res) => {
  new Store().deleteData(req.params.id);

  res.send('Note deleted');
});

module.exports = router;
