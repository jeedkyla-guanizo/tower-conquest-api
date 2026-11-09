const express = require('express');
const router = express.Router();

const playerController = require('../controllers/player.controller');
const playerValidator = require('../validators/player.validator');
const requireUser = require('../middlewares/require-user');

// Joining requires a logged-in user.
router.post(
  '/:code/players',
  requireUser(),
  playerValidator.validateJoin,
  playerController.join
);

// Viewing the player list does not require login.
router.get(
  '/:code/players',
  playerValidator.validateJoin,
  playerController.list
);

module.exports = router;
