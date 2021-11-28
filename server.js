const PORT = process.env.PORT || 3001;

const express = require('express');
const app = express();
const router = require('./routes');

app.use(express.json());
app.use(express.static('public'));
app.use('/', router);

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});
