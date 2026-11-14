const express = require('express');
const router = express.Router();

const playerController = require('../controllers/player.controller');
const playerValidator = require('../validators/player.validator');
const requireUser = require('../middlewares/require-user');

router.post(
  '/:code/players',
  requireUser(),
  playerValidator.validateJoin,
  playerController.join
);

router.get(
  '/:code/players',
  playerValidator.validateCode,
  playerController.list
);

module.exports = router;
