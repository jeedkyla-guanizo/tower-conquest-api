const { badRequest } = require('../errors/app-error');

function validateCreate(req, res, next) {
  const data = req.body;
  const errors = {};

  if (!data.title || typeof data.title !== 'string' || data.title.trim() === '') {
    errors.title = 'Title is required and must be a non-empty string.';
  }

  if (!data.host_id) {
    errors.host_id = 'Host ID is required.';
  }

  if (Object.keys(errors).length > 0) {
    return next(badRequest('VALIDATION_ERROR', 'Invalid question set data.', errors));
  }

  next();
}

function validateUpdate(req, res, next) {
  const data = req.body;
  const errors = {};

  if (data.title !== undefined && (typeof data.title !== 'string' || data.title.trim() === '')) {
    errors.title = 'Title must be a non-empty string.';
  }

  if (Object.keys(errors).length > 0) {
    return next(badRequest('VALIDATION_ERROR', 'Invalid question set update data.', errors));
  }

  next();
}

module.exports = {
  validateCreate,
  validateUpdate,
};