const { badRequest } = require('../errors/app-error');

function validateJoin(req, res, next) {
  const { code } = req.params;

  if (!/^\d{6}$/.test(code)) {
    return next(
      badRequest('INVALID_JOIN_CODE', 'Join code must contain 6 digits.')
    );
  }

  next();
}

module.exports = {
  validateJoin
};