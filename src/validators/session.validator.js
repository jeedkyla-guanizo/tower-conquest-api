const { badRequest } = require('../errors/app-error');

function validateCode(req, res, next) {
  const { code } = req.params;

  if (!/^\d{6}$/.test(code)) {
    return next(
      badRequest('INVALID_JOIN_CODE', 'Join code must contain 6 digits.')
    );
  }

  next();
}

function validateStatus(req, res, next) {
  const { status } = req.body;

  const allowedStatuses = ['RUNNING', 'CLOSED'];

  if (!allowedStatuses.includes(status)) {
    return next(
      badRequest('INVALID_STATUS', 'Status must be RUNNING or CLOSED.')
    );
  }

  next();
}

module.exports = {
  validateCode,
  validateStatus
};