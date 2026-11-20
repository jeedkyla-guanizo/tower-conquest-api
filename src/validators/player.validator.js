
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

function validateJoin(req, res, next) {
  validateCode(req, res, (error) => {
    if (error) return next(error);

    const nickname = req.body?.nickname;

    if (
      typeof nickname !== 'string' ||
      nickname.trim().length < 2 ||
      nickname.trim().length > 24
    ) {
      return next(
        badRequest(
          'INVALID_NICKNAME',
          'Nickname must be 2 to 24 characters.'
        )
      );
    }

    req.body.nickname = nickname.trim();
    next();
  });
}

module.exports = {
  validateCode,
  validateJoin
};
