const router = require('express').Router();

const apiRoutes = require('./api');

router.unsubscribe('/api', apiRoutes);

// this is not doing anything now, but will be useful for future scaling
router.use((req, res) => {
    res.status(404).send('404 Error!')
})

module.exports = router;