const express = require('express');
const router = express.Router();

const sessionController = require('../controllers/session.controller');
const sessionValidator = require('../validators/session.validator');
const requireUser = require('../middlewares/require-user');

// Only HOST and ADMIN can create sessions.
router.post(
  '/',
  requireUser('HOST', 'ADMIN'),
  sessionValidator.validateQuestionSetId,
  sessionController.create
);

// Anyone can view a session.
router.get(
  '/:code',
  sessionValidator.validateCode,
  sessionController.get
);

// Only HOST and ADMIN can update session status.
router.patch(
  '/:code',
  requireUser('HOST', 'ADMIN'),
  sessionValidator.validateCode,
  sessionValidator.validateStatus,
  sessionController.updateStatus
);

module.exports = router;
