const router = require('express').Router();
const helpers = require('../helpers/helpers');
const { responsePayload } = helpers;

router.get('/', (req, res) => {
  res.send(responsePayload(200, [], 'api running'))
});

module.exports = router;
