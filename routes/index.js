const router = require('express').Router();
const htmlRoutes = require('./htmlRoutes');
const noteRoutes = require('./noteRoutes');

router.use(noteRoutes);
router.use(htmlRoutes);

module.exports = router;
